import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import BasicButtons from '../components/atoms/BasicButtons'
import styles from '../styles/Home.module.css'
import internal from 'stream'
import { useGetPosts } from '../lib/posts'
import { useCallback, useEffect } from 'react'

type Posts = {
  id?: number;
  users_id?: number;
  content?: string;
}

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

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   // const res = await fetch('http://localhost:8000/api/posts/')
//   // const posts = (await res.json()) as Posts;

//   const posts: Array<Posts> = [{
//     id: 1,
//     content: "yeah"
//   }, {
//     id: 2,
//     content: "hello"
//   }
//   ]

//   return {
//     props: {
//       posts
//     },
//   };
// };

