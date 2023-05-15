# Quiz app

The node.js example app return a list of questions for study purpose only.

## Installation

## Method 1

### Requirements

* Node 16 or higher
* Git

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

## Method 2

This is for non developers

```bash
https://pdteam-quiz.herokuapp.com/questions
```

```bash
https://pdteam-quiz.herokuapp.com/questions?limit=10
```
