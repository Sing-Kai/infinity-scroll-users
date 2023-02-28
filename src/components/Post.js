import React from 'react'

const Post = React.forwardRef(({ post }, ref) => {

    const postBody = (
        <>
            <h2>{post.title}</h2>
            <p>Post ID: {post.id}</p>
            <p>{post.body}</p>
        </>
    )

    const content = ref
        ? <article ref={ref}>{postBody}</article>
        : <article>{postBody}</article>

    return content
})

export default Post