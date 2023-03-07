import { useEffect, useRef, useState } from 'react';
import PuffLoader from 'react-spinners/PuffLoader';
import gsap from 'gsap';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Success = () => {
  const [loading, setLoading] = useState(true);
  const ref = useRef();

  useEffect(() => {
    const id = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    !loading &&
      gsap.from(ref.current, {
        opacity: 0,
        duration: 2,
      });
  }, [loading]);

  return (
    <div className='flex flex-col h-screen w-screen place-items-center justify-center text-center'>
      {loading ? (
        <div className='relative flex items-center justify-center mx-auto w-full h-full my-auto'>
          <PuffLoader loading={loading} color='#ff0000' size={120} />
        </div>
      ) : (
        <div ref={ref} className='flex flex-col h-full w-full items-center justify-center text-center'>
          <h1 className='text-3xl font-semibold'>Your order was cancelled</h1>
          <p className='text-lg mt-8'>Don&apos;t worry You will not be charged</p>
          <span className='mt-12 text-xl'>
            <Link passHref href='/'>
              <span className='font-semibold mr-2'> Click here</span>
            </Link>
            <span>to go back to the main page</span>
          </span>
        </div>
      )}
    </div>
  );
};

export default Success;
