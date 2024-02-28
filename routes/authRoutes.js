const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, getEmployee, getNotifications, deleteNotifications, loginUser } = require('../controllers/authControllers');

router.use(
    cors({
        credentials : true,
        origin : 'http://localhost:3001'
    })
);

router.get('/',test);
router.get('/getEmployee',getEmployee);
router.get('/getNotifications',getNotifications);
router.post('/deleteNotifications', deleteNotifications)
router.post('/loginUser',loginUser);


module.exports = router;
