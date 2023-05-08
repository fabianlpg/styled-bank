import React from "react";
import styled from "styled-components";
import ImageFilter from "../../ImageFilter";

const Card = styled.div`
    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin: 2px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    font-size: 12px;
    background-color: ${({ theme }) => theme.cardColor};
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .type {
        font-weight: bold;
        color: #3a7e97;
    }
    .type-dark {
        font-weight: bold;
        color: #41D3BE;
    }
`
export default ({ cargo, theme }) => {
    const { date, from, id, type, value, time } = cargo;
    return <Card>
        {ImageFilter(type, theme)}
        <Info>
            {theme
                ? <span className="type">{type}</span>
                : <span className="type-dark">{type}</span>
            }
            <span>{from}</span>
            <span>{value}</span>
        </Info>
        <span>{date}</span>
    </Card>
}