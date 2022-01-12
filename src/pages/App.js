import React from "react";
import { hot } from 'react-hot-loader/root';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const App = () => {
    const store = useSelector(store => store)
    const dispatch = useDispatch();
    console.log(store);
    return (
        <div>
            Redux Saga tutorial
            <div>
                <Link to={'/blog'}>
                    open blog
                </Link>
            </div>
        </div>
    );
}

export default hot(App);
