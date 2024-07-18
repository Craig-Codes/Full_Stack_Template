
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

backend-npm-install:
	docker exec stor_backend npm install

run-migration: 
	docker exec stor_backend npm run migrate up

