import { Form, Accordion } from 'react-bootstrap';

import classes from './Styles/PDFEditor.module.css';

import PersonalDetailsForm from './Forms/PersonalDetailsForm';
import ExperienceForm from './Forms/ExperienceForm';
import ProfileForm from './Forms/ProfileForm';
import EducationForm from './Forms/EducationForm';
import LinkForm from './Forms/LinkForm';
import SkillForm from './Forms/SkillForm';
import LanguageForm from './Forms/LanguageForm';

const EditorForm = ({ handleInputData, handlePDFLoading }) => {
  return (
    <Form className={classes.forms}>
      <Accordion defaultActiveKey="0" alwaysOpen={true}>
        <PersonalDetailsForm
          handleInputData={handleInputData}
          handlePDFLoading={handlePDFLoading}
        />
        <ProfileForm
          handleInputData={handleInputData}
          handlePDFLoading={handlePDFLoading}
        />
        <ExperienceForm
          handleInputData={handleInputData}
          handlePDFLoading={handlePDFLoading}
        />
        <EducationForm
          handleInputData={handleInputData}
          handlePDFLoading={handlePDFLoading}
        />
        <LinkForm
          handleInputData={handleInputData}
          handlePDFLoading={handlePDFLoading}
        />
        <SkillForm
          handleInputData={handleInputData}
          handlePDFLoading={handlePDFLoading}
        />
        <LanguageForm
          handleInputData={handleInputData}
          handlePDFLoading={handlePDFLoading}
        />
      </Accordion>
    </Form>
  );
};

export default EditorForm;
