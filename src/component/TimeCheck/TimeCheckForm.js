import React, {useEffect, useState} from "react";
import clockImg from "../../assets/img/clock.png";
import {useParams} from "react-router-dom";

const TimeCheckForm = () => {
    const {id} = useParams(); // 로그인한 아이디의 인덱스
    const [userTimeData, setUserTimeData] = useState([]);

    // 로그인한 직원의 출퇴근시간 조회
    const getUserTime = async () => {
        const json = await (await fetch(`http://localhost:8080/api/findByUserTime?id=${id}`)).json();
        setUserTimeData(json);
    }

    const timeCheckBtnClick = () => {

    }

    useEffect(() => {
        //getUserTime();
    }, []);

    return (
        <>
            <div className={'mainDiv'}>
                <div className={'subDiv centerLine'}>
                    <div className={'textDiv'}>
                        <img src={clockImg} alt={'시계이미지'}/>
                        <span>출근시간</span>
                    </div>
                    <div className={'timeDiv'}>
                        <span>{ userTimeData.attendanceDay === undefined ? `00년 00월 00일` : userTimeData.attendanceDay}</span>
                        <span className={'timeSpan'}>{ userTimeData.attendanceTime === undefined ? `00시 00분 00초` : userTimeData.attendanceTime}</span>
                    </div>
                </div>
                <div className={'subDiv'}>
                    <div className={'textDiv'}>
                        <img src={clockImg} alt={'시계이미지'}/>
                        <span>퇴근시간</span>
                    </div>
                    <div className={'timeDiv'}>
                        <span>{userTimeData.leaveWorkDay === undefined ? `00년 00월 00일` : userTimeData.leaveWorkDay}</span>
                        <span className={'timeSpan'}>{userTimeData.leaveWorkTime === undefined ? `00시 00분 00초` : userTimeData.leaveWorkTime}</span>
                    </div>
                </div>
            </div>
            <div className={'buttonDiv'}>
                <button className={'btn'} onClick={timeCheckBtnClick}><span className={'btn-text'}>출근(퇴근)</span></button>
            </div>
        </>
    )
}

export default TimeCheckForm;

