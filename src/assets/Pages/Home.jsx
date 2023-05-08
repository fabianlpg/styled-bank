import React from "react";
import styled from "styled-components";
import Title from "../../Components/Title";
import Account from "../../Components/Account";
import List from "../../Components/List";


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

const Home = ({ theme }) => {
  return (
    <StyledContainer >
      <Title>Welcome</Title>
      <StyledContent>
        <Account theme={theme} />
      </StyledContent>
    </StyledContainer>
  );
};

export default Home;
