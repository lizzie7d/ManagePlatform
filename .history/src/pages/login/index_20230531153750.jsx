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
                    <Form
                        name="loginForm"
                        className="login-form"
                        //   onFinish={(values)=>handleLogin(values)}
                        form={form}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: '213' }]}
                        >
                            <Input
                                autoComplete='off'
                                //   placeholder={t('username')}
                                prefix={<span className="icon-font icon-xingzhuang" />}
                                style={{ width: 358 }}
                                bordered={false} />
                        </Form.Item>
                        <Form.Item
                            name="password"
                        // rules={[{required: true, message: t('password')}]}
                        >
                            <Input.Password
                                autoComplete='off'
                                //   placeholder={t('password')}
                                prefix={<span className="icon-font icon-bianzu5" />}
                                style={{ width: 358 }}
                                bordered={false} />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                size="large"
                                htmlType="submit"
                                style={{ width: 350, marginLeft: 101, height: 46 }}>
                                {/* {t('loginButton')} */}
                            </Button>
                        </Form.Item>
                    </Form>
                    {/* </Spin> */}
                </div>
            </div>
        </div>

    );
};

export default Login;
