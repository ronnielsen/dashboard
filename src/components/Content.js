import styled from 'styled-components';
import { Home, Preview } from '../pages'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 21px;
  flex-direction: column;
  background: ${p => p.theme.white};
  border-radius: 48px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  overflow: hidden;
`;

function Content(props){
  const current = props.currentPage;
  return (
    <Container>
      {current === 'Home' ?
        (
          <Home
            title={props.title}
            menuOpen={props.menuOpen}
            setMenuOpen={props.setMenuOpen}
          />
        ) : current === 'Menu' ? (
          <Preview
            title={props.title}
            menuOpen={props.menuOpen}
            setMenuOpen={props.setMenuOpen}
          />
        ) : current === 'Transactions' ? (
          <Preview
            title={props.title}
            menuOpen={props.menuOpen}
            setMenuOpen={props.setMenuOpen}
          />
        ) : current === 'Payments' ?(
          <Preview
            title={props.title}
            menuOpen={props.menuOpen}
            setMenuOpen={props.setMenuOpen}
          />
        ) : current === 'Reports' ? (
          <Preview
            title={props.title}
            menuOpen={props.menuOpen}
            setMenuOpen={props.setMenuOpen}
          />
        ) : current === 'Customers' ? (
          <Preview
            title={props.title}
            menuOpen={props.menuOpen}
            setMenuOpen={props.setMenuOpen}
          />
        ) : current === 'Help' ? (
          <Preview
            title={props.title}
            menuOpen={props.menuOpen}
            setMenuOpen={props.setMenuOpen}
          />
        ) : current === 'Settings' ? (
          <Preview
            title={props.title}
            menuOpen={props.menuOpen}
            setMenuOpen={props.setMenuOpen}
          />
        ) : (<div>You're lost</div>)
      }
    </Container>
  )
}

export default Content
