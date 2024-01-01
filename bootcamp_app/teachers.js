const { Pool } = require("pg");
const pool = new Pool({
  user: "labber",
  password: "123",
  host: "localhost",
  database: "bootcampx",
});
const cohort = process.argv[2];
const queryString = `SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = '${process.argv[2] || "JUL02"}'
ORDER BY teacher;
`;
const values = [cohort];
pool
  .query(queryString, values)
  .then((res) => {
    res.rows.forEach((row) => {
      console.log(`${row.cohort}: ${row.teacher}`);
    });
  })
  .catch((err) => console.log("query error", err.stack));
