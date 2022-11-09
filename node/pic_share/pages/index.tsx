import { GetServerSideProps, NextPage } from 'next'
import { useGetPosts } from '../hooks/useGetPosts'
import { useCallback, useEffect } from 'react'
import SideMenu from '../components/organisms/SideMenu'
import PostList from '../components/organisms/PostList'
import SideProfile from '../components/organisms/SideProfile'
import Share from '../components/organisms/Share'

const Home: NextPage = () => {
  const { getAllPostsData, posts } = useGetPosts();
  useEffect(() => {
    getAllPostsData();
  }, [])
  console.log(posts)

  return (
    <div>
      <div className='grid grid-cols-3'>
        <div className='col-span-1 ml-1 sticky top-0'>
          <SideMenu />
        </div>
        <div className='col-span-1'>
          <div className='flex flex-wrap justify-center'>
            {posts.map((post) =>
              <PostList key={post.id} users_id={post.users_id} content={post.content} create_at={post.create_at} />
            )}
          </div>
        </div>
        <div className='col-span-1 flex justify-center mt-32'>
          <SideProfile />
        </div>
        <div>
          <Share />
        </div>
      </div >
    </div>
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

