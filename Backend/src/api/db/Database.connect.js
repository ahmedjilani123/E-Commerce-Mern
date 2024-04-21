const mongoose = require('mongoose');
const { DBUrl } = require('../../config/allData.config');

const DbConnection = async ()=>{
    try{
        const dbConnection = await mongoose.connect(DBUrl);
        console.log(`Database connection successful ${dbConnection.connection.host}`)
    }
    catch(e){
        console.log(`Database connection failed: ${e.message}`);
    }
}
module.exports = DbConnection;