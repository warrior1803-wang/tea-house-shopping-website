"use client";
import { useState } from "react";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        if (!name || !email || !password || !confirmPassword) {
            setError("Please fill in all fields.");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        // TODO: Add backend register logic here
        alert(`Register attempted for ${name} (${email})`);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#F4F8E8]">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-light mb-6 text-[#384734]">Register</h2>
                {error && <div className="text-red-600 mb-4">{error}</div>}
                <div className="mb-4">
                    <label className="block text-[#384734] mb-1">Name</label>
                    <input
                        type="text"
                        className="w-full border border-[#E6E9D8] rounded px-3 py-2"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-[#384734] mb-1">Email</label>
                    <input
                        type="email"
                        className="w-full border border-[#E6E9D8] rounded px-3 py-2"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-[#384734] mb-1">Password</label>
                    <input
                        type="password"
                        className="w-full border border-[#E6E9D8] rounded px-3 py-2"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-[#384734] mb-1">Confirm Password</label>
                    <input
                        type="password"
                        className="w-full border border-[#E6E9D8] rounded px-3 py-2"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#384734] text-white py-2 rounded hover:bg-[#2c3727] transition"
                >
                    Register
                </button>
            </form>
        </div>
    );
} 