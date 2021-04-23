const upload = require('../multer')


express.post('/faturas', upload.single('file'), async (req, res) => {
  
    try {
          console.log('body');
          console.log(req.body);
          
		  console.log('file');
		  console.log(req.file);
          console.log('files');
		  console.log(req.files);
  
          return res.status(200).json({ 'OK': 'OK' });
  
      } catch (err) {
          return res.status(500).json(err);
      }
  });