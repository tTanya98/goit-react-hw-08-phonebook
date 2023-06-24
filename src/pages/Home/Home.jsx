import {
    Title,
    HomeUserGroup,
    Wrap,
    UnderTitle,
    HomeLink,
    Section,
    HomeEdit,
    HomePhoneIcon,
    HomeContactList,
  } from './Home.styled';
  import { useSelector } from 'react-redux';
  
  export default function Home() {
    const { isLoaggedIn } = useSelector(state => state.auth); 
  
    return (
      <Section>
        <Title>Hello! This is your PhoneBook</Title>
  
        <Wrap>
          {' '}
          <HomeEdit /> <HomePhoneIcon />
          <HomeUserGroup />
          <HomeContactList />
        </Wrap>
  
        {!isLoaggedIn ? (
          <UnderTitle>
            You should
            <HomeLink to="/register">Register</HomeLink>
            or
            <HomeLink to="/login">Log in</HomeLink>
            before use your PhoneBook
          </UnderTitle>
        ) : (
          <UnderTitle>
            Go to the tab
            <HomeLink to="/contacts">Contacts</HomeLink>
            and manage your contacts
          </UnderTitle>
        )}
      </Section>
    );
  }
  