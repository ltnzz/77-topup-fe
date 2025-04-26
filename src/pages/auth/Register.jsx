import React from "react";

export const Register = () => {
  return (
    <div className="grid place-items-center h-screen">
      <div className="flex flex-col gap-2 bg-gray-600 p-5 rounded-xl w-[300px]">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <input
          type="text"
          placeholder="Username"
          className="input input-bordered w-full "
        />
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full "
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full "
        />
        <p className="text-sm">Have Account? Login</p>
        <button className="btn btn-primary w-full ">Register</button>
      </div>
    </div>
  );
};
