"use client";
import { useState } from "react";
import SuspectProfileModal from "./SuspectProfileModal";

const suspects = [
  {
    name: "Viktor Petrov",
    alias: "CryptoGhost",
    bounty: "500,000 USDT",
    status: "WANTED",
    risk: "EXTREME RISK",
    img: "/suspects/viktor.jpg",
    tags: ["Exchange Hack", "Ransomware"],
    loss: "$12.5M",
    victims: 1200,
    nationality: "Russia",
    age: 34,
    sex: "Male"
  },
  {
    name: "Sarah Chen",
    alias: "PhantomQueen",
    bounty: "350,000 USDT",
    status: "WANTED",
    risk: "HIGH RISK",
    img: "/suspects/sarah.jpg",
    tags: ["Phishing", "DeFi Scam"],
    loss: "$8.1M",
    victims: 540,
    nationality: "Singapore",
    age: 28,
    sex: "Female"
  },
  {
    name: "Marcus Johnson",
    alias: "DarkTrader",
    bounty: "750,000 USDT",
    status: "WANTED",
    risk: "EXTREME RISK",
    img: "/suspects/marcus.jpg",
    tags: ["Ponzi Scheme", "Rugpull"],
    loss: "$21.3M",
    victims: 2100,
    nationality: "USA",
    age: 41,
    sex: "Male"
  },
  {
    name: "Elena Volkova",
    alias: "IceQueen",
    bounty: "280,000 USDT",
    status: "INVESTIGATING",
    risk: "HIGH RISK",
    img: "/suspects/elena.jpg",
    tags: ["Exchange Hack", "Ransomware"],
    loss: "$6.2M",
    victims: 892,
    nationality: "Ukraine",
    age: 31,
    sex: "Female"
  },
  {
    name: "Ahmed Al-Hamdi",
    alias: "DesertFox",
    bounty: "420,000 USDT",
    status: "WANTED",
    risk: "EXTREME RISK",
    img: "/suspects/ahmed.jpg",
    tags: ["Money Laundering", "Terrorist Financing"],
    loss: "$15.8M",
    victims: 3214,
    nationality: "United Arab Emirates",
    age: 37,
    sex: "Male"
  },
  {
    name: "Li Wei",
    alias: "DragonByte",
    bounty: "190,000 USDT",
    status: "UNVERIFIED",
    risk: "MEDIUM RISK",
    img: "/suspects/liwei.jpg",
    tags: ["Pump and Dump", "Insider Trading"],
    loss: "$4.1M",
    victims: 1847,
    nationality: "China",
    age: 29,
    sex: "Male"
  }
];

  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSuspect, setSelectedSuspect] = useState<any>(null);
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d1c4e9] to-[#ede7f6] flex flex-col">
      <div className="w-full max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 mb-6">
          <button className="text-2xl text-pink-400 font-bold">&larr;</button>
          <h1 className="text-4xl font-bold text-pink-400">People & Suspected Name Bounty</h1>
        </div>
        <p className="text-lg text-[#A259FF] mb-8">Track and report suspected criminals in the Web3 space. Submit verified evidence to claim bounties.</p>
        <div className="bg-[#b39ddb] bg-opacity-30 rounded-2xl p-6 mb-8 flex flex-col md:flex-row md:items-center gap-4">
          <input
            type="text"
            placeholder="Search by name or alias..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="flex-1 rounded-lg px-4 py-2 bg-[#ede7f6] text-[#18122B] placeholder-[#A259FF] border border-[#A259FF] focus:outline-none"
          />
          <select className="rounded-lg px-4 py-2 bg-[#ede7f6] text-[#18122B] border border-[#A259FF]">
            <option>All Status</option>
            <option>Wanted</option>
            <option>Investigating</option>
            <option>Unverified</option>
          </select>
          <select className="rounded-lg px-4 py-2 bg-[#ede7f6] text-[#18122B] border border-[#A259FF]">
            <option>All Danger Levels</option>
            <option>Extreme Risk</option>
            <option>High Risk</option>
            <option>Medium Risk</option>
          </select>
          <select className="rounded-lg px-4 py-2 bg-[#ede7f6] text-[#18122B] border border-[#A259FF]">
            <option>All Crime Types</option>
            <option>Exchange Hack</option>
            <option>Ransomware</option>
            <option>Phishing</option>
            <option>Money Laundering</option>
          </select>
          <span className="ml-auto text-green-500 font-bold">Your Balance: 2,500 USDT</span>
        </div>
        <div className="mb-4 text-[#18122B] font-semibold">Showing {suspects.length} suspects</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {suspects.map((s, i) => (
            <div key={i} className="bg-white bg-opacity-80 rounded-2xl shadow-lg border border-[#A259FF] flex flex-col overflow-hidden">
              <div className="relative h-56 w-full bg-[#ede7f6] flex items-center justify-center">
                <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${s.status === "WANTED" ? "bg-red-700" : s.status === "INVESTIGATING" ? "bg-yellow-600" : "bg-gray-400"}`}>{s.status}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${s.risk === "EXTREME RISK" ? "bg-red-500" : s.risk === "HIGH RISK" ? "bg-yellow-500" : "bg-blue-400"}`}>{s.risk}</span>
                </div>
                <img src={s.img} alt={s.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="text-lg font-bold text-[#18122B]">{s.name}</div>
                <div className="text-pink-400 text-sm mb-2">aka "{s.alias}"</div>
                <div className="mb-2 text-green-500 font-bold">Bounty: {s.bounty}</div>
                <div className="text-sm text-[#A259FF] mb-1">Estimated Loss: <span className="text-red-500 font-bold">{s.loss}</span></div>
                <div className="text-sm text-[#A259FF] mb-1">Victims: <span className="font-bold text-[#18122B]">{s.victims}</span></div>
                <div className="text-sm text-[#A259FF] mb-1">Nationality: <span className="font-bold text-[#18122B]">{s.nationality}</span></div>
                <div className="text-sm text-[#A259FF] mb-4">Age / Sex: <span className="font-bold text-[#18122B]">{s.age} / {s.sex}</span></div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {s.tags.map((t, j) => (
                    <span key={j} className="px-2 py-1 rounded bg-[#ede7f6] text-[#A259FF] text-xs font-semibold border border-[#A259FF]">{t}</span>
                  ))}
                </div>
                <button
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold shadow hover:from-pink-600 hover:to-purple-600 mt-auto"
                  onClick={() => { setSelectedSuspect(s); setModalOpen(true); }}
                >
                  View Full Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SuspectProfileModal open={modalOpen} onClose={() => setModalOpen(false)} suspect={selectedSuspect} />
    </div>
  );
}
