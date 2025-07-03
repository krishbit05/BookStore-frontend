import React from 'react'
import Login from '../components/Login'
import { useState } from 'react'
import { useForm } from "react-hook-form";
import {data, useNavigate}  from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        const userInfo = {
            fullname:data.fullname,
            email: data.email,
            password:data.password,
        }
        try {
            const res = await axios.post("http://localhost:4001/signup", userInfo);
        
            console.log(res.data); // Log full response
        
            if (res.data && res.data.message) {
              toast.success("Signup Success");
              navigate('/');
            }
          } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
              console.error(err);
              toast.error("Error: " + err.response.data.message);
            } else {
              console.error("Unexpected error:", err);
              alert("Something went wrong");
            }
          } 
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div
                className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
                <div className="bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-lg w-[90%] max-w-md shadow-lg transition-all duration-300">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Sign up</h3>
                        <a
                            href="/"
                            className="absolute top-4 right-4 text-4xl text-black dark:text-white transition duration-200 font-bold"
                        >
                            &times;
                        </a>

                    </div>
                    <div className="flex flex-col gap-6">
                        <div>
                            <label>Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="mt-1 w-full border border-gray-400 dark:border-gray-600 rounded-md p-2 bg-transparent"
                                {...register("fullname", { required: true })}
                            />
                            {errors.fullname && <span className="text-sm text-red-500">*This field is required</span>}
                        </div>
                        <div>
                            <label>Email</label>
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="mt-1 w-full border border-gray-400 dark:border-gray-600 rounded-md p-2 bg-transparent"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-sm text-red-500">*This field is required</span>}
                        </div>
                        <div>
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="mt-1 w-full border border-gray-400 dark:border-gray-600 rounded-md p-2 bg-transparent"
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className="text-sm text-red-500">*This field is required</span>}
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-6">
                        <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition">
                            Sign up
                        </button>
                        <div className="text-sm">
                            <span>Have account? </span>
                            <a href='/' className="underline text-blue-500">
                                login
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Signup