// homeController.js
"use strict";

/**
 * Listing 9.6 (p. 153)
 * 콜백 함수를 homeController.js의 홈 컨트롤러로 이동
 */
// @TODO: exports 객체를 사용해 sendReqParam 함수를 모듈로 내보낸다
exports.sendVegParam = (req, res) => {
    let veg = req.params.vegetable.toUpperCase();
    res.send(`This is the <span style='color:purple'>${veg}</span> page.`);
}; // 지정 라우트 요청 처리를 위한 함수 생성

exports.sendUserParam = (req, res) => {
    let uname = req.params.username.toUpperCase();
    res.send(`This is the <span style='color:blue'>${umame}</span> page.`);
}; // 지정 라우트 요청 처리를 위한 함수 생성

exports.sendCourseParam = (req, res) => {
    let course = req.params.couseId.toUpperCase();
    res.send(`This is the <span style='color:goldenrod'>${course}</span> page.`);
}; // 지정 라우트 요청 처리를 위한 함수 생성

/**
 * 다른 라우트를 옮기기
 */
exports.getHome = (req, res, next) => {
    res.send("This is the <span style='color:red'>HOME</span> page.")
};
; // @TODO: exports 객체를 사용해 getHome 함수를 모듈로 내보낸다
exports.getAbout = (req, res, next) => {
    res.send("This is the <span style='color:green'>ABOUT</span> page.")
};
;
exports.getContact = (req, res, next) => {
    res.send("This is the <span style='color:orange'>CONTACT</span> page.")
};
; // @TODO: exports 객체를 사용해 getContact 함수를 모듈로 내보낸다
exports.postContact = (req, res, next) => {
    res.send("Contact info submitted!!!!111!!")
};
; // @TODO: exports 객체를 사용해 postContact 함수를 모듈로 내보낸다

// @TODO: exports 객체를 사용해 logRequestPaths 미들웨어 함수를 모듈로 내보낸다
exports.logRequestPaths = (req, res, next) => {
    console.log(`request to: ${req.url}`);
    next();
};
