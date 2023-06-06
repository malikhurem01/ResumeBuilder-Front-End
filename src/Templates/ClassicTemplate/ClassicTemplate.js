import React, { useEffect } from 'react';
import {
  Document,
  Page,
  Text,
  View,
  Font,
  Link,
  Image
} from '@react-pdf/renderer';

import { hyphenationCallback, factorDate } from '../../Utils/helper';

import ralewayBlack from '../../Fonts/Raleway/Raleway-Black.ttf';
import ralewayLight from '../../Fonts/Raleway/Raleway-Light.ttf';
import ralewayBold from '../../Fonts/Raleway/Raleway-Bold.ttf';

import styles from './Styles';

Font.register({
  family: 'Raleway',
  fonts: [
    { src: ralewayLight },
    { src: ralewayBlack, fontStyle: 'heavy' },
    { src: ralewayBold, fontStyle: 'bold' }
  ]
});

const ClassicTemplate = ({ data, handleUpdateDocument }) => {
  let document; // DOCUMENT TO BE RENDERED;

  useEffect(() => {
    handleUpdateDocument(document);
  }, [data, document, handleUpdateDocument]);

  const renderLanguageLevelIndicator = level => {
    let indicatorComponents = [];
    for (let i = 1; i <= 5; i++) {
      indicatorComponents.push(
        <View
          style={
            level >= i
              ? [styles.levelIndicator, styles.levelIndicatorFull]
              : [styles.levelIndicator]
          }
        ></View>
      );
    }
    return indicatorComponents;
  };

  const renderSkillLevelIndicator = level => {
    let indicatorComponents = [];
    for (let i = 1; i <= 5; i++) {
      indicatorComponents.push(
        <View
          style={
            level >= i
              ? [styles.levelIndicator, styles.levelIndicatorFull]
              : [styles.levelIndicator]
          }
        ></View>
      );
    }
    return indicatorComponents;
  };

  const checkDetails = () => {
    return (
      checkAddress() ||
      checkZipCode() ||
      checkCity() ||
      checkCountry() ||
      checkPhone() ||
      checkEmail() ||
      checkDateOfBirth()
    );
  };

  const checkAside = () => {
    return checkDetails() || checkLink() || checkSkills() || checkLanguages();
  };

  const checkAddress = () => {
    return data.address?.length > 0;
  };

  const checkPhone = () => {
    return data.phoneNumber?.length > 0;
  };

  const checkEmail = () => {
    return data.email?.length > 0;
  };

  const checkDateOfBirth = () => {
    return data.dateOfBirth?.length > 0;
  };

  const checkZipCode = () => {
    return data.zipCode?.length > 0;
  };

  const checkCity = () => {
    return data.city?.length > 0;
  };

  const checkCountry = () => {
    return data.country?.length > 0;
  };

  const checkLink = () => {
    return data.links?.set.length > 0;
  };

  const checkSkills = () => {
    return data?.skills?.set.length > 0;
  };

  const checkLanguages = () => {
    return data?.languages?.set.length > 0;
  };

  document = (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          {checkAside() && (
            <View style={styles.aside}>
              <View style={styles.asideContent}>
                {checkDetails() && (
                  <View style={styles.asideSection}>
                    <Text style={styles.sectionTitle}>Details</Text>
                    <View style={styles.sectionUnderline}></View>
                    {(checkAddress() ||
                      checkCity() ||
                      checkCountry() ||
                      checkZipCode()) && (
                      <View style={styles.sectionSubsection}>
                        <Text style={styles.subsectionTitle}>Address</Text>
                        {checkAddress() && (
                          <Text
                            hyphenationCallback={hyphenationCallback}
                            style={styles.subsectionText}
                          >
                            {data.address}
                          </Text>
                        )}
                        {(checkCity() || checkZipCode()) && (
                          <Text
                            hyphenationCallback={hyphenationCallback}
                            style={styles.subsectionText}
                          >
                            {checkCity() && checkZipCode
                              ? `${data.city}, ${data.zipCode}`
                              : checkCity() && !checkZipCode
                              ? data.city
                              : !checkCity && checkZipCode()
                              ? data.zipCode
                              : ''}
                          </Text>
                        )}
                        {checkCountry() && (
                          <Text
                            hyphenationCallback={hyphenationCallback}
                            style={styles.subsectionText}
                          >
                            {data.country}
                          </Text>
                        )}
                      </View>
                    )}
                    {checkPhone() && (
                      <View style={styles.sectionSubsection}>
                        <Text style={styles.subsectionTitle}>Phone</Text>
                        <Text
                          hyphenationCallback={hyphenationCallback}
                          style={styles.subsectionText}
                        >
                          {data.phoneNumber.includes('+')
                            ? data.phoneNumber
                            : `+${data.phoneNumber}`}
                        </Text>
                      </View>
                    )}
                    {checkEmail() && (
                      <View style={styles.sectionSubsection}>
                        <Text style={styles.subsectionTitle}>Email</Text>
                        <Text
                          hyphenationCallback={hyphenationCallback}
                          style={[
                            styles.subsectionText,
                            { textTransform: 'lowercase' }
                          ]}
                        >
                          {data.email}
                        </Text>
                      </View>
                    )}
                    {checkDateOfBirth() && (
                      <View style={styles.sectionSubsection}>
                        <Text style={styles.subsectionTitle}>
                          Date of birth
                        </Text>
                        <Text
                          hyphenationCallback={hyphenationCallback}
                          style={styles.subsectionText}
                        >
                          {factorDate(data.dateOfBirth, true)}
                        </Text>
                      </View>
                    )}
                  </View>
                )}
                {checkLink() && (
                  <View style={styles.asideSection}>
                    <Text style={styles.sectionTitle}>Links</Text>
                    <View style={styles.sectionUnderline}></View>
                    {data.links.set.map((l, i) => {
                      return (
                        <Link style={styles.link} src={l['linkInput' + i]}>
                          {l['linkNameInput' + i]}
                        </Link>
                      );
                    })}
                  </View>
                )}
                {checkSkills() && (
                  <View style={styles.asideSection}>
                    <Text style={styles.sectionTitle}>Technologies</Text>
                    <View style={styles.sectionUnderline}></View>
                    {data.skills.set.map((s, i) => {
                      return (
                        <React.Fragment>
                          <Text style={styles.technology}>
                            {s['skillInput' + i]}
                          </Text>
                          {s['proficiencyInput' + i] && (
                            <View style={styles.languageLevelContainer}>
                              {renderSkillLevelIndicator(
                                Number(
                                  data.skills.set[i]['proficiencyInput' + i]
                                )
                              )}
                            </View>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </View>
                )}
                {checkLanguages() && (
                  <View style={styles.asideSection}>
                    <Text style={styles.sectionTitle}>Languages</Text>
                    <View style={styles.sectionUnderline}></View>
                    {data.languages?.set.map((l, i) => {
                      return (
                        <View style={styles.sectionSubsection}>
                          <Text style={styles.languageTitle}>
                            {l['languageInput' + i]}
                          </Text>
                          {l['proficiencyInput' + i] && (
                            <View style={styles.languageLevelContainer}>
                              {renderLanguageLevelIndicator(
                                Number(
                                  data.languages.set[i]['proficiencyInput' + i]
                                )
                              )}
                            </View>
                          )}
                        </View>
                      );
                    })}
                  </View>
                )}
              </View>
            </View>
          )}
          <View style={styles.main}>
            <View style={styles.mainContent}>
              <View style={styles.mainSection}>
                {data.profile && (
                  <React.Fragment>
                    <Text style={styles.sectionTitle}>Profile</Text>
                    <View style={styles.sectionUnderline}></View>
                    <Text
                      hyphenationCallback={hyphenationCallback}
                      style={styles.mainSectionText}
                    >
                      {data.profile}
                    </Text>
                  </React.Fragment>
                )}
              </View>
              <View style={styles.mainSection}>
                {data?.experiences?.set.length > 0 && (
                  <React.Fragment>
                    <Text style={styles.sectionTitle}>Experience</Text>
                    <View style={styles.sectionUnderline}></View>
                    {data.experiences?.set.map(e => {
                      if (e['jobTitleInput' + e.id]?.length > 0) {
                        return (
                          <View style={styles.detailedItem}>
                            <View style={styles.detailedItemTitleAndLocation}>
                              <Text style={styles.mainSectionItemTitle}>
                                {`${
                                  e['jobTitleInput' + e.id]
                                    ? e['jobTitleInput' + e.id]
                                    : ''
                                }${
                                  e['hoursInput' + e.id]
                                    ? ', ' + e['hoursInput' + e.id]
                                    : ''
                                }${
                                  e['companyNameInput' + e.id]
                                    ? ', ' + e['companyNameInput' + e.id]
                                    : ''
                                }`}
                              </Text>
                              <Text style={styles.mainSectionItemLocation}>
                                {`${
                                  e['locationInput' + e.id]
                                    ? e['locationInput' + e.id]
                                    : ''
                                }`}
                              </Text>
                            </View>
                            {((e['startingDateInput' + e.id] &&
                              e['presentWorkSwitch' + e.id] === 'on') ||
                              (e['startingDateInput' + e.id] &&
                                e['endingDateInput' + e.id])) && (
                              <Text style={styles.mainSectionItemDate}>
                                {`${factorDate(
                                  e['startingDateInput' + e.id]
                                )} - ${
                                  e['presentWorkSwitch' + e.id] === 'on'
                                    ? 'Present'
                                    : factorDate(e['endingDateInput' + e.id])
                                }`}
                              </Text>
                            )}
                            <Text
                              hyphenationCallback={hyphenationCallback}
                              style={styles.mainSectionText}
                            >
                              {`${
                                e['jobDescriptionInput' + e.id]
                                  ? e['jobDescriptionInput' + e.id]
                                  : ''
                              }`}
                            </Text>
                          </View>
                        );
                      } else return false;
                    })}
                  </React.Fragment>
                )}
              </View>
              <View style={styles.mainSection}>
                {data?.education?.set.length > 0 && (
                  <React.Fragment>
                    <Text style={styles.sectionTitle}>Education</Text>
                    <View style={styles.sectionUnderline}></View>
                    {data.education?.set.map(e => {
                      return (
                        <View style={styles.detailedItem}>
                          <View style={styles.detailedItemTitleAndLocation}>
                            <Text style={styles.mainSectionItemTitle}>
                              {`${
                                e['educationTitleInput' + e.id]
                                  ? e['educationTitleInput' + e.id]
                                  : '[Education Title]'
                              }, ${
                                e['institutionNameInput' + e.id]
                                  ? e['institutionNameInput' + e.id]
                                  : '[Institution]'
                              }`}
                            </Text>
                            <Text style={styles.mainSectionItemLocation}>
                              {`${
                                e['locationInput' + e.id]
                                  ? e['locationInput' + e.id]
                                  : '[Location]'
                              }`}
                            </Text>
                          </View>
                          {((e['startingDateInput' + e.id] &&
                            e['presentWorkSwitch' + e.id] === 'on') ||
                            (e['startingDateInput' + e.id] &&
                              e['endingDateInput' + e.id])) && (
                            <Text style={styles.mainSectionItemDate}>
                              {`${factorDate(
                                e['startingDateInput' + e.id]
                              )} - ${
                                e['presentWorkSwitch' + e.id] === 'on'
                                  ? 'Present'
                                  : factorDate(e['endingDateInput' + e.id])
                              }`}
                            </Text>
                          )}
                          <Text
                            hyphenationCallback={hyphenationCallback}
                            style={styles.mainSectionText}
                          >
                            {`${e['institutionDescriptionInput' + e.id]}`}
                          </Text>
                        </View>
                      );
                    })}
                  </React.Fragment>
                )}
              </View>
            </View>
          </View>
        </View>
        <View style={styles.header}>
          {data.profileImage?.hasProfileImage && (
            <Image src={data.profileImage.image} />
          )}
          <Text style={styles.name}>
            {data.firstName
              ? `${data.firstName} ${data.lastName}`
              : '[YOUR NAME]'}
          </Text>
          <Text style={styles.title}>
            {data.title ? data.title : '[YOUR TITLE]'}
          </Text>
        </View>
      </Page>
    </Document>
  );
  return document;
};

export default ClassicTemplate;
