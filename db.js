import mysql from "mysql";
import fs  from "fs";


// ligação do banco de dados com a api 
export const db = mysql.createConnection(
    {
    host:"crud-db.mysql.database.azure.com", 
    user:"crud", 
    password:"99213551Pe-", 
    database:"crud", 
    port:3306, 
    ssl: {ca:fs.readFileSync("./DigiCertGlobalRootCA.crt.pem")}
    }
    );

