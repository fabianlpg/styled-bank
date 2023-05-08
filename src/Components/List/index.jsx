import React from "react";
import { BoxCard, Button } from "../UI";
import { lista } from "../../info";
import Card from "../Card";
import styled from "styled-components";

const TitleBox = styled.h2`
    color: ${({ theme }) => theme.text};
    margin-bottom: 1.25rem;
    text-align: center;
`
const List = ({ theme }) => {
    return <BoxCard>
        <TitleBox>Expenses</TitleBox>
        {
            lista.cargos.map((cargo, i) => {
                return <Card key={i} cargo={cargo} theme={theme} />
            })
        }
        <Button>Ver más</Button>
    </BoxCard>
}

export default List;