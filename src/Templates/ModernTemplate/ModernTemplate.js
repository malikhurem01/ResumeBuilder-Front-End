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

const ModernTemplate = ({ data, handleUpdateDocument }) => {
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
        <View style={styles.header}>
          <Image style={styles.image} src={data.image} />
          <View style={styles.headerInfo}>
            <Text style={styles.name}>
              Malik
              <br />
              Huremović
            </Text>
            <Text style={styles.title}>{data.title}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
  return document;
};

export default ModernTemplate;
