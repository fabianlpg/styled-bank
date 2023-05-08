import React, { useState, useEffect } from "react";

import privado from "../../assets/images/privado.svg";
import ojo from "../../assets/images/ojo.svg";
import { GiReceiveMoney } from "react-icons/gi";
import { Icono, Button, Box, Saldo, Detalle } from "../UI";
import styled from "styled-components";

const IconoEye = styled(Icono)`
  margin-top: 2px;
`

const Account = ({ theme }) => {
  const [toggleState, untoggle] = useState(false);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };
  useEffect(() => {
    const currentEye = JSON.parse(localStorage.getItem("eye"));
    if (currentEye) {
      untoggle(currentEye);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("eye", JSON.stringify(toggleState));
  }, [toggleState]);


  return (
    <Box>
      <h2>Account</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Available balance
        <span> </span>
        {
          theme ? <GiReceiveMoney className="icon-type" title={`Icon receive money`} /> : <GiReceiveMoney className="icon-type-dark" title={`Icon receive money`} />
        }
        {toggleState ? (
          <>
            <Saldo>
              <Detalle>$</Detalle> 8,621.50
            </Saldo>
          </>
        ) : null}
      </div>
      <Button onClick={toggleHandler}>
        <IconoEye
          src={toggleState ? privado : ojo}
          alt="Privacidad de saldo"
        />
      </Button>
    </Box>
  );
};

export default Account;
