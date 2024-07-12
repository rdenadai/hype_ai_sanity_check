#!/bin/bash

docker compose down && docker compose up -d

docker compose -f docker-compose.yml run --rm certbot certonly --webroot --webroot-path /var/www/certbot/ -d www.aihypesanitycheck.tech

docker compose down certbot
