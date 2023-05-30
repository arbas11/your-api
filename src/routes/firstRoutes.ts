import express from 'express';
import { catchAsync } from '../utils/catchAsync';
import { requireAuth } from '../middleware/authMidleware';

import { getAll, addOne } from '../controller/app';
const router = express.Router();

// PROTECTED ROUTE
router.use(requireAuth);

// GET ALL USERS
router.get('/getall', catchAsync(getAll));
router.post('/add', catchAsync(addOne));
// router.get('/users', catchAsync(getOne));
// router.update('/users', catchAsync(updateOne));

module.exports = router;
