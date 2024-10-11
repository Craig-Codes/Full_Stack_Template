# Template

This template contains a full-stack application.

We have a React frontend (vite), with theming, MUI, and page routing setup
A Nodejs / express backend, with typescript and Nodemon setup
A PostgreSQL database with seed data

All setup in Docker containers, using the docker-compose file, and a make file for commands.

Need to create a .env file at root level, adding in these:

POSTGRES_HOST=database
POSTGRES_PASSWORD=password123
POSTGRES_USER=postgres
POSTGRES_DB=stor-db
POSTGRES_PORT=5432
PGADMIN_DEFAULT_EMAIL=admin@admin.com
PGADMIN_DEFAULT_PASSWORD=root
DATABASE_URL=postgres://postgres:password123@database:5432/carer-db

# To run

make build
make up
make run-migration

This gives us our containers, and database data

localhost:3000 - api
5050 - pgadmin
8080 - Frontend

## SQL Query

SELECT \*
FROM public."customer"
INNER JOIN grade ON public."customer".grade=grade.id;
