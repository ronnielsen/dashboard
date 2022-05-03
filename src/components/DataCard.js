import styled from "styled-components";
import { FaUser } from "react-icons/fa";

const Container = styled.div`
  background: ${p => p.theme.light};
  color: ${p => p.theme.text};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 16px;
  box-sizing: border-box;
  margin-right: 16px;
`;

const Icon = styled.div`
  font-size: 48px;
  @media(max-width: 768px){
    font-size: 32px;
  }
`;

const Value = styled.div`
  font-size: 48px;
  font-weight: bold;
  min-width: 240px;
  width: 100%;
  @media(max-width: 768px){
    min-width: 160px;
    font-size: 32px;
  }
`;

const Label = styled.div`
  color: ${p => p.theme.secondaryText};
  font-size: 21px;
  @media(max-width: 768px){
    font-size: 18px;
  }
`;

function DataCard(props) {
  return (
    <Container>
      <Icon>{props.icon || <FaUser />}</Icon>
      <Value>{props.value || "100"}</Value>
      <Label>{props.label || "Label"}</Label>
    </Container>
  );
}

export default DataCard;
