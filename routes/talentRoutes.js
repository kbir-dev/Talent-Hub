const express = require('express');
const upload = require('../middlewares/multer');
const { registerTalent } = require('../controllers/talentController');
const router = express.Router();

router.post('/register', upload.single('profilePhoto'), registerTalent);

module.exports = router;
