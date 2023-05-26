import React from 'react';
import { Document, Page, Text, View, Font, Link } from '@react-pdf/renderer';

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

const ClassicTemplatePreview = () => {
  const hyphenationCallback = word => {
    return [word];
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          <View style={styles.aside}>
            <View style={styles.asideContent}>
              <View style={styles.asideSection}>
                <Text style={styles.sectionTitle}>Details</Text>
                <View style={styles.sectionUnderline}></View>
                <View style={styles.sectionSubsection}>
                  <Text style={styles.subsectionTitle}>Address</Text>
                  <Text
                    hyphenationCallback={hyphenationCallback}
                    style={styles.subsectionText}
                  >
                    Tuzlanskog partizanskog odreda 194
                  </Text>
                  <Text
                    hyphenationCallback={hyphenationCallback}
                    style={styles.subsectionText}
                  >
                    Tuzla, 75000
                  </Text>
                  <Text
                    hyphenationCallback={hyphenationCallback}
                    style={styles.subsectionText}
                  >
                    Bosnia and Herzegovina
                  </Text>
                </View>
                <View style={styles.sectionSubsection}>
                  <Text style={styles.subsectionTitle}>Phone</Text>
                  <Text
                    hyphenationCallback={hyphenationCallback}
                    style={styles.subsectionText}
                  >
                    +387 64 413 67 66
                  </Text>
                </View>
                <View style={styles.sectionSubsection}>
                  <Text style={styles.subsectionTitle}>Email</Text>
                  <Text
                    hyphenationCallback={hyphenationCallback}
                    style={[
                      styles.subsectionText,
                      { textTransform: 'lowercase' }
                    ]}
                  >
                    malikhuremovic01@gmail.com
                  </Text>
                </View>
                <View style={styles.sectionSubsection}>
                  <Text style={styles.subsectionTitle}>Date of birth</Text>
                  <Text
                    hyphenationCallback={hyphenationCallback}
                    style={styles.subsectionText}
                  >
                    25.6.2001
                  </Text>
                </View>
              </View>
              <View style={styles.asideSection}>
                <Text style={styles.sectionTitle}>Links</Text>
                <View style={styles.sectionUnderline}></View>
                <Link style={styles.link} src="https://www.github.com">
                  GitHub
                </Link>
                <Link style={styles.link} src="https://www.linkedin.com">
                  LinkedIn
                </Link>
              </View>
              <View style={styles.asideSection}>
                <Text style={styles.sectionTitle}>Technologies</Text>
                <View style={styles.sectionUnderline}></View>
                <Text style={styles.technology}>C# .Net</Text>
                <Text style={styles.technology}>HTML</Text>
                <Text style={styles.technology}>CSS</Text>
                <Text style={styles.technology}>JavaScript</Text>
                <Text style={styles.technology}>Entity Framework Core</Text>
                <Text style={styles.technology}>Microsoft SQL Server</Text>
              </View>
              <View style={styles.asideSection}>
                <Text style={styles.sectionTitle}>Languages</Text>
                <View style={styles.sectionUnderline}></View>
                <View style={styles.sectionSubsection}>
                  <Text style={styles.languageTitle}>Bosnian</Text>
                  <View style={styles.languageLevelContainer}>
                    <View
                      style={[
                        styles.languageLevelIndicator,
                        styles.languageLevelIndicatorFull
                      ]}
                    ></View>
                    <View
                      style={[
                        styles.languageLevelIndicator,
                        styles.languageLevelIndicatorFull
                      ]}
                    ></View>
                    <View
                      style={[
                        styles.languageLevelIndicator,
                        styles.languageLevelIndicatorFull
                      ]}
                    ></View>
                    <View
                      style={[
                        styles.languageLevelIndicator,
                        styles.languageLevelIndicatorFull
                      ]}
                    ></View>
                    <View
                      style={[
                        styles.languageLevelIndicator,
                        styles.languageLevelIndicatorFull
                      ]}
                    ></View>
                  </View>
                </View>
                <View style={styles.sectionSubsection}>
                  <Text style={styles.languageTitle}>English</Text>
                  <View style={styles.languageLevelContainer}>
                    <View
                      style={[
                        styles.languageLevelIndicator,
                        styles.languageLevelIndicatorFull
                      ]}
                    ></View>
                    <View
                      style={[
                        styles.languageLevelIndicator,
                        styles.languageLevelIndicatorFull
                      ]}
                    ></View>
                    <View
                      style={[
                        styles.languageLevelIndicator,
                        styles.languageLevelIndicatorFull
                      ]}
                    ></View>
                    <View
                      style={[
                        styles.languageLevelIndicator,
                        styles.languageLevelIndicatorFull
                      ]}
                    ></View>
                    <View style={styles.languageLevelIndicator}></View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.main}>
            <View style={styles.mainContent}>
              <View style={styles.mainSection}>
                <Text style={styles.sectionTitle}>Profile</Text>
                <View style={styles.sectionUnderline}></View>
                <Text
                  hyphenationCallback={hyphenationCallback}
                  style={styles.mainSectionText}
                >
                  Experienced software developer with proficiency in several
                  software development technologies. Dedicated to learning and
                  gaining knowledge, as well as building positive relations with
                  others.
                </Text>
              </View>
              <View style={styles.mainSection}>
                <Text style={styles.sectionTitle}>Experience</Text>
                <View style={styles.sectionUnderline}></View>
                <View style={styles.detailedItem}>
                  <View style={styles.detailedItemTitleAndLocation}>
                    <Text style={styles.mainSectionItemTitle}>
                      Software Developer, Full-Time, Mistral
                    </Text>
                    <Text style={styles.mainSectionItemLocation}>Sarajevo</Text>
                  </View>
                  <Text style={styles.mainSectionItemDate}>
                    Nov 2022 - Present
                  </Text>
                </View>
                <Text
                  hyphenationCallback={hyphenationCallback}
                  style={styles.mainSectionText}
                >
                  Experienced software developer with proficiency in several
                  software development technologies. Dedicated to learning and
                  gaining knowledge, as well as building positive relations with
                  others.
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.header}>
          <Text style={styles.name}>Malik Huremović</Text>
          <Text style={styles.title}>Software Developer</Text>
        </View>
        <View style={styles.main}></View>
        <View style={styles.footer}></View>
      </Page>
    </Document>
  );
};

export default ClassicTemplatePreview;
