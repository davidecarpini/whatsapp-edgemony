import { Users } from './Users'
import styled from 'styled-components';

const Container = styled.div`
  width: 30%;
  background-color: #CCC;
  height: 100vw;
`

export const Sidebar = () => {
  return (
    <Container>
      <Users />
    </Container>
  )
}