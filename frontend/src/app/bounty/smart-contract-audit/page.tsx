"use client";
import { useState } from "react";
import JoinBountyModal from "./JoinBountyModal";

const bounties = [
  {
    title: "DeFiSwap V3 Protocol Audit",
    org: "DeFiSwap Labs",
    desc: "Comprehensive audit of our new AMM protocol with concentrated liquidity features",
    scope: ["Smart Contracts", "Economic Model", "Access Controls", "Upgrade Mechanisms"],
    requirements: ["5+ years Solidity experience", "Previous DeFi audit experience", "Formal verification knowledge"],
    reward: "$50,000 USDC",
    rewardType: "Critical",
    participants: 23,
    deadline: "2024-02-15"
  },
  {
    title: "NFT Marketplace Security Review",
    org: "CryptoArt Hub",
    desc: "Security assessment of our NFT marketplace smart contracts and royalty system",
    scope: ["ERC-721/1155 Implementation", "Royalty Distribution", "Auction Mechanisms", "Metadata Handling"],
    requirements: ["NFT protocol expertise", "Gas optimization skills", "MEV protection knowledge"],
    reward: "$25,000 ETH",
    rewardType: "High",
    participants: 18,
    deadline: "2024-02-20"
  },
  {
    title: "Cross-Chain Bridge Audit",
    org: "BridgeSecure",
    desc: "Multi-chain bridge protocol security review covering Ethereum, BSC, and Polygon",
    scope: ["Bridge Contracts", "Validator Network", "Message Passing", "Emergency Mechanisms"],
    requirements: ["Cross-chain experience", "Cryptographic protocols", "Consensus mechanisms"],
    reward: "$40,000 USDC",
    rewardType: "Critical",
    participants: 31,
    deadline: "2024-02-25"
  },
  {
    title: "Lending Protocol V2 Review",
    org: "LendMax Finance",
    desc: "Security audit of our upgraded lending protocol with flash loan protection",
    scope: ["Lending Logic", "Liquidation Engine", "Oracle Integration", "Flash Loan Protection"],
    requirements: ["DeFi lending expertise", "Oracle security knowledge", "Economic attack vectors"],
    reward: "$35,000 USDC",
    rewardType: "High",
    participants: 15,
    deadline: "2024-03-01"
  },
  {
    title: "DAO Governance Audit",
    org: "DecentralGov",
    desc: "Governance smart contracts audit including voting mechanisms and treasury management",
    scope: ["Voting Logic", "Treasury Management", "Proposal System"],
    requirements: ["DAO experience", "Governance protocol knowledge"],
    reward: "$15,000 ETH",
    rewardType: "High",
    participants: 12,
    deadline: "2024-03-10"
  }
];

export default function SmartContractAuditBounty() {
  const [tab, setTab] = useState("active");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBounty, setSelectedBounty] = useState<{
    title: string;
    org: string;
    reward: string;
  } | null>(null);

  const handleJoinClick = (bounty: typeof bounties[0]) => {
    setSelectedBounty({ title: bounty.title, org: bounty.org, reward: bounty.reward });
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A103D] to-[#18122B] flex flex-col px-4 py-10">
      <div className="w-full max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-pink-200 mb-2">Smart Contract Audit Bounties</h1>
        <p className="text-lg text-[#E0AFFF] mb-8">Secure the future of DeFi by auditing smart contracts and earning substantial rewards</p>
        <div className="flex gap-4 mb-8">
          <button onClick={() => setTab("active")} className={`px-6 py-2 rounded-full font-semibold text-lg ${tab === "active" ? "bg-pink-500 text-white" : "bg-[#23203B] text-[#E0AFFF]"}`}>Active Bounties</button>
          <button onClick={() => setTab("completed")} className={`px-6 py-2 rounded-full font-semibold text-lg ${tab === "completed" ? "bg-pink-500 text-white" : "bg-[#23203B] text-[#E0AFFF]"}`}>Completed</button>
        </div>
        {tab === "active" && (
          <div className="flex flex-col gap-8">
            {bounties.map((b, i) => (
              <div key={i} className="bg-[#18122B] rounded-2xl p-8 shadow-lg border border-[#2A2143] flex flex-col md:flex-row md:justify-between md:items-center gap-6">
                <div className="flex-1">
                  <div className="text-2xl font-bold text-white mb-1">{b.title}</div>
                  <div className="text-[#E0AFFF] mb-2">{b.org}</div>
                  <div className="mb-2 text-[#E0AFFF]">{b.desc}</div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="font-semibold text-pink-300">Scope</span>
                    {b.scope.map((s) => (
                      <span key={s} className="px-2 py-1 rounded bg-[#2A2143] text-purple-200 text-xs font-semibold">{s}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="font-semibold text-pink-300">Requirements</span>
                    {b.requirements.map((r) => (
                      <span key={r} className="px-2 py-1 rounded bg-[#2A2143] text-pink-200 text-xs font-semibold">{r}</span>
                    ))}
                  </div>
                  <div className="flex gap-6 text-[#E0AFFF] text-sm mb-2">
                    <span>{b.participants} participants</span>
                    <span>Deadline: {b.deadline}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-4 min-w-[180px]">
                  <div className="text-2xl font-bold text-green-300">{b.reward}</div>
                  <span className={`px-4 py-1 rounded-full text-white font-semibold text-sm ${b.rewardType === "Critical" ? "bg-red-700" : "bg-yellow-700"}`}>{b.rewardType}</span>
                  <button
                    className="px-6 py-2 rounded-full bg-pink-500 text-white font-semibold shadow hover:bg-pink-600"
                    onClick={() => handleJoinClick(b)}
                  >
                    Join Bounty
                  </button>
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
