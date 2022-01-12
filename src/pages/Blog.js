import React, {useEffect} from "react";
import { hot } from 'react-hot-loader/root';
import {useDispatch, useSelector} from "react-redux";

const Blog = () => {
    const blogData = useSelector(store => store.app.blog)
    const dispatch = useDispatch()
    console.log(blogData)
    return (
        <div>
            Blog
            <button onClick={() => {
                dispatch({type: "LOAD_SOME_DATA"})
            }}>
                load some data
            </button>
        </div>
    );
}

export default Blog;
