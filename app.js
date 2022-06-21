"use strict"; 

/*<강의 3>// express 서버 프레임웍을 써서 서버열기*/
//모듈
const express = require("express"); //requir라는 명령어로"express"라는 모듈 다운
const app = express();  //app이라는 변수에 express실행시켜 변수안에 넣기

const PORT = 3000;
/*<강의 7>// 라우팅 */
const home = require("./routes/home");//내가만든 파일의 경로를 상대적으로 명시해야함. 

// 앱 세팅
//화면view 파일이 저장될 폴더를 views라는 폴더 생성
app.set("views", "./views"); //view화면을 처리해줄 수 있는 엔진 세팅 
app.set("view engine", "ejs"); //ejs = html과 비슷한 뷰 엔진

app.use("/", home); //use-> 미들웨어를 등록하는 메소드(어려운개념 일단 알아둬)

module.exports = app;


