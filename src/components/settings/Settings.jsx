import React from "react";
import { useForm } from "react-hook-form";
import UploadImage from "../upload-profile-image/UploadImage";

const Settings = () => {
  const { register, handleSubmit } = useForm();

  async function uploadFile(data) {}

  return (
    <main className="min-h-screen bg-indigo-400">
      <p>Settings</p>
      <UploadImage />
    </main>
  );
};

export default Settings;
