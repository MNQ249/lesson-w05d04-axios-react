import React from 'react'

const Post = (props) => {
    return(
        <div className="column">
           <div>
             <h1>{props.title}</h1>
             <p>{props.body}</p>
           </div>
         </div>
    )
}
export default Post;