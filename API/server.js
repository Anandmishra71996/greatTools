const http=require('http');
const app=require('./app.js');
const mongoose = require('mongoose');

const server=http.createServer(app)

const PORT=process.env.PORT||5000;
async function startServer(){
  
  //Set up default mongoose connection
  
  const uri = "mongodb+srv://anandmishra71996:wq80JCw1E5S5KIG0@cluster0.a62sxmq.mongodb.net/?retryWrites=true&w=majority";
  const mongoDB = uri;
 await mongoose.connect(mongoDB, { useNewUrlParser: true });
   //Get the default connection
  var db = mongoose.connection;
  //Bind connection to error event (to get notification of connection errors)
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
server.listen(PORT,()=>{
   console.log(`app is listing on ${PORT}`)
})
}
startServer();