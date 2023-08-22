# Unit Testing in Loopback4

Basic tutorial สำหรับการเขียน Unit Testing ใน Loopback 4!

## Table Contents

- [Unit Testing in Loopback4](#unit-testing-in-loopback4)
  - [Table Contents](#table-contents)
  - [Todo example](#todo-example)
    - [Overview](#overview)
    - [Setup](#setup)
    - [Tutorial](#tutorial)
    - [Steps](#steps)
    - [Try it out](#try-it-out)
  - [Docker](#docker)
  - [Code coverage](#code-coverage)

---

## Todo example

ตัวอย่าง Unit Testing ของ Todo เป็นตัวอย่างจากทาง Loopack เองสามารถเข้าไปดูเพิ่มเติมได้ที่ [loopack/example](https://github.com/loopbackio/loopback-next/tree/master/examples)

### Overview

This tutorial demonstrates how to create a basic API for a todo list using
LoopBack 4. You will experience how you can create REST APIs with just
[5 steps](#steps).

![todo-tutorial-overview](https://loopback.io/pages/en/lb4/imgs/todo-overview.png)

### Setup

First, you'll need to install a supported vetestrsion of Node:

- [Node.js](https://nodejs.org/en/) at v10 or greater

Additionally, this tutorial assumes that you are comfortable with certain
technologies, languages and concepts.

- JavaScript (ES6)
- [REST](http://www.restapitutorial.com/lessons/whatisrest.html)

Lastly, you'll need to install the LoopBack 4 CLI toolkit:

```sh
npm i -g @loopback/cli
```

### Tutorial

To follow this tutorial, begin with the
[Create your app scaffolding](http://loopback.io/doc/en/lb4/todo-tutorial-scaffolding.html)
section.

### Steps

1. [Create your app scaffolding](http://loopback.io/doc/en/lb4/todo-tutorial-scaffolding.html)
2. [Add your Todo model](http://loopback.io/doc/en/lb4/todo-tutorial-model.html)
3. [Add a datasource](http://loopback.io/doc/en/lb4/todo-tutorial-datasource.html)
4. [Add a repository](http://loopback.io/doc/en/lb4/todo-tutorial-repository.html)
5. [Add a controller](http://loopback.io/doc/en/lb4/todo-tutorial-controller.html)
6. [Putting it all together](http://loopback.io/doc/en/lb4/todo-tutorial-putting-it-together.html)
7. Bonus:
    [Integrate with a geo-coding service](http://loopback.io/doc/en/lb4/todo-tutorial-geocoding-service.html)

### Try it out

If you'd like to see the final results of this tutorial as an example
application, follow these steps:

1. Run the `lb4 example` command to select and clone the todo repository:

    ```sh
    lb4 example todo
    ```

2. Switch to the directory.

    ```sh
    cd loopback4-example-todo
    ```

3. Finally, start the application!

    ```sh
    $ npm start

    Server is running at http://127.0.0.1:3000
    ```

Feel free to look around in the application's code to get a feel for how it
works. If you're interested in learning how to build it step-by-step, then
continue with this tutorial!

---

## Docker

การสร้าง Database ผ่าน Docker สำหรับการเขียน Unit Testing เพื่อทดสอบการทำงานเมื่อต้องเชื่อมต่อ Database

- Run Docker compose

```bash
docker compose up -d

or

docker compose up -d --force-recreate
```

หลังจากที่ Run Docker ขึ้นมาแล้ว สามารถเข้าใช้งาน pgadmin ได้ผ่าน URL <http://localhost:5050/>

```text
username: admin@example.com
password: example
```

- Login เข้าใช้งาน Postgress

```text
host: postgres [Container name]
port: 5432

username: admin
password: example
```

- Stop Docker compose

```bash
docker compose down -v
```

---

## Code coverage

@loopback/build สามารถเรียกใช้งาน [nyc](https://github.com/istanbuljs/nyc) ผ่าน command line โดยใช้คำสั่ง lb-nyc

วิธีการ set up code coverage:

1. สร้างไฟล์ .nycrc ใน root directory ของโปรเจค

```json
{
  "include": ["dist"],
  "exclude": ["dist/__tests__/"],
  "extension": [".js", ".ts"],
  "reporter": ["text", "html"],
  "exclude-after-remap": false
}

```

2. อัพเดท package.json scripts:

```json
    "precoverage": "npm test",
    "coverage": "open coverage/index.html",
    "coverage:ci": "lb-nyc report --reporter=text-lcov | coveralls",
    "test": "lb-nyc npm run mocha",
    "test:ci": "lb-nyc npm run mocha",
    "mocha": "lb-mocha \"dist/__tests__/**/*.js\"",
    "mocha:dev": "lb-mocha --allow-console-logs dist/__tests__/**/*.js && npm run posttest",
```

กรณีที่ต้องการใช้งาน coverage:ci จะต้อง Setup [Coveralls](https://coveralls.io/) ก่อน
