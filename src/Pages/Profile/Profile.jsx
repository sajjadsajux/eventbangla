import React, { use, useState } from "react";
import { showCustomSuccessToast } from "../../Utils/SuccessToast";
import PasswordErrorToast from "../../Utils/PasswordErrorToast";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import DynamicTittle from "../../Utils/DynamicTittle";
import { TfiEmail } from "react-icons/tfi";
import { AuthContext } from "../../Provider/AuthProvider";
const auth = getAuth(app);

const Profile = () => {
  DynamicTittle("Profile");
  // const { setLoading } = use(AuthContext);

  const [userInfo, setUserInfo] = useState({
    name: auth.currentUser?.displayName,
    email: auth.currentUser?.email,
    photoURL: auth.currentUser?.photoURL,
  });
  // console.log(auth.currentUser);

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
        PasswordErrorToast(`Kindly update your profile with the latest and valid information ${error.message}`);
      });
  };

  return (
    <div className="bg-[#f8f7fc] lg:py-2 py-1 px-2  shadow-md">
      <div className="max-w-xl  mx-auto mt-10 bg-white p-6 rounded-xl  space-y-6 my-10  transform hover:scale-105 transition duration-300 shadow-md ">
        <div className="text-center space-y-2">
          <img src={userInfo.photoURL} alt="User" className="w-60 h-60 mx-auto rounded-2xl object-cover transform hover:scale-105 transition duration-300" />
          <h2 className="text-xl font-bold">{userInfo.name}</h2>
          <p className="flex justify-center items-center gap-2">
            <TfiEmail size={20} />
            {userInfo.email}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 md:px-16">
          <div>
            <h2 className="text-center font-bold text-primary md:text-xl">Update Your Profile</h2>
            <label className="block font-semibold">Name:</label>
            <input type="text" name="name" placeholder="Type Your Desired Name" className="w-full p-1 border rounded" required />
          </div>
          <div>
            <label className="block font-semibold">Photo URL:</label>
            <input type="url" name="photoURL" placeholder="Enter Valid Image URL " className="w-full p-1 border rounded" required />
          </div>
          <button type="submit" className="bg-primary text-white w-full  py-2 rounded hover:bg-green-500 transition">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
