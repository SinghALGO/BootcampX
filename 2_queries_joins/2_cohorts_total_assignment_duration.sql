SELECT SUM(assignment_submissions.duration) as total_duration
FROM assignment_submissions 
JOIN students ON student_id = students.id
WHERE 
students.cohort_id = (SELECT DISTINCT cohorts.id FROM students JOIN cohorts ON students.cohort_id = cohorts.id WHERE cohorts.name = 'FEB12');


