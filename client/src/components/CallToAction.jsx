// import { Button } from "flowbite-react";

// export default function CallToAction() {
//   return (
//     <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
//       <div className="flex-1 justify-center flex flex-col">
//         <h2 className="text-2xl">Want to learn more about JavaScript?</h2>
//         <p className="text-gray-500 my-2">
//           Checkout these resources with multiple JavaScript Projects
//         </p>
//         <Button
//           gradientDuoTone="purpleToPink"
//           className="rounded-tl-xl rounded-bl-none"
//         >
//           <a
//             href="https://www.100jsprojects.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             View Projects
//           </a>
//         </Button>
//       </div>
//       <div className="p-7 flex-1">
//         <img src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg" />
//       </div>
//     </div>
//   );
// }
import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <div className="bg-gradient-to-r from-teal-100 to-emerald-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl shadow-md border border-teal-200 dark:border-slate-600 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10 transition-all duration-300 hover:shadow-lg">
      
      {/* Left Text Section */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
          Start Sharing Your Ideas Today ✍️
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300 text-base max-w-md">
          Join our growing community of passionate writers and developers. 
          Create blogs, share insights, and inspire others with your experiences.
        </p>
        <Link
          to="/create-post"
          className="inline-block mt-6 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-blue-500 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Create Your First Blog
        </Link>
      </div>

      {/* Right Image Section */}
      <div className="flex-1 flex justify-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2920/2920244.png"
          alt="Create Blog"
          className="w-64 h-64 object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
}
