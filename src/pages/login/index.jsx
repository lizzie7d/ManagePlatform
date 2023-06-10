import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ a }) => {
    const ng = useNavigate();

    return (
        <div className='content-login' style={{ height: '100%' }}>
            <div className="login">
                <div className="login-box">
                    {/* <Spin> */}
                    <div className="login-detail">
                        <div className="login-title">登录</div>
                        <input placeholder='请输入登录名' />
                        <input placeholder='请输入密码' />
                        <div className='login-button' onClick={() => { ng('/faultPage'); localStorage.setItem('login', true) }}>登录系统</div>


                    </div>

                    {/* </Spin> */}
                </div>
            </div>
        </div>

    );
};

export default Login;
