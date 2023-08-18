import React from 'react';
import Image from 'next/image';

const login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className="flex flex-col md:flex-row   rounded-md p-8 "
        style={{ backgroundColor: '#e9f6fd', width: '1080px' }}
      >
        <div className="p-4 relative flex justify-center md:w-1/2 ">
          <div className="absolute left-5">
            <Image
              src={'./assets/ic-logo.svg'}
              alt="logo"
              width={100}
              height={100}
            />
          </div>
          <Image
            src="./assets/ic-login.svg"
            alt="logo"
            width={253}
            height={245}
          />
        </div>
        <div className="md:w-1/2 md:p-7 p-4">
          <h2 className="text-2xl font-bold mb-4 text-center tracking-wide">
            Masuk
          </h2>
          <h3 className="text-[13px] font-semibold mb-4 text-center">
            Silahkan masuk menggunakan email dan kata sandi yang terdaftar
          </h3>
          <form className="">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Password"
              />
            </div>
            <div className="flex justify-end pb-2 text-blue-900">
              <a href="">
                <p>Lupa Kata Sandi ?</p>
              </a>
            </div>
            <button
              type="submit"
              style={{ backgroundColor: '#0B568D' }}
              className="text-white p-2 rounded-md hover:bg-blue-600 w-full"
            >
              Masuk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default login;
