SELECT SUM(assignment_submissions.duration) as total_duration
FROM assignment_submissions
JOIN students ON student_id = students.id
WHERE student.name = 'Ibrahim Schimmel';