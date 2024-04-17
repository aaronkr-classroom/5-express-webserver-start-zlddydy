// main.js
"use strict";

// @TODO: 웹 서버를 만들고 실행한다.
// BEST 습관 : 먼저 모든 상수나 변수 정의
const port = 3000,
    express = require('express'),
    layouts = require('express-ejs-layouts'),
    homeController = require('./controllers/homeController'),
    errorController = require('./controllers/errorController'),
    app = express();


// BEST 습관 : 2단계 앱 설정 (set 함수, 그 다음 use 함수)
app.set("port", process.env.PORT || port);
app.set("view engine", "ejs");

app.use(layouts);
app.use(express.static("public"));

// errorController app.use()
// Aaron의 습관: GET 라우트 먼저 그 다음에 POST라우트
app.get("/", homeController.getHome);
app.get("/name/:myName", homeController.respondWithName);
app.get("/test", () => {
    res.sendFile("./public/test.html");
});

// BEST 습관 : 마지막 listen 함수
app.use(errorController.logErrors);
app.use(errorController.resNotFound);
app.use(errorController.resInternalError);

app.listen(app.get("port"), () => {
    console.log(`Server at: http://localhost:${app.get("port")}`);
});