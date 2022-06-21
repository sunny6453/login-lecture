"use strict"; 

const app = require("../app");  // 상위폴더../에 가서 app을 부른다. 

const PORT = 3000;

app.listen(PORT, () => {  //listen이라는 명령어로 서버 띄우기(포트, 콜백함수 넘기기)
    console.log("서버가동");

});