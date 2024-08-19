import React, { useContext } from 'react';
import { myContext } from '../hooks/MyContextProvider';

const AccountSettings = () => {
  let {auth} = useContext(myContext)
  console.log("----->",`${import.meta.env.VITE_BACKEND_URL}`);
  console.log("---==->", String(import.meta.env.VITE_BACKEND_URL));

  return (
    <div className="flex flex-col bg-gray-100 p-4">
      {/* Account Settings Header */}
      <div className="bg-white rounded-lg shadow-lg w-full p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Account Settings</h2>
        
        {/* Profile Info */}
        <div className="flex items-center space-x-4 mb-6">
        <img src="https://xsgames.co/randomusers/avatar.php?g=male"
            alt="User"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <input
              type="text"
              value={auth.username}
              className=" w-full bg-gray-100 border border-gray-300 rounded-lg text-black px-3 py-2 mb-2"
            />
            <input
              type="email"
              value={auth.email}
              className=" w-full bg-gray-100 border border-gray-300 rounded-lg px-3 py-2"
              readOnly
            />
          </div>
        </div>

        {/* Subscriptions Section */}
        <h1 className='text-3xl font-bold py-6'>Subscriptions</h1>
        <div className="bg-purple-100 text-purple-700 p-4 rounded-lg flex items-center justify-between">
          <span>Oops! You don’t have any active plans. <span className="font-semibold">Upgrade now!</span></span>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-lg">
            Upgrade
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;