import React from 'react';
import './style.css';
import { Button, Form, Input } from 'antd';

const Login = () => {
    const [form] = Form.useForm();

    return (
        <div className='content-login' style={{ height: '100%' }}>
            <div className="login">
                <div className="login-box">
                    {/* <Spin> */}
                    <div className="login-box-title">登陆</div>

                    {/* </Spin> */}
                </div>
            </div>
        </div>

    );
};

export default Login;
