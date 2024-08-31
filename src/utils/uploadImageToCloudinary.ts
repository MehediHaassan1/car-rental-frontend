import axios from "axios";
import Swal from "sweetalert2";

const uploadImageToCloudinary = async (imageFile: FileList | null): Promise<string | undefined> => {
    const cloudName = "dpdfti8b0";
    const uploadPreset = "randomImages";
    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

    if (!imageFile || imageFile.length === 0) {
        return undefined;
    }

    const formData = new FormData();
    formData.append("file", imageFile[0]);
    formData.append("upload_preset", uploadPreset);

    try {
        const response = await axios.post(cloudinaryUrl, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return response.data.secure_url;
    } catch (error) {
        if (error) {
            Swal.fire({
                icon: "error",
                title: "Image upload failed!",
                text: "Please try again later.",
                timer: 3000,
            });
            return undefined;
        }
    }
};

export default uploadImageToCloudinary;
