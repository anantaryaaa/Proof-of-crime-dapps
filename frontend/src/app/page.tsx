

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

import { useRouter } from "next/navigation";
function NavBar() {
  const router = useRouter();
  const [bountyOpen, setBountyOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between w-full px-8 py-4 bg-[#18122B] border-b border-[#2A2143]">
      <div className="flex items-center gap-3">
        <div className="bg-[#A259FF] rounded-lg p-2">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#A259FF"/><path d="M7 12.5V10.5C7 8.01472 9.01472 6 11.5 6C13.9853 6 16 8.01472 16 10.5V12.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><rect x="7" y="12.5" width="9" height="5.5" rx="2.75" stroke="white" strokeWidth="1.5"/></svg>
        </div>
        <span className="text-2xl font-bold text-[#E0AFFF]">Proof of Crime</span>
      </div>
      <div className="flex items-center gap-2 text-[#E0AFFF] font-medium relative">
        <a href="#" className="px-3 py-1 hover:text-white">Dashboard</a>
        <button onClick={() => router.push("/reports")} className="px-3 py-1 hover:text-white">Reports</button>
        <div className="relative" onMouseEnter={() => setBountyOpen(true)} onMouseLeave={() => setBountyOpen(false)}>
          <button className="px-3 py-1 hover:text-white flex items-center">Bounty <svg className="ml-1" width="12" height="12" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg></button>
          {bountyOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-[#23203B] rounded-2xl shadow-2xl z-20 p-4 flex flex-col gap-3 border border-[#2A2143] animate-fade-in">
              <button
                className="flex items-start gap-3 w-full text-left hover:bg-[#2A2143] rounded-lg p-2"
                onClick={() => { setBountyOpen(false); router.push("/bounty/smart-contract-audit"); }}
              >
                <span className="text-pink-400 mt-1">&lt;/&gt;</span>
                <div>
                  <div className="font-semibold text-white">Smart Contract Audit</div>
                  <div className="text-xs text-[#E0AFFF]">Find vulnerabilities in smart contracts</div>
                </div>
              </button>
              <button
                className="flex items-start gap-3 w-full text-left hover:bg-[#2A2143] rounded-lg p-2"
                onClick={() => { setBountyOpen(false); router.push("/bounty/web3-hacking"); }}
              >
                <span className="text-cyan-400 mt-1">&#128187;</span>
                <div>
                  <div className="font-semibold text-white">Web3 Website Hacking</div>
                  <div className="text-xs text-[#E0AFFF]">Discover security flaws in Web3 platforms</div>
                </div>
              </button>
              <button
                className="flex items-start gap-3 w-full text-left hover:bg-[#2A2143] rounded-lg p-2"
                onClick={() => { setBountyOpen(false); router.push("/bounty/people-bounty"); }}
              >
                <span className="text-orange-400 mt-1">&#128100;</span>
                <div>
                  <div className="font-semibold text-white">People/Suspected Name Bounty</div>
                  <div className="text-xs text-[#E0AFFF]">Report criminals and submit evidence</div>
                </div>
              </button>
            </div>
          )}
        </div>
        <button
          onClick={() => router.push("/submit-case")}
          className="ml-2 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow hover:from-pink-600 hover:to-purple-600"
        >
          Submit Case
        </button>
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

function CaseDetailModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-gradient-to-r from-purple-800 to-pink-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto border-2 border-[#A259FF] relative">
        <div className="flex justify-between items-center px-8 py-4 border-b border-[#A259FF] bg-gradient-to-r from-purple-700 to-pink-800 rounded-t-2xl">
          <div>
            <div className="text-sm text-[#E0AFFF] mb-1">Case ID: <span className="font-bold">case_001</span> <span className="ml-2 px-2 py-1 rounded bg-yellow-500 text-black text-xs font-bold">PENDING</span> <span className="ml-2 px-2 py-1 rounded bg-orange-600 text-yellow-200 text-xs font-bold">HIGH PRIORITY</span></div>
            <div className="text-2xl font-bold text-white">SafeMoon V2 Rugpull Investigation</div>
            <div className="flex items-center gap-4 mt-1 text-[#E0AFFF] text-sm">
              <span>rugpull</span>
              <span>bsc</span>
              <span>👤 Investigator: Agent Smith</span>
            </div>
          </div>
          <button onClick={onClose} className="text-3xl text-[#E0AFFF] hover:text-white font-bold">&times;</button>
        </div>
        <div className="px-8 py-6 bg-[#18122B] rounded-b-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-[#2A2143] rounded-xl p-4 text-[#E0AFFF] flex flex-col items-center justify-center min-h-[80px]">Estimated Loss</div>
            <div className="bg-[#2A2143] rounded-xl p-4 text-[#E0AFFF] flex flex-col items-center justify-center min-h-[80px]">
              <div className="text-2xl font-bold text-cyan-300">45623</div>
              <div className="text-xs mt-1">Affected Wallets</div>
            </div>
            <div className="bg-[#2A2143] rounded-xl p-4 text-[#E0AFFF] flex flex-col items-center justify-center min-h-[80px]">
              <div className="text-2xl font-bold text-cyan-400">12</div>
              <div className="text-xs mt-1">Evidence Files</div>
            </div>
            <div className="bg-[#2A2143] rounded-xl p-4 text-[#E0AFFF] flex flex-col items-center justify-center min-h-[80px]">
              <div className="text-2xl font-bold text-yellow-300">679</div>
              <div className="text-xs mt-1">Days Active</div>
            </div>
          </div>
          <div className="mb-6">
            <div className="text-lg font-bold text-purple-300 mb-2">Case Timeline</div>
            <div className="bg-[#23203B] rounded-xl p-4 text-[#E0AFFF] flex flex-col gap-2">
              <div><span className="text-green-400">●</span> Submitted: <span className="font-semibold">2024-01-15</span></div>
              <div><span className="text-blue-400">●</span> Last Updated: <span className="font-semibold">2 hours ago</span></div>
            </div>
          </div>
          <div className="mb-6">
            <div className="text-lg font-bold text-pink-300 mb-2">Suspicious Wallet Addresses</div>
            <div className="bg-[#23203B] rounded-xl p-4 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[#A259FF]">0x742d35Cc6634C0532925a3bB04C0532925a3b8D4</span>
                <button className="text-[#E0AFFF] hover:text-white"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M8 12h8m0 0l-3-3m3 3l-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
                <button className="text-[#E0AFFF] hover:text-white"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M14 3v2a2 2 0 002 2h2M7 7v10a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2H9a2 2 0 00-2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#A259FF]">0x8b1aF109551bD432803012645Hac136c0532925a</span>
                <button className="text-[#E0AFFF] hover:text-white"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M8 12h8m0 0l-3-3m3 3l-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
                <button className="text-[#E0AFFF] hover:text-white"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M14 3v2a2 2 0 002 2h2M7 7v10a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2H9a2 2 0 00-2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <div className="text-lg font-bold text-cyan-300 mb-2">Recent Suspicious Transactions</div>
            <div className="bg-[#23203B] rounded-xl p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between text-[#E0AFFF]">
                <span>0x7a8f...3d2e</span>
                <span>From: <span className="text-cyan-400">0x1234...5678</span></span>
                <span>To: <span className="text-cyan-400">0x9abc...def0</span></span>
                <span className="text-yellow-400 font-bold">$125,000</span>
                <span className="bg-orange-600 text-yellow-200 px-2 py-1 rounded text-xs">High Risk</span>
                <span className="text-xs text-[#E0AFFF]">2 hours ago</span>
              </div>
              <div className="flex items-center justify-between text-[#E0AFFF]">
                <span>0x9b2c...4f1a</span>
                <span>From: <span className="text-cyan-400">0x5678...9abc</span></span>
                <span>To: <span className="text-cyan-400">0xdef0...1234</span></span>
                <span className="text-yellow-400 font-bold">$89,500</span>
                <span className="bg-red-700 text-yellow-200 px-2 py-1 rounded text-xs">Critical Risk</span>
                <span className="text-xs text-[#E0AFFF]">5 hours ago</span>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <div className="text-lg font-bold text-yellow-300 mb-2">Evidence & Documentation</div>
            <div className="bg-[#23203B] rounded-xl p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between bg-[#2A2143] rounded p-2">
                <div className="flex items-center gap-2"><span className="text-purple-300">📄</span> telegram_chat_evidence.png <span className="text-xs text-[#E0AFFF]">2.4 MB • 3 days ago</span></div>
                <button className="text-[#E0AFFF] hover:text-white"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M12 5v14m7-7H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
              </div>
              <div className="flex items-center justify-between bg-[#2A2143] rounded p-2">
                <div className="flex items-center gap-2"><span className="text-purple-300">🔗</span> etherscan_trace.url <span className="text-xs text-[#E0AFFF]">0.1 KB • 2 days ago</span></div>
                <button className="text-[#E0AFFF] hover:text-white"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M12 5v14m7-7H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <div className="text-lg font-bold text-green-300 mb-2">Investigation Notes</div>
            <div className="bg-[#23203B] rounded-xl p-4 flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-1"><span className="text-purple-300">👤</span> <span className="font-semibold text-[#E0AFFF]">Agent Smith</span> <span className="text-xs text-[#E0AFFF]">1 hour ago</span></div>
              <div className="text-[#E0AFFF] mb-2">Identified connection to known money laundering network. Cross-referencing with previous cases.</div>
              <div className="flex items-center gap-2 mb-1"><span className="text-purple-300">👤</span> <span className="font-semibold text-[#E0AFFF]">Agent Johnson</span> <span className="text-xs text-[#E0AFFF]">6 hours ago</span></div>
              <div className="text-[#E0AFFF] mb-2">Wallet cluster analysis reveals 15+ connected addresses. Preparing detailed flow chart.</div>
              <div className="flex items-center gap-2 mb-1"><span className="text-purple-300">👤</span> <span className="font-semibold text-[#E0AFFF]">Agent Williams</span> <span className="text-xs text-[#E0AFFF]">1 day ago</span></div>
              <div className="text-[#E0AFFF]">Initial assessment complete. Estimated total exposure may exceed $10M across all victims.</div>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button className="flex-1 px-4 py-3 rounded-lg bg-pink-600 text-white font-semibold shadow hover:bg-pink-700">Download Full Report</button>
            <button className="flex-1 px-4 py-3 rounded-lg bg-cyan-600 text-white font-semibold shadow hover:bg-cyan-700">Share Case</button>
            <button className="flex-1 px-4 py-3 rounded-lg bg-gray-700 text-white font-semibold shadow hover:bg-gray-800">Flag for Review</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TraceFlowModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-gradient-to-r from-purple-800 to-pink-900 rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto border-2 border-[#A259FF] relative">
        <div className="flex justify-between items-center px-8 py-4 border-b border-[#A259FF] bg-gradient-to-r from-purple-700 to-pink-800 rounded-t-2xl">
          <div>
            <div className="text-2xl font-bold text-white mb-1">Transaction Flow Analysis</div>
            <div className="text-lg text-[#E0AFFF]">SafeMoon V2 Rugpull Investigation</div>
            <div className="flex items-center gap-4 mt-1 text-[#E0AFFF] text-sm">
              <span>Token: <span className="text-cyan-400 font-bold">SAFEMOON</span></span>
              <span>Network: bsc</span>
              <span>Total: <span className="text-pink-300 font-bold">$8,900,000</span></span>
            </div>
          </div>
          <button onClick={onClose} className="text-3xl text-[#E0AFFF] hover:text-white font-bold">&times;</button>
        </div>
        <div className="px-8 py-6 bg-[#18122B] rounded-b-2xl flex flex-col md:flex-row gap-6">
          <div className="flex-1 bg-[#23203B] rounded-xl p-6 min-h-[340px] flex flex-col items-center justify-center">
            <div className="flex items-center gap-4 mb-4">
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span> <span className="text-xs text-[#E0AFFF]">Source</span></span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-orange-400 inline-block"></span> <span className="text-xs text-[#E0AFFF]">Mixer</span></span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-blue-400 inline-block"></span> <span className="text-xs text-[#E0AFFF]">Exchange</span></span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-green-400 inline-block"></span> <span className="text-xs text-[#E0AFFF]">Destination</span></span>
            </div>
            <div className="flex-1 w-full flex items-center justify-center min-h-[220px]">
              {/* Dummy Graph */}
              <svg width="220" height="220" viewBox="0 0 220 220">
                <circle cx="110" cy="40" r="20" fill="#ef4444" />
                <circle cx="110" cy="80" r="18" fill="#f59e42" />
                <circle cx="110" cy="120" r="16" fill="#f59e42" />
                <circle cx="70" cy="160" r="16" fill="#38bdf8" />
                <circle cx="150" cy="160" r="16" fill="#4ade80" />
                <line x1="110" y1="60" x2="110" y2="100" stroke="#fff" strokeWidth="2" />
                <line x1="110" y1="136" x2="70" y2="160" stroke="#fff" strokeWidth="2" />
                <line x1="110" y1="136" x2="150" y2="160" stroke="#fff" strokeWidth="2" />
                <line x1="110" y1="100" x2="110" y2="120" stroke="#fff" strokeWidth="2" />
              </svg>
              <span className="absolute text-[#E0AFFF] text-lg left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none">Click on a node to view details</span>
            </div>
          </div>
          <div className="w-full md:w-80 flex-shrink-0 bg-[#23203B] rounded-xl p-6 flex flex-col">
            <div className="text-lg font-bold text-white mb-4">Transactions</div>
            <div className="flex-1 overflow-y-auto" style={{ maxHeight: 260 }}>
              <div className="mb-4 p-3 rounded bg-[#2A2143]">
                <div className="text-pink-300 font-bold">$2.1M <span className="text-xs text-[#E0AFFF] ml-2">2h ago</span></div>
                <div className="text-xs text-[#E0AFFF]">From: <span className="text-cyan-400">0x742d...8a3f</span></div>
                <div className="text-xs text-[#E0AFFF]">To: <span className="text-cyan-400">0x8b4c...2d1e</span></div>
              </div>
              <div className="mb-4 p-3 rounded bg-[#2A2143]">
                <div className="text-pink-300 font-bold">$1.8M <span className="text-xs text-[#E0AFFF] ml-2">1.5h ago</span></div>
                <div className="text-xs text-[#E0AFFF]">From: <span className="text-cyan-400">0x8b4c...2d1e</span></div>
                <div className="text-xs text-[#E0AFFF]">To: <span className="text-cyan-400">0x3f7a...9c2b</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrendingCases() {
  const [showModal, setShowModal] = useState(false);
  const [showTrace, setShowTrace] = useState(false);
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
            <button onClick={() => setShowModal(true)} className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow hover:from-pink-600 hover:to-purple-600">View Case</button>
            <button onClick={() => setShowTrace(true)} className="px-4 py-2 rounded-lg bg-[#2A2143] text-[#E0AFFF] font-semibold hover:bg-[#3A2D5D]">Trace Flow</button>
            <span className="text-xs text-[#E0AFFF]">680d ago</span>
          </div>
        </div>
        {/* Add more case cards as needed */}
      </div>
      <CaseDetailModal open={showModal} onClose={() => setShowModal(false)} />
      <TraceFlowModal open={showTrace} onClose={() => setShowTrace(false)} />
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
