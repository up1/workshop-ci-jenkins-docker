const express = require('express')
const app = express()
const port = 3000

// Init metrics
const Prometheus = require('prom-client')
const register = new Prometheus.Registry();
register.setDefaultLabels({
  app: 'demo-service'
})
Prometheus.collectDefaultMetrics({register})

const http_request_counter = new Prometheus.Counter({
  name: 'myapp_http_request_count',
  help: 'Count of HTTP requests made to my app',
  labelNames: ['method', 'route', 'statusCode'],
});
register.registerMetric(http_request_counter);

app.use(function(req, res, next){
    // Increment the HTTP request counter
    http_request_counter.labels({method: req.method, route: req.originalUrl, statusCode: res.statusCode}).inc();
    next();
})

// Demo router
app.get('/movies', async function (req, res) {
  res.type('json')
  var delay = Math.floor( ( Math.random() * 2000 ) + 100);

  setTimeout((() => {
    res.send(({movies: [
      { name: 'Jaws', genre: 'Thriller'}, 
      { name: 'Annie', genre: 'Family'},
      { name: 'Jurassic Park', genre: 'Action'},
    ]}))
  }), delay)

})

// Metrics endpoint
app.get('/metrics', (req, res) => {
  res.setHeader('Content-Type',register.contentType)
  register.metrics().then(data => res.status(200).send(data))
})

app.listen( port, () => { console.log(`Listening at http://localhost:${port}`)})