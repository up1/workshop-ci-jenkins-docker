# Mock server with [Stubby4Node](https://github.com/mrak/stubby4node)

## Run
```
$npm install -g stubby
$stubby -d api.yml 

Loaded: GET /payments/1
Loaded: GET /payments/2
Loaded: GET /payments/3

Quit: ctrl-c

Stubs portal running at https://0.0.0.0:7443
Stubs portal running at http://0.0.0.0:8882
Admin portal running at http://0.0.0.0:8889
```

Run with URLs
* http://0.0.0.0:8882/payments/1
* http://0.0.0.0:8882/payments/2
* http://0.0.0.0:8882/payments/3
