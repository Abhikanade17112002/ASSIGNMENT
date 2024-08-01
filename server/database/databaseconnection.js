const mysql = require('mysql2/promise');



const connectToDataBase = async () =>{
try {

    const connectionInstance = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password:"Pass@123" ,
        database: 'ASSIGNMENT',
      });
    
    return connectionInstance ;

    
} catch (error) {
    console.log(` DATABASE CONNECTION ERROR :: ${error}`);
}
} ;



module.exports = connectToDataBase() ;