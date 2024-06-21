## Workshop with load balance

## Start APIs
```
docker compose up -d api --scale api=5
```

## Start Load balance
```
docker compose up -d lb
```

## Access to api
```
curl http://localhost:8888
```