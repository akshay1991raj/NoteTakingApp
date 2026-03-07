const { app } = require('./app.js');
const pool = require('./config/db.js');

const PORT = process.env.PORT || 4001;

pool.query("SELECT NOW()")
  .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  });
