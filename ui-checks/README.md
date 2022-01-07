### How to run checks

1. Run `kafka-ui`
```
cd docker
docker-compose -f kafka-ui.yaml up -d
```
2. Run `selenoid-ui`
```
cd kafka-ui-e2e-checks/docker
docker-compose -f selenoid.yaml up -d
```