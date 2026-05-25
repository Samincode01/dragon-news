import React from 'react';
import logo from "@/assets/logo.png"
import Image from 'next/image';
const Header = () => {
    return (
        <div>
            <Image src={logo} width={300} height={200} alt='logo'></Image>
            <p>Journalism Without Fear or Favour</p>
            <p>Date</p>
        </div>
    );
};

export default Header;