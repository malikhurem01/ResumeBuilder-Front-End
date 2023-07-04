import { Button } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import classes from "../Styles/PDFEditor.module.css";

import uploadImageLogo from '../../../Assets/cameraIcon.png';

const ImageUploadForm = ({handleInputData, handlePDFLoading}) => {
    const imageUploadInput = useRef();

    const [profileImage, setProfileImage] = useState({
      hasProfileImage: false,
      image: uploadImageLogo
    });
  
    const handleUploadImage = ev => {
      URL.revokeObjectURL(profileImage.src);
      const image = URL.createObjectURL(ev.target.files[0]);
      setProfileImage({ hasProfileImage: true, image: image });
    };
    useEffect(() => {
        handlePDFLoading(true);
        const timer = setTimeout(() => {
          handleInputData({
            profileImage
          });
        }, 800);
    
        const loadingTimer = setTimeout(() => {
          handlePDFLoading(false);
        }, 1200);
    
        return () => {
          clearTimeout(loadingTimer);
          clearTimeout(timer);
        };
      }, [
        profileImage,
        handleInputData,
        handlePDFLoading
      ]);
    return <div
        className={`${classes.imageUploadContainer} ${
          profileImage.hasProfileImage ? classes.imageBorder : ''
        }`}
      >
        <img src={profileImage.image} alt="upload logo icon" />
        <input
          id="fileInput"
          onChange={handleUploadImage}
          ref={imageUploadInput}
          type="file"
          style={{ display: 'none' }}
        />
        <Button
          variant="primary"
          onClick={() => imageUploadInput.current.click()}
        >
          Upload image
        </Button>
        {profileImage.hasProfileImage && (
          <Button
            style={{ marginTop: '15px' }}
            variant="danger"
            onClick={() => {
              setProfileImage({
                hasProfileImage: false,
                image: uploadImageLogo
              });
              imageUploadInput.current.value = '';
            }}
          >
            Remove image
          </Button>
        )}
      </div>
}

export default ImageUploadForm;