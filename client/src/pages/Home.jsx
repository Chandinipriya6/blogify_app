// import { Link } from 'react-router-dom';
// import CallToAction from '../components/CallToAction';
// import { useEffect, useState } from 'react';
// import PostCard from '../components/PostCard';

// export default function Home() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const res = await fetch('/api/post/getPosts');
//       const data = await res.json();
//       setPosts(data.posts);
//     };
//     fetchPosts();
//   }, []);

//   return (
//     <div>
//       <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
//         <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to my Blog</h1>
//         <p className='text-gray-500 text-xs sm:text-sm'>
//           Here explore a variety of articles on topics such as
//           web development, software engineering, and programming languages.
//         </p>
//         <Link
//           to='/search'
//           className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
//         >
//           View all posts
//         </Link>
//       </div>
//       <div className='p-3 bg-amber-100 dark:bg-slate-700'>
//         <CallToAction />
//       </div>

//       <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
//         {posts && posts.length > 0 && (
//           <div className='flex flex-col gap-6'>
//             <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
//             <div className='flex flex-wrap gap-4'>
//               {posts.map((post) => (
//                 <PostCard key={post._id} post={post} />
//               ))}
//             </div>
//             <Link
//               to={'/search'}
//               className='text-lg text-teal-500 hover:underline text-center'
//             >
//               View all posts
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CallToAction from '../components/CallToAction';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/post/getPosts');
        const data = await res.json();
        setPosts(data.posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center gap-6 px-6 py-24 md:py-32 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent leading-tight">
          Welcome to <span className="text-gray-900 dark:text-white">Blogify</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-2xl">
          Discover inspiring stories, tutorials, and insights from developers around the world.
          Dive deep into web development, software engineering, and the latest tech trends.
        </p>
        <Link
          to="/search"
          className="inline-block mt-4 px-6 py-3 text-sm font-semibold text-white bg-teal-600 rounded-full hover:bg-teal-700 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Explore All Posts
        </Link>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 bg-gradient-to-r from-amber-100 to-yellow-50 dark:from-slate-800 dark:to-slate-700">
        <div className="max-w-5xl mx-auto px-4">
          <CallToAction />
        </div>
      </section>

      {/* Recent Posts */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        {posts && posts.length > 0 ? (
          <div className="flex flex-col gap-10">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
              📰 Recent Posts
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <PostCard
                  key={post._id}
                  post={post}
                />
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                to="/search"
                className="text-lg text-teal-600 dark:text-teal-400 font-semibold hover:underline hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
              >
                View All Posts →
              </Link>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500 dark:text-gray-400 py-20">
            <p className="text-lg">No posts available yet. Check back soon!</p>
          </div>
        )}
      </section>
    </div>
  );
}
