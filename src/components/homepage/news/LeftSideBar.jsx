import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({categories, activeId}) => {
    return (
            <div>
        <h2 className="text-lg font-bold">All Categories</h2>

        <ul className="mt-4 flex flex-col gap-3">
          {categories.map((category) => (
            <li
              key={category.category_id}
              className={`${activeId === category.category_id && "bg-purple-500 text-white"} rounded-md p-2 text-center text-lg font-bold`}
            >
             <Link href={`/category/${category.category_id}`} className='block p-2'>{category.category_name}</Link> 
            </li>
          ))}
        </ul>
      </div>

    );
};

export default LeftSideBar;