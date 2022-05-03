import styled from 'styled-components';
import { FaCaretLeft, FaBars } from 'react-icons/fa'

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 40px;
  font-weight: 700;
  height: 64px;
  line-height: 64px;
  padding: 16px;
`;

const Text = styled.div`
  padding-left: 16px;
  @media(max-width: 768px){
    font-size: 24px;
  }
`;

const Toggle = styled.div`
  height: 48px;
  min-width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 45px;
  position: relative;
  background: ${p => p.theme.light};
  color: ${p => p.theme.secondaryText};
  font-size: 24px;
  z-index: 2;
  &:hover {
    background: ${p => p.theme.highlight};
    color: ${p => p.theme.text};
  }
  @media(max-width: 768px){
    height: 40px;
    min-width: 40px;
    font-size: 18px;
  }
`;

function Title(props){
  return (
    <Container>
      <Toggle onClick={() => props.setMenuOpen(!props.menuOpen)}>
        {props.menuOpen ? (
          <FaCaretLeft/>
        ) : (
          <FaBars/>
        )}
      </Toggle>
      <Text>{props.title || 'Home'}</Text>
      {props.children}
    </Container>
  )
}

export default Title
