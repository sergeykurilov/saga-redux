import React,{useContext} from "react";
import {MachineContext} from "../context";
import {Box, Button} from "@material-ui/core";

export const Test = () => {
    const [state, send] = useContext(MachineContext);
    return (
        <Box>
            <Button onClick={() => send("TOGGLE")}>Toggle</Button>
            <Box>{state.value}</Box>
        </Box>
    )
}