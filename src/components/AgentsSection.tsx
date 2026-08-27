import React from 'react';
import { Phone, Mail, Award, ArrowUpRight, Users } from 'lucide-react';
import { Agent } from '../types';

interface AgentsSectionProps {
  agents: Agent[];
  onSelectAgent: (agent: Agent) => void;
  onContactAgent: (agent: Agent) => void;
}

export const AgentsSection: React.FC<AgentsSectionProps> = ({
  agents,
  onSelectAgent,
  onContactAgent,
}) => {
  return (
    <section id="agents" className="py-20 lg:py-28 bg-[#EDE8DF]/50 border-t border-[#E9E3D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#17352D] text-[#B49A63] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Users className="w-3.5 h-3.5" />
            Leadership &amp; Advisors
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#17352D] tracking-tight mb-4">
            Meet the People Behind the Properties
          </h2>
          <p className="text-base text-[#252826]/80 font-normal leading-relaxed">
            Our experienced team of licensed brokers and property advisors brings unmatched regional knowledge, market analysis, and dedication to your transaction.
          </p>
        </div>

        {/* 4 Agent Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="bg-[#FFFFFF] border border-[#E9E3D8] rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Agent Headshot with Hover Zoom */}
              <div
                className="relative h-72 sm:h-80 overflow-hidden cursor-pointer bg-[#17352D]"
                onClick={() => onSelectAgent(agent)}
              >
                <img
                  src={agent.photo}
                  alt={agent.name}
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale-15 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

                {/* Experience Badge */}
                <div className="absolute top-3 right-3 bg-[#10241E]/80 backdrop-blur-sm px-2.5 py-1 rounded-sm text-[10px] text-[#B49A63] font-bold uppercase tracking-wider border border-[#B49A63]/40">
                  {agent.yearsExperience} Yrs Exp.
                </div>

                {/* Volume Badge */}
                <div className="absolute bottom-3 left-3 text-[#F7F4EE]">
                  <span className="text-[10px] uppercase tracking-wider text-[#E9E3D8]/80 block">Career Volume</span>
                  <span className="font-serif font-bold text-sm text-[#B49A63]">{agent.totalVolume}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3
                    onClick={() => onSelectAgent(agent)}
                    className="font-serif text-xl font-bold text-[#17352D] hover:text-[#B49A63] cursor-pointer transition-colors mb-1"
                  >
                    {agent.name}
                  </h3>
                  <p className="text-xs text-[#252826]/80 font-medium mb-3 min-h-[32px]">
                    {agent.title}
                  </p>

                  {/* Licenses */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {agent.licenses.map((lic, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-1.5 py-0.5 bg-[#F7F4EE] border border-[#E9E3D8] text-[#17352D] rounded-xs"
                      >
                        {lic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact & View Button */}
                <div className="pt-4 border-t border-[#E9E3D8] space-y-2">
                  <a
                    href={`tel:${agent.phone.replace(/[^0-9]/g, '')}`}
                    className="flex items-center gap-2 text-xs font-medium text-[#252826] hover:text-[#17352D] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#B49A63]" />
                    <span>{agent.phone}</span>
                  </a>

                  <div className="pt-2 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onContactAgent(agent)}
                      className="text-[11px] font-semibold uppercase tracking-wider text-[#17352D] hover:text-[#B49A63] transition-colors"
                    >
                      Send Message
                    </button>

                    <button
                      onClick={() => onSelectAgent(agent)}
                      className="px-3 py-1 bg-[#17352D] hover:bg-[#10241E] text-[#F7F4EE] text-[11px] font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center gap-1"
                    >
                      <span>Bio</span>
                      <ArrowUpRight className="w-3 h-3 text-[#B49A63]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
