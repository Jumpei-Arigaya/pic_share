import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import BasicButtons from '../components/atoms/BasicButtons'
import styles from '../styles/Home.module.css'
import internal from 'stream'
import { useGetPosts } from '../lib/posts'
import { useCallback, useEffect } from 'react'
import SideMenu from '../components/organisms/SideMenu'
import PostList from '../components/organisms/PostList'
import SideProfile from '../components/organisms/SideProfile'

const Home: NextPage = () => {
  const { getAllPostsData, posts } = useGetPosts();
  useEffect(() => {
    getAllPostsData();
  }, [])
  console.log(posts)

  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-2'>
        <SideMenu />
      </div>
      <div className='col-span-8'>
        <div className='flex flex-wrap justify-center gap-8'>
          {posts.map((post) =>
            <PostList />
          )}
        </div>
      </div>
      <div className='col-span-2'>
        <SideProfile />
      </div>
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

