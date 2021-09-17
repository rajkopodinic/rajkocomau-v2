import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-700">
      <div className="flex flex-col w-full sm:max-w-6xl h-1/2 sm:h-1/2 items-center justify-center py-12 px-10 mx-auto text-center">
        <div>
          <Image
            className="rounded-full"
            src="/images/rajko.jpeg"
            alt="Rajko Podinic Profile Image"
            width={100}
            height={100}
          />
        </div>

        <p className="my-6">Hi, my name is</p>
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900">Rajko Podinic.</h1>
        <h1 className="text-4xl sm:text-6xl font-bold">
          I build things for the web.
        </h1>
        <p className="sm:w-2/4 mt-6 text-gray-600">
          I’m a fullstack web developer based in Sydney, Australia specializing
          in building (and occasionally designing) exceptional websites,
          applications, and everything in between.
        </p>
      </div>

      <div className="w-full p-10">
        <div className="flex flex-col sm:flex-row max-w-6xl items-center mx-auto text-left text-gray-900">
          <div className="flex-1 w-full p-10 bg-gradient-to-br from-gray-100 to-gray-200 mx-4 my-4 rounded-md">
            <h2 className="text-3xl font-bold">5+</h2>
            <p className='text-gray-600'>Years Experience</p>
            <p className='text-gray-600'>Full Stack Web Development</p>
          </div>
          <div className="flex-1 w-full p-10 bg-gradient-to-br from-gray-100 to-gray-200 mx-4 my-4 rounded-md">
            <h1 className="text-3xl font-bold">Javascript</h1>
            <p className='text-gray-600'>Expert</p>
            <p className='text-gray-600'>My Favourite Language</p>
          </div>
          <div className="flex-1 w-full p-10 bg-gradient-to-br from-gray-100 to-gray-200 mx-4 my-4 rounded-md">
            <h1 className="text-3xl font-bold">UTS</h1>
            <p className='text-gray-600'>Class of 2019</p>
            <p className='text-gray-600'>Bachelor of Information Technology</p>
          </div>
        </div>
      </div>

      <div className='hidden'>
        <div className='flex flex-col sm:flex-row max-w-6xl items-top mx-auto text-gray-900'>
          <div className='flex-1 p-10'>
            <h2 className='text-3xl font-bold'>Projects</h2>
          </div>
          <div className="flex-1 w-full p-10 bg-gradient-to-br from-yellow-300 to-yellow-500 mx-4 my-4 rounded-md text-white">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p>Google Firebase</p>
            <p>This project was built as a backend system that powers my blog and content management system for this website.</p>
          </div>
          <div className="flex-1 w-full p-10 bg-gradient-to-br from-green-600 to-green-800 mx-4 my-4 rounded-md text-white">
            <h1 className="text-3xl font-bold">Real Estate</h1>
            <p>Domain Group API</p>
            <p>Using the Domain Group API as a service, I have built a functioning Real Estate web application which includes search and filtering options.</p>
            <p>Another Scope of this project was to </p>
          </div>
        </div>
      </div>

      <div className='w-full p-10 text-gray-600'>
        <div className='flex flex-col sm:flex-row max-w-6xl items-top mx-auto '>
          <div className='flex-1 p-10'>
            <h2 className='text-3xl font-bold'>My Experience</h2>
          </div>
          <div className='flex-1 p-10'>
            <h2 className='text-xl font-bold'>Venntifact</h2>
          </div>
          <div className='flex-1 p-10'>
            <h2 className='text-xl font-bold'>Associate Consultant /</h2>
            <h2 className='text-xl font-bold'>Front End Developer</h2>
            <p>AUG 2020 - PRESENT</p>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row max-w-6xl items-top mx-auto'>
          <div className='flex-1 p-10'>
          </div>
          <div className='flex-1 p-10'>
            <h2 className='text-xl font-bold'>ZOZO Marketing</h2>
          </div>
          <div className='flex-1 p-10'>
            <h2 className='text-xl font-bold'>Front End Developer</h2>
            <p>JUN 2019 - AUG 2020</p>
            <br/>
            <h2 className='text-xl font-bold'>Wordpress Developer</h2>
            <p>JUN 2017 - JUN 2019</p>
            <br/>
            <h2 className='text-xl font-bold'>Marketing Intern</h2>
            <p>JAN 2016 - JUN 2017</p>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row max-w-6xl items-top mx-auto'>
          <div className='flex-1 p-10'>
          </div>
          <div className='flex-1 p-10'>
            <h2 className='text-xl font-bold'>ITV Studios Australia</h2>
          </div>
          <div className='flex-1 p-10'>
            <h2 className='text-xl font-bold'>IT Support</h2>
            <p>JAN 2020 - AUG 2020</p>
            <br />
            <h2 className='text-xl font-bold'>IT Assistant</h2>
            <p>JAN 2018 - JAN 2020</p>
          </div>
        </div>
      </div>

    </div>
  );
}
