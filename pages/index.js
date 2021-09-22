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

      <div className="w-full p-5">
        <div className="flex flex-col sm:flex-row max-w-6xl items-center mx-auto text-left text-white">
          <div className="flex-1 w-full p-10 bg-gradient-to-br from-gray-700 to-gray-900 mx-4 my-4 rounded-md">
            <h2 className="text-3xl font-bold">5+</h2>
            <p className='text-white'>Years Experience</p>
            <p className='text-white'>Full Stack Web Development</p>
          </div>
          <div className="flex-1 w-full p-10 bg-gradient-to-br from-yellow-400 to-yellow-600 mx-4 my-4 rounded-md">
            <h1 className="text-3xl font-bold">Javascript</h1>
            <p className='text-white'>Expert</p>
            <p className='text-white'>My Favourite Language</p>
          </div>
          <div className="flex-1 w-full p-10 bg-gradient-to-br from-blue-400 to-blue-600 mx-4 my-4 rounded-md">
            <h1 className="text-3xl font-bold">UTS</h1>
            <p className='text-white'>Class of 2019</p>
            <p className='text-white'>Bachelor of Information Technology</p>
          </div>
        </div>
      </div>

      <div className='flex px-5 py-10 max-w-6xl mx-auto'>
        <h2 className='text-3xl font-bold'>Projects</h2>
      </div>

      <div className=''>
        <div className='flex flex-col sm:flex-row max-w-6xl items-top mx-auto text-gray-900'>
          <div className="flex-1 p-10 bg-gradient-to-br from-blue-400 to-blue-600 mx-4 my-4 rounded-md text-white">
            <p className='bg-blue-600 px-2 rounded-sm text-white'>Coming Soon</p>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <div className='flex flex-row text-sm text-gray-900 space-x-2 my-2'>
              <p className='bg-white px-2 rounded-sm'>NextJs</p>
              <p className='bg-white px-2 rounded-sm'>Firebase</p>
              <p className='bg-white px-2 rounded-sm'>Sheets</p>
              <p className='bg-white px-2 rounded-sm'>API</p>
            </div>
            <p>This project was built as a backend system that powers my blog and content management system for this website.</p>
          </div>
          <div className="flex-1 p-10 bg-gradient-to-br from-green-400 to-green-600 mx-4 my-4 rounded-md text-white">
            <p className='bg-green-600 px-2 rounded-sm text-white'>Coming Soon</p>
            <h1 className="text-3xl font-bold">Real Estate App</h1>
            <div className='flex flex-row text-sm text-gray-900 space-x-2 my-2'>
              <p className='bg-white px-2 rounded-sm'>NextJs</p>
              <p className='bg-white px-2 rounded-sm'>Tailwind</p>
              <p className='bg-white px-2 rounded-sm'>Sheets</p>
              <p className='bg-white px-2 rounded-sm'>API</p>
            </div>
            <p>Using the Domain Group Real Estate API I created a clone of the Domain website.</p>
          </div>
          <div className="flex-1 p-10 bg-gradient-to-br from-red-400 to-red-600 mx-4 my-4 rounded-md text-white">
            <p className='bg-red-600 px-2 rounded-sm text-white'>Coming Soon</p>
            <h1 className="text-3xl font-bold">Netflix Clone</h1>
            <div className='flex flex-row text-sm text-gray-900 space-x-2 my-2'>
              <p className='bg-white px-2 rounded-sm'>NextJs</p>
              <p className='bg-white px-2 rounded-sm'>CMS</p>
              <p className='bg-white px-2 rounded-sm'>Firebase</p>
              <p className='bg-white px-2 rounded-sm'>API</p>
            </div>
            <p>Creating a Netflix clone using firebase for authentication and React player for the video player.</p>
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
