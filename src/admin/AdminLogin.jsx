import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [key, setKey] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handle = (e) => {
    e.preventDefault();
    // Demo-only admin key
    if (key === "admin123") {
      sessionStorage.setItem("spicegarden_admin", "true");
      navigate("/admin/dashboard");
    } else {
      setError("Invalid Admin Key — this is a frontend demo only.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="mx-auto max-w-md">
        <h1 className="text-3xl font-black text-yellow-400">Admin Access</h1>
        <p className="mt-2 text-gray-400">This is a frontend demo admin key (not secure). Use <strong>admin123</strong>.</p>

        <form onSubmit={handle} className="mt-6 grid gap-4">
          <input value={key} onChange={(e)=>setKey(e.target.value)} placeholder="Enter Admin Key" className="rounded-xl bg-[#111111] p-4" />
          <button className="rounded-xl bg-yellow-400 px-5 py-3 font-bold text-black">Enter</button>
          {error && <p className="text-red-400">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
