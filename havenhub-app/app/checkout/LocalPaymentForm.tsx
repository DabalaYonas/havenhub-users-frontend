"use client";
import { useRouter } from 'next/navigation'
import React from 'react'

const LocalPaymentForm = () => {
    const router = useRouter();
  return <div className='py-6'>
    <div>
    <p className="text-xl font-medium">Telebirr Payment Confirm</p>
      <div className="grid gap-6 my-6 md:grid-cols-2">
          
<div className="max-w-sm">
    <label htmlFor="phone-input" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number:</label>
    <div className="flex items-center mt-2">
        <button id="dropdown-phone-button" 
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm 
            font-medium text-center text-gray-900 bg-gray-100 border 
            border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 
            focus:outline-none focus:ring-gray-100 dark:bg-gray-700 
            dark:hover:bg-gray-600 dark:focus:ring-gray-700 
            dark:text-white dark:border-gray-600" type="button">
        +251    
        </button>

        <div className="relative w-full">
            <input type="text" id="phone-input" 
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-0 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="910-227-230" required />
        </div>
    </div>
        
</div>

          <div>
              <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
              <input type="number" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1200" required />
          </div>
      </div>
      <button  onClick={() => {router.push("/agreement")}} className="text-white company-bg-color hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Confirm Payment</button>
  </div>
  </div>
  
}

export default LocalPaymentForm