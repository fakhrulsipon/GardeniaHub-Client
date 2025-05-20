
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-100 text-green-900 py-8 px-4 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Contact Info</h3>
          <p>Email: gardeniahub@gmail.com</p>
          <p>Phone: +880 1234 567890</p>
          <p>Location: Dhaka, Bangladesh</p>
        </div>

        {/* Terms */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Terms & Policies</h3>
          <p><a href="" className="hover:underline">Privacy Policy</a></p>
          <p><a href="" className="hover:underline">Terms of Service</a></p>
          <p><a href="" className="hover:underline">Cookie Policy</a></p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 text-2xl mt-2">
            <a href="" className="hover:text-green-700"><FaFacebook /></a>
            <a href="" className="hover:text-green-700"><FaTwitter /></a>
            <a href="" className="hover:text-green-700"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-6 text-green-700">
        &copy; {new Date().getFullYear()} GardeniaHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
