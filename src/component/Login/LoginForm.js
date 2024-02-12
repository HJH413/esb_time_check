import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
const LoginForm = () => {
    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const onIdHandler = (event) => {
        setId(event.target.value);
    }

    const onPwHandler  = (event) => {
        setPw(event.target.value);
    }

    const loginBtnClick = () => {
        if (id === '') {
            alert('아이디를 입력해주세요.');
            document.getElementById("esbId").focus();
            return;
        }

        if (pw === '') {
            alert('비밀번호를 입력해주세요.');
            document.getElementById("esbPw").focus();
            return;
        }

        /*
        TODO : 로그인 실패 -> 경고창 표출
        alert("아이디 혹은 비밀번호가 일치 하지 않습니다.");
        TODO : 로그인 성공 -> 출석 채크 페이지 이동
         */

        navigate('/timeCheck/1');

    }

    return (
        <>
            <div className={'inputDiv'}>
                <div className={'inputIdDiv'}>
                    <input id={"esbId"} type={'text'} onChange={onIdHandler} placeholder={'아이디'}/>
                </div>
                <div className={'inputPwDiv'}>
                    <input id={"esbPw"} type={'password'} onChange={onPwHandler} placeholder={'비밀번호'}/>
                </div>
            </div>
            <div className={'buttonDiv'}>
                <button className={'btn'} onClick={loginBtnClick}><span className={'btn-text'}>로그인</span></button>
            </div>
        </>
    )
}

export default LoginForm;

