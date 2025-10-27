import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faLocationDot, faUser } from "@fortawesome/free-solid-svg-icons";

const ContactWithUs = () => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg h-full">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Get in Touch</h2>
            <p className="text-gray-600 mb-8"> We'd love to hear from you! Feel free to reach out through any of the following channels:</p>
            <div className="space-y-6">
                {/* User */}
                <div className="flex items-center gap-4">
                    <FontAwesomeIcon icon={faUser} className="w-6 h-6 text-[#094875]" />
                    <p className="text-gray-800 font-medium">Dimitris Klimatos</p>
                </div>
                {/* Location */}
                <div className="flex items-center gap-4">
                    <FontAwesomeIcon icon={faLocationDot} className="w-6 h-6 text-[#094875]" />
                    <a href="https://www.google.com/maps/search/Skala+Potamia,+Thassos,+Greece+64004" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-[#5D9DCD] transition-colors">Skala Potamia, Thassos, Greece 64004</a>
                </div>
                {/* Email */}
                <div className="flex items-center gap-4">
                    <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 text-[#094875]" />
                    <a href="mailto:moloshomesthasos@gmail.com" className="text-gray-800 hover:text-[#5D9DCD] transition-colors">moloshomesthasos@gmail.com</a>
                </div>
                {/* Phone */}
                <div className="flex items-center gap-4">
                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 text-[#094875]" />
                    <a href="tel:+306948603738" className="text-gray-800 hover:text-[#5D9DCD] transition-colors">+30 6948 603738</a>
                </div>
            </div>
            {/* Social Media */}
            <div className="mt-10 pt-6 border-t border-gray-200 inline-flex">
                <p className="font-semibold text-gray-800 mb-4">Follow us on Social Media:</p>
                <div className="inline-flex gap-4 ml-6">
                    <a 
                        href="https://www.facebook.com/klimatos" // Facebook URL
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#094875] hover:text-[#5D9DCD] transition-colors"
                        aria-label="Facebook"
                    >
                        <FontAwesomeIcon icon={faFacebook} className="w-8 h-8" />
                    </a>
                    <a 
                        href="https://www.instagram.com/molos_homes_thassos/" // Instagram URL
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#094875] hover:text-[#5D9DCD] transition-colors"
                        aria-label="Instagram"
                    >
                        <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
                    </a>
                </div>
            </div>
        </div>
    )
}
export default ContactWithUs;