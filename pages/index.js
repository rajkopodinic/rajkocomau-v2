import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <div className="flex flex-col w-full h-1/2 sm:h-1/2 items-center justify-center py-12 px-10 text-center">
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
        <h1 className="text-4xl sm:text-6xl font-bold">Rajko Podinic.</h1>
        <h1 className="text-4xl sm:text-6xl font-bold">
          I build things for the web.
        </h1>
        <p className="sm:w-2/4 mt-6">
          I’m a fullstack web developer based in Sydney, Australia specializing
          in building (and occasionally designing) exceptional websites,
          applications, and everything in between.
        </p>
      </div>

      <div className="w-full bg-gray-50 p-10">
        <div className="flex flex-col sm:flex-row max-w-6xl items-center mx-auto text-left text-white">
          <div className="flex-1 w-full p-10 bg-gradient-to-br from-blue-500 to-blue-700 mx-4 my-4 rounded-md">
            <h2 className="text-3xl font-bold">5+</h2>
            <p>Years Experience</p>
            <p>Full Stack Web Development</p>
          </div>
          <div className="flex-1 w-full p-10 bg-gradient-to-br from-yellow-300 to-yellow-500 mx-4 my-4 rounded-md">
            <h1 className="text-3xl font-bold">Javascript</h1>
            <p>Expert</p>
            <p>My Favourite Language</p>
          </div>
          <div className="flex-1 w-full p-10 bg-gradient-to-br from-blue-500 to-blue-700 mx-4 my-4 rounded-md">
            <h1 className="text-3xl font-bold">UTS</h1>
            <p>Class of 2019</p>
            <p>Bachelor of Information Technology</p>
          </div>
        </div>
      </div>

      <div className='w-full bg-gray-100 p-10'>
        <div className='flex flex-col sm:flex-row max-w-6xl items-center mx-auto text-gray-900'>
          <div className='p-10'>
            <h2 className='text-3xl font-bold'>About me</h2>
          </div>
        </div>
      </div>

    </div>
  );
}
