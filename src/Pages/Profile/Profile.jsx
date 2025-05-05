import React, { useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { showCustomSuccessToast } from "../../Utils/SuccessToast";
import PasswordErrorToast from "../../Utils/PasswordErrorToast";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../Firebase/firebase.config";
const auth = getAuth(app);

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    name: auth.currentUser?.displayName,
    email: auth.currentUser?.email,
    photoURL: auth.currentUser?.photoURL,
  });

  const handleSubmit = (e) => {
    // e.preventDefault();
    const form = e.target;
    const newName = form.name.value;
    const newPhoto = form.photoURL.value;

    updateProfile(auth.currentUser, {
      displayName: newName,
      photoURL: newPhoto,
    })
      .then(() => {
        setUserInfo({
          ...userInfo,
          name: newName,
          photoURL: newPhoto,
        });
        showCustomSuccessToast(`Your profile has been updated successfully.`);
      })
      .catch((error) => {
        PasswordErrorToast(`Kindly update your profile with the latest information ${error.message}`);
      });
  };

  return (
    <div>
      <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-md space-y-6">
        <div className="text-center space-y-2">
          <img src={userInfo.photoURL} alt="User" className="w-60 h-60 mx-auto rounded-full object-cover" />
          <h2 className="text-xl font-bold">{userInfo.name}</h2>
          <p className="text-gray-500">{userInfo.email}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold">Name</label>
            <input type="text" name="name" className="w-full p-2 border rounded" required />
          </div>
          <div>
            <label className="block font-semibold">Photo URL</label>
            <input type="text" name="photoURL" className="w-full p-2 border rounded" required />
          </div>
          <button type="submit" className="bg-primary text-white w-full py-2 rounded hover:bg-purple-700 transition">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
