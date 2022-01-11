import React from "react";
import { hot } from 'react-hot-loader/root';
import {useDispatch, useSelector} from "react-redux";

const App = () => {
    const store = useSelector(store => store)
    const dispatch = useDispatch();
    console.log(store);
    return (
        <div>
            Redux Saga tutorial
        </div>
    );
}

export default hot(App);
