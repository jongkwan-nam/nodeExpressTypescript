# Node.js + Express + Typescript with yarn

## 1. package.json create

    yarn init

## 2. express, typescript, ts-node, nodemon

    yarn add -D express typescript ts-node nodemon @types/node @types/express

* nodemon : 서버 코드를 변경 할 때마다 서버를 재시작
* ts-node : Node.js 상에서 TypeScript Compiler를 통하지 않고도, 직접 TypeScript를 실행시키는 역할

## 3. tsconfig.json

TypeScript로 짜여진 코드를 JavaScript로 컴파일하는 옵션을 설정하는 파일. TypeScript 컴파일은 tsc 라는 명령어를 사용

    npx tsc --init

## 4. express code

```ts
import express, { Request, Response, NextFunction } from 'express';

const app = express();


app.get('/welcome', (req: Request, res: Response, next: NextFunction) => {
    res.send('welcome!');
});

app.listen('1234', () => {
    console.log(`
  ################################################
  🛡️  Server listening on port: 1234🛡️
  ################################################`);
});
```

## 5. package.json modify

```json
    "scripts": {
        "start": "node dist/app.js", 
        "build": "tsc -p .", 
        "dev": "nodemon --watch \"src/**/*.ts\" --exec \"ts-node\" src/app.ts"
    }
```

* "start": "node dist/app.js" : 컴파일된 js파일로 시작
* "build": "tsc -p ." : typescript를 javascript로 빌드

## 6. start server

    yarn dev

## ESLint, Prettier

    yarn add -D eslint prettier eslint-config-prettier eslint-plugin-prettier

