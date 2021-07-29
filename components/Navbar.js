import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='flex items-center h-18 py-4 bg-gray-50 text-gray-900'>
            <div className='flex flex-row items-center justify-between max-w-6xl w-full mx-auto px-10'>
                <div className='items-center'>
                    <Link href='/'>
                        <a className='text-xl font-bold'>rajkopodinic</a>
                    </Link>
                </div>
                <div className='hidden sm:flex sm:flex-row sm:items-center'>
                    <Link href='/'>
                        <a className='px-8'>About</a>
                    </Link>
                    <Link href='/'>
                        <a className='px-8'>Experience</a>
                    </Link>
                    <Link href='/'>
                        <a className='px-8'>Work</a>
                    </Link>
                    <Link href='/'>
                        <a className='px-8'>Contact</a>
                    </Link>
                    <div>
                        <Link href='/'>
                            <button className='border-2 rounded-md text-gray-900 py-2 px-4'>Resume</button>
                        </Link>
                    </div>
                </div>
                <div className='sm:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;