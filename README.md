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
FROM public."customer"
INNER JOIN grade ON public."customer".grade=grade.id;
