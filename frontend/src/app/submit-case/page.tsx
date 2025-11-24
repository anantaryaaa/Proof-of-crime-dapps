"use client";
import React from "react";

export default function SubmitCasePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#18122B] to-[#1A103D] flex flex-col items-center justify-center py-12">
      <div className="w-full max-w-2xl mx-auto bg-[#18122B] rounded-2xl shadow-2xl p-8 border border-[#2A2143]">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400 mb-2 text-center">Submit Criminal Case</h1>
        <p className="text-lg text-[#E0AFFF] mb-8 text-center">Report suspicious Web3 activities and help track down crypto criminals</p>
        <form className="flex flex-col gap-6">
          <div>
            <div className="text-purple-300 font-bold mb-2 flex items-center gap-2"> <span className="text-xl">&#128100;</span> Reporter Information</div>
            <div className="flex flex-col md:flex-row gap-4 mb-2">
              <input className="flex-1 rounded bg-[#23203B] text-white px-4 py-2 outline-none" placeholder="Enter your name" required />
              <input className="flex-1 rounded bg-[#23203B] text-white px-4 py-2 outline-none" placeholder="your@email.com" required type="email" />
            </div>
            <input className="w-full rounded bg-[#23203B] text-white px-4 py-2 outline-none mb-2" placeholder="0x... (Your Wallet Address, Optional)" />
          </div>
          <div>
            <div className="text-pink-400 font-bold mb-2 flex items-center gap-2"> <span className="text-xl">&#128221;</span> Case Details</div>
            <div className="flex flex-col md:flex-row gap-4 mb-2">
              <input className="flex-1 rounded bg-[#23203B] text-white px-4 py-2 outline-none" placeholder="Brief title describing the case" required />
              <select className="flex-1 rounded bg-[#23203B] text-white px-4 py-2 outline-none" required>
                <option value="">Select category</option>
                <option>Pump & Dump</option>
                <option>Rugpull</option>
                <option>Money Laundering</option>
                <option>Phishing</option>
                <option>Other</option>
              </select>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mb-2">
              <select className="flex-1 rounded bg-[#23203B] text-white px-4 py-2 outline-none" required>
                <option value="">Select network</option>
                <option>Ethereum</option>
                <option>BSC</option>
                <option>Polygon</option>
                <option>Solana</option>
                <option>Other</option>
              </select>
              <input className="flex-1 rounded bg-[#23203B] text-white px-4 py-2 outline-none" placeholder="0x... (Token/Contract Address, Optional)" />
            </div>
            <div className="flex flex-col md:flex-row gap-4 mb-2">
              <input className="flex-1 rounded bg-[#23203B] text-white px-4 py-2 outline-none" placeholder="0x... or wallet address" />
              <input className="flex-1 rounded bg-[#23203B] text-white px-4 py-2 outline-none" placeholder="Estimated Loss (USD) e.g., 1000000" />
            </div>
            <div className="flex flex-col md:flex-row gap-4 mb-2">
              <input className="flex-1 rounded bg-[#23203B] text-white px-4 py-2 outline-none" placeholder="Number of Affected Wallets e.g., 150" />
              <select className="flex-1 rounded bg-[#23203B] text-white px-4 py-2 outline-none">
                <option>Medium</option>
                <option>Low</option>
                <option>High</option>
                <option>Critical</option>
              </select>
            </div>
            <textarea className="w-full rounded bg-[#23203B] text-white px-4 py-2 outline-none mb-2" rows={4} maxLength={500} placeholder="Provide detailed information about the suspicious activity, timeline, and any relevant context..." required />
            <div className="flex flex-col md:flex-row gap-4 mb-2">
              <textarea className="flex-1 rounded bg-[#23203B] text-white px-4 py-2 outline-none" rows={2} maxLength={500} placeholder="Paste links to screenshots, blockchain explorers, social media posts, etc. (one per line)" />
              <textarea className="flex-1 rounded bg-[#23203B] text-white px-4 py-2 outline-none" rows={2} maxLength={500} placeholder="Paste suspicious transaction hashes (one per line)" />
            </div>
          </div>
          <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold shadow hover:from-pink-600 hover:to-purple-600 text-lg flex items-center justify-center gap-2">
            <span>&#9993;</span> Submit Case Report
          </button>
          <div className="text-xs text-[#E0AFFF] text-center mt-2">
            By submitting this report, you agree to our terms of service and privacy policy. All submissions are confidential and will be reviewed by our investigation team.
          </div>
        </form>
      </div>
    </div>
  );
}
