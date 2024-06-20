# [Selenium Grid](https://www.selenium.dev/documentation/grid/) with Docker
* https://github.com/SeleniumHQ/docker-selenium/

## Create container
```
docker compose up -d --scale chrome=3
docker compose ps
docker compose logs --follow
```

Access to jenkins server = http://localhost:4444