
include .env
export

build:
	docker compose build

up:
	docker compose up

down:
	docker compose down

rebuild: build up 

remove-volume: docker compose down -v  

exec-frontend:
	docker exec -it stor_frontend /bin/sh

exec-backend:
	docker exec -it stor_backend /bin/sh

exec-database:
	docker exec -it database /bin/sh

run-migration: 
	docker exec -it stor_backend /bin/sh -c 'export DATABASE_URL=${POSTGRES_USER}://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB} && npm run migrate:up'


