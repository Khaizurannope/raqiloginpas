"use client";

import LoginFrm from "../components/loginFrm";
import SignUpFrm from "../components/signUpFrm";
import { useState } from "react";

export default function AuthPg() {
    const [toggleFrm, setToggleFrm] = useState(false);

    return (
        <main className="w-full h-screen flex justify-center items-center bg-gray-100 dark:bg-[#0F172A] transition-colors duration-300">
            <div className="flex w-full max-w-5xl h-[80%] rounded-lg shadow-lg">
                {/* Gambar dan Teks */}
                <aside
                    className="relative w-1/2 h-full bg-cover bg-center rounded-l-lg"
                    style={{ backgroundImage: "url('../img/ytta.jpg')" }}
                >
                    {/* Overlay Gradasi */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#1D3557] to-[#2E4053] opacity-90 rounded-l-lg"></div>

                    {/* Konten Teks */}
                    <div className="relative w-full h-full flex justify-center items-center text-center px-4">
                        <h1 className="text-3xl font-bold text-white uppercase tracking-wide leading-relaxed">
                            Manajemen Kegiatan <br />
                            Sekolah
                        </h1>
                    </div>
                </aside>

                {/* Form Login/Register */}
                <aside className="w-1/2 flex flex-col justify-center items-center bg-gray-50 dark:bg-[#1A202C] px-12 py-16 rounded-r-lg shadow-lg">
                    {/* Navigasi Login/Register */}
                    <nav className="flex justify-center mb-8 space-x-4">
                        <a
                            onClick={() => setToggleFrm(false)}
                            className={`py-2 px-4 text-sm font-medium border border-[#2E4053] cursor-pointer rounded-lg ${
                                toggleFrm
                                    ? "bg-white text-[#1D3557] dark:bg-[#1A202C] dark:text-[#00ADB5]"
                                    : "bg-[#2E4053] text-white dark:bg-[#00ADB5] dark:text-white"
                            } transition-all duration-300`}
                        >
                            Login
                        </a>
                        <a
                            onClick={() => setToggleFrm(true)}
                            className={`py-2 px-4 text-sm font-medium border border-[#2E4053] cursor-pointer rounded-lg ${
                                toggleFrm
                                    ? "bg-[#2E4053] text-white dark:bg-[#00ADB5] dark:text-white"
                                    : "bg-white text-[#1D3557] dark:bg-[#1A202C] dark:text-[#00ADB5]"
                            } transition-all duration-300`}
                        >
                            Register
                        </a>
                    </nav>

                    {/* Render Form Berdasarkan Toggle */}
                    <div className="w-full">
                        {toggleFrm ? <SignUpFrm /> : <LoginFrm />}
                    </div>
                </aside>
            </div>
        </main>
    );
}
