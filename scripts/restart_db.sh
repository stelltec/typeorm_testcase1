#!/usr/bin/env bash

docker kill $(docker ps -q)
docker rm $(docker ps -a -q)
docker run --name postgres_test -p 55432:5432 -e POSTGRES_PASSOWRD="test" -e POSTGRES_USER="test" -e POSTGRES_DB="test" -d  postgres

