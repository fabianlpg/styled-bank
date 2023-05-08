import React from "react";
import styled from "styled-components";
import Title from "../Title";
import Account from "../Account";
import List from "../List";


const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.body};
  min-height: 100vh;
  padding: 10vh 15vw 0 15vw;
`

const StyledContent = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const Container = ({ theme }) => {
  return (<>
    <StyledContainer >
      <Title>Smart Bank</Title>
      <StyledContent>
        <Account theme={theme} />
        <List theme={theme} />
      </StyledContent>
    </StyledContainer>
  </>

  );
};

export default Container;
