import { Sidebar } from './Sidebar';
import { Chat } from './Chat';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`

export const Main = () => {
  return (
    <Container>
      <Sidebar />
      <Chat />
    </Container>
  )
}