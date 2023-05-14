# Quiz app

The node.js example app return a list of questions:

## Requirements

* Node 16 or higher
* Git

## Installation


Clone the repo and install the dependencies.

```bash
git clone https://github.com/badkem/nodejs_quizgame.git
cd nodejs_quizgame
```

```bash
npm install && npm run start
```
or

```bash
yarn install && yarn start
```

## Usage

Get all questions

```bash
http://localhost:3000/questions
```

Get question by limit

```bash
http://localhost:3000/questions?limit=10
```