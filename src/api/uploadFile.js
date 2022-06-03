import axios from "axios";

export const uploadFile = (file) => {
  const formData = new FormData();
  formData.append("file", file);
  //   if (oldFile) {
  //     await axios.delete(
  //       "https://orangebot-backend.herokuapp.com/data" + "upload/" + oldFile.split("/").pop()
  //     );
  //   }
  return axios.post("https://orangebot-backend.herokuapp.com/data", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
