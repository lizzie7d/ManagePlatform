import React from 'react';
import './style.css';

const Login = () => {

    return (
        <div className='content-login' style={{ height: '100%' }}>
            <div className="login">
                <div className="login-box">
                    {/* <Spin> */}
                    <div className="login-detail">
                        <div className="login-title">登录</div>
                        <input placeholder='请输入用户名' />
                        <input />
                        <div className='login-button'>登录进入系统</div>


                    </div>

                    {/* </Spin> */}
                </div>
            </div>
        </div>

    );
};

export default Login;
