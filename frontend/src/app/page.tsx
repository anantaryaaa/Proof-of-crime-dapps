

"use client";
import { useState } from "react";

function ConnectWallet() {
  const [account, setAccount] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const connectWallet = async () => {
    if (typeof window.ethereum === "undefined") {
      setError("MetaMask belum terpasang. Silakan install MetaMask.");
      return;
    }
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setAccount(accounts[0]);
      setError(null);
    } catch (err: any) {
      setError(err.message || "Gagal connect ke MetaMask");
    }
  };

  return (
    <button
      onClick={connectWallet}
      className="px-5 py-2 rounded-lg border border-purple-400 text-purple-200 bg-gradient-to-r from-purple-800 to-purple-600 hover:from-purple-700 hover:to-purple-500 font-semibold shadow-md ml-4"
    >
      {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : "Connect Wallet"}
    </button>
  );
}

function NavBar() {
  return (
    <nav className="flex items-center justify-between w-full px-8 py-4 bg-[#18122B] border-b border-[#2A2143]">
      <div className="flex items-center gap-3">
        <div className="bg-[#A259FF] rounded-lg p-2">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#A259FF"/><path d="M7 12.5V10.5C7 8.01472 9.01472 6 11.5 6C13.9853 6 16 8.01472 16 10.5V12.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><rect x="7" y="12.5" width="9" height="5.5" rx="2.75" stroke="white" strokeWidth="1.5"/></svg>
        </div>
        <span className="text-2xl font-bold text-[#E0AFFF]">Proof of Crime</span>
      </div>
      <div className="flex items-center gap-2 text-[#E0AFFF] font-medium">
        <a href="#" className="px-3 py-1 hover:text-white">Dashboard</a>
        <a href="#" className="px-3 py-1 hover:text-white">Reports</a>
        <div className="relative group">
          <button className="px-3 py-1 hover:text-white flex items-center">Bounty <svg className="ml-1" width="12" height="12" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg></button>
          <div className="absolute left-0 mt-2 w-32 bg-[#2A2143] rounded shadow-lg hidden group-hover:block z-10">
            <a href="#" className="block px-4 py-2 hover:bg-[#3A2D5D]">Bug Bounty</a>
            <a href="#" className="block px-4 py-2 hover:bg-[#3A2D5D]">Feature Bounty</a>
          </div>
        </div>
        <a href="#" className="ml-2 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow hover:from-pink-600 hover:to-purple-600">Submit Case</a>
        <ConnectWallet />
      </div>
    </nav>
  );
}

function FilterSidebar() {
  return (
    <aside className="bg-[#18122B] rounded-2xl p-6 w-64 min-w-[220px] text-[#E0AFFF] shadow-lg border border-[#2A2143]">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><span className="text-pink-400">&#x1F50D;</span> Filters</h3>
      <div className="mb-4">
        <div className="font-semibold mb-2">Blockchain</div>
        <div className="flex flex-col gap-2">
          <label><input type="checkbox" className="accent-pink-500 mr-2" />Ethereum</label>
          <label><input type="checkbox" className="accent-yellow-400 mr-2" />BSC</label>
          <label><input type="checkbox" className="accent-purple-400 mr-2" />Solana</label>
          <label><input type="checkbox" className="accent-red-400 mr-2" />Tron</label>
        </div>
      </div>
      <div className="mb-4">
        <div className="font-semibold mb-2">Crime Categories</div>
        <div className="flex flex-col gap-2">
          <label><input type="checkbox" className="accent-pink-500 mr-2" />Pump & Dump</label>
          <label><input type="checkbox" className="accent-pink-500 mr-2" />Rugpull</label>
          <label><input type="checkbox" className="accent-pink-500 mr-2" />Terrorism Financing</label>
          <label><input type="checkbox" className="accent-cyan-400 mr-2" defaultChecked />NFT Scam</label>
          <label><input type="checkbox" className="accent-pink-500 mr-2" />Money Laundering</label>
        </div>
      </div>
      <div className="mb-4">
        <div className="font-semibold mb-2">Time Range</div>
        <select className="w-full rounded bg-[#2A2143] text-[#E0AFFF] p-2 mb-2">
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>All Time</option>
        </select>
        <label><input type="checkbox" className="accent-cyan-400 mr-2" />Verified Cases Only</label>
      </div>
      <button className="w-full mt-2 py-2 rounded-lg bg-[#2A2143] hover:bg-[#3A2D5D] text-pink-400 font-semibold">Clear All Filters</button>
    </aside>
  );
}

