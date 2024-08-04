import React from 'react'
import Article from './Article'

function ArticleList(props) {
  return (
    <main>
        {props.posts.map((post, key) => <Article key={key} post={post}/> )}
    </main>

  )
}

export default ArticleList