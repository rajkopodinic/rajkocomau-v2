import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='flex items-center h-18 py-4 bg-gray-100 text-gray-900'>
            <div className='flex flex-row items-center justify-between max-w-6xl w-full mx-auto px-10'>
                <div className='items-center'>
                    <Link href='/'>
                        <a className='text-xl font-bold'>rajkopodinic</a>
                    </Link>
                </div>
                <div className='hidden sm:flex sm:items-center sm:hidden'>
                    <Link href='/'>
                        <a className='px-8 hover:underline'>Projects</a>
                    </Link>
                    <Link href='/experience'>
                        <a className='px-8 hover:underline'>Experience</a>
                    </Link>
                    <Link href='/about'>
                        <a className='px-8 hover:underline'>About</a>
                    </Link>
                    <Link href='/contact'>
                        <a className='px-8 hover:underline'>Contact</a>
                    </Link>
                    <div>
                        <Link href='/'>
                            <button className='border-2 rounded-md text-gray-900 py-2 px-4 hover:underline'>Resume</button>
                        </Link>
                    </div>
                </div>
                <div className='flex items-center sm:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;