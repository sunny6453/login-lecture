/* 강의 7 내용 - 라우팅(경로 설정) 
https://www.youtube.com/watch?v=mL84PLyKss0&list=PLSK4WsJ8JS4cQ-niGNum4bkK_THHOizTs&index=7*/



"use strict";  //이크마스크립트의 문법을 준수하겠다는 선언 명시

const express =  require("express");
const router = express.Router();

//ctrl = 컨트롤러 (컨트롤러 부분 모듈화)
const ctrl =require("./home.ctrl");

router.get("/", ctrl.hello);
router.get("/login", ctrl.login);

module.exports = router;