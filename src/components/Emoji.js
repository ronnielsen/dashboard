import styled from 'styled-components';

const Container = styled.span`
  margin-right: 8px;
`;

function Emoji (props){
  return (
    <Container
      id={props.id || props.value}
      role='img'
      alt={props.alt}
    >
      {props.value}
    </Container>
  )
}

export default Emoji
