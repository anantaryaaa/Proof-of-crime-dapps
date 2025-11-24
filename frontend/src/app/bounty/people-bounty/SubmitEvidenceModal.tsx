"use client";
import React from "react";

interface SubmitEvidenceModalProps {
  open: boolean;
  onClose: () => void;
  suspectOptions: string[];
}

export default function SubmitEvidenceModal({ open, onClose, suspectOptions }: SubmitEvidenceModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-[#18122B] rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
        <button
          className="absolute top-4 right-4 text-[#E0AFFF] text-2xl font-bold hover:text-pink-400"
          onClick={onClose}
        >
          ×
        </button>
        <div className="bg-gradient-to-r from-pink-700 to-purple-700 rounded-t-2xl px-8 py-6 mb-4">
          <div className="text-2xl font-bold text-white mb-1">Submit Evidence</div>
          <div className="text-[#E0AFFF]">Provide detailed evidence to support your claim and earn the bounty reward.</div>
        </div>
        <form className="px-8 pb-8 flex flex-col gap-4">
          <div>
            <label className="text-[#E0AFFF] font-semibold mb-1 block">Suspect Name *</label>
            <select className="w-full rounded bg-[#23203B] text-white px-4 py-2 outline-none" required>
              <option value="">Select a suspect...</option>
              {suspectOptions.map((s, i) => <option key={i} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="text-[#E0AFFF] font-semibold mb-1 block">Evidence Type *</label>
            <select className="w-full rounded bg-[#23203B] text-white px-4 py-2 outline-none" required>
              <option value="">Select evidence type...</option>
              <option>Photo</option>
              <option>Video</option>
              <option>Document</option>
              <option>Note</option>
            </select>
          </div>
          <div>
            <label className="text-[#E0AFFF] font-semibold mb-1 block">Evidence Description *</label>
            <textarea className="w-full rounded bg-[#23203B] text-white px-4 py-2 outline-none" rows={3} maxLength={500} placeholder="Provide detailed description of your evidence (max 500 characters)..." required />
            <div className="text-xs text-[#E0AFFF] mt-1">500 characters remaining</div>
          </div>
          <div>
            <label className="text-[#E0AFFF] font-semibold mb-1 block">Transaction Hash (if applicable)</label>
            <input className="w-full rounded bg-[#23203B] text-white px-4 py-2 outline-none" placeholder="0x..." />
          </div>
          <div>
            <label className="text-[#E0AFFF] font-semibold mb-1 block">Related Wallet Address</label>
            <input className="w-full rounded bg-[#23203B] text-white px-4 py-2 outline-none" placeholder="0x..." />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-[#E0AFFF] font-semibold mb-1 block">Photo Evidence</label>
              <input type="file" multiple className="block w-full text-sm text-[#E0AFFF] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700" />
            </div>
            <div>
              <label className="text-[#E0AFFF] font-semibold mb-1 block">Video Evidence</label>
              <input type="file" className="block w-full text-sm text-[#E0AFFF] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700" />
            </div>
            <div>
              <label className="text-[#E0AFFF] font-semibold mb-1 block">Note</label>
              <input type="file" className="block w-full text-sm text-[#E0AFFF] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700" />
            </div>
            <div>
              <label className="text-[#E0AFFF] font-semibold mb-1 block">Documents</label>
              <input type="file" multiple className="block w-full text-sm text-[#E0AFFF] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="flex-1">
              <label className="text-[#E0AFFF] font-semibold mb-1 block">Your Name *</label>
              <input className="w-full rounded bg-[#23203B] text-white px-4 py-2 outline-none" placeholder="Enter your name" required />
            </div>
            <div className="flex-1">
              <label className="text-[#E0AFFF] font-semibold mb-1 block">Email Address *</label>
              <input className="w-full rounded bg-[#23203B] text-white px-4 py-2 outline-none" placeholder="your@email.com" required type="email" />
            </div>
          </div>
          <div>
            <label className="text-[#E0AFFF] font-semibold mb-1 block">Your Wallet Address (for bounty payment) *</label>
            <input className="w-full rounded bg-[#23203B] text-white px-4 py-2 outline-none" placeholder="0x..." required />
          </div>
          <div className="flex items-center gap-2 mt-2">
            <input type="checkbox" required className="accent-pink-500" id="evidence-confirm" />
            <label htmlFor="evidence-confirm" className="text-xs text-[#E0AFFF]">I confirm that all evidence provided is authentic and accurate. I understand that submitting false information may result in account suspension and legal action. *</label>
          </div>
          <div className="flex justify-end gap-4 mt-4">
            <button type="submit" className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow hover:from-pink-600 hover:to-purple-600">Submit Evidence</button>
            <button type="button" className="px-6 py-2 rounded-full bg-[#23203B] text-[#E0AFFF] font-semibold hover:bg-[#2A2143]" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
