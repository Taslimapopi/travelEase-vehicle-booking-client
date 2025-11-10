import React, { use } from 'react';
import { AuthContext } from '../provider/context';
import { Link } from 'react-router';

const Profile = () => {
    const {user} = use(AuthContext)

    return (
         <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col items-center text-center">
        <img
          src={user?.photoURL || 'https://i.ibb.co/2kRZ1gB/default-avatar.png'}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-orange-400 shadow-md"
        />
        <h2 className="text-2xl font-bold mt-4">{user?.displayName || 'Anonymous User'}</h2>
        <p className="text-gray-600">{user?.email}</p>
        <Link
          to="/auth/updateProfile"
          className="mt-3 inline-block text-orange-600 hover:underline font-medium"
        >
          ✏️ Update Profile
        </Link>
      </div>

      <div className="mt-6 border-t pt-4 text-left space-y-3">
        <div>
          <span className="font-semibold text-gray-700">Member Since:</span>{' '}
          <span className="text-gray-800">October 2023</span>
        </div>
        <div>
          <span className="font-semibold text-gray-700">Phone:</span>{' '}
          <span className="text-gray-800">+880-1XXX-XXXXXX</span>
        </div>
        <div>
          <span className="font-semibold text-gray-700">Location:</span>{' '}
          <span className="text-gray-800">Chattogram, Bangladesh</span>
        </div>
        
      </div>
    </div>
    );
};

export default Profile;