import express from 'express';
import { getCars, renderCreateCarPage, createCar, renderUpdateCarPage, updateCar, deleteCar } from '../controllers/CarController'; // Import the updateCar controller function
import upload from '../middleware/upload';
const methodOverride = require('method-override');

const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(methodOverride('_method'));

// Get all cars
router.get('/cars', getCars);

// Render the form for creating a new car
router.get('/cars/create', renderCreateCarPage);

router.post('/cars/create', upload.single('image'), createCar);

// Render the form for updating a car
router.get('/cars/edit/:id', renderUpdateCarPage);

router.put('/cars/:id', upload.single('image'), updateCar);

// Delete car
router.delete('/cars/delete/:id', deleteCar);

export default router;
