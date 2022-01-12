import React from "react";
import { hot } from 'react-hot-loader/root';
import {useDispatch, useSelector} from "react-redux";

const NotFound = () => {
    return (
        <div>
            404 Not Found
        </div>
    );
}

export default hot(NotFound);
