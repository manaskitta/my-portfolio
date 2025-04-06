import { Link } from "react-scroll";

const Navbar = () => {
  const navItems = [
    { label: "Home", to: "hero" },
    { label: "Coding Profiles", to: "coding-profiles" },
    { label: "Education", to: "education" },
    { label: "Projects", to: "projects" },
    { label: "POS", to: "pos" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-50 backdrop-blur-md text-white px-6 py-4 shadow-lg border-b border-gray-600">
      <div className="max-w-7xl mx-auto flex justify-end items-center">
        <div className="flex space-x-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              className="font-medium px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer 
                text-white 
                hover:bg-gray-200 hover:text-black 
                active:bg-white active:text-black 
                [&.active]:bg-white [&.active]:text-black"
              activeClass="active"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
