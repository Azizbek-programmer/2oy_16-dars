import { memo } from "react";
import logo from "../../assets/logo.svg";
import login from "../../assets/User.svg";

const Header = () => {
  return (
    <header className="bg-[#2B2B2B] text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-0">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <img src={logo} alt="" className="w-10 h-10" />
          <h1 className="text-xl font-bold tracking-wide">NFT Marketplace</h1>
        </div>
        <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <h3>Marketplace</h3>
          <h3>Rankings</h3>
          <h3>Connect Wallet</h3>
          <button className="flex items-center gap-2 bg-[#A259FF] px-4 py-2 rounded-lg">
            <img src={login} alt="" className="w-5 h-5" />
            <span>Sign Up</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default memo(Header);
