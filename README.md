# Saga Redux

Empty project.

## Building and running on localhost

First install dependencies:

```sh
npm install
```

To run in hot module reloading mode:

```sh
npm start
```

To create a production build:

```sh
npm run build-prod
```

To create a development build:

```sh
npm run build-dev
```

## Running

Open the file `dist/index.html` in your browser

## Testing

To run unit tests:

```sh
npm test
```

## Using Redux Saga
Есть блокирующие и не блокирующие вызовы
import {take, takeEvery, takeLatest, takeLeading, put, fork, spawn, select} from 'redux-saga/effects'
call - блокирующий вызов саги

take = примимает паттерн и  

takeEvery - первую функцию которая вызовется
takeLatest = последнюю
takeLeading = берет первый реквест и ждет выполнения саги

select = доступ к стору
spawn = для того чтобы запустить саги независимо от друг друга


fork - неблокирующий вызов саги
put = передать экшн и пейлоад в редюсер

join = для получения саги, для того чтобы в последствии передать в call
