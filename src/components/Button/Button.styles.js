import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  border: 2px solid #4caf50;
  background-color: ${(props) => props.variant === 'outline' ? '#FFF' : '#4caf50'};
  color: ${(props) => props.variant === 'outline' ? '#4caf50' : '#FFF'};
  border-radius: 2.5px;
  padding: 15px 32px;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  transition: 0.5s all ease-out;
  &:hover{
    background-color: ${(props) => props.variant !== 'outline' ? '#FFF' : '#4caf50'};
    color: ${(props) => props.variant !== 'outline' ? '#4caf50' : '#FFF'};
  }
`

export const GreatButton = styled(StyledButton)`
    background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
    border: none;
`