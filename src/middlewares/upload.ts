
import dotenv from 'dotenv';
import multer, { StorageEngine } from 'multer';
import { v2 as cloudinary } from 'cloudinary';

dotenv.config({ path: '../../.env' })
dotenv.config();


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET,
    timeout: 60000,
});

const storage: StorageEngine = multer.memoryStorage();

const upload: multer.Multer = multer({ storage: storage });

export default upload;

