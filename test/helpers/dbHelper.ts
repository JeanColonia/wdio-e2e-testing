// import sql from 'msnodesqlv8';

// const sqlConfig = {
//  server: "DESKTOP-M9U3NE9",
//  database: "test",
//  driver: "msnodesqlv8",
//  user: "sa",
//  password: "admin123",
//  options: {
//   trustServerCertificate: false,
//   trustedConnection: true
//  }
// }

// let connectionString = "server=.;Database=test;Trusted_Connection=Yes;"

let query = `SELECT TOP 1 * FROM users`;




// (async () => {

//  const pool = new sql.ConnectionPool(sqlConfig);
//  const poolConnect = pool.connect();

//  pool.on("error", (err) => {
//   throw err;
//  });

//  await poolConnect;

//  try {
//   const request = pool.request();
//   const result = request.query(query);
//   console.log(result);
//   return result;

//  } catch (error) {
//   console.log("SQL ERROR", error);
//  }
// })();

import sql from 'mssql/msnodesqlv8'
const sqlConfig = {
  user: "sa",
  password: "admin123",
  database: "test",
  server: 'DESKTOP-M9U3NE9',
  driver: 'msnodesqlv8',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
};

(async () => {
  try {
    // make sure that any items are correctly URL encoded in the connection string
    await sql.connect(sqlConfig)
    const result = await sql.query`SELECT TOP (10) [id]
  ,[first_name]
  ,[last_name]
  ,[phone]
  ,[username]
  ,[pass]
FROM [test].[dbo].[users]
`
    console.log(result)
  } catch (err) {
    throw err;
  }
})();
