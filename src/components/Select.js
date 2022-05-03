import { useState } from 'react'
import styled from 'styled-components'
import { FaCaretDown } from 'react-icons/fa'

const Container = styled.div`
  position: relative;
  margin-left: 16px;
  * {
    user-select: none;
  }
`;

const Button = styled.div`
  background: ${p => p.theme.light};
  color: ${p => p.theme.secondaryText};
  font-size: 18px;
  line-height: 32px;
  border-radius: 45px;
  padding: 8px 16px;
  display: block;
  font-weight: 400;
  display: flex;
  align-items: center;
  z-index: 11;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-shadow: 0px 0px 0px 1px ${p => p.theme.border};
  &:hover {
    background: ${p => p.theme.highlight};
    color: ${p => p.theme.text};
  }
  @media(max-width: 768px){
    font-size: 14px;
    line-height: 20px;
  }
`;

const List = styled.div`
  border-radius: 16px;
  position: absolute;
  top: 56px;
  left: 0px;
  min-width: 160px;
  max-width: 320px;
  font-size: 18px;
  font-weight: 400;
  overflow: hidden;
  box-sizing: border-box;
  background: ${p => p.theme.white};
  box-shadow: 0px 0px 0px 1px ${p => p.theme.border};
  z-index: 11;
`;

const ListItem = styled.div`
  padding: 8px 16px;
  line-height: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-shadow: 0px 1px 0px 0px ${p => p.theme.highlight};
  z-index: 11;
  &:hover{
    background: ${p => p.theme.highlight}
  }
`;

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

function Select (props){
  const [selected, setSelected] = useState(props.data[0])
  const [isOpen, setIsOpen] = useState(false)
  function handleSelect(x){
    setSelected(x)
    setIsOpen(false)
  }
  return (
    <Container>
      <Button
        {...props}
        id={props.id || props.text}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected || 'Select...'}
        <FaCaretDown style={{paddingLeft: 8}}/>
      </Button>
      {isOpen ? (
        <>
          <List>
            {props.data && props.data.map((x) =>
              <ListItem key={x} onClick={() => handleSelect(x)}>{x}</ListItem>
            )}
          </List>
          <Background onClick={() => setIsOpen(false)}/>
        </>
      ) : (
        null
      )}
    </Container>
  )
}

export default Select
