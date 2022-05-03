import styled from 'styled-components';

const Container = styled.button`
  outline: none;
  border: none;
  background: ${p => p.theme.dark};
  color: ${p => p.theme.lightText};
  font-size: 24px;
  line-height: 40px;
  border-radius: 16px;
  padding: 8px 16px;
  display: block;
  margin-right: 16px;
  &:hover {
    text-decoration: underline;
  }
  @media(max-width: 768px){
    font-size: 18px;
    line-height: 24px;
  }
`;

function Button (props){
  return (
    <Container
      {...props}
      id={props.id || props.text}
    >
      {props.text}
    </Container>
  )
}

export default Button
