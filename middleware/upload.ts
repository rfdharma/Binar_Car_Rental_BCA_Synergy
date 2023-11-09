// import multer, { StorageEngine } from 'multer';
// import path from 'path';
// import { Request, Express, Router } from 'express';
//
// const uploadsDirectory: string = '/home/dharma/exercise_2/storage/image-cars';
//
// // Mendefinisikan cara menyimpan file
// const storage: StorageEngine = multer.diskStorage({
//     destination: (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => {
//         cb(null, uploadsDirectory);
//     },
//     filename: (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
//         const uniqueSuffix: string = Date.now() + '-' + Math.round(Math.random() * 1E9);
//         cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
//     }
// });
//
// // Membuat middleware untuk upload
// const upload: multer.Multer = multer({ storage: storage });
//
// export default upload;

import multer, { StorageEngine } from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import dotenv from "dotenv";

dotenv.config({path:'.env'});
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET,
    timeout: 60000,
});

const storage: StorageEngine = multer.memoryStorage();
const upload: multer.Multer = multer({ storage: storage });

export default upload;
