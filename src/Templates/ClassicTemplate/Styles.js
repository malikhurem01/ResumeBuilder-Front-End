import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFFFF'
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  header: {
    border: '1.6px black solid',
    backgroundColor: '#fff',
    height: '13vh',
    position: 'absolute',
    width: '60%',
    top: '40px',
    left: '20%'
  },
  name: {
    alignSelf: 'center',
    marginTop: '30px',
    letterSpacing: '2px',
    fontFamily: 'Raleway',
    fontStyle: 'bold',
    textTransform: 'uppercase',
    fontSize: '22px'
  },
  title: {
    alignSelf: 'center',
    letterSpacing: '1px',
    fontFamily: 'Raleway',
    fontStyle: 'bold',
    textTransform: 'uppercase',
    marginTop: '9px',
    fontSize: '11.5px'
  },
  aside: {
    backgroundColor: '#f2f2f2',
    width: '35%',
    height: '100%',
    flexShrink: 'none',
    paddingBottom: '20px'
  },
  asideContent: {
    marginTop: '160px',
    height: '100%',
    marginLeft: '35px',
    flexShrink: 'none'
  },
  main: {
    width: '100%',
    flexShrink: 'none',
    marginLeft: '20px'
  },
  mainContent: {
    marginTop: '162px',
    paddingTop: '23px',
    width: '60%',
    fontFamily: 'Raleway',
    fontSize: '10px'
  },
  mainSection: {
    marginBottom: '23px'
  },
  mainSectionText: {
    width: '95%',
    marginTop: '10px',
    lineHeight: '1.5px'
  },
  detailedItem: {
    marginTop: '12px',
    width: '94%'
  },
  detailedItemTitleAndLocation: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  mainSectionItemTitle: {
    fontStyle: 'bold',
    fontSize: '11.5px'
  },
  mainSectionItemDate: {
    marginTop: '3px'
  },
  asideSection: {
    marginTop: '27px'
  },
  sectionTitle: {
    fontFamily: 'Raleway',
    fontStyle: 'bold',
    fontSize: '11px',
    letterSpacing: '1.8px',
    textTransform: 'uppercase'
  },
  sectionUnderline: {
    height: '1px',
    width: '91%',
    backgroundColor: '#000',
    borderRadius: '20px',
    marginTop: '3.5px'
  },
  sectionSubsection: {
    marginTop: '10px',
    width: '160px'
  },
  subsectionTitle: {
    fontFamily: 'Raleway',
    fontStyle: 'bold',
    fontSize: '9px',
    textTransform: 'uppercase'
  },
  subsectionText: {
    marginTop: '2.5px',
    fontFamily: 'Raleway',
    fontSize: '9.5px',
    textTransform: 'capitalize'
  },
  link: {
    fontFamily: 'Raleway',
    fontSize: '11px',
    color: '#000',
    marginTop: '7px'
  },
  technology: {
    fontFamily: 'Raleway',
    fontSize: '10.5px',
    color: '#000',
    marginTop: '7px',
    marginBottom: '2px'
  },
  languageTitle: {
    marginTop: '2.5px',
    fontFamily: 'Raleway',
    fontSize: '10.5px',
    textTransform: 'capitalize'
  },
  languageLevelContainer: {
    marginTop: '3.5px',
    marginLeft: '1px',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  levelIndicator: {
    border: '1px solid black',
    borderRadius: '50%',
    width: '6px',
    height: '6px',
    marginRight: '8px'
  },
  levelIndicatorFull: {
    backgroundColor: '#000'
  }
});

export default styles;
