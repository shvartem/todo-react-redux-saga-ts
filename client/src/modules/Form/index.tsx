/* eslint-disable react/no-array-index-key */
import {
  Form, Input, Button, FormItemProps,
} from 'antd';
import React from 'react';
import styled from 'styled-components';
import { AuthData } from '../AuthPage/types';

const Container = styled.div`
  margin: 50px auto;
`;

export type CustomItemProps = FormItemProps & {isPassword?: boolean}

const defaultFormItems: CustomItemProps[] = [
  {
    name: 'email',
    label: 'Your email',
    initialValue: '',
    rules: [
      {
        required: true,
        message: 'Please input valid email',
        type: 'email',
      },
    ],
  },
  {
    name: 'password',
    label: 'Password',
    isPassword: true,
    initialValue: '',
    rules: [
      {
        required: true,
        min: 6,
        message: 'Password must be at least 6 characters',
      },
    ],
  },
];

const defaultSubmitHanller = () => {
  console.log('Plase add submit handler in props');
};

interface ICustomForm {
  formItems: CustomItemProps[];
  submitHandler: (values: AuthData) => void
}

const CustomForm: React.FC<ICustomForm> = ({
  formItems = defaultFormItems,
  submitHandler = defaultSubmitHanller,
}) => {
  const onFinish = (values: AuthData) => {
    submitHandler(values);
  };

  return (
    <Container>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        {formItems.map((el, index) => (
          <Form.Item
            key={index}
            label={el.label}
            name={el.name}
            rules={el.rules}
            initialValue={el.initialValue}
          >
            {el.isPassword ? <Input.Password /> : <Input />}
          </Form.Item>
        ))}

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default CustomForm;
