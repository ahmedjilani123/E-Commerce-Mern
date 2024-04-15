const mongoose = require('mongoose');

const DbConnection = async ()=>{
    try{
        const dbConnection = await mongoose.connect(process.env.DATABASE_URl);
        console.log(`Database connection successful ${dbConnection.connection.host}`)
    }
    catch(e){
        console.log(`Database connection failed: ${e.message}`);
    }
}
module.exports = DbConnection;