import footerLinks from "../utils/footerLinks"
import FooterLink from "./FooterLink"

const Footer = () => {
  return (
    <footer className='container mx-auto '>
      <hr className='block lg:hidden' />
      <div className='lg:w-1/2 mx-auto mt-12'>
        <form className='flex flex-col mx-auto px-12'>
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
              className='bg-black border border-black text-white px-3 py-2 transition duration-500 hover:bg-white hover:text-black focus:outline-black'>
              Sign up
            </button>
          </div>
        </form>
      </div>
      <div className='flex flex-col flex-wrap px-12 sm:px-24 mt-24 overflow-hidden lg:flex-row md:justify-between'>
        {footerLinks.map((el) => (
          <FooterLink title={el.title} linksArray={el.links} key={el.title} />
        ))}
      </div>
      <p className='text-center py-5'>
        Copyright &copy; 2021
        <a href='https://ikorchev.com/' target='_blank' rel='noreferrer'>
          ikorchev.com
        </a>
      </p>
    </footer>
  )
}

export default Footer
