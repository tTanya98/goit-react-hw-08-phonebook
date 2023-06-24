import styled, { keyframes } from 'styled-components';
import {
  UsergroupAddOutlined,
  EditOutlined,
  PhoneOutlined,
  ContactsOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { flip } from 'react-animations';

const fadeAnimation = keyframes`${flip}`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: #0c0e74;
`;

export const Wrap = styled.div`
  margin-bottom: 60px;
  padding: 40px 0;
  display: flex;
  gap: 30px;
  justify-content: center;
`;

export const UnderTitle = styled.h2`
  color: #0c0e74;
  text-align: center;
  font-size: 28px;
  height: 40px;
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  margin: 0 6px;
  color: white;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  border: 1px solid #ae1abe;
  border-radius: 8px;
  box-shadow: 0 2px 0 rgb(5 145 255 / 10%);
  padding: 5px 8px;
  background-color: #ae1abe;
  font-weight: 400;
  font-size: 20px;
  :hover {
    opacity: 0.8;
  }
`;

export const Section = styled.section`
  padding-top: 40px;
  height: 40em;
  background-color: linear-gradient(90deg, rgba(177,12,157,1) 0%, rgba(23,13,227,1) 100%);
  border-radius: 1.1em;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HomeEdit = styled(EditOutlined)`
  animation: 2.5s ${fadeAnimation};
  svg {
    color: #0390c6;
    width: 150px;
    display: block;
    height: 150px;
    margin: 0 auto;
  }
`;

export const HomePhoneIcon = styled(PhoneOutlined)`
  animation: 2s ${fadeAnimation};
  svg {
    color: #0390c6;
    width: 150px;
    display: block;
    height: 150px;
    margin: 0 auto;
  }
`;

export const HomeUserGroup = styled(UsergroupAddOutlined)`
  animation: 1.5s ${fadeAnimation};
  svg {
    color: #0390c6;
    display: block;
    height: 150px;
    margin: 0 auto;
    width: 150px;
  }
`;

export const HomeContactList = styled(ContactsOutlined)`
  animation: 1s ${fadeAnimation};

  svg {
    color: #0390c6;
    width: 150px;
    display: block;
    height: 150px;
    margin: 0 auto;
  }
`;