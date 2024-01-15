## Instructions

* Generate a self-signed certificate and key in DER format using OpenSSL
```
openssl req -new -newkey rsa:2048 -days 3650 -nodes -x509 -keyout server.key -out server.der -outform DER
```

* Build tool
```
npm install
npm link
```

* Generate jwks
```
jwks server.der
```

* Output to file
```
jwks server.der >server.jwks
```
