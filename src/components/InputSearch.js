import { useState } from 'react';
import styled from 'styled-components';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { ButtonIcon } from '.';

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 0px 1px ${p => p.theme.border};
  border-radius: 45px;
  box-sizing: border-box;
  @media(max-width: 768px){
    font-size: 14px;
  }
`;

const StyledInput = styled.input`
  border: none;
  height: 48px;
  background: ${p => p.theme.light};
  color: ${p => p.theme.secondaryText};
  font-size: 18px;
  border-radius: 45px;
  flex-direction: row;
  box-sizing: border-box;
  padding-left: 40px;
  &:hover {
    background: ${p => p.theme.highlight};
    color: ${p => p.theme.text};
  }
  &:focus {
    background: ${p => p.theme.white};
    color: ${p => p.theme.text};
    outline: 3px solid ${p => p.theme.dark};
  }
  @media(max-width: 768px){
    height: 40px;
  }
`;

const FullInput = styled(StyledInput)`
  width: 100%;
`;

const Icon = styled.div`
  font-size: 18px;
  position: absolute;
  left: 12px;
  top: -6px;
  color: ${p => p.theme.secondaryText};
`;

const FullIcon = styled(Icon)`
  top: 18px;
  left: 32px;
`;

const Desktop = styled.div`
  display: flex;
  @media(max-width: 960px){
    display: none;
  }
`;

const Mobile = styled.div`
  display: none;
  @media(max-width: 960px){
    display: flex;
  }
`;

const SearchContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 96px;
  left: 0;
  top: 0;
  background: ${p => p.theme.white};
  z-index: 12;
  display: flex;
  align-items: center;
  padding: 0px 16px;
  max-width: calc(100vw - 32px);
  gap: 8px;
`;

function InputSearch (props){
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Desktop>
        <Container>
          <Icon><FaSearch /></Icon>
          <StyledInput placeholder='Search...'/>
        </Container>
      </Desktop>
      {isOpen ? (
        <SearchContainer>
          <FullIcon><FaSearch /></FullIcon>
          <FullInput autoFocus={true} placeholder='Search...'/>
          <ButtonIcon onClick={() => setIsOpen(false)}icon={<FaTimes />}/>
        </SearchContainer>
      ) : (
      <Mobile>
        <ButtonIcon onClick={() => setIsOpen(true)}icon={<FaSearch />}/>
      </Mobile>
      )}
      
    </>
  )
}

export default InputSearch
