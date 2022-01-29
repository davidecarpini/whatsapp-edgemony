import React from 'react'
import styled from 'styled-components';
import { users } from '../../../../data/users';
import { User } from './User';

const Container = styled.div`
  display: flex;
  height: 100px;
  width: 100px;
  background-color: #FF0000;
`;

export const Users = () => {
  return (
    <Container>
      {
        users.map(user => (
          <User key={user.id} user={user}/>
        ))
      }
    </Container>
  )
}