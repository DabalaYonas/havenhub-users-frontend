import React from 'react'
import { Rate } from './Rate'
import img1 from "../../public/images/bonsa.jpg";
import img2 from "../../public/images/eyoba.jpg";
import Image from 'next/image';

const Review = () => {
  return <section className="relative">
  <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
      <div className="w-full">
              <div className="p-8 bg-amber-50 rounded-3xl flex items-center justify-center flex-col">
                  <h2 className="font-manrope font-bold text-5xl text-amber-400 mb-6">
                      4.3</h2>
                  <div className="flex items-center justify-center gap-2 sm:gap-6 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44"
                          fill="none">
                          <g clip-path="url(#clip0_13624_2608)">
                              <path
                                  d="M21.1033 2.9166C21.4701 2.17335 22.5299 2.17335 22.8967 2.9166L28.233 13.729C28.3786 14.0241 28.6602 14.2287 28.9859 14.276L40.9181 16.0099C41.7383 16.1291 42.0658 17.137 41.4723 17.7156L32.8381 26.1318C32.6024 26.3616 32.4949 26.6926 32.5505 27.017L34.5888 38.9009C34.7289 39.7178 33.8714 40.3408 33.1378 39.9551L22.4653 34.3443C22.174 34.1911 21.826 34.1911 21.5347 34.3443L10.8622 39.9551C10.1286 40.3408 9.27114 39.7178 9.41125 38.9009L11.4495 27.017C11.5051 26.6926 11.3976 26.3616 11.1619 26.1318L2.52771 17.7156C1.93419 17.137 2.2617 16.1291 3.08192 16.0099L15.0141 14.276C15.3398 14.2287 15.6214 14.0241 15.767 13.729L21.1033 2.9166Z"
                                  fill="#FBBF24" />
                          </g>
                          <defs>
                              <clipPath id="clip0_13624_2608">
                                  <rect width="44" height="44" fill="white" />
                              </clipPath>
                          </defs>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44"
                          fill="none">
                          <g clip-path="url(#clip0_13624_2608)">
                              <path
                                  d="M21.1033 2.9166C21.4701 2.17335 22.5299 2.17335 22.8967 2.9166L28.233 13.729C28.3786 14.0241 28.6602 14.2287 28.9859 14.276L40.9181 16.0099C41.7383 16.1291 42.0658 17.137 41.4723 17.7156L32.8381 26.1318C32.6024 26.3616 32.4949 26.6926 32.5505 27.017L34.5888 38.9009C34.7289 39.7178 33.8714 40.3408 33.1378 39.9551L22.4653 34.3443C22.174 34.1911 21.826 34.1911 21.5347 34.3443L10.8622 39.9551C10.1286 40.3408 9.27114 39.7178 9.41125 38.9009L11.4495 27.017C11.5051 26.6926 11.3976 26.3616 11.1619 26.1318L2.52771 17.7156C1.93419 17.137 2.2617 16.1291 3.08192 16.0099L15.0141 14.276C15.3398 14.2287 15.6214 14.0241 15.767 13.729L21.1033 2.9166Z"
                                  fill="#FBBF24" />
                          </g>
                          <defs>
                              <clipPath id="clip0_13624_2608">
                                  <rect width="44" height="44" fill="white" />
                              </clipPath>
                          </defs>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44"
                          fill="none">
                          <g clip-path="url(#clip0_13624_2608)">
                              <path
                                  d="M21.1033 2.9166C21.4701 2.17335 22.5299 2.17335 22.8967 2.9166L28.233 13.729C28.3786 14.0241 28.6602 14.2287 28.9859 14.276L40.9181 16.0099C41.7383 16.1291 42.0658 17.137 41.4723 17.7156L32.8381 26.1318C32.6024 26.3616 32.4949 26.6926 32.5505 27.017L34.5888 38.9009C34.7289 39.7178 33.8714 40.3408 33.1378 39.9551L22.4653 34.3443C22.174 34.1911 21.826 34.1911 21.5347 34.3443L10.8622 39.9551C10.1286 40.3408 9.27114 39.7178 9.41125 38.9009L11.4495 27.017C11.5051 26.6926 11.3976 26.3616 11.1619 26.1318L2.52771 17.7156C1.93419 17.137 2.2617 16.1291 3.08192 16.0099L15.0141 14.276C15.3398 14.2287 15.6214 14.0241 15.767 13.729L21.1033 2.9166Z"
                                  fill="#FBBF24" />
                          </g>
                          <defs>
                              <clipPath id="clip0_13624_2608">
                                  <rect width="44" height="44" fill="white" />
                              </clipPath>
                          </defs>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44"
                          fill="none">
                          <g clip-path="url(#clip0_13624_2608)">
                              <path
                                  d="M21.1033 2.9166C21.4701 2.17335 22.5299 2.17335 22.8967 2.9166L28.233 13.729C28.3786 14.0241 28.6602 14.2287 28.9859 14.276L40.9181 16.0099C41.7383 16.1291 42.0658 17.137 41.4723 17.7156L32.8381 26.1318C32.6024 26.3616 32.4949 26.6926 32.5505 27.017L34.5888 38.9009C34.7289 39.7178 33.8714 40.3408 33.1378 39.9551L22.4653 34.3443C22.174 34.1911 21.826 34.1911 21.5347 34.3443L10.8622 39.9551C10.1286 40.3408 9.27114 39.7178 9.41125 38.9009L11.4495 27.017C11.5051 26.6926 11.3976 26.3616 11.1619 26.1318L2.52771 17.7156C1.93419 17.137 2.2617 16.1291 3.08192 16.0099L15.0141 14.276C15.3398 14.2287 15.6214 14.0241 15.767 13.729L21.1033 2.9166Z"
                                  fill="#FBBF24" />
                          </g>
                          <defs>
                              <clipPath id="clip0_13624_2608">
                                  <rect width="44" height="44" fill="white" />
                              </clipPath>
                          </defs>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44"
                          fill="none">
                          <g clip-path="url(#clip0_13624_2608)">
                              <path
                                  d="M21.1033 2.9166C21.4701 2.17335 22.5299 2.17335 22.8967 2.9166L28.233 13.729C28.3786 14.0241 28.6602 14.2287 28.9859 14.276L40.9181 16.0099C41.7383 16.1291 42.0658 17.137 41.4723 17.7156L32.8381 26.1318C32.6024 26.3616 32.4949 26.6926 32.5505 27.017L34.5888 38.9009C34.7289 39.7178 33.8714 40.3408 33.1378 39.9551L22.4653 34.3443C22.174 34.1911 21.826 34.1911 21.5347 34.3443L10.8622 39.9551C10.1286 40.3408 9.27114 39.7178 9.41125 38.9009L11.4495 27.017C11.5051 26.6926 11.3976 26.3616 11.1619 26.1318L2.52771 17.7156C1.93419 17.137 2.2617 16.1291 3.08192 16.0099L15.0141 14.276C15.3398 14.2287 15.6214 14.0241 15.767 13.729L21.1033 2.9166Z"
                                  fill="#FBBF24" />
                          </g>
                          <defs>
                              <clipPath id="clip0_13624_2608">
                                  <rect width="44" height="44" fill="white" />
                              </clipPath>
                          </defs>
                      </svg>
                  </div>
                  <p className="font-medium text-xl leading-8 text-gray-900 text-center">46 Ratings</p>
              </div>
          <div className="pt-11 pb-8 border-b border-gray-100 max-xl:max-w-2xl max-xl:mx-auto">
              <div className="flex items-center gap-3 mb-4">
                  
              <Rate />
                 
              </div>
              <h3 className="font-manrope font-semibold text-xl sm:text-2xl leading-9 text-black mb-6">Outstanding Experience!!!
              </h3>
              <div className="flex sm:items-center flex-col min-[400px]:flex-row justify-between gap-5 mb-4">
                  <div className="flex items-center gap-3">
                      <Image src={img1} alt="John image" className="w-8 h-8 object-cover rounded-full" width={32} height={32}/>
                      <h6 className="font-semibold text-lg leading-8 text-indigo-600 ">Robera Yonas</h6>
                  </div>
                  <p className="font-normal text-lg leading-8 text-gray-400">Nov 01, 2024</p>
              </div>
              <p className="font-normal text-lg leading-8 text-gray-400 max-xl:text-justify">One of the standout features of Pagedone is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy to locate and utilize various design elements. This is particularly beneficial for designers looking to streamline their workflow.</p>
          </div>
          <div className="pt-8 max-xl:max-w-2xl max-xl:mx-auto">
              <div className="flex items-center gap-3 mb-4">
                  <Rate />
                 
              </div>
              <h3 className="font-manrope font-semibold text-xl sm:text-2xl leading-9 text-black mb-6">Very Good Place and Hosts!
              </h3>
              <div className="flex sm:items-center flex-col min-[400px]:flex-row justify-between gap-5 mb-4">
                  <div className="flex items-center gap-3">
                      <Image src={img2} alt="Robert image" className="w-8 h-8 object-cover rounded-full" width={32} height={32} />
                      <h6 className="font-semibold text-lg leading-8 text-indigo-600">Bisirat Mulgeta</h6>
                  </div>
                  <p className="font-normal text-lg leading-8 text-gray-400">Dec 06, 2024</p>
              </div>
              <p className="font-normal text-lg leading-8 text-gray-400 max-xl:text-justify">Pagedone doesn't disappoint when it comes to the variety and richness of its design components. From pre-built templates to customizable elements, the system caters to both beginners and seasoned designers. The extensive library ensures a diverse range of options to bring creative visions to life.</p>
          </div>
      </div>
  </div>
</section>
}

export default Review