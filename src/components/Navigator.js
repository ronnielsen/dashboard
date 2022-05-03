import styled from 'styled-components';

const Container = styled.div`
  color: black;
`;

function Navigator(props){
  const current = props.currentPage;
  return (
    <Container {...props}>
      {current === 'Home' ? (
        <div>Muh home</div>
      ) : current === 'Menu' ? (
        <div>Muh menu</div>
      ) : current === 'Transactions' ? (
        <div>Muh Transactions</div>
      ) : current === 'Payments' ?(
        <div>Payments</div>
      ) : current === 'Reports' ? (
        <div>Reports</div>
      ) : current === 'Customers' ? (
        <div>Customers</div>
      ) : current === 'Help' ? (
        <div>Help</div>
      ) : current === 'Settings' ? (
        <div>Settings</div>
      ) : (<div>You're lost</div>)
    }
    </Container>
  )
}

export default Navigator
