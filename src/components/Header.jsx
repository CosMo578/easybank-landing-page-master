import Logo from "/images/logo.svg";
import Close from "/images/icon-close.svg";
import Hamburger from "/images/icon-hamburger.svg";

export function Header({ isOpen, setIsOpen }) {
  return (
    <header className="sticky top-0 z-[99] flex w-full items-center justify-between bg-white px-6 py-6 md:px-14 lg:px-20 xl:px-36">
      <img src={Logo} alt="" />
      <nav
        className={`absolute left-1/2 top-[100px] z-10 flex w-[90%] -translate-x-1/2 rounded-lg bg-white p-8 lg:static lg:z-0 lg:inline-block lg:w-auto lg:-translate-x-0 lg:rounded-none lg:bg-none lg:p-0 ${
          isOpen ? "block" : "hidden"
        } lg:inline-block`}
      >
        <ul className="flex w-full flex-col items-center justify-center gap-4 text-center lg:inline-block lg:w-auto lg:text-left lg:[&_li]:inline-block lg:[&_li]:text-gray-400">
          {["Home", "About", "Contact", "Blog", "Careers"].map((item) => {
            return (
              <li
                key={item}
                className="pb-full relative block font-semibold transition-colors hover:cursor-pointer hover:text-black lg:mr-7"
              >
                {item}
              </li>
            );
          })}
        </ul>
      </nav>
      <button className="hidden text-white lg:inline-block">
        Request Invite
      </button>

      <span
        onClick={() => {
          setIsOpen((status) => !status);
        }}
        className="z-20 inline-block w-6 transition-all ease-in-out hover:cursor-pointer lg:hidden"
      >
        {isOpen === true ? (
          <img src={Close} alt="" />
        ) : (
          <img src={Hamburger} alt="" />
        )}
      </span>
    </header>
  );
}
