import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto px-4">
     
      <main>
        <section className="py-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900">Welcome to Our Store</h2>
          <p className="text-gray-600 mt-4">We offer the best products at the best prices.</p>
        </section>
        <section className="py-12">
          {/* Featured products go here */}
        </section>
      </main>
      <footer className="py-6 text-center text-gray-600">
        © {new Date().getFullYear()} Your Brand
      </footer>
    </div>
  );
};

export default Home;
