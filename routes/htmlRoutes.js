const router = require("express").Router();
const path = require('path');
const filePath = pat.join(__dirname, '..', 'public', 'index.html');
//add our routes
router.get('/', (req, res) => {});
res.sendFile('filePath');

//html route for displaying the homepage
module.export = router;