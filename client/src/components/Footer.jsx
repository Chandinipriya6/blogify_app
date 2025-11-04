// import { Footer } from "flowbite-react";
// import { Link } from "react-router-dom";
// import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';

// export default function FooterComp() {
//   return (
//     <Footer container className="border border-t-8 border-teal-500">
//       <div className="w-full max-w-7xl mx-auto">
//         <div className="grid w-full justify-between sm:flex md:grid-cols-1">
//             <div className="mt-5">
//             <Link to ="/" className='self-center whitespace-nowrap 
//             text-lg sm:text-xl font-semibold dark:text-white'>
//               <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Rishabh's</span>
//               Blogify
//             </Link>
//             </div>
//             <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
//                 <div>
//                   <Footer.Title title='About' />
//                   <Footer.LinkGroup col>
//                     <Footer.Link
//                       href='https://www.100jsprojects.com'
//                       target='_blank'
//                       rel='noopener noreferrer'
//                     >
//                         Portfolio
//                     </Footer.Link>
//                     <Footer.Link
//                       href='/about'
//                       target='_blank'
//                       rel='noopener noreferrer'
//                     >
//                         Rishabh's Blogify
//                     </Footer.Link>
//                    </Footer.LinkGroup>
//                 </div>
//                 <div>
//                    <Footer.Title title='Follow us' />
//                    <Footer.LinkGroup col>
//                     <Footer.Link
//                        href='https://github.com/RishabhJain2404'
//                        target='_blank'
//                        rel='noopener noreferrer'
//                     >
//                         GitHub
//                     </Footer.Link>
//                     <Footer.Link
//                        href='https://www.linkedin.com/in/rishabhjain2404/'
//                        target='_blank'
//                        rel='noopener noreferrer'
//                     >
//                         LinkedIn
//                     </Footer.Link>
//                     </Footer.LinkGroup>
//                 </div>
//                 <div>
//                    <Footer.Title title='Legal' />
//                    <Footer.LinkGroup col>
//                      <Footer.Link href='#'>Privacy Policy</Footer.Link>
//                      <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
//                     </Footer.LinkGroup>
//                 </div>
//             </div>
//         </div>
//         <Footer.Divider />
//         <div className="w-full sm:flex sm:items-center sm:justify-between">
//           <Footer.Copyright 
//             href="#"
//             by="Rishabh's blogify"
//             year={new Date().getFullYear()}
//           />
//           <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
//             <Footer.Icon href='#' icon={BsFacebook}/>
//             <Footer.Icon href='#' icon={BsInstagram}/>
//             <Footer.Icon href='#' icon={BsTwitter}/>
//             <Footer.Icon href='https://github.com/RishabhJain2404' icon={BsGithub}/>
//             <Footer.Icon href='https://www.linkedin.com/in/rishabhjain2404/' icon={BsLinkedin}/>
//           </div>
//         </div>
//       </div>
//     </Footer>
//   )
// }
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';

export default function FooterComp() {
  return (
    <Footer container className="border-t-8 border-teal-500 bg-gradient-to-r from-gray-50 to-teal-50 dark:from-slate-900 dark:to-slate-800">
      <div className="w-full max-w-7xl mx-auto px-4 py-8">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          {/* Brand */}
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-2xl font-bold bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent"
            >
              Blogify
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm max-w-xs">
              Your space to read, write, and inspire. Share your stories and ideas with the world 🌍
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-8 mt-6 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link as={Link} to="/about">About Blogify</Footer.Link>
                <Footer.Link href="https://github.com/" target="_blank">Our GitHub</Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Follow Us" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://github.com/" target="_blank">GitHub</Footer.Link>
                <Footer.Link href="https://www.linkedin.com/" target="_blank">LinkedIn</Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>

        <Footer.Divider />

        {/* Bottom Section */}
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Blogify"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 mt-4 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="https://github.com/" icon={BsGithub} />
            <Footer.Icon href="https://www.linkedin.com/" icon={BsLinkedin} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

