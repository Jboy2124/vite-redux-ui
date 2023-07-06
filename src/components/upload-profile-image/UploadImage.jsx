import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { useAddNewAvatarMutation } from "../../handlers/account-handler";
import { setImage } from "../../slices/previewAvatarSlice";

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState("");
  // const [previewImage, setPreviewImage] = useState("");
  const [addNewAvatar, { data, isError }] = useAddNewAvatarMutation();
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    const upload = new FormData();
    upload.append("avatar", selectedImage);
    upload.append("images", "myName");
    addNewAvatar(upload);
  }

  function handleSelectedImage(e) {
    setSelectedImage(e.target.files[0]);
    const imageObject = URL.createObjectURL(e.target.files[0]);
    // setPreviewImage(imageObject);
    dispatch(setImage(imageObject));
  }

  return (
    <section className="w-full bg-gray-200 px-32">
      {/* <img src={previewImage} alt="avatar" className="w-20 h-20 rounded-full" /> */}
      <input
        type="file"
        name="avatar"
        accept="image/*"
        multiple
        onChange={handleSelectedImage}
      />
      <button type="button" onClick={(e) => handleSubmit(e)}>
        Upload
      </button>
    </section>
  );
};

export default UploadImage;
