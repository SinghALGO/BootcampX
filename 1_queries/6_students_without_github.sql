SELECT name, email, phone 
FROM students
WHERE github IS NULL
AND end_date is NOT NULL;