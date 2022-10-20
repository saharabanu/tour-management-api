const mongoose = require("mongoose");
const dbConnect = () => {

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Database connected successfully `);
  });
}
module.exports = dbConnect;

 