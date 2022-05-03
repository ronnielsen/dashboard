import styled from "styled-components";
import { DataColumn } from "./";

const Container = styled.div`
  margin-right: 32px;
  margin-top: 16px;
`;

const Label = styled.div`
  width: 100%;
  font-size: 21px;
`;

const Row = styled.div`
  display: flex;
  flex-duration: row;
  flex-wrap: nowrap;
  overflow: visible;
`;

function Chart(props) {
  const limit = Math.max(...props.data.map((x) => x.count), 0);
  return (
    <Container>
      <Label>{props.label || "Label"}</Label>
      <Row>
        {props.data.map((x) => (
          <DataColumn
            key={x.label + x.count}
            label={x.label}
            height={x.count}
            maxHeight={limit}
          />
        ))}
      </Row>
    </Container>
  );
}

export default Chart;
