// db.js

import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017');
        console.log('DB Connected');
    } catch (error) {
        console.error('Error connecting to database:', error.message);
    }
};
