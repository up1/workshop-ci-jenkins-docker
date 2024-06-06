# Workshop 2024/06/06
* Frontend
  * ReactJS
* Backend
  * NodeJS
  * PostgreSQL
* [Monitoring](https://github.com/up1/workshop-ci-jenkins-docker/tree/main/monitoring)
* [Deployment steps](https://github.com/up1/workshop-ci-jenkins-docker-deploy)

## Step 0 :: Static code analysis
* [SonarQube server](https://www.sonarsource.com/products/sonarqube/)
* [Sonar Scanner](https://docs.sonarsource.com/sonarqube/latest/analyzing-source-code/scanners/sonarscanner/)
```
$git clone https://github.com/up1/workshop-ci-jenkins-docker.git demo
$cd demo

$docker compose up sonarscanner_frontend --abort-on-container-exit
$docker compose up sonarscanner_backend --abort-on-container-exit

$docker compose down
```

## Step 1 :: Create database with PostgreSQL
```
$docker compose up -d db
$docker compose ps
NAME       IMAGE           COMMAND                  SERVICE   CREATED         STATUS         PORTS
postgres   postgres:16.0   "docker-entrypoint.s…"   db        3 seconds ago   Up 2 seconds   0.0.0.0:5432->5432/tcp

$docker compose logs --follow
```

Access to database and check tables and data for testing
```
$docker container exec -it postgres bash
>psql -d postgres -U postgres
// Change database
>\c postgres
// Show all tables
>\dt

// Get all data from tables
>select * from merchants;

// Quit
>\q
```

## Step 2 :: Build and create container of Backend
```
$docker compose build backend
$docker compose up -d backend
$docker compose ps
$docker compose logs --follow
```

Call API with URLs
* List all merchants => GET http://127.0.0.1:3000
* Create a new merchant => POST http://127.0.0.1:3000/merchants
```
{
    "name": "new name",
    "email": "new@email.com"
}
```

Delete all services
```
$docker compose down
```

## Step 3 :: Build and create container of backend and database
* Start database
  * Database instance
  * Tables and Constraints
  * Data for testing
* Start backend

```
$docker compose up -d backend --build
$docker compose ps
NAME                    IMAGE                 COMMAND                  SERVICE   CREATED         STATUS                   PORTS
postgres                postgres:16.0         "docker-entrypoint.s…"   db        2 minutes ago   Up 2 minutes (healthy)   0.0.0.0:5432->5432/tcp
workshop-02-backend-1   workshop-02-backend   "docker-entrypoint.s…"   backend   2 minutes ago   Up 2 minutes             0.0.0.0:3000->3000/tcp
```

Test API again ...

Delete all services
```
$docker compose down
```

## Step 4 :: Backend Testing with Postman
```
$docker compose up backend_test --abort-on-container-exit --build
```

## Step 5 :: Build and create container of frontend
* ReactJS
* NGINX

```
$docker compose build frontend
$docker compose up -d frontend
$docker compose ps
$docker compose logs --follow
```

Access in web browser with url
* http://localhost:8888
* http://localhost:8888/api/

Delete all services
```
$docker compose down
```

## Step 6 :: Frontend Testing with Robot framework and Selenium
```
$docker compose up frontend_test --abort-on-container-exit --build
```

## Step 7 :: Frontend Testing with Playwright
```
$docker compose up frontend_test_playwright --abort-on-container-exit --build
```

## Step 8 :: Start all services
```
$docker compose up -d frontend
$docker compose ps
NAME                     IMAGE                  COMMAND                  SERVICE    CREATED          STATUS                    PORTS
postgres                 postgres:16.0          "docker-entrypoint.s…"   db         14 seconds ago   Up 13 seconds (healthy)   0.0.0.0:5432->5432/tcp
workshop-02-backend-1    workshop-02-backend    "docker-entrypoint.s…"   backend    14 seconds ago   Up 7 seconds (healthy)    0.0.0.0:3000->3000/tcp
workshop-02-frontend-1   workshop-02-frontend   "/docker-entrypoint.…"   frontend   14 seconds ago   Up 2 seconds              0.0.0.0:8888->80/tcp

$docker compose logs --follow
```

Test again !!
* http://localhost:8888/


