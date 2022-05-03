import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: auto;
  background: ${p => p.theme.background};
  display: flex;
  justify-content: center;
  font-family: 'IBM Plex Sans', sans-serif;
  b {
    font-weight: 900;
  }
  button {
    font-family: 'Heebo', sans-serif;
  }
`;

function GlobalStyles(props) {
  return (
    <Container {...props}>
      {props.children}
    </Container>
  )
}

export default GlobalStyles;
