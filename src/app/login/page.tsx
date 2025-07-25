"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setLoading(true);
        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.message || "Login failed.");
            } else {
                setSuccess("Login successful!");
                // Optionally redirect or set user state here
                setTimeout(() => router.push("/"), 1200);
            }
        } catch {
            setError("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-[#F4F8E8] bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-sm relative">
                <button
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl font-bold"
                    onClick={() => router.push("/")}
                    aria-label="Close login modal"
                >
                    ×
                </button>
                <h2 className="text-2xl font-light mb-6 text-[#384734]">Login</h2>
                {error && <div className="text-red-600 mb-4">{error}</div>}
                {success && <div className="text-green-600 mb-4">{success}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-[#384734] mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full border border-[#E6E9D8] rounded px-3 py-2"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                            disabled={loading}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-[#384734] mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full border border-[#E6E9D8] rounded px-3 py-2"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            disabled={loading}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#384734] text-white py-2 rounded hover:bg-[#2c3727] transition mb-2"
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
                <div className="text-center mt-4">
                    <span className="text-[#384734]">Don&apos;t have an account? </span>
                    <a href="/register" className="text-[#384734] underline hover:text-[#2c3727]">Sign up</a>
                </div>
            </div>
        </div>
    );
} 