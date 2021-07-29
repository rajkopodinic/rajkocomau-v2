var date = new Date();

const Footer = () => {
    return (
        <div className='flex flex-row items-center justify-center h-16 w-full bg-gray-800'>
            <div className='items-center'>
                <h1 className='text-white'>© Rajko Podinic {date.getFullYear()}</h1>
            </div>
        </div>
    );
}
 
export default Footer;