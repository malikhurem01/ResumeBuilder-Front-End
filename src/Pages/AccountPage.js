import { useEffect } from 'react';
import { useCallback } from 'react';
import { Accordion } from 'react-bootstrap';
import services from '../Services/authService';
import infoService from '../Services/informationService';
import PageWrapper from '../Components/PageWrapper';

const AccountPage = () => {
  const [userInformation, setUserInformation] = useState([]);

  const handleGetAllUserInfo = useCallback(() => {
    infoService.getAllUserInfo(services.getToken()).then(res => {
      setUserInformation(res.data.data);
    });
  }, [infoService, services]);

  useEffect(() => {
    handleGetAllUserInfo();
  }, [handleGetAllUserInfo]);

  return <PageWrapper></PageWrapper>;
};

export default AccountPage;
