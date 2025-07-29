const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/upload', auth, upload.single('file'), documentController.uploadDoc);
