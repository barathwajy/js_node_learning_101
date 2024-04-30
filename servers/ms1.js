const express = require('express');
const app = express();

// Import modules for different functionalities
const module1 = require('./mssub1');
// const module2 = require('./module2');
// const module3 = require('./module3');

// Define routes
app.use('/module1', module1);
// app.use('/module2', module2);
// app.use('/module3', module3);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
