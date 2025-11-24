"use client";
import { useState } from "react";
import JoinBountyModal from "./JoinBountyModal";

const bounties = [
  {
    id: "#WH001",
    level: "High",
    org: "SwapDEX",
    title: "DEX Frontend Security Assessment",
    desc: "Comprehensive security testing of decentralized exchange frontend including wallet integration vulnerabilities.",
    scope: ["XSS", "CSRF", "Wallet Draining", "Phishing", "Frontend", "DEX", "Wallet Integration"],
    reward: "18,000 USDC",
    deadline: "2024-02-10",
    participants: 6,
    levelColor: "bg-yellow-700",
    tagsColor: "bg-[#3B223F] text-[#FF6BCE]"
  },
  {
    id: "#WH002",
    level: "Medium",
    org: "DeFiTracker Pro",
    title: "DeFi Dashboard Penetration Test",
    desc: "Full penetration testing of DeFi portfolio dashboard including API security and user data protection.",
    scope: ["API Vulnerabilities", "Data Leakage", "Authentication Bypass", "Dashboard", "API Security", "Data Protection"],
    reward: "12,500 ETH",
    deadline: "2024-02-10",
    participants: 6,
    levelColor: "bg-yellow-600",
    tagsColor: "bg-[#3B223F] text-[#FFB86B]"
  },
  {
    id: "#WH003",
    level: "Critical",
    org: "ArtChain Gallery",
    title: "NFT Marketplace Security Audit",
    desc: "Security assessment of NFT marketplace platform focusing on transaction security and metadata manipulation.",
    scope: ["Metadata Injection", "Transaction Manipulation", "Access Control", "NFT", "Marketplace", "Metadata Security"],
    reward: "22,000 USDC",
    deadline: "2024-02-18",
    participants: 8,
    levelColor: "bg-red-700",
    tagsColor: "bg-[#3B223F] text-[#FF6B6B]"
  }
];

  const [tab, setTab] = useState("active");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBounty, setSelectedBounty] = useState<{
    id: string;
    title: string;
    org: string;
    reward: string;
  } | null>(null);

  const handleJoinClick = (bounty: typeof bounties[0]) => {
    setSelectedBounty({ id: bounty.id, title: bounty.title, org: bounty.org, reward: bounty.reward });
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A103D] to-[#18122B] flex flex-col">
      <div className="w-full max-w-5xl mx-auto px-4 py-10">
        <div className="rounded-2xl bg-gradient-to-r from-[#3B1B4B] to-[#2A2143] p-8 mb-8">
          <h1 className="text-4xl font-bold text-pink-200 mb-2">Web3 Website Hacking Bounties</h1>
          <p className="text-lg text-[#E0AFFF] mb-6">Find security flaws in Web3 platforms and protect users from exploits</p>
          <div className="flex gap-8 text-center mb-2">
            <div>
              <div className="text-2xl font-bold text-pink-300">$1.8M+</div>
              <div className="text-[#E0AFFF] text-sm">Total Rewards Paid</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-pink-300">89</div>
              <div className="text-[#E0AFFF] text-sm">Critical Bugs Found</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-pink-300">320+</div>
              <div className="text-[#E0AFFF] text-sm">White Hat Hackers</div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mb-8">
          <button onClick={() => setTab("active")} className={`px-6 py-2 rounded-full font-semibold text-lg ${tab === "active" ? "bg-pink-500 text-white" : "bg-[#23203B] text-[#E0AFFF]"}`}>Active Bounties</button>
          <button onClick={() => setTab("completed")} className={`px-6 py-2 rounded-full font-semibold text-lg ${tab === "completed" ? "bg-pink-500 text-white" : "bg-[#23203B] text-[#E0AFFF]"}`}>Completed</button>
        </div>
        {tab === "active" && (
          <div className="flex flex-col gap-8">
            {bounties.map((b, i) => (
              <div key={i} className="bg-[#18122B] rounded-2xl p-8 shadow-lg border border-[#2A2143] mb-2">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-pink-400">{b.id}</span>
                      <span className={`px-3 py-1 rounded-full text-white font-semibold text-xs ${b.levelColor}`}>{b.level}</span>
                      <span className="text-[#E0AFFF] text-xs">by {b.org}</span>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{b.title}</div>
                    <div className="mb-2 text-[#E0AFFF]">{b.desc}</div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="font-semibold text-pink-300">Scope:</span>
                      {b.scope.map((s) => (
                        <span key={s} className="px-2 py-1 rounded bg-[#2A2143] text-pink-200 text-xs font-semibold">{s}</span>
                      ))}
                    </div>
                    <div className="flex gap-6 text-[#E0AFFF] text-sm mb-2">
                      <span><span className="inline-block align-middle mr-1">🗓️</span>Deadline: {b.deadline}</span>
                      <span><span className="inline-block align-middle mr-1">👤</span>{b.participants} participants</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-4 min-w-[180px]">
                    <div className="text-2xl font-bold text-green-300">{b.reward}</div>
                    <div className="text-[#E0AFFF] text-xs">Reward</div>
                    <button
                      className="px-6 py-2 rounded-full bg-pink-500 text-white font-semibold shadow hover:bg-pink-600 mt-2"
                      onClick={() => handleJoinClick(b)}
                    >
                      Join Bounty
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {tab === "completed" && (
          <div className="text-center text-[#E0AFFF] py-16">No completed bounties yet.</div>
        )}
      </div>
      <JoinBountyModal open={modalOpen} onClose={() => setModalOpen(false)} bounty={selectedBounty} />
    </div>
  );
}
