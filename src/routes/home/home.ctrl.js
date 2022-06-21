"use strict";

//hello라는 컨트롤러 함수를 만들고, 이를 외부에서 사용한다.
const hello = (req,res)=>{  // /루트경로 만들기, 파라미터로 콜백함수 넘기기
        res.render("home/index");
      };


const login = (req,res)=>{  //  /login 루트 경로 설정
    res.render("home/login");
    };


    //밖으로 내보내기를 해야 외부에서 가져다 쓸 수 있다.
    module.exports = {
        hello,
        login,

    };



/*  //오브젝트: key:value 한 쌍
    //key값 만 넣으면 자체적으로 key값과 같은 value를 넣어준다.
    {Key : key}
    {
        hello: hello,
        login: login,
    };                         */