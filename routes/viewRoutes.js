const path = require('path');
const router = require('express').Router();

module.exports = (router) => {
//index
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/html/index.html'));
});
//exercise
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/exercise.html'));
});
//stats
router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/stats.html'));
});
}