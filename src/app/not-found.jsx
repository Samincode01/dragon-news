import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='h-[80vh] flex justify-center items-center flex-col gap-5'>
            <h1>Page Not Found</h1>
            <Link href={'/'}>
            <button className='btn'>Back to home</button>
            </Link>
        </div>
    );
};

export default NotFound;