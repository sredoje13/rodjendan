import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const uploadImage=createAsyncThunk(
  "uploadImage",
  async (data) => {
    const formData = new FormData();
    data.forEach(file => {
        formData.append('files', file);
    });

    try {
        const response = await axios.post('https://rodjnode.onrender.com/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        console.log('Upload successful:', response.data);
    } catch (error) {
        console.error('Error uploading images:', error);
    }
}
  )