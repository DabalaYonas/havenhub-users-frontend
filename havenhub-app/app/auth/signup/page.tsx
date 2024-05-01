'use client';
import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import logo from "../../../public/images/newLogo2.png";

interface User {
    first_name: string,
    last_name: string,
    phone_number: string,
    age: number,
    gender: string,
    email: string,
    password: string
}

// export async function register(user: User) {
//     return axios.post('http://127.0.0.1:8000/user/api/register/', 
//     user).then(response => response.data);
// }


const SignupPage = () => {
    const router = useRouter();
    const [inputs, setInputs] = useState({});
    
    function handlerChange(e) {
        var name = e.target.name;
        var value = e.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(inputs);
        const user = {
            first_name: inputs.fullname.split(" ")[0],
            last_name: inputs.fullname.split(" ")[1],
            email: inputs.email,
            phone_number: "09090909",
            age: inputs.age,
            gender: "Male",
            password: inputs.password,
        }
        // const data = register(user);
        router.push("/auth/login");
    }

  return (<section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <Image className="mr-2" src={logo} alt="logo" width={50} height={50} />
          HavenHub    
      </a>
      
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign up to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div className='flex gap-2'>
                  <div className='w-full'>
                      <label htmlFor="fullname" className="inline-block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                      <input type="text" name="fullname" id="fullname" onChange={handlerChange} value={inputs.fullname} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Dabala Yonas" required={true} />
                  </div>

                  <div className='w-full'>
                      <label htmlFor="gender" className="inline-block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                      <input type="text" name="gender" id="gender" onChange={handlerChange} value={inputs.gender} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="24" required={true} />
                  </div>
                </div>

                <div className='flex gap-2'>
                
                <div className='w-full'>
                    <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your age</label>
                    <input type="number" name="age" id="age" onChange={handlerChange} value={inputs.age} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required={true} />
                </div>

                  <div className='w-full'>
                      <label htmlFor="phone" className="inline-block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                      <input type="phone" name="phone" id="phone"  onChange={handlerChange} value={inputs.age} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="24" required={true} />
                  </div>
                </div>
                
                <div className='flex gap-2'>
                
                <div className='w-full'>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="email" name="email" id="email" onChange={handlerChange} value={inputs.email} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required={true} />
                </div>

                <div className='w-full'>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" onChange={handlerChange} value={inputs.password} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                  </div>
                </div>

                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign up</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      I have an account. <Link href="login/" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
  )
}

export default SignupPage