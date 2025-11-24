"use client";
import { useState } from "react";

interface JoinBountyModalProps {
  open: boolean;
  onClose: () => void;
  bounty: {
    title: string;
    org: string;
    reward: string;
  } | null;
}

export default function JoinBountyModal({ open, onClose, bounty }: JoinBountyModalProps) {
  if (!open || !bounty) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-[#18122B] rounded-2xl shadow-2xl w-full max-w-2xl p-0 relative">
        <button
          className="absolute top-4 right-4 text-[#E0AFFF] text-2xl font-bold hover:text-pink-400"
          onClick={onClose}
        >
          ×
        </button>
        <div className="bg-[#2A2143] rounded-t-2xl px-8 py-6 mb-4">
          <div className="text-lg font-semibold text-pink-300 mb-1">{bounty.title}</div>
          <div className="text-[#E0AFFF] text-sm mb-1">{bounty.org} • <span className="text-green-300 font-bold">{bounty.reward}</span></div>
        </div>
        <form className="px-8 pb-8 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="text-[#E0AFFF] font-semibold mb-1 block">Full Name *</label>
              <input className="w-full rounded bg-[#23203B] text-white px-4 py-2 outline-none" placeholder="Your full name" required />
            </div>
            <div className="flex-1">
              <label className="text-[#E0AFFF] font-semibold mb-1 block">Email Address *</label>
              <input className="w-full rounded bg-[#23203B] text-white px-4 py-2 outline-none" placeholder="your@email.com" required type="email" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="text-[#E0AFFF] font-semibold mb-1 block">Wallet Address *</label>
              <input className="w-full rounded bg-[#23203B] text-white px-4 py-2 outline-none" placeholder="0x..." required />
            </div>
            <div className="flex-1">
              <label className="text-[#E0AFFF] font-semibold mb-1 block">Years of Experience *</label>
              <select className="w-full rounded bg-[#23203B] text-white px-4 py-2 outline-none" required>
                <option value="">Select experience level</option>
                <option value="1">1-2 years</option>
                <option value="2">3-4 years</option>
                <option value="3">5+ years</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-[#E0AFFF] font-semibold mb-1 block">Portfolio/GitHub Link</label>
            <input className="w-full rounded bg-[#23203B] text-white px-4 py-2 outline-none" placeholder="https://github.com/yourusername" />
          </div>
          <div>
            <label className="text-[#E0AFFF] font-semibold mb-1 block">Audit Approach <span className="text-xs text-[#E0AFFF]">(500 characters remaining)</span></label>
            <textarea className="w-full rounded bg-[#23203B] text-white px-4 py-2 outline-none" rows={2} placeholder="Describe your methodology and approach for this audit..." maxLength={500} />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="text-[#E0AFFF] font-semibold mb-1 block">Estimated Timeline *</label>
              <select className="w-full rounded bg-[#23203B] text-white px-4 py-2 outline-none" required>
                <option value="">Select timeline</option>
                <option value="1">1-2 weeks</option>
                <option value="2">3-4 weeks</option>
                <option value="3">1-2 months</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="text-[#E0AFFF] font-semibold mb-1 block">Previous Audit Experience <span className="text-xs text-[#E0AFFF]">(500 characters remaining)</span></label>
              <textarea className="w-full rounded bg-[#23203B] text-white px-4 py-2 outline-none" rows={2} placeholder="List your previous audit experience and notable findings..." maxLength={500} />
            </div>
          </div>
          <div className="flex justify-end gap-4 mt-4">
            <button type="button" className="px-6 py-2 rounded-full bg-[#23203B] text-[#E0AFFF] font-semibold hover:bg-[#2A2143]" onClick={onClose}>Cancel</button>
            <button type="submit" className="px-6 py-2 rounded-full bg-pink-500 text-white font-semibold shadow hover:bg-pink-600">Submit Application</button>
          </div>
        </form>
      </div>
    </div>
  );
}
