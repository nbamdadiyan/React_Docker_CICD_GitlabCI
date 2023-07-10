#!/bin/bash
#stage('Docker Build & Push')
docker login -u $REGISTRY_USER -p $REGISTRY_PASS
docker build -t $REGISTRY_USER/melobit:latest .
docker push $REGISTRY_USER/melobit:latest
