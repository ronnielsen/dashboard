import styled from 'styled-components';
const Container = styled.button`
outline: none;
border: none;
min-width: 48px;
height: 48px;
background: ${p => p.theme.light};
color: ${p => p.theme.secondaryText};
font-size: 24px;
border-radius: 45px;
padding: 8px;
display: flex;
align-items: center;
justify-content: center;
&:hover {
  background: ${p => p.theme.highlight};
  color: ${p => p.theme.text};
}
@media(max-width: 768px){
  font-size: 18px;
  line-height: 1;
  min-width: 40px;
  height: 40px;
}
`;

function ButtonIcon (props){
  return (
    <Container
      {...props}
      id={props.id || props.text}
    >
      {props.icon}
    </Container>
  )
}

export default ButtonIcon
