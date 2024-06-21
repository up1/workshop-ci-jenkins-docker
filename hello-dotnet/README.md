# .Net 7 + Opentelemetry

## Install packages
```
dotnet add package OpenTelemetry.Extensions.Hosting
dotnet add package OpenTelemetry.Instrumentation.AspNetCore
dotnet add package OpenTelemetry.Exporter.Console
dotnet add package OpenTelemetry.Exporter.OpenTelemetryProtocol
dotnet add package System.Diagnostics.DiagnosticSource
```

## Run
```
export OTEL_SERVICE_NAME=demo-service
export OTEL_RESOURCE_ATTRIBUTES=deployment.environment=DEV,service.namespace=demo,service.version=1.0,service.instance.id=server01

dotnet restore
dotnet run
```