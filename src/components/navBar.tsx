import HamNavBar from "./hamNav";
import logo from "./logo.svg";

function NavBarItems() {
  return (
    <div>
      <ul className="flex md:static text-[#3894a3] font-sans text-lg">
        <li>
          <a
            href="#"
            className="mx-4 hover:text-[#EEEEEE] duration-[30ms]"
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li>
          <a href="#" className="mx-4 hover:text-neutral-200 duration-[30ms]">
            About
          </a>
        </li>
        <li>
          <a href="#" className="mx-4 hover:text-neutral-200 duration-[30ms]">
            Login
          </a>
        </li>
        <li>
          <a href="#" className="mx-4 hover:text-neutral-200 duration-[30ms]">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

function NavBar() {
  return (
    <>
      <nav className="bg-[#303841] border-gray-200 shadow-lg px-2 sm:px-4 py-2.5 ">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img
              src={logo}
              alt="logo"
              className="text-yellow-300 wmr-3 h-9 sm:h-9"
            />
            <span className="text-[#3894a3] text-2xl font-light">NoName</span>
          </a>

          <div className="ml-auto items-center hidden md:block md:w-auto text-[#3894a3] text-2xl font-light">
            Play a Fun Game
          </div>

          <div className="hidden ml-auto w-full md:flex md:flex-row md:w-auto">
            <NavBarItems />
          </div>
          <HamNavBar />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
