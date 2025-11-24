"use client";
import React, { useState } from "react";
import SubmitEvidenceModal from "./SubmitEvidenceModal";

interface SuspectProfileModalProps {
  open: boolean;
  onClose: () => void;
  suspect: any;
}

  const [evidenceOpen, setEvidenceOpen] = useState(false);
  if (!open || !suspect) return null;
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
        <div className="bg-[#18122B] rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative">
          <button
            className="absolute top-4 right-4 text-[#E0AFFF] text-2xl font-bold hover:text-pink-400"
            onClick={onClose}
          >
            ×
          </button>
          <div className="relative h-56 w-full bg-[#23203B] flex items-end justify-between rounded-t-2xl p-8" style={{backgroundImage: `url(${suspect.img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div>
              <div className="text-3xl font-bold text-white mb-1">{suspect.name}</div>
              <div className="text-pink-400 text-lg mb-2">aka "{suspect.alias}"</div>
              <div className="flex gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-red-700">{suspect.status}</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-red-500">{suspect.risk.replace("RISK", "DANGER")}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-green-400 text-lg font-bold">Bounty Reward</div>
              <div className="text-3xl font-bold text-green-400">{suspect.bounty}</div>
            </div>
          </div>
          <div className="p-8 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-[#23203B] rounded-xl p-4 text-[#E0AFFF]">
                <div className="text-xs mb-1">Nationality</div>
                <div className="font-bold text-white">{suspect.nationality || 'Unknown'}</div>
              </div>
              <div className="bg-[#23203B] rounded-xl p-4 text-[#E0AFFF]">
                <div className="text-xs mb-1">Age / Sex</div>
                <div className="font-bold text-white">{suspect.age} / {suspect.sex}</div>
              </div>
              <div className="bg-[#23203B] rounded-xl p-4 text-[#E0AFFF]">
                <div className="text-xs mb-1">Estimated Loss</div>
                <div className="font-bold text-red-400">{suspect.loss}</div>
              </div>
              <div className="bg-[#23203B] rounded-xl p-4 text-[#E0AFFF]">
                <div className="text-xs mb-1">Total Victims</div>
                <div className="font-bold text-white">{suspect.victims?.toLocaleString() || '-'}</div>
              </div>
            </div>
            <div>
              <div className="text-purple-300 font-bold mb-1">Description</div>
              <div className="text-[#E0AFFF]">Mastermind behind multiple DeFi rug pulls. Known for creating fake identities and elaborate social engineering schemes.</div>
            </div>
            <div>
              <div className="text-red-400 font-bold mb-1">Type of Crimes</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded bg-red-900 text-red-200 text-xs font-semibold">Rug Pull</span>
                <span className="px-3 py-1 rounded bg-red-900 text-red-200 text-xs font-semibold">Identity Theft</span>
                <span className="px-3 py-1 rounded bg-red-900 text-red-200 text-xs font-semibold">Money Laundering</span>
              </div>
            </div>
            <div>
              <div className="text-yellow-300 font-bold mb-1">Activity Period</div>
              <div className="text-[#E0AFFF]">2021 - Present</div>
              <div className="text-xs text-orange-300 mt-1">Last Seen: Dubai, UAE - Jan 2024</div>
            </div>
            <div>
              <div className="text-purple-300 font-bold mb-1">Known Wallet Addresses</div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 bg-[#23203B] rounded px-3 py-2">
                  <span className="text-pink-300 font-mono">0x742d...89a3</span>
                  <button className="text-[#E0AFFF] hover:text-white"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M8 12h8m0 0l-3-3m3 3l-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
                  <button className="text-[#E0AFFF] hover:text-white"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M14 3v2a2 2 0 002 2h2M7 7v10a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2H9a2 2 0 00-2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
                </div>
                <div className="flex items-center gap-2 bg-[#23203B] rounded px-3 py-2">
                  <span className="text-pink-300 font-mono">0x9f3e...12bc</span>
                  <button className="text-[#E0AFFF] hover:text-white"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M8 12h8m0 0l-3-3m3 3l-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
                  <button className="text-[#E0AFFF] hover:text-white"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M14 3v2a2 2 0 002 2h2M7 7v10a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2H9a2 2 0 00-2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
                </div>
              </div>
            </div>
            <div className="mt-4 bg-gradient-to-r from-pink-700 to-purple-700 rounded-xl p-6">
              <div className="text-white text-lg font-bold mb-2">Submit Evidence & Claim Bounty</div>
              <div className="text-[#E0AFFF] mb-4">Have information about this suspect? Submit verified evidence to claim the bounty reward.</div>
              <button
                className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold shadow hover:from-pink-600 hover:to-purple-600"
                onClick={() => setEvidenceOpen(true)}
              >
                Submit Evidence Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <SubmitEvidenceModal open={evidenceOpen} onClose={() => setEvidenceOpen(false)} suspectOptions={[suspect.name]} />
    </>
  );
}
