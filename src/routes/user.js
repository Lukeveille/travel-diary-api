import express from 'express';
import users from '../controllers/users';
import setTable from '../middleware/set-table';
import checkAuth from '../middleware/check-auth';
import checkUser from '../middleware/check-user';
import checkSignup from '../middleware/check-signup';
import checkCredentials from '../middleware/check-credentials';
import validateUser from '../middleware/validate-user';
import newPassword from '../middleware/new-password';

const router = express.Router();

router.post('/signup', checkCredentials, setTable, checkUser, checkSignup, users.signup);
router.post('/login', setTable, validateUser, users.login);
router.patch('/', checkAuth, setTable, validateUser, newPassword, users.update);
router.delete('/delete/:email', checkAuth, setTable, validateUser, users.delete);

export default router;
