# Stage 1: Build the jar
FROM maven:3.9.3-eclipse-temurin-20 AS build
WORKDIR /app

# Copy pom.xml and source code
COPY pom.xml .
COPY src ./src

# Build the jar (skip tests for faster build)
RUN mvn clean package -DskipTests

# Stage 2: Run the app
FROM eclipse-temurin:20-jdk-alpine
WORKDIR /app

# Copy the jar from build stage
COPY --from=build /app/target/*.jar app.jar

# Expose port
EXPOSE 8080

# Run the jar
ENTRYPOINT ["java", "-jar", "app.jar"]