# Monitoring with Docker
* Application Metrics
  * [Prometheus](https://prometheus.io/)
  * [Grafana](https://grafana.com/)

## Create Application Metric
```
$docker compose build
$docker compose up -d
$docker compose ps
NAME                           IMAGE                       COMMAND                  SERVICE           CREATED          STATUS          PORTS
monitoring-grafana-1           grafana/grafana:latest      "/run.sh"                grafana           26 seconds ago   Up 25 seconds   0.0.0.0:3000->3000/tcp
monitoring-node_exporter_1-1   prom/node-exporter:latest   "/bin/node_exporter"     node_exporter_1   26 seconds ago   Up 25 seconds   0.0.0.0:9100->9100/tcp
monitoring-node_exporter_2-1   prom/node-exporter:latest   "/bin/node_exporter"     node_exporter_2   26 seconds ago   Up 25 seconds   0.0.0.0:9101->9100/tcp
monitoring-prometheus-1        prom/prometheus:latest      "/bin/prometheus --s…"   prometheus        26 seconds ago   Up 25 seconds   0.0.0.0:9090->9090/tcp
```

Open urls in web browser
* Prometheus server => http://localhost:9090
* Grafana server => http://localhost:3000
  * user=admin
  * password=admin