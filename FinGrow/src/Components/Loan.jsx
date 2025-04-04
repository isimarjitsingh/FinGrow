import React from 'react'
import Crousal from '../Utils/Crousal'
import { NavLink } from 'react-router-dom'
import Chatbot from './ChatBot'

function Loan() {
  return (
    <div className="pb-10"> 
      <Crousal />
      <div className="grid grid-cols-1 my-5 md:grid-cols-2 gap-6 pt-10"> 
        <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">Rules to Borrow Money</h1>
          <ul className="list-inside text-lg text-gray-600 space-y-2">
            <li><span className="font-bold text-gray-500">Rule 1:</span> Borrow responsibly</li>
            <li><span className="font-bold text-gray-500">Rule 2:</span> Understand the interest rates</li>
            <li><span className="font-bold text-gray-500">Rule 3:</span> Have a repayment plan</li>
            <li><span className="font-bold text-gray-500">Rule 4:</span> Borrow only what you need</li>
            <li><span className="font-bold text-gray-500">Rule 5:</span> Read all terms carefully</li>
            <li><span className="font-bold text-gray-500">Rule 6:</span> Maintain a good credit score</li>
          </ul>
          <NavLink to="/loan/get-loan" className="mt-6 no-underline bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all">
            Get Loan
          </NavLink>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">Rules to Lend Money</h1>
          <ul className="list-inside text-lg text-gray-600 space-y-2">
            <li><span className="font-bold text-gray-500">Rule 1:</span> Verify borrower's credibility</li>
            <li><span className="font-bold text-gray-500">Rule 2:</span> Set clear terms and agreements</li>
            <li><span className="font-bold text-gray-500">Rule 3:</span> Keep proper records</li>
            <li><span className="font-bold text-gray-500">Rule 4:</span> Consider interest and risks</li>
            <li><span className="font-bold text-gray-500">Rule 5:</span> Have a legal contract</li>
            <li><span className="font-bold text-gray-500">Rule 6:</span> Be prepared for repayment delays</li>
          </ul>
          <NavLink to="/loan/provide-loan" className="mt-6 no-underline bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-all">
            Give Loan
          </NavLink>
        </div>
      </div>
      <Chatbot />
    </div>
  );
}

export default Loan;
