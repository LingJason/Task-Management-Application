-- seeds/01_task.sql
INSERT INTO task (task_name, task_owner_name, importance, start_date, notes)
  VALUES
  -- task seeds
    ('Cook Rice', 'Jason', 'very','2023-04-29', 'Remember to wash it first'),
    ('Take Dog Out', 'Chris', 'low','2023-04-28', 'Only take him out if its sunny'),
    ('Laundry', 'Carol', 'very','2023-04-29', 'Seperate the whites and colors'),
    ('Create a todo list Application', 'Jason', 'very','2023-04-29', 'Remeber back to basics'),
    ('Car service', 'Monica', 'high','2023-04-29', '9:00 am sharp');