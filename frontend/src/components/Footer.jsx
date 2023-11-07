import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-second text-white py-10">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4">Discover the Best Movies</h2>
        <p className="text-center mb-6">
          Explore a world of entertainment with our curated selection of movies.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-xl hover:text-secondary transition duration-300">
            Facebook
          </a>
          <a href="#" className="text-xl hover:text-secondary transition duration-300">
            Twitter
          </a>
          <a href="#" className="text-xl hover:text-secondary transition duration-300">
            Instagram
          </a>
        </div>
        <p className="mt-6">&copy; 2023 Your Movie Hub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
