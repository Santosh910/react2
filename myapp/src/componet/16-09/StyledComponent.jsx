import React from "react";
import styled from 'styled-components'

const StyledComponent = () => {
    const Button = styled.button`
     color : red;
     background-Color :blue;
    `
   
    return(
        <div>
            <Button>StyledComponent</Button>
        </div>
    )
}

export default StyledComponent;