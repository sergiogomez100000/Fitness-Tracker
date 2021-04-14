const path = require('path');

module.exports = (app) => {
//index
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/index.html'));
});
//exercise
app.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/exercise.html'));
});
//stats
app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/stats.html'));
});
}