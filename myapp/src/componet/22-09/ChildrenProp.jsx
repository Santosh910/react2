import React from "react";

const ChildrenProp = () => {
    return (
        <>
        <H1>This is h1</H1>
            <Button>message</Button>
        </>

    )
}
const Button = ({ children }) => {
    return (
        <button>{children}</button>
    )
}
const H1 = ({ children }) => {
    return ( 
        <h1>{children}</h1>
    )
}


export default ChildrenProp