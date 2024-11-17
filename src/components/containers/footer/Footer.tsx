const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About SpaceX</h3>
            <p className="text-gray-400">
              SpaceX designs, develops, and launches advanced rockets and
              spacecraft. The company was founded in 2002 to revolutionize space
              technology, with the ultimate goal of enabling people to live on
              other planets.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a
                  href="https://www.spacex.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Official Website
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://en.wikipedia.org/wiki/SpaceX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Wikipedia
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.spacex.com/vehicles/dragon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Dragon Spacecraft
                </a>
              </li>
              <li>
                <a
                  href="https://www.spacex.com/launches"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Launch Schedule
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400 mb-2">
              <strong>Headquarters:</strong> Hawthorne, California, USA
            </p>
            <p className="text-gray-400 mb-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@spacex.com"
                className="text-blue-400 hover:underline"
              >
                info@spacex.com
              </a>
            </p>
            <p className="text-gray-400">
              <strong>Phone:</strong> +1 310-363-6000
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} SpaceX. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://twitter.com/spacex"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Twitter
            </a>
            <a
              href="https://www.facebook.com/SpaceX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/spacex"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
