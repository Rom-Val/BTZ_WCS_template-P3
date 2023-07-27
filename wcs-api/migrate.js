require("dotenv").config();

const fs = require("fs");
const mysql = require("mysql2/promise");
const path = require("path");


/**
 * 
 * @date 09/06/2023 - 11:06:48
 *
 * @type {*}
 */
const migrationsDir = path.resolve(`${__dirname}/../wcs-db/`);


/**
 * 
 * @date 09/06/2023 - 11:06:28
 *
 * @async
 * @returns {*}
 */
const migrate = async () => {
  const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
  
  /**
   * 
   * @date 09/06/2023 - 11:06:54
   *
   * @type {*}
   */
  const migrations = fs.readdirSync(migrationsDir);
  
  /**
   * 
   * @date 09/06/2023 - 11:06:58
   *
   * @type {*}
   */
  const connection = await mysql.createConnection({
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    multipleStatements: true,
  });

  Promise
    .all(migrations.map((migrationFile) => connection.query(fs.readFileSync(`${migrationsDir}/${migrationFile}`).toString())))
    .then(() => {
        console.log("All migrations successfully executed")
        process.exit(0);
    })
    .catch((error) => {
        console.error(error)
    });

};

try {
  migrate();
} catch (err) {
  console.error(err);
}