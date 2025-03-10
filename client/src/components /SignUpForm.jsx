import myStyles from '../styles/syles.module.css'
import {Button, Form, Input} from "antd";



const SignUpForm = () => {

    return (
        <div className={myStyles.signUpContainer}>
            <h3>Sign Up</h3>
            <Form
                name="signUpForm"
                labelCol={{span: 8,}}
                wrapperCol={{span: 16,}}
                style={{maxWidth: 600,}}
                initialValues={{remember: true,}}
                // onFinish={onFinish}
                autoComplete="off"
            >

                {/* First Name */}
                <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[{required: true}]}
                    labelCol={{span: 24,}}
                    wrapperCol={{span: 24,}}
                >
                    <Input placeholder="John" />
                </Form.Item>

                {/* Last Name */}
                <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[{required: true}]}
                    labelCol={{span: 24,}}
                    wrapperCol={{span: 24,}}
                >
                    <Input placeholder="Smith" />
                </Form.Item>

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

                {/*Confirm Password */}
                <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    rules={[{required: true}]}
                    labelCol={{span: 24,}}
                    wrapperCol={{span: 24,}}
                >
                    <Input.Password placeholder="confirm password" />
                </Form.Item>

                <Form.Item wrapperCol={{ span: 24, style: { textAlign: "center" } }}>
                    <Button type="primary" htmlType="submit">
                        Sign Up
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default SignUpForm;