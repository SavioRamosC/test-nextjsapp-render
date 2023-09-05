// pages/api/process-image.ts
import { NextApiRequest, NextApiResponse } from 'next';
import sharp from 'sharp';
import fs from 'fs';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Fetch the image source URL from the request
    const { src } = req.query;

    if (!src || typeof src !== 'string') {
      return res.status(400).json({ error: 'Invalid image source URL.' });
    }

    // Load the original image
    const inputImageBuffer = fs.readFileSync(src);

    // Use Sharp to process the image (e.g., resize)
    const processedImageBuffer = await sharp(inputImageBuffer).resize({ width: 320, height: 180 }).toBuffer();

    // Set the response content type
    res.setHeader('Content-Type', 'image/jpeg');

    // Send the processed image as a response
    res.end(processedImageBuffer);
  } catch (error) {
    console.error('Image processing error:', error);
    res.status(500).json({ error: 'Image processing error' });
  }
};
