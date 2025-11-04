// export default function About() {
//   return (
//     <div className='min-h-screen flex items-center justify-center'>
//       <div className='max-w-2xl mx-auto p-3 text-center'>
//         <div>
//           <h1 className='text-3xl font font-semibold text-center my-7'>
//             About Blogify
//           </h1>
//           <div className='text-md text-gray-500 flex flex-col gap-6'>
//             <p>
//               Welcome to Blogify! This blog was created by chandini 
//               as a personal project to share his thoughts and ideas with the
//               world. Rishabh is a passionate developer who loves to write about
//               technology, coding, and everything in between.
//             </p>

//             <p>
//               On this blog, you'll find various articles on topics
//               such as web development, software engineering, and programming
//               languages. Rishabh is always learning and exploring new
//               technologies, so be sure to check back often for new content!
//             </p>

//             <p>
//               We encourage you to leave comments on our posts and engage with
//               other readers. You can like other people's comments and reply to
//               them as well. We believe that a community of learners can help
//               each other grow and improve.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto p-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8">
          About <span className="text-teal-500">Blogify</span>
        </h1>

        <div className="text-lg text-gray-600 dark:text-gray-300 space-y-6 leading-relaxed">
          <p>
            Welcome to <span className="font-semibold text-teal-600">Blogify</span> —
            a modern blogging platform created by <span className="font-semibold">Chandini</span> 
            as part of her internship project. Blogify provides a seamless space for users 
            to share their thoughts, ideas, and experiences with the world.
          </p>

          <p>
            This platform is built with a focus on simplicity, usability, and performance. 
            Users can create, edit, and delete blogs using a rich text editor, interact through 
            comments and likes, and explore content across different categories.
          </p>

          <p>
            Blogify is not just about publishing — it's about community. 
            Readers can engage by leaving comments, sharing feedback, and connecting 
            with like-minded individuals. Every post adds value, sparks creativity, 
            and encourages meaningful discussions.
          </p>

          <p>
            Stay tuned for more updates, and thank you for being part of 
            <span className="text-teal-600 font-semibold"> Blogify</span>!
          </p>
        </div>
      </div>
    </div>
  );
}
