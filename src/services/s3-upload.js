import { s3 } from './aws-config';
import multer from 'multer';
import multerS3 from 'multer-s3';

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: global.gConfig.database,
    acl: 'public-read',
    metadata: (req, file, cb) => {
      cb(null, { source: req.params.entry, id: req.mediaId});
    },
    key: (req, file, cb) => {
      cb(null, (req.mediaId + '_' + file.originalname.toString()));
    }
  })
});

export default upload;