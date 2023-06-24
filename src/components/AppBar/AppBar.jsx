import {
    Nav,
    Link,
    Container,
  } from './AppBar.styled';
  
  import { Spiner } from 'pages/ContactList/ContactList.styled';
  import { UserMenu } from 'components/UserMenu/UserMenu';
  import { useSelector } from 'react-redux';
  
  export const AppBar = () => {
    const { isLoaggedIn, isLoading } = useSelector(state => state.auth);
  
    return (
      <header>
        {isLoading && <Spiner />}
  
        <Container>
          <Nav>
            <div>
              <Link to="/">
                Home
              </Link>
              {isLoaggedIn && (
                <Link to="/contacts">
                  Contacts
                </Link>
              )}
            </div>
            <div>
              {isLoaggedIn ? (
                <UserMenu />
              ) : (
                <>
                  <Link to="/register">
                    Register
                  </Link>
                  <Link to="/login">
                    Log in
                  </Link>
                </>
              )}
            </div>
          </Nav>
        </Container>
      </header>
    );
  };