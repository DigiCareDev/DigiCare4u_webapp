import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-8 px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-1">
        
        {/* About Us Section */}
        <div>
          <h3 className="text-lg font-bold border-b-2 border-white pb-2">ABOUT US</h3>
          <p className="mt-2"><strong>Full Control Over Your Personal Assets</strong></p>
          <p className="text-sm pt-2">
          DigiCare4u empowers you to take <strong>complete control of your personal assets</strong> with ease and confidence. Our advanced tracking technology ensures real-time monitoring, allowing you to oversee and manage everything effortlessly. Whether it’s loved ones, employees, or valuable possessions, stay informed and make smart decisions anytime, anywhere.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-lg font-bold border-b-2 border-white pb-2">LINKS</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="/about" className="hover:text-gray-300">› About</a></li>
            <li><a href="/pricing" className="hover:text-gray-300">› Pricing</a></li>
            <li><a href="/features" className="hover:text-gray-300">› Features</a></li>
            <li><a href="/testimonials" className="hover:text-gray-300">› Testimonials</a></li>
            <li><a href="/blog" className="hover:text-gray-300">› Blog</a></li>
            <li><a href="/contact" className="hover:text-gray-300">› Contact</a></li>
            <li><a href="/privacypolicy" className="hover:text-gray-300">› Privacy Policy</a></li>
          </ul>
        </div>

        {/* Our Services Section */}
        <div>
          <h3 className="text-lg font-bold border-b-2 border-white pb-2">OUR SERVICES</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>› Live Tracking</li>
            <li>› Task Schudale</li>
            <li>› Insights/Report</li>
            <li>› Alert</li>
            <li>› Family sharing</li>

          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-bold border-b-2 border-white pb-2">CONTACT</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <a href="mailto:help@digicare4u.com" className="flex justify-between items-center"><Mail className="w-5 h-5" /> <span className="pl-2">help@digicare4u.com</span></a>
            </li>
            <li className="flex items-center space-x-2">
            <a href="tel:1800-8894-207" className="flex justify-between items-center"> <Phone className="w-5 h-5" /> <span className="pl-2">1800-8894-207 (Toll Free)</span></a>
            </li>
            <li className="flex items-center space-x-2">
            <a href="tel:9305111069" className="flex justify-between items-center"> <Phone className="w-5 h-5" /> <span className="pl-2">+91-9305111069-73</span></a>
            </li>
            <li className="flex items-center space-x-2">
            <a href="tel:7318000751" className="flex justify-between items-center">   <Phone className="w-5 h-5" /> <span className="pl-2">+91-7318000751-55</span></a>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin className="w-7 h-7" /> 
              <span>07, Khasra No. 426SA, Laulai, Mallhaur, Lucknow - 226028</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex justify-between items-center text-sm mt-6 border-t border-white pt-3">
       <div className="mt-4">
       © {new Date().getFullYear()} DigiCare4u. All rights reserved.
       </div>

        <div className="flex mt-3 space-x-3">
            <a href="https://x.com/digicare4uPGT" className="text-white hover:text-gray-300"><Twitter /></a>
            <a href="https://www.facebook.com/profile.php?id=61565180807792" className="text-white hover:text-gray-300"><Facebook /></a>
            <a href="https://www.instagram.com/digicare4u.pgt/" className="text-white hover:text-gray-300"><Instagram /></a>
            <a href="https://www.linkedin.com/company/digicare4u/" className="text-white hover:text-gray-300"><Linkedin /></a>
          </div>
      </div>

    </footer>
  );
};

export default Footer;
