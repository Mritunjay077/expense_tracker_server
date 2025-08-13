// const mysql=require('mysql2');
import mysql from 'mysql2';
const mysqlSetting={
    host:'localhost',
    user:'root',
    password:'root',
    port:3306,
    database:'expense_tracker',
    multipleStatements:true,
};

const conn=mysql.createPool(mysqlSetting);

export default conn;