#!/usr/bin/env node

// NOTE: Generate self-signed x509 certificate and private key in DER format
// openssl req -new -newkey rsa:2048 -days 3650 -nodes -x509 -keyout server.key -out server.der -outform DER

const jose = require('node-jose');
const fs = require('fs');


let args = process.argv.slice(2);

if (args.length != 1) {
    console.error("\nUsage: jwks <certificate_file>\n");
    return;
}

const start = async () => {
    let ks = jose.JWK.createKeyStore();

    await ks.add(fs.readFileSync(args[0]), 'x509',  { x5c: [Buffer.from(fs.readFileSync(args[0])).toString('base64')], alg: 'RS256', use: 'sig' })

    console.log(JSON.stringify(ks.toJSON(true), null, 2));

}


start();