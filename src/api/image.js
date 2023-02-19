import axios from "axios";

export const uploadImage = async (file) => {
  const CLOUD_NAME = "diqyzhuc2";
  const PRESET_NAME = "portfolio";
  const FOLDER_NAME = "portfolio";
  let urlImg = "";
  const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
  const formData = new FormData();
  formData.append("upload_preset", PRESET_NAME);
  formData.append("folder", FOLDER_NAME);
  formData.append("file", file);
  try {
    const response = await axios.post(api, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    urlImg = response.data.secure_url;
    return urlImg;
  } catch (error) {
    alert(error);
  }
};
