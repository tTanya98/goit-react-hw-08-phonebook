import {
  FormWrap,
  LogButton,
  UserIcon,
  PasswordIcon,
  InputForm,
  Container,
  TitleReg,
} from './Login.styled';

import { loginization } from 'redux/Authorization/operations'; 
import { useDispatch } from 'react-redux';

export default function Login() {
  const [form] = FormWrap.useForm();
  const dispatch = useDispatch();

  const onFinish = values => {
    dispatch(loginization(values)); 
    form.resetFields(); 
  };

  return (
    <section>
      <Container>
        <FormWrap
          form={form}
          name="normal_login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          {' '}
          <TitleReg>Log in</TitleReg>
          <FormWrap.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
                type: 'email',
              },
            ]}
          >
            <InputForm prefix={<UserIcon />} placeholder="Email" />
          </FormWrap.Item>
          <FormWrap.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <InputForm
              prefix={<PasswordIcon />}
              type="password"
              placeholder="Password"
            />
          </FormWrap.Item>
          <FormWrap.Item>
            <LogButton type="primary" htmlType="submit">
              Log in
            </LogButton>
          </FormWrap.Item>
        </FormWrap>
      </Container>
    </section>
  );
}