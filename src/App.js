import React from "react";
import { hot } from 'react-hot-loader/root';
import {useMachine} from "@xstate/react";
import {contextMachine, MachineContext} from "./context";
import {Box, Divider} from "@material-ui/core";
import {Test} from "./test/test";
import {Test2} from "./test/test2";

const App = () => {
    const [state, send, service] = useMachine(contextMachine);
    const machine = [state, send, service];

    return (
        <MachineContext.Provider value={machine}>
            <Box>
                Каждая кнопка в разном компоненте но использует ту же машину.
                <Divider/>
                <Test/>
                <Divider/>
                <Test2/>
            </Box>
        </MachineContext.Provider>
    );
}

export default hot(App);
