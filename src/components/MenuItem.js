import styled from 'styled-components';

const Container = styled.div`
  padding: 16px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 21px;
  border-radius: 45px;
  &:hover {
    background: ${p => p.theme.highlight};
  }
  @media(max-width: 768px) {
    font-size: 18px;
  }
`;

const Icon = styled.div`
  margin-right: 16px;
  display: flex;
  font-size: 24px;
  @media(max-width: 768px) {
    font-size: 21px;
  }
`;

function MenuItem(props){
  return (
    <Container {...props}>
      <Icon>{props.icon}</Icon>
      {props.text}
    </Container>
  )
}

export default MenuItem
