# Card Validation API

A REST API that validates card numbers using the Luhn algorithm.

## Setup

```bash
npm install
npm run dev
```

## Endpoint

POST `/card/validate`

Request body:
```json
{ "cardNumber": " " }
```

Response:
```json
{ "valid": true, "message": "Card number is valid" }
```

## Run Tests
```bash
npm test
```

## Decisions

- Express.js — lightweight, no extra abstraction needed for a single endpoint
- Luhn algorithm — industry-standard checksum used by all major card networks
- Layered structure — routes, controllers, and services are separated so each file has one job