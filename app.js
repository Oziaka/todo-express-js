var express = require('express');
var path = require('path');
const app = express();

app.listen(3000, () => {
    console.log("Server is listening at http://localhost:3000/")
});

// app.use(express.static(
//     path.join(__dirname, "public")
// ));