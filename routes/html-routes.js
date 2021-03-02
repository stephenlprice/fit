const path = require("path");

module.exports = (app) => {
  // Main page
  app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/public/index.html');
  });

  // Exercise page
  app.get('/exercise', (req, res) => {
    res.sendFile(process.cwd() + '/public/exercise.html');
  });

  // Stats (dashboard) page
  app.get('/stats', (req, res) => {
    res.sendFile(process.cwd()+ '/public/stats.html');
  });
};