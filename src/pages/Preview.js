import styled from "styled-components";
import {
  FaLock
} from "react-icons/fa";

import {
  Title,
  Flex,
  InputSearch
} from "../components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
  }
`;

const MainContent = styled.div`
  overflow: auto;
  height: 100%;
  padding-bottom: 120px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: ${p => p.theme.secondaryText};
  font-size: 64px;
  @media(max-width: 768px){
    font-size: 40px;
  }
`;

const Text = styled.div`
  font-size: 24px;
  margin: 16px;
  @media(max-width: 768px){
    font-size: 18px;
  }
`;

function Preview(props) {
  return (
    <Container {...props}>
      <Title
        menuOpen={props.menuOpen}
        setMenuOpen={props.setMenuOpen}
        title={props.title}
      >
        <Flex />
        <InputSearch />
      </Title>
      <MainContent>
        <FaLock/>
        <Text>This page is unavailable for demo</Text>
      </MainContent>
    </Container>
  );
}

export default Preview;
