import mongoose from 'mongoose';

const connectToDB=(mongoURI)=>{
    mongoose.connect(mongoURI,{dbName:"Habitica"})
    .then((data)=>console.log(`Connected to DB Successfully ${data.connection.host}`))
    .catch((err)=>{throw err});
};


export {connectToDB};