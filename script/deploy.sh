#!/bin/bash
cd /home/deploy/project
docker login -u $REGISTRY_USER -p $REGISTRY_PASS
docker pull $REGISTRY_USER/melobit:latest
docker compose up -d
