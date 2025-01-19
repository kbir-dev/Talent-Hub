const TalentRegistration = require('../models/talentRegistration.js');
const { uploadImageToCloudinary } = require('../services/cloudinary.js');

/**
 * Handles talent registration with image upload
 */
const registerTalent = async (req, res) => {
  try {
    // Get the file path from Multer and upload it to Cloudinary
    const localFilePath = req.file.path;
    const cloudinaryResult = await uploadImageToCloudinary(localFilePath, `talent/${req.file.filename}`);

    // Save talent details in MongoDB
    const { name, email, contactNumber, skills, personalDescription } = req.body;
    const newTalent = await TalentRegistration.create({
      name,
      email,
      contactNumber,
      skills,
      personalDescription,
      profilePhoto: cloudinaryResult.secure_url, // Cloudinary URL
    });

    res.status(201).json({
      message: 'Talent registered successfully',
      talent: newTalent,
    });
  } catch (error) {
    console.error('Error registering talent:', error);
    res.status(500).json({ message: 'Error registering talent', error });
  }
};

module.exports = { registerTalent };
