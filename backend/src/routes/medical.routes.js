import express from 'express';
import { Medical } from '../models/medicalschema.js'; // adjust the import path as needed

const router = express.Router();

// Endpoint to get medical data by category
router.get('/category/:category', async (req, res) => {
    try {
        const category = req.params.category.toUpperCase(); // Ensure category is in uppercase
        const medicalData = await Medical.find({ category: category });
        res.json(medicalData);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});

export default router;
