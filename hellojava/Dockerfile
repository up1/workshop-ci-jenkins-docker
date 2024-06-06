# JAVa 17 with Spring Boot
FROM eclipse-temurin:17.0.11_9-jdk-focal as step1
WORKDIR /app
COPY . .
RUN --mount=type=cache,target=/root/.m2 ./mvnw package

FROM eclipse-temurin:17.0.11_9-jre-focal
WORKDIR /app
COPY --from=step1 /app/target/api.jar .
CMD [ "java", "-jar", "api.jar"]