import React from 'react';
import { MessageSquare, Search, FileCheck, KeyRound, ArrowRight } from 'lucide-react';

interface BuyingProcessProps {
  onStartSearch: () => void;
}

export const BuyingProcess: React.FC<BuyingProcessProps> = ({ onStartSearch }) => {
  const steps = [
    {
      num: '01',
      icon: MessageSquare,
      title: 'Tell Us What You’re Looking For',
      desc: 'We begin with an in-depth discovery consultation to understand your lifestyle, acreage requirements, budget, timeline, and investment criteria.',
    },
    {
      icon: Search,
      num: '02',
      title: 'Explore the Right Properties',
      desc: 'Gain private access to MLS listings, off-market farm ground, and exclusive regional opportunities with custom tours and soil data reports.',
    },
    {
      num: '03',
      icon: FileCheck,
      title: 'Make a Confident Offer',
      desc: 'Backed by recent comparable sales analysis, zoning diligence, and strategic negotiation tactics, we structure terms that protect your interests.',
    },
    {
      num: '04',
      icon: KeyRound,
      title: 'Close With Confidence',
      desc: 'From title examinations, survey verification, and earnest escrow to closing day, our brokers oversee every critical milestone seamlessly.',
    },
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#EDE8DF]/40 border-y border-[#E9E3D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#17352D] text-[#B49A63] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <KeyRound className="w-3.5 h-3.5" />
            Buyer Advisory
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#17352D] tracking-tight mb-4">
            A Better Way to Buy
          </h2>
          <p className="text-base text-[#252826]/80 font-normal leading-relaxed">
            Our disciplined four-step acquisition framework simplifies the buying journey for homeowners, ranchers, and commercial investors.
          </p>
        </div>

        {/* 4-Step Timeline (Desktop Horizontal, Mobile Vertical) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-[#B49A63]/30 -z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-[#FFFFFF] border border-[#E9E3D8] rounded-sm p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all duration-300 relative z-10 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-sm bg-[#17352D] text-[#B49A63] flex items-center justify-center shadow-sm group-hover:bg-[#B49A63] group-hover:text-[#17352D] transition-colors duration-300">
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <span className="font-serif text-2xl font-bold text-[#17352D]/30 group-hover:text-[#B49A63] transition-colors">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#17352D] mb-3 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#252826]/75 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E9E3D8]/60 text-[10px] font-mono uppercase tracking-widest text-[#B49A63]">
                  STEP {step.num} &middot; DAKOTA PLAINS
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onStartSearch}
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#17352D] hover:bg-[#10241E] text-[#F7F4EE] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors shadow-sm"
          >
            <span>Begin Your Property Search</span>
            <ArrowRight className="w-4 h-4 text-[#B49A63]" />
          </button>
        </div>
      </div>
    </section>
  );
};
