import styled from "styled-components";

const Container = styled.div`
  color: ${p => p.theme.text};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 16px;
  box-sizing: border-box;
  margin-right: 16px;
  align-items: center;
  width: 48px;
`;

const Value = styled.div`
  height: 320px;
  width: 24px;
  border-radius: 45px;
  padding-top: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 8px;
  flex-direction: column;
  font-size: 14px;
  position: relative;
`;

const Fill = styled.div`
  height: ${props => (props.height / props.maxHeight) * 100 + "%"};
  border-radius: 45px;
  width: 24px;
  position: relative;
  background: ${(props) =>
    props.height === props.maxHeight
      ? props.theme.success
      : props.theme.secondary};
`;

const Label = styled.div`
  color: ${p => p.theme.secondaryText};
  font-size: 14px;
`;

const Text = styled.div`
  background: ${p => p.theme.highlight};
  color: ${p => p.theme.text};
  padding: 8px 8px;
  border-radius: 8px;
  font-size: 14px;
`;

function DataColumn(props) {
  function abbreviate(num, fixed) {
    if (num === null) {
      return null;
    }
    if (num === 0) {
      return "0";
    }
    fixed = !fixed || fixed < 0 ? 0 : fixed;
    var b = num.toPrecision(2).split("e"),
      k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3),
      c =
        k < 1
          ? num.toFixed(0 + fixed)
          : (num / Math.pow(10, k * 3)).toFixed(1 + fixed),
      d = c < 0 ? c : Math.abs(c),
      e = d + ["", "k", "m"][k];
    return e;
  }

  const fortmatNumber = abbreviate(props.height);

  return (
    <Container>
      <Value>
        <Fill {...props}></Fill>
      </Value>
      <Text>{fortmatNumber}</Text>
      <Label>{props.label || "Label"}</Label>
    </Container>
  );
}

export default DataColumn;
