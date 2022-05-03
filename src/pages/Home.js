import styled from "styled-components";
import {
  FaUserPlus,
  FaShoppingCart,
  FaMoneyCheckAlt,
  FaChartBar,
} from "react-icons/fa";
import { range, transactions, dailySpending, productList } from "../data";

import {
  Select,
  Title,
  Flex,
  InputSearch,
  DataCard,
  Chart,
  Product,
} from "../components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
  }
`;

const Row = styled.div`
  display: flex;
  flex-duration: row;
  flex-wrap: nowrap;
  overflow: auto;
  padding-bottom: 16px;
  padding-left: 16px;
`;

const Products = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  padding: 16px;
`;

const MainContent = styled.div`
  overflow: auto;
  height: 100%;
  padding-bottom: 120px;
  box-sizing: border-box;
`;

const Label = styled.div`
  width: 100%;
  font-size: 21px;
`;

function Home(props) {
  return (
    <Container {...props}>
      <Title
        menuOpen={props.menuOpen}
        setMenuOpen={props.setMenuOpen}
        title={props.title}
      >
        <Select data={range} />
        <Flex />
        <InputSearch />
      </Title>
      <MainContent>
        <Row>
          <DataCard
            value="1,628"
            label="Transactions"
            icon={<FaShoppingCart />}
          />
          <DataCard
            value="$3.50"
            label="Mean Transaction"
            icon={<FaChartBar />}
          />
          <DataCard
            value="$29,850.00"
            label="Sales"
            icon={<FaMoneyCheckAlt />}
          />
          <DataCard value="120" label="New Users" icon={<FaUserPlus />} />
        </Row>
        <Row>
          <Chart data={transactions} label="Tranactions Trends" />
          <Chart data={dailySpending} label="Weekly Trends" />
        </Row>
        <Products>
          <Label>Top Products</Label>
          {productList.map((x, index) => (
            <Product
              key={x.name + x.sold}
              index={index + 1}
              name={x.name}
              sold={x.sold}
              prevRank={x.prevRank}
              src={x.image}
            />
          ))}
        </Products>
      </MainContent>
    </Container>
  );
}

export default Home;
