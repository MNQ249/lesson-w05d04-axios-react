import React from 'react';
import Post from './Post';

const PostContainer = (props) => {

console.log(props.allPosts);
const postarr = props.allPosts.map((item, index) => {
    return <Post title={item.title} body={item.body} key={index}/>
})
return (
    <div className="row">
        {postarr}
    </div>
)
};

export default PostContainer;