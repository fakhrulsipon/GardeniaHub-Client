import { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const [openModal, setOpenModal] = useState('');

  const handleOpen = (type, e) => {
    if (e) e.preventDefault();
    setOpenModal(type);
  };
  const handleClose = () => setOpenModal('');

  const modalContent = {
    privacy: `We respect your privacy. All personal data is securely stored and never shared with third parties without your consent.`,
    terms: `By using GardeniaHub, you agree to follow our community guidelines. Misuse of the platform can lead to account restrictions.`,
    cookies: `We use cookies to improve your experience. These cookies help us track site usage and customize content accordingly.`,
  };

  return (
    <>
      <footer className="bg-green-100 dark:bg-gray-900 text-green-900 dark:text-gray-200 py-8 px-4 mt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Contact Info</h3>
            <p>Email: gardeniahub@gmail.com</p>
            <p>Phone: +880 1234 567890</p>
            <p>Location: Dhaka, Bangladesh</p>
          </div>

          {/* Terms & Policies */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Terms & Policies</h3>
            <p>
              <button
                type="button"
                onClick={(e) => handleOpen('privacy', e)}
                className="hover:underline"
              >
                Privacy Policy
              </button>
            </p>
            <p>
              <button
                type="button"
                onClick={(e) => handleOpen('terms', e)}
                className="hover:underline"
              >
                Terms of Service
              </button>
            </p>
            <p>
              <button
                type="button"
                onClick={(e) => handleOpen('cookies', e)}
                className="hover:underline"
              >
                Cookie Policy
              </button>
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-4 text-2xl mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-700 dark:hover:text-green-300"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-700 dark:hover:text-green-300"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-700 dark:hover:text-green-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-sm mt-6 text-green-700 dark:text-gray-400">
          &copy; {new Date().getFullYear()} GardeniaHub. All rights reserved.
        </div>
      </footer>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0  bg-opacity-40 dark:bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-6 rounded-md max-w-lg shadow-lg relative">
            <h2 className="text-xl font-bold mb-4 capitalize">
              {openModal.charAt(0).toUpperCase() + openModal.slice(1)}
            </h2>
            <p>{modalContent[openModal]}</p>
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 hover:text-red-500 text-lg"
              aria-label="Close modal"
            >
              ✕
            </button>
            <div className="text-right mt-4">
              <button
                onClick={handleClose}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;