const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "bid",
  password: "1!2@3#4$",
  port: 5432
});

module.exports = {
  load: sql => {
    return new Promise(function(done, fail) {
      pool.query(sql, (error, results) => {
        if (error) {
          fail(error);
        } else done(results);
      });
    });
  },
  detail: (sql, id) => {
    return new Promise(function(done, fail) {
      pool.query(sql, [id], (error, results) => {
        if (error) {
          fail(error);
        } else done(results);
      });
    });
  },
};
