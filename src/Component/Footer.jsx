import React from 'react'

function Footer() {
    return (
        <footer id='footer' className=" bg-gradient-to-r
      from-pink-300
      via-purple-300
      to-indigo-400 text-dark p-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full sm:w-1/3 mb-4">
                        <h3 className="text-2xl font-bold mb-2">Contact Us</h3>
                        <p className="mb-1">Narhe Pune,</p>
                        <p className="mb-1">Banglore-Mumbai Heighway</p>
                        <p className="mb-1">Phone: 8605149238</p>
                        <p>Email: ajitbodkhe2017@gmail.com</p>
                    </div>
                    <div className="w-full sm:w-1/3 mb-4">
                        <h3 className="text-2xl font-bold mb-2">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-gray-300">
                                <i className="fab fa-facebook fa-2x"></i>
                            </a>
                            <a href="#" className="hover:text-gray-300">
                                <i className="fab fa-whatsapp fa-2x"></i>
                            </a>
                            <a href="#" className="hover:text-gray-300">
                                <i className="fab fa-instagram fa-2x"></i>
                            </a>
                            <a href="#" className="hover:text-gray-300">
                                <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/3 mb-4">
                        <h3 className="text-2xl font-bold mb-2">Quick Links</h3>
                        <ul>
                            <li className="mb-1"><a href="#" className="hover:text-gray-300">Home</a></li>
                            <li className="mb-1"><a href="#about" className="hover:text-gray-300">About Us</a></li>
                            {/* <li className="mb-1"><a href="#" className="hover:text-gray-300">Services</a></li> */}
                            <li className="mb-1"><a href="#footer" className="hover:text-gray-300">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-6">
                    <p className="text-sm">&copy; 2024 Gold Website. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;