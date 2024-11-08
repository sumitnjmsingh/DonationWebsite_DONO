import express from 'express';
import { Medical } from '../models/medicalschema.js'; 

const router = express.Router();
router.get('/category/:category', async (req, res) => {
    try {
        const category = req.params.category.toUpperCase(); 
        const medicalData = await Medical.find({ category: category });
        res.json(medicalData);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});

export default router;
