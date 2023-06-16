import React from "react";
import { Link } from "react-scroll";

class Navbar extends React.Component {
  render() {
    return (
        <>
        <nav className="bg-white sticky top-0 z-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-end">
                    <div className="flex items-center">
                        <div className="hidden md:block">
                            <div className="mr-10 flex items-baseline space-x-1">
                                <button className="text-gray hover:text-cyan-600 rounded-md px-3 py-2 text-lg">
                                    <Link
                                        activeClass="text-cyan-600"
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}
                                    >
                                        Home
                                    </Link>
                                </button>
                                <button className="text-gray hover:text-cyan-600 rounded-md px-3 py-2 text-lg">
                                    <Link
                                        activeClass="text-cyan-600"
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={10}
                                        duration={500}
                                    >
                                        About
                                    </Link>
                                </button>
                                <button className="text-gray hover:text-cyan-600 rounded-md px-3 py-2 text-lg">
                                    <Link
                                        activeClass="text-cyan-600"
                                        to="projects"
                                        spy={true}
                                        smooth={true}
                                        offset={10}
                                        duration={500}
                                    >
                                        Projects
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        </>
    );
  }
}

export default Navbar;