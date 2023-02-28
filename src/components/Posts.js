import { useState, useRef, useCallback } from 'react'
import usePosts from '../hooks/usePosts'
import Post from './Post'

const Posts = () => {
  const [pageNum, setPageNum] = useState(1)
  const {
      isLoading,
      isError,
      error,
      results,
      hasNextPage
  } = usePosts(pageNum)

  const intObserver = useRef()
  const lastPostRef = useCallback(post => {
      if (isLoading) return

      if (intObserver.current) intObserver.current.disconnect()

      intObserver.current = new IntersectionObserver(posts => {
          if (posts[0].isIntersecting && hasNextPage) {
              console.log('We are near the last post!')
              setPageNum(prev => prev + 1)
          }
      })

      if (post) intObserver.current.observe(post)
  }, [isLoading, hasNextPage])

  if (isError) return <p className='center'>Error: {error.message}</p>

  const content = results.map((post, i) => {
    if (results.length === i + 1) {
        return <Post ref={lastPostRef} key={Math.random()} post={post} />
    }
    return <Post key={Math.random()} post={post} />
  })  

  return (
    <>
        <h1 id="top">Infinity Scroll</h1>
        {content}
        {isLoading && <p className="center">Loading More Posts...</p>}
        <p className="center"><a href="#top">Back to Top</a></p>
    </>
)

}

export default Posts;
