import React from 'react';

const Donate = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto text-center">
        <h1 className="font-serif text-4xl font-bold mb-4">Support LU Chronicles</h1>
        <p className="text-lg text-gray-700 mb-8">
          Scan the QR code below to make your contribution
        </p>
        <img 
          src="/QR.jpeg" 
          alt="Donation QR Code" 
          className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Donate;
