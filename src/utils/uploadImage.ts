/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import Swal from "sweetalert2";

// Utility function for image upload
const uploadImage = async (imageFile: any) => {
  const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const imageHostingURL = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

  let imageData;
  if (imageFile) {
    imageData = { image: imageFile[0] };
  }

  if (imageData) {
    try {
      const response = await axios.post(imageHostingURL, imageData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      return response.data.data.display_url;
    } catch (error) {
      if (error) {
        Swal.fire({
          icon: "error",
          title: "Image upload failed!",
          timer: 3000,
        });
      }
    }
  }
};

export default uploadImage;