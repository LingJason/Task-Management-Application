-- schema/01_task_schema.sql
DROP TABLE IF EXISTS TASK CASCADE;
-- CREATE TASK
CREATE TABLE task (
  task_id SERIAL PRIMARY KEY NOT NULL,
  task_name VARCHAR(255) NOT NULL,
  task_owner_name VARCHAR(255) NOT NULL,
  importance VARCHAR(255) NOT NULL,
  start_date DATE NOT NULL DEFAULT CURRENT_DATE,
  instructions VARCHAR(255)
);