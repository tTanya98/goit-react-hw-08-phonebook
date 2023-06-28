import styled from 'styled-components';
// import { Button, Form, Input, Modal } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';

// export const FormWrap = styled(Form)`
//   margin: 0 auto;
// `;

// export const AddModalBtn = styled(Button)`
//   width: 100%;
//   height: 35px;
//   font-size: 18px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #ae1abe;
// `;

// export const UserIcon = styled(UserAddOutlined)`
//   color: #c7c6c6;
// `;

// export const PhoneIcon = styled(PhoneOutlined)`
//   color: #c7c6c6;
// `;

// export const InputForm = styled(Input)`
//   height: 35px;
//   font-size: 18px;
//   width: 100%;
// `;

// export const AddModal = styled(Modal)`
//   text-align: center;
//   .ant-modal-content {
//     width: 340px;
//     height: 225px;
//     position: absolute;
//     top: 50%;
//     left: 20%;
//   }
// `;

// export const OpenAddModal = styled(Button)`
//   margin: 15px 0;
//   background-color: #ae1abe;
// `;
export const AddUserIcon = styled(UserAddOutlined)`
  width: 20px;
  height: 20px;

  fill: #fabb18;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  // align-items: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 250px;
  padding: 22px 36px;

  color: #000000;
  background: #fff;
  border: 1px solid #000;
  border-radius: 7px;

  :placeholder {
    color: #757575;
  }
`;

export const Button = styled.button`
  font-weight: 700;
  font-size: 18px;

  display: flex;
  align-items: center;
  gap: 14px;
  width: fit-content;

  margin-top: 24px;
  padding: 20px;

  background-color: #ae1abe;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(250, 187, 24, 0.1);
  border-radius: 14px;

  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;