import {Button, Form, Input} from "antd";
import myStyles from '../styles/syles.module.css'


const LoginForm = () => {



    return (
        <div className={myStyles.loginContainer}>
            <h3>Login</h3>
            <Form
                name="loginForm"
                labelCol={{span: 8,}}
                wrapperCol={{span: 16,}}
                style={{maxWidth: 600,}}
                initialValues={{remember: true,}}
                // onFinish={onFinish}
                autoComplete="off"
            >

                {/* Email */}
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{required: true}]}
                    labelCol={{span: 24,}}
                    wrapperCol={{span: 24,}}
                >
                    <Input placeholder="email@example.com" />
                </Form.Item>

                {/* Password */}
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{required: true}]}
                    labelCol={{span: 24,}}
                    wrapperCol={{span: 24,}}
                >
                    <Input.Password placeholder="password" />
                </Form.Item>



                <Form.Item wrapperCol={{ span: 24, style: { textAlign: "center" } }}>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default LoginForm