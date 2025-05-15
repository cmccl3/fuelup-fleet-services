
import React from 'react';
import './index.css';
import ServiceCard from './components/ServiceCard';

const services = [
  { title: 'Oil Changes', description: 'Regular & synthetic oil changes at your fleet location.' },
  { title: 'Fluids Top-Off', description: 'Windshield washer, coolant, etc.' },
  { title: 'Tire Pressure Check', description: 'Optimize tire life & fuel efficiency.' },
  { title: 'Battery Health Check', description: 'Test & report battery performance.' },
  { title: 'Battery Replacement', description: 'Replace your battery to run like new.' },
  { title: 'Custom Requests', description: 'Let us know what you need!' }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <header className="w-full py-8 flex flex-col items-center">
        <img src={`${process.env.PUBLIC_URL}/fuelup-logo.png`} alt="FuelUp Logo" className="h-20 mb-4" />
        <h1 className="text-3xl font-bold text-blue-600">Fleet Services Delivered</h1>
        <p className="text-gray-600 mt-2">Simplify fleet maintenance with on-site add-ons.</p>
      </header>

      <main className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {services.map((service, idx) => (
          <ServiceCard key={idx} title={service.title} description={service.description} />
        ))}
      </main>

      <div className="mt-8">
        <a href="https://forms.gle/Zn8Dq861nY9k5XKh9" target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700">
            Request Service
          </button>
        </a>
      </div>

      <footer className="mt-10 text-gray-500 text-sm">
        © 2025 FuelUp | GAS. DELIVERED.
      </footer>
    </div>
  );
}

export default App;
