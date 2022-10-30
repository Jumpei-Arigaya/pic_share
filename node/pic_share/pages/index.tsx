import type { NextPage } from 'next'
import Link from 'next/link'

import BasicButtons from '../components/atoms/BasicButtons'
import styles from '../styles/Home.module.css'
import internal from 'stream'
import { useGetPosts } from '../lib/posts'
import { useCallback, useEffect } from 'react'

const Home: NextPage = () => {

  const { getAllPostsData, posts } = useGetPosts();

  useEffect(() => {
    getAllPostsData();
  }, [])
  console.log(posts)

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        PIC SHARE
      </h1>
      <BasicButtons link={"/accounts/login"}>ログイン画面</BasicButtons>
      {posts.map((post) =>
        <div key={post.id}>
          <p>ユーザーID:{post.users_id}</p>
          <p>投稿内容：{post.content}</p>
        </div>
      )}
    </div >
  )
}

export default Home

// export const getServerSideProps = async () => {
//   const { getAllPostsData, posts } = useGetPosts();
//   await getAllPostsData();

//   return {
//     props: { posts },
//   }
// }

