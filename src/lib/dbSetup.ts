import mysql from 'mysql2/promise';

export async  function databaseSetup() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'service-platform'
      });

      

      return connection

}