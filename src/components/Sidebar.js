import { useState } from "react";
import styled from "styled-components";
import { MenuItem } from "./";
import {
  FaHome,
  FaUtensils,
  FaShoppingBasket,
  FaCreditCard,
  FaChartBar,
  FaUserFriends,
  FaQuestionCircle,
  FaCog,
  FaCaretDown,
  FaSun,
  FaMoon,
} from "react-icons/fa";

const Container = styled.div`
  height: 100vh;
  min-width: 280px;
  max-width: 280px;
  padding: 16px;
  background: ${props => props.theme.background};
  display: ${props => (props.menuOpen ? "flex" : "none")};
  box-sizing: border-box;
  position: relative;
  flex-direction: column;
  * {
    user-select: none;
  }
  @media (max-width: 768px) {
    min-width: 220px;
    max-width: 220px;
    display: none;
    display: ${props => (props.menuOpen ? "flex" : "none")};
  }
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  @media(max-width: 768px){
    font-size: 21px;
  }
`;

const Text = styled.div`
  flex: 1;
  font-weight: 700;
  line-height: 32px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  @media(max-width: 768px){
    font-size: 21px;
  }
`;

const List = styled.div`
  line-height: 48px;
  padding: 0px 16px;
  position: absolute;
  z-index: 2;
  background: ${p => p.theme.background};
  top: 64px;
  left: -16px;
  width: calc(100% - 32px);
  display: flex;
  box-sizing: content-box;
  flex-direction: column;
  height: calc(100vh - 112px);
`;

const ListItem = styled.div`
  font-size: 21px;
  line-height: 64px;
  padding: 0px 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  border-radius: 45px;
  width: 100%;
  &:hover {
    background: ${p => p.theme.highlight};
  }
`;

const Selected = styled.div`
  padding: 16px;
  font-size: 24px;
  display: flex;
  align-items: center;
  border-radius: 45px;
  &:hover {
    background: ${p => p.theme.highlight};
  }
  @media(max-width: 768px){
    font-size: 21px;
  }
`;

function Sidebar(props) {
  const [open, setOpen] = useState(false);
  const [market, setMarket] = useState(props.locations[0]);
  function handleMarket(e) {
    setMarket(e);
    setOpen(false);
    console.log("menu", props.menuOpen, "theme", props.theme);
  }

  return (
    <Container {...props}>
      <Dropdown>
        <Selected onClick={() => setOpen(!open)}>
          <Text>{market}</Text>
          <FaCaretDown />
        </Selected>
        {open ? (
          <List>
            {props.locations.map((x) => (
              <ListItem key={x} onClick={() => handleMarket(x)}>
                {x}
              </ListItem>
            ))}
          </List>
        ) : null}
      </Dropdown>
      <MenuItem
        onClick={() => props.setCurrentPage("Home")}
        text="Home"
        icon={<FaHome />}
      />
      <MenuItem
        onClick={() => props.setCurrentPage("Menu")}
        text="Menu"
        icon={<FaUtensils />}
      />
      <MenuItem
        onClick={() => props.setCurrentPage("Transactions")}
        text="Transactions"
        icon={<FaShoppingBasket />}
      />
      <MenuItem
        onClick={() => props.setCurrentPage("Payments")}
        text="Payments"
        icon={<FaCreditCard />}
      />
      <MenuItem
        onClick={() => props.setCurrentPage("Reports")}
        text="Reports"
        icon={<FaChartBar />}
      />
      <MenuItem
        onClick={() => props.setCurrentPage("Customers")}
        text="Customers"
        icon={<FaUserFriends />}
      />
      <MenuItem
        onClick={() => props.setCurrentPage("Help")}
        text="Help"
        icon={<FaQuestionCircle />}
      />
      <MenuItem
        onClick={() => props.setCurrentPage("Settings")}
        text="Settings"
        icon={<FaCog />}
      />
      {props.theme === "dark" ? (
        <MenuItem
          onClick={() => props.toggleTheme()}
          text="Light Mode"
          icon={<FaSun />}
        />
      ) : (
        <MenuItem
          onClick={() => props.toggleTheme()}
          text="Dark Mode"
          icon={<FaMoon />}
        />
      )}
    </Container>
  );
}

export default Sidebar;
