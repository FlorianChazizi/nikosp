"use client";

import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
    return (
        <section 
            id="contact" 
            className="bg-gray-800 text-white py-16 px-6 flex justify-center items-center min-h-screen"
        >
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-[#A4D037] font-accent">Επικοινωνία</h2>
                <p className="text-lg mt-2 text-gray-300">
                    Είμαστε εδώ για εσάς! Επικοινωνήστε μαζί μας.
                </p>

                {/* Contact Info */}
                <div className="mt-8 flex flex-col items-center space-y-6">
                    {/* Email */}
                    <div className="flex items-center space-x-4">
                        <FaEnvelope className="text-[#A4D037] text-2xl" />
                        <a href="mailto:Nikospriftis504" className="text-lg hover:text-[#8BB52C]">
                            Nikospriftis504
                        </a>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center space-x-4">
                        <FaPhone className="text-[#A4D037] text-2xl" />
                        <a href="tel:+306948152634" className="text-lg hover:text-[#8BB52C]">
                            +30 6948152634
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
