"use client";
import { useState } from "react";

function CaseDetailModal({ open, onClose, report }: { open: boolean; onClose: () => void; report: any }) {
  if (!open || !report) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-gradient-to-r from-purple-800 to-pink-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto border-2 border-[#A259FF] relative">
        <div className="flex justify-between items-center px-8 py-4 border-b border-[#A259FF] bg-gradient-to-r from-purple-700 to-pink-800 rounded-t-2xl">
          <div>
            <div className="text-sm text-[#E0AFFF] mb-1">Case ID: <span className="font-bold">{report.id}</span> <span className="ml-2 px-2 py-1 rounded bg-yellow-500 text-black text-xs font-bold">{report.status[1] || report.status[0]}</span> <span className="ml-2 px-2 py-1 rounded bg-orange-600 text-yellow-200 text-xs font-bold">PRIORITY {report.priority}</span></div>
            <div className="text-2xl font-bold text-white">{report.title}</div>
            <div className="flex items-center gap-4 mt-1 text-[#E0AFFF] text-sm">
              <span>{report.status[0]?.toLowerCase()}</span>
              <span>👤 Investigator: {report.investigator}</span>
            </div>
          </div>
          <button onClick={onClose} className="text-3xl text-[#E0AFFF] hover:text-white font-bold">&times;</button>
        </div>
        <div className="px-8 py-6 bg-[#18122B] rounded-b-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-[#2A2143] rounded-xl p-4 text-[#E0AFFF] flex flex-col items-center justify-center min-h-[80px]">Estimated Loss <span className="text-2xl font-bold text-pink-300">{report.estimatedLoss}</span></div>
            <div className="bg-[#2A2143] rounded-xl p-4 text-[#E0AFFF] flex flex-col items-center justify-center min-h-[80px]">
              <div className="text-2xl font-bold text-cyan-300">{report.walletsInvolved}</div>
              <div className="text-xs mt-1">Affected Wallets</div>
            </div>
            <div className="bg-[#2A2143] rounded-xl p-4 text-[#E0AFFF] flex flex-col items-center justify-center min-h-[80px]">
              <div className="text-2xl font-bold text-cyan-400">{report.evidenceFiles}</div>
              <div className="text-xs mt-1">Evidence Files</div>
            </div>
            <div className="bg-[#2A2143] rounded-xl p-4 text-[#E0AFFF] flex flex-col items-center justify-center min-h-[80px]">
              <div className="text-2xl font-bold text-yellow-300">{report.priority === "HIGH" ? 679 : 123}</div>
              <div className="text-xs mt-1">Days Active</div>
            </div>
          </div>
          <div className="mb-6">
            <div className="text-lg font-bold text-purple-300 mb-2">Case Timeline</div>
            <div className="bg-[#23203B] rounded-xl p-4 text-[#E0AFFF] flex flex-col gap-2">
              <div><span className="text-green-400">●</span> Submitted: <span className="font-semibold">{report.submitted}</span></div>
              <div><span className="text-blue-400">●</span> Last Updated: <span className="font-semibold">{report.lastUpdated}</span></div>
            </div>
          </div>
          <div className="mb-6">
            <div className="text-lg font-bold text-pink-300 mb-2">Suspicious Wallet Addresses</div>
            <div className="bg-[#23203B] rounded-xl p-4 flex flex-col gap-2">
              {report.addresses.map((addr: string) => (
                <div key={addr} className="flex items-center gap-2">
                  <span className="text-[#A259FF]">{addr}</span>
                  <button className="text-[#E0AFFF] hover:text-white"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M8 12h8m0 0l-3-3m3 3l-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
                  <button className="text-[#E0AFFF] hover:text-white"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M14 3v2a2 2 0 002 2h2M7 7v10a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2H9a2 2 0 00-2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
                </div>
              ))}
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
            </div>
          </div>
          <div className="mb-6">
            <div className="text-lg font-bold text-yellow-300 mb-2">Evidence & Documentation</div>
            <div className="bg-[#23203B] rounded-xl p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between bg-[#2A2143] rounded p-2">
                <div className="flex items-center gap-2"><span className="text-purple-300">📄</span> telegram_chat_evidence.png <span className="text-xs text-[#E0AFFF]">2.4 MB • 3 days ago</span></div>
                <button className="text-[#E0AFFF] hover:text-white"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M12 5v14m7-7H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <div className="text-lg font-bold text-green-300 mb-2">Investigation Notes</div>
            <div className="bg-[#23203B] rounded-xl p-4 flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-1"><span className="text-purple-300">👤</span> <span className="font-semibold text-[#E0AFFF]">{report.investigator}</span> <span className="text-xs text-[#E0AFFF]">1 hour ago</span></div>
              <div className="text-[#E0AFFF] mb-2">Initial assessment complete. Estimated total exposure may exceed $10M across all victims.</div>
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

export default function ReportsPage() {
  // Dummy data for demonstration
  const reports = [
    {
      id: "RPT-2024-001",
      title: "SafeMoon V2 Liquidity Drain Investigation",
      status: ["RUGPULL", "INVESTIGATING"],
      priority: "HIGH",
      description:
        "Comprehensive investigation into the SafeMoon V2 contract exploit that resulted in a significant liquidity drain. Multiple wallet addresses involved in coordinated selling patterns.",
      estimatedLoss: "$8.5M",
      walletsInvolved: 3,
      evidenceFiles: 3,
      investigator: "Agent Smith",
      addresses: ["0x8076...d8d3", "0x4298...fcb5", "0x28c6...ld60"],
      lastUpdated: "Jan 20, 2024",
      submitted: "Jan 15, 2024",
      submitter: "CryptoDetective",
    },
    {
      id: "RPT-2024-003",
      title: "Bored Ape NFT Wash Trading Ring",
      status: ["NFT SCAM", "PENDING"],
      priority: "MEDIUM",
      description:
        "Suspected wash trading activity involving multiple Bored Ape Yacht Club NFTs. Pattern analysis reveals coordinated buying and selling between connected wallets to inflate prices.",
      estimatedLoss: "$1.2M",
      walletsInvolved: 3,
      evidenceFiles: 2,
      investigator: "Agent Davis",
      addresses: ["0x1a92...504a", "0x6cc5...da7b", "0x8b1a...fd83"],
      lastUpdated: "Jan 22, 2024",
      submitted: "Jan 22, 2024",
      submitter: "NFTWatcher",
    },
  ];

  const [selectedReport, setSelectedReport] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A103D] to-[#18122B] flex flex-col">
      <div className="w-full max-w-6xl mx-auto px-4 py-10">
        <div className="bg-gradient-to-r from-purple-800 to-pink-900 rounded-2xl p-10 mb-8 text-center">
          <h1 className="text-4xl font-bold text-pink-200 mb-2">Crime Reports Dashboard</h1>
          <p className="text-lg text-[#E0AFFF] mb-6">
            Comprehensive analysis and reporting of Web3 criminal activities across all major blockchains
          </p>
          <div className="flex justify-center mb-4">
            <input
              className="w-full max-w-xl px-4 py-3 rounded-lg bg-[#18122B] text-[#E0AFFF] border border-[#2A2143] focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Search reports by ID, title, or keywords..."
            />
          </div>
        </div>
        <div className="flex flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-72 min-w-[220px]">
            <div className="bg-[#18122B] rounded-2xl p-6 text-[#E0AFFF] shadow-lg border border-[#2A2143] mb-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="text-pink-400">&#x1F50D;</span> Report Status
              </h3>
              <div className="flex flex-col gap-2 mb-4">
                <label className="flex items-center gap-2"><input type="radio" name="status" defaultChecked className="accent-pink-500" />All Reports</label>
                <label className="flex items-center gap-2"><input type="radio" name="status" className="accent-pink-500" />Pending Review</label>
                <label className="flex items-center gap-2"><input type="radio" name="status" className="accent-pink-500" />Under Investigation</label>
                <label className="flex items-center gap-2"><input type="radio" name="status" className="accent-pink-500" />Resolved</label>
                <label className="flex items-center gap-2"><input type="radio" name="status" className="accent-pink-500" />Closed</label>
              </div>
              <button className="text-pink-400 text-sm mt-2">Clear All</button>
            </div>
            <div className="bg-[#18122B] rounded-2xl p-6 text-[#E0AFFF] shadow-lg border border-[#2A2143] mb-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="text-pink-400">&#x1F50D;</span> Crime Categories
              </h3>
              <div className="flex flex-col gap-2">
                <label><input type="checkbox" className="accent-pink-500 mr-2" />Pump & Dump</label>
                <label><input type="checkbox" className="accent-pink-500 mr-2" />Rugpull</label>
                <label><input type="checkbox" className="accent-pink-500 mr-2" />Terrorism Financing</label>
                <label><input type="checkbox" className="accent-pink-500 mr-2" />NFT Scam</label>
                <label><input type="checkbox" className="accent-pink-500 mr-2" />Money Laundering</label>
              </div>
            </div>
            <div className="bg-[#18122B] rounded-2xl p-6 text-[#E0AFFF] shadow-lg border border-[#2A2143] mb-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="text-cyan-400">&#9679;</span> Blockchain Networks
              </h3>
              <div className="flex flex-col gap-2">
                <label><input type="checkbox" className="accent-cyan-400 mr-2" />Ethereum</label>
                <label><input type="checkbox" className="accent-yellow-400 mr-2" />BSC</label>
                <label><input type="checkbox" className="accent-purple-400 mr-2" />Solana</label>
                <label><input type="checkbox" className="accent-red-400 mr-2" />Tron</label>
              </div>
            </div>
            <div className="bg-[#18122B] rounded-2xl p-6 text-[#E0AFFF] shadow-lg border border-[#2A2143]">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="text-yellow-400">&#9200;</span> Time Range
              </h3>
              <select className="w-full rounded bg-[#2A2143] text-[#E0AFFF] p-2 mb-2">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>All Time</option>
              </select>
            </div>
          </aside>
          {/* Main Content */}
          <div className="flex-1">
            <div className="flex gap-6 mb-8">
              <div className="flex-1 bg-[#18122B] rounded-2xl p-6 text-center text-[#E0AFFF]">
                <div className="text-2xl font-bold text-purple-300">8</div>
                <div className="text-sm mt-1">Total Reports</div>
              </div>
              <div className="flex-1 bg-[#18122B] rounded-2xl p-6 text-center text-[#E0AFFF]">
                <div className="text-2xl font-bold text-pink-300">3</div>
                <div className="text-sm mt-1">Active Cases</div>
              </div>
              <div className="flex-1 bg-[#18122B] rounded-2xl p-6 text-center text-[#E0AFFF]">
                <div className="text-2xl font-bold text-cyan-300">3</div>
                <div className="text-sm mt-1">Resolved</div>
              </div>
              <div className="flex-1 bg-[#18122B] rounded-2xl p-6 text-center text-[#E0AFFF]">
                <div className="text-2xl font-bold text-yellow-300">3</div>
                <div className="text-sm mt-1">High Priority</div>
              </div>
            </div>
            <div className="mb-4 text-[#E0AFFF] text-right">8 reports found</div>
            <div className="flex flex-col gap-6">
              {reports.map((r) => (
                <div key={r.id} className="bg-[#18122B] rounded-2xl p-6 shadow-lg border border-[#2A2143]">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <div className="flex items-center gap-2 mb-2 md:mb-0">
                      <span className="text-lg font-bold text-white">{r.title}</span>
                      {r.status.map((s) => (
                        <span key={s} className={`ml-2 px-2 py-1 rounded bg-pink-700 text-pink-200 text-xs font-bold`}>{s}</span>
                      ))}
                      <span className="ml-2 px-2 py-1 rounded bg-[#2A2143] text-yellow-300 text-xs font-bold">Priority {r.priority}</span>
                    </div>
                    <span className="text-xs text-[#E0AFFF]">{r.id}</span>
                  </div>
                  <div className="mb-2 text-[#E0AFFF]">{r.description}</div>
                  <div className="flex flex-wrap gap-6 mb-2">
                    <div>Estimated Loss <span className="font-bold text-white">{r.estimatedLoss}</span></div>
                    <div>Wallets Involved <span className="font-bold text-white">{r.walletsInvolved}</span></div>
                    <div>Evidence Files <span className="font-bold text-white">{r.evidenceFiles}</span></div>
                  </div>
                  <div className="flex flex-wrap gap-6 mb-2 text-sm">
                    <div>Investigator <span className="text-cyan-400 font-bold">{r.investigator}</span></div>
                    <div>Involved Addresses {r.addresses.map((a) => (<span key={a} className="ml-1 px-2 py-1 rounded bg-[#2A2143] text-[#E0AFFF] text-xs font-mono">{a}</span>))}</div>
                  </div>
                  <div className="flex flex-wrap gap-6 mb-2 text-xs text-[#E0AFFF]">
                    <div>Last Updated <span className="font-bold">{r.lastUpdated}</span></div>
                    <div>Submitted <span className="font-bold">{r.submitted}</span> by {r.submitter}</div>
                  </div>
                  <div className="flex gap-4 mt-4">
                    <button
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow hover:from-pink-600 hover:to-purple-600"
                      onClick={() => { setSelectedReport(r); setShowModal(true); }}
                    >
                      View Details
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-[#2A2143] text-[#E0AFFF] font-semibold hover:bg-[#3A2D5D]">Download Report</button>
                  </div>
                </div>
              ))}
            </div>
            <CaseDetailModal open={showModal} onClose={() => setShowModal(false)} report={selectedReport} />
          </div>
        </div>
      </div>
    </div>
  );
}
