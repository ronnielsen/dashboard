import styled from 'styled-components';

const Container = styled.span`
  display: flex;
  flex: 1;
`;

function Flex (props){
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default Flex
