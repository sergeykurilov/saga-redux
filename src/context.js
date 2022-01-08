import React from 'react';
import {Machine} from "xstate";

export const contextMachine = Machine({
    id: 'context',
    initial: 'on',
    states: {
       on: {
           on: {
               TOGGLE: 'off'
           }
       },
       off: {
          on: {
              TOGGLE: 'on'
          }
       },
    },
})

export const MachineContext = React.createContext(null);