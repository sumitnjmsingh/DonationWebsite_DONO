import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


cloudinary.config({ 
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  cloud_name: "dnfhbntjk" , 
//   api_key: process.env.CLOUDINARY_API_KEY, 
  api_key: "481649721536189", 
//   api_secret: process.env.CLOUDINARY_API_SECRET 
  api_secret:  "eZ8YOe_7M7BCdgHqVXagHYQ37cY"
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the file on cloudinary
        
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfull
        //console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
       
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        
        return null;
    }
}



export {uploadOnCloudinary}