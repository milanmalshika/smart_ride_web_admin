const express = require("express");
const app =  express();
const cors = require("cors");
 
app.use(express.json());
app.use(cors());

//ROUTES//   
//register and login
app.use("/smartride", require("./routes/smartride"));

//dashboard
app.use("/dashboard", require("./routes/dashboard"));
 
//crud for busses 
app.use("/busses", require("./routes/busses"));

// crud for routes
app.use("/halts", require("./routes/halts"));
 
// crud for routes 
app.use("/conductors", require("./routes/conductors"));


app.listen(5000, () => { 
    console.log("server is running on port 5000");
});



