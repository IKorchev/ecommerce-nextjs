import footerLinks from "../utils/footerLinks"
import FooterLink from "./FooterLink"

const Footer = () => {
  return (
    <footer>
      <hr />
      <div className='container mx-auto px-5'>
        <div className='mx-auto mt-12 lg:w-1/2'>
          <form className='flex flex-col mx-auto'>
            <h1 className='text-3xl font-semibold'>Sign up for our newsletter</h1>
            <p className='text-sm mt-2 mb-5'>
              Sign up to our e-mails to be the first to hear about the latest trends, new
              arrivals and exclusive offers. You can unsubscribe at any time.
            </p>
            <label htmlFor='userEmail' className='hidden'>
              Email
            </label>
            <div className='flex'>
              <input
                type='email'
                id='userEmail'
                placeholder='Email address'
                className='px-2 border border-gray-500  rounded-sm mr-5 flex-grow outline-none focus:border-2 focus:outline-black'
              />
              <button
                type='submit'
                className='bg-black font-semibold border border-black text-white px-3 py-2 transition duration-500 hover:bg-white hover:text-black focus:outline-black'>
                Sign up
              </button>
            </div>
          </form>
        </div>
        <div className='flex flex-col flex-wrap mt-24 overflow-hidden lg:flex-row md:justify-around'>
          {footerLinks.map((el) => (
            <FooterLink title={el.title} linksArray={el.links} key={el.title} />
          ))}
        </div>
        <div className='text-center py-5'>
          <p className='mb-5'>Copyright &copy; 2021 Ecomm</p>
          <a href='https://ikorchev.com/' target='_blank' rel='noreferrer'>
            ikorchev.com
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
