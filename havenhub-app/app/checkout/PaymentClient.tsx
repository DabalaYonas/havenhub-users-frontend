'use client';
import React, { useState } from 'react'
import img from '../../public/images/house2.jpg';
import Image from 'next/image';
import PaymentMethod from './PaymentMethodForm';
import LocalPaymentForm from './LocalPaymentForm';

const PaymentClient = () => {
  const [activeTab, setActiveTab] = useState(0);

  return <div><div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
  <a href="#" className="text-2xl font-bold text-gray-800">sneekpeeks</a>
  <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
    <div className="relative">
      <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
        <li className="flex items-center space-x-3 text-left sm:space-x-4">
          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700" href="#"
            ><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg
          ></a>
          <span className="font-semibold text-gray-900">Shop</span>
        </li>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <li className="flex items-center space-x-3 text-left sm:space-x-4">
          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2" href="#">2</a>
          <span className="font-semibold text-gray-900">Shipping</span>
        </li>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <li className="flex items-center space-x-3 text-left sm:space-x-4">
          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white" href="#">3</a>
          <span className="font-semibold text-gray-500">Payment</span>
        </li>
      </ul>
    </div>
  </div>
</div>
<div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
  <div className="px-4 pt-8">
    <p className="text-xl font-medium">Your Booking</p>
    <p className="text-gray-400">Check your booked places. And fill your payment detail.</p>
    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
      <div className="flex flex-col rounded-lg bg-white sm:flex-row">
        <Image className="m-2 h-28 w-28 rounded-md border object-cover object-center" width={120} height={120} src={img} alt="" />
        <div className="flex w-full flex-col px-4 py-4 justify-around">
          <span className="font-semibold">Villa House Garment 1 Room</span>
          <span className="float-right text-gray-400">200 ETB x 4 nights</span>
          <p className="text-lg bot font-bold">Total 138.99 ETB</p>
        </div>
      </div>
    </div>

  </div>
  
  <div>
    
  <div className='mt-4'>  
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
          <li className="me-2">
              <p onClick={() => {setActiveTab(0)}} className={`${activeTab === 0 ? "text-blue-600 rounded-t-lg bg-gray-100" : "text-gray-500"} cursor-pointer inline-block p-4 active dark:bg-gray-800 dark:text-blue-500`} >Local Payment Method</p>
          </li>
          <li className="me-2">
              <p onClick={() => {setActiveTab(1)}}  className={`${activeTab === 1 ?"text-blue-600 rounded-t-lg bg-gray-100" : "text-gray-500"} cursor-pointer inline-block p-4 active dark:bg-gray-800 dark:text-blue-500`}>Foregn Payement Method</p>
          </li>
      </ul>
    </div>
    {activeTab == 0 && <LocalPaymentForm />}
    {activeTab == 1 && <PaymentMethod />}
</div>
</div>
</div>
}

export default PaymentClient