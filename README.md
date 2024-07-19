# StoR
Inventory management system for Appivate

To boot vite site - go into StoR_Frontend and run npm rundev

## How to Run
*Desktop docker is running
- make build
- make up
- make run-migration

## SQL Query
SELECT *
FROM public."user"
INNER JOIN grade ON public."user".grade=grade.id;
