import React from 'react';

const login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className="flex flex-col md:flex-row shadow-md rounded-md p-8 "
        style={{ backgroundColor: '#e9f6fd', width: '1080px' }}
      >
        <div className="md:w-1/2 p-4">Gambar Disini</div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-semibold mb-4 text-center">Masuk</h2>
          <h3 className="text-sm font-semibold mb-4">
            Silahkan masuk menggunakan email dan kata sandi yang terdaftar
          </h3>
          <form>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-1 p-2 w-full border rounded-md"
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
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default login;
