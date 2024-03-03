#! /bin/bash

mkdir -p $HOME/data/RickAndMorty && \
docker compose --env-file .env.development up -d
