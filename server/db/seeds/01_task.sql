-- seeds/01_task.sql
INSERT INTO task (task_name, task_owner_name, importance, due_date, notes)
  VALUES
  -- task seeds
    ('Cook Rice', 'Jason', 'Medium','2023-04-29', 'wash it first'),
    ('Take Dog Out', 'Chris', 'Low','2023-04-28', 'Only take him out if its sunny'),
    ('Laundry', 'Carol', 'High','2023-04-29', 'Seperate the whites and colors'),
    ('Create a todo list Application', 'Jason', 'Low','2023-04-29', 'CRUD operations'),
    ('Car service', 'Monica', 'Medium','2023-04-29', '9:00 am sharp');