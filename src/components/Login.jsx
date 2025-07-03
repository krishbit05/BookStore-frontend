import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import {data, Navigate, useNavigate} from "react-router-dom"
import axios from "axios";
import { toast } from "react-hot-toast";

function Login({ isOpen, onClose }) {
    const navigate = useNavigate();
    const modalRef = useRef();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        }
    
        try {
            const res = await axios.post("http://localhost:4001/login", userInfo, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
    
            console.log("FULL RESPONSE:", res.data);
    
            if (res.data && res.data.message && res.data.user) {
                toast.success("Login successful");
                localStorage.setItem("Users", JSON.stringify(res.data.user));
                navigate('/');
                setTimeout(()=>{
                    window.location.reload();
                },2000);
            } else {
                alert("Unexpected response format");
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

    // Disable scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    // Close modal on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div
                className="fixed inset-0 bg-black/30 dark:bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
                aria-modal="true"
                role="dialog"
            >
                <div
                    ref={modalRef}
                    className="bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-lg w-[90%] max-w-md shadow-lg transition-all duration-300"
                >
                    <div>
                        <h3 className="text-xl font-semibold mb-8">Login</h3>
                        <a
                            href="/"
                            className="absolute top-4 right-4 text-4xl text-black dark:text-white transition duration-200 font-bold"
                        >
                            &times;
                        </a>
                    </div>
                    <div className="flex flex-col gap-6">
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
                            Sign In
                        </button>
                        <div className="text-sm">
                            <span>Not registered? </span>
                            <a href="/signup" className="underline text-blue-500">
                                Signup
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-10 border-2 border-black/20 dark:border-white/30 py-3 gap-4 cursor-pointer rounded-full hover:bg-black/20 transition-all 8.0s ease-in-out ">
                        <img className="w-6 h-6" src="public/google.png" alt="google" />
                        <div className="font-semibold">
                            Sign in with Google
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-4 border-2 border-black/20 dark:border-white/30 py-3 gap-4 cursor-pointer rounded-full hover:bg-black/20 transition-all 8.0s ease-in-out">
                        <img className="w-6 h-6" src="public/facebook.png" alt="google" />
                        <div className="font-semibold">
                            Sign in with facebook
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Login;
