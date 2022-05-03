import styled from "styled-components";

const Container = styled.span`
  display: flex;
  max-width: calc(50% - 16px);
  flex: 50%;
  background: ${p => p.theme.light};
  border-radius: 32px;
  position: relative;
  overflow: hidden;
  font-size: 24px;
  align-items: center;
  @media (max-width: 1024px) {
    max-width: 100%;
    width: 100%;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Image = styled.img`
  height: 128px;
  width: 128px;
  border-radius: 32px;
  overflow: hidden;
  object-fit: contain;
  @media (max-width: 768px) {
    height: 80px;
    width: 80px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 16px;
  font-weight: bold;
`;

const Details = styled(Column)`
  padding: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Name = styled.div`
  font-size: 32px;
  font-weight: bold;
  line-height: 48px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Label = styled.div`
  font-size: 14px;
  color: ${p => p.theme.secondaryText};
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Index = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 40px;
  height: 40px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-right-radius: 16px;
  background: ${p => p.theme.highlight};
  color: ${p => p.theme.text};
`;

function Product(props) {
  return (
    <Container>
      <Index>{props.index || "1"}</Index>
      <Image src={props.src || "./logo192.png"} />
      <Details>
        <Name>{props.name || "Name"}</Name>
        <Row>
          <Column>
            {props.prevRank || "2"}
            <Label>Prev Rank</Label>
          </Column>
          <Column>
            {props.sold || "100"}
            <Label>Sold This Week</Label>
          </Column>
        </Row>
      </Details>
    </Container>
  );
}

export default Product;