function TrendingCases() {
  return (
    <section className="flex-1 px-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white">Trending Cases</h2>
        <span className="text-[#E0AFFF]">8 cases</span>
      </div>
      <div className="flex gap-3 mb-6">
        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow">🔥 Trending</button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#2A2143] text-[#E0AFFF] font-semibold">🕒 Newest</button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#2A2143] text-[#E0AFFF] font-semibold">⚠️ Highest Risk</button>
      </div>
      <div className="flex flex-col gap-6">
        {/* Example Case Card */}
        <div className="bg-[#18122B] rounded-2xl p-6 shadow-lg border border-[#2A2143]">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg font-bold text-white">SQUID Token Pump & Dump Scheme</span>
            <span className="ml-2 text-blue-400">✔️</span>
            <span className="ml-auto text-yellow-400">🟡</span>
          </div>
          <span className="inline-block px-3 py-1 rounded-full bg-pink-900 text-pink-300 text-xs font-semibold mb-2">PUMP DUMP</span>
          <div className="mb-2">
            <span className="text-sm text-[#E0AFFF]">Risk Score</span>
            <div className="w-full h-2 bg-[#2A2143] rounded mt-1 mb-1">
              <div className="h-2 rounded bg-gradient-to-r from-pink-500 to-red-500" style={{ width: '92%' }}></div>
            </div>
            <div className="flex justify-between text-xs text-[#E0AFFF]">
              <span>92/100</span>
              <span>Total Amount: <b className="text-white">$11.2M</b></span>
              <span>Wallets Involved: <b className="text-white">67.834</b></span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <a href="#" className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow hover:from-pink-600 hover:to-purple-600">View Case</a>
            <a href="#" className="px-4 py-2 rounded-lg bg-[#2A2143] text-[#E0AFFF] font-semibold hover:bg-[#3A2D5D]">Trace Flow</a>
            <span className="text-xs text-[#E0AFFF]">680d ago</span>
          </div>
        </div>
        {/* Add more case cards as needed */}
      </div>
    </section>
  );
}

function LiveFeed() {
  return (
    <aside className="bg-[#18122B] rounded-2xl p-6 w-80 min-w-[220px] text-[#E0AFFF] shadow-lg border border-[#2A2143] flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2"> <span className="text-red-400">&#128308;</span> Live Feed</h3>
        <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">LIVE</span>
      </div>
      <div className="flex-1 overflow-y-auto mb-4" style={{ maxHeight: 300 }}>
        {/* Example Feed Item */}
        <div className="flex items-center justify-between mb-2 p-2 rounded bg-[#2A2143]">
          <span className="text-xs text-red-400">&#9888; 0x1c8b7f96...1a41</span>
          <span className="text-xs bg-yellow-700 text-yellow-300 px-2 py-1 rounded">Suspicious</span>
          <span className="text-xs font-bold text-white">$727586</span>
        </div>
        <div className="flex items-center justify-between mb-2 p-2 rounded bg-[#2A2143]">
          <span className="text-xs text-yellow-400">&#11044; 0x94d71e23...efe0</span>
          <span className="text-xs bg-pink-700 text-pink-200 px-2 py-1 rounded">Flagged</span>
          <span className="text-xs font-bold text-white">$183647</span>
        </div>
        {/* Add more feed items as needed */}
      </div>
      <div className="flex justify-between text-xs text-[#E0AFFF] border-t border-[#2A2143] pt-2">
        <span>Alerts Today <b className="text-pink-400">1,247</b></span>
        <span>Total Volume <b className="text-pink-400">$12.4M</b></span>
      </div>
      <button className="mt-4 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow hover:from-purple-600 hover:to-pink-600">Talk with Us</button>
    </aside>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A103D] to-[#18122B] flex flex-col">
      <NavBar />
      <main className="flex-1 flex flex-row gap-6 px-8 py-8">
        <FilterSidebar />
        <TrendingCases />
        <LiveFeed />
      </main>
    </div>
  );
}
