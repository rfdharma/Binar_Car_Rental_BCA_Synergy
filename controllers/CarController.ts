import { Request, Response } from 'express';
import Car from '../models/Car'; // Import your CarModel
import {v2 as cloudinary} from 'cloudinary';

export const getCars = async (req: Request, res: Response) => {
    try {
        const { size } = req.query as any;
        let cars;
        if (size === 'All') {
            cars = await Car.query();
        } else if (size) {
            cars = await Car.query().where('size', size);
        } else {
            cars = await Car.query();
        }
        res.status(200).render('index', { cars });
        // res.json({ status:200, message: 'Data mobil berhasil didapatkan.', data: cars });
    } catch (error) {
        console.error(error);
        res.status(500).send('Kesalahan dalam mengambil data dari database.');
    }
};

// Create Car
export const renderCreateCarPage = (req: Request, res: Response) => {
    res.render('create');
};

export const createCar = async (req: Request, res: Response) => {
    try {
        const { name, price, size } = req.body as Car;
        const imageFile = req.file;
        if (imageFile) {
            const fileBase64 = imageFile.buffer.toString('base64');
            const result = await cloudinary.uploader.upload(`data:${imageFile.mimetype};base64,${fileBase64}`);
            const image = result.secure_url;
            const newCar = await Car.query().insert({
                name,
                price,
                size,
                image,
            });
            res.status(200).json({ status:200, message: 'Data mobil berhasil ditambahkan.', data: newCar });
        } else {
            res.status(400).json({ status:404, message: 'Tidak ada foto yang diupload.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Terjadi kesalahan saat menambahkan mobil.' });
    }
};

// Update Car
export const renderUpdateCarPage = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const car = await Car.query().findById(id);
        if (car) {
            res.render('update', { car });
        } else {
            res.status(404).send('Data mobil tidak ditemukan.');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan saat memuat halaman edit.');
    }
};

export const updateCar = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, price, size } = req.body as Car;
        const imageFile = req.file;
        const existingCar = await Car.query().findById(id);
        if (!existingCar) {
            return res.status(404).json({ message: 'Data mobil tidak ditemukan.' });
        }
        if (imageFile) {
            const fileBase64 = imageFile.buffer.toString('base64');
            const result = await cloudinary.uploader.upload(`data:${imageFile.mimetype};base64,${fileBase64}`);
            const image = result.secure_url;
            const updatedCar = await Car.query().findById(id).patch({
                name,
                price,
                size,
                image,
            });
            // res.redirect('/cars');
            res.json({ status:200, message: 'Data mobil berhasil diupdate.'});
        } else {
            const updatedCar = await Car.query().findById(id).patch({
                name,
                price,
                size,
            });
            // res.redirect('/cars');
            res.json({ status:200, message: 'Data mobil berhasil diupdate.'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Terjadi kesalahan memperbarui data mobil.' }).redirect('/cars');
    }
};


// Delete car
export const deleteCar = async (req: Request, res: Response) => {
    req.method = "DELETE";
    try {
        const { id } = req.params;
        await Car.query().deleteById(id);
        // res.redirect('/cars');
        res.json({ status:200, message: 'Data mobil berhasil dihapus.'});
    } catch (error) {
        console.error(error);
        return res.status(500).send("Terjadi kesalahan menghapus data mobil.");
    }
};


