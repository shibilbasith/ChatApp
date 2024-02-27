import multer from "multer";
import { fileURLToPath } from 'url';
import path, { dirname } from "path";
import fs from "fs";




// Create uploads folder if it doesn't exist
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const uploadDirectory = path.join(__dirname, '../../uploads');

if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory);
}


// Set up storage for uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadDirectory); // Using the previously defined uploadDirectory
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  
  // Create the multer instance
  const upload = multer({ storage: storage });

  // export default upload;


// Custom middleware function to handle file uploads or pass to next middleware
const handleFileUpload = (req, res, next) => {
    // If there are files in the request, invoke Multer's upload.single('file') middleware
    // Otherwise, proceed to the next middleware
    // if (req.file) {
        upload.single('files')(req, res, next); // Invoke Multer middleware
    // } else {
    //     next(); // Proceed to the next middleware
    // }
};

export default handleFileUpload;
