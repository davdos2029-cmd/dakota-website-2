import React, { useState } from 'react';
import { X, Phone, Mail, Award, CheckCircle2, Send, Building, ShieldCheck } from 'lucide-react';
import { Agent, Property } from '../types';
import { PropertyCard } from './PropertyCard';

interface AgentDetailModalProps {
  agent: Agent | null;
  properties: Property[];
  savedProperties: Property[];
  onClose: () => void;
  onToggleSave: (property: Property) => void;
  onSelectProperty: (property: Property) => void;
}

export const AgentDetailModal: React.FC<AgentDetailModalProps> = ({
  agent,
  properties,
  savedProperties,
  onClose,
  onToggleSave,
  onSelectProperty,
}) => {
  if (!agent) return null;

  const [messageName, setMessageName] = useState('');
  const [messageEmail, setMessageEmail] = useState('');
  const [messagePhone, setMessagePhone] = useState('');
  const [messageBody, setMessageBody] = useState('');
  const [sent, setSent] = useState(false);

  const agentProperties = properties.filter((p) => agent.activeListings.includes(p.id));

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageName.trim() || !messagePhone.trim()) return;
    setSent(true);
  };

  const isPropertySaved = (id: string) => savedProperties.some((p) => p.id === id);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-[#F7F4EE] w-full max-w-4xl rounded-sm shadow-2xl overflow-hidden border border-[#E9E3D8] my-auto flex flex-col max-h-[92vh]">
        {/* Header Bar */}
        <div className="bg-[#17352D] text-[#F7F4EE] px-6 py-4 flex items-center justify-between border-b border-[#B49A63]/30 shrink-0">
          <span className="text-xs uppercase tracking-widest font-mono text-[#B49A63]">
            Dakota Plains Realty &middot; Professional Profile
          </span>
          <button
            onClick={onClose}
            className="p-1.5 text-[#E9E3D8] hover:text-white hover:bg-white/10 rounded-sm transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-grow">
          {/* Agent Top Profile */}
          <div className="bg-[#FFFFFF] border border-[#E9E3D8] p-6 sm:p-8 rounded-sm shadow-sm flex flex-col sm:flex-row gap-6 items-start">
            <img
              src={agent.photo}
              alt={agent.name}
              className="w-36 h-44 sm:w-44 sm:h-52 object-cover object-top rounded-sm border border-[#E9E3D8] shadow-md shrink-0"
            />
            <div className="flex-grow">
              <div className="inline-flex items-center gap-1.5 text-xs text-[#B49A63] font-bold uppercase tracking-wider mb-1">
                <Award className="w-3.5 h-3.5" />
                <span>{agent.yearsExperience} Years Regional Leadership</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#17352D] mb-1">
                {agent.name}
              </h2>
              <p className="text-sm font-semibold text-[#252826]/80 mb-4">{agent.title}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {agent.licenses.map((lic, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 bg-[#F7F4EE] border border-[#E9E3D8] text-[11px] font-mono text-[#17352D] rounded-xs font-semibold"
                  >
                    {lic}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-3 border-t border-[#E9E3D8]">
                <a
                  href={`tel:${agent.phone.replace(/[^0-9]/g, '')}`}
                  className="flex items-center gap-2 text-[#17352D] hover:text-[#B49A63] font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B49A63]" />
                  <span>{agent.phone}</span>
                </a>
                <a
                  href={`mailto:${agent.email}`}
                  className="flex items-center gap-2 text-[#17352D] hover:text-[#B49A63] font-medium"
                >
                  <Mail className="w-3.5 h-3.5 text-[#B49A63]" />
                  <span>{agent.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bio & Specialties */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#17352D]">
                About {agent.name.split(' ')[0]}
              </h3>
              <p className="text-sm text-[#252826]/85 leading-relaxed whitespace-pre-line font-normal">
                {agent.bio}
              </p>
            </div>

            <div className="bg-[#FFFFFF] border border-[#E9E3D8] p-6 rounded-sm space-y-4">
              <h4 className="font-serif text-base font-bold text-[#17352D] border-b border-[#E9E3D8] pb-2">
                Areas of Specialization
              </h4>
              <ul className="space-y-2 text-xs text-[#252826]/85">
                {agent.specialties.map((spec, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B49A63] shrink-0" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <span className="block text-[11px] text-[#252826]/60 uppercase tracking-wider">Career Volume</span>
                <span className="font-serif text-xl font-bold text-[#17352D]">{agent.totalVolume}</span>
              </div>
            </div>
          </div>

          {/* Active Listings by this Agent */}
          {agentProperties.length > 0 && (
            <div>
              <h3 className="font-serif text-xl font-bold text-[#17352D] mb-4">
                Active Listings Represented by {agent.name.split(' ')[0]}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {agentProperties.map((prop) => (
                  <PropertyCard
                    key={prop.id}
                    property={prop}
                    isSaved={isPropertySaved(prop.id)}
                    onToggleSave={onToggleSave}
                    onSelectProperty={(p) => {
                      onClose();
                      onSelectProperty(p);
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Contact Direct Form */}
          <div className="bg-[#FFFFFF] border border-[#E9E3D8] p-6 sm:p-8 rounded-sm shadow-xs">
            <h3 className="font-serif text-xl font-bold text-[#17352D] mb-1">
              Contact {agent.name} Directly
            </h3>
            <p className="text-xs text-[#252826]/75 mb-6">
              Inquire about active listings, request a private showing, or discuss listing your property.
            </p>

            {sent ? (
              <div className="p-6 bg-[#F7F4EE] border border-[#B49A63]/50 rounded-sm text-center">
                <CheckCircle2 className="w-10 h-10 text-[#17352D] mx-auto mb-2" />
                <h4 className="font-serif font-bold text-lg text-[#17352D]">Inquiry Forwarded</h4>
                <p className="text-xs text-[#252826]/80 mt-1">
                  Thank you. {agent.name} has been notified and will reach out promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label htmlFor="agent-contact-name" className="block text-xs font-bold uppercase tracking-wider text-[#17352D] mb-1">
                      Your Name *
                    </label>
                    <input
                      id="agent-contact-name"
                      type="text"
                      required
                      value={messageName}
                      onChange={(e) => setMessageName(e.target.value)}
                      placeholder="Full Name"
                      className="w-full text-xs bg-[#F7F4EE] border border-[#E9E3D8] rounded-sm py-2 px-3 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="agent-contact-phone" className="block text-xs font-bold uppercase tracking-wider text-[#17352D] mb-1">
                      Phone *
                    </label>
                    <input
                      id="agent-contact-phone"
                      type="tel"
                      required
                      value={messagePhone}
                      onChange={(e) => setMessagePhone(e.target.value)}
                      placeholder="(701) 000-0000"
                      className="w-full text-xs bg-[#F7F4EE] border border-[#E9E3D8] rounded-sm py-2 px-3 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="agent-contact-email" className="block text-xs font-bold uppercase tracking-wider text-[#17352D] mb-1">
                      Email
                    </label>
                    <input
                      id="agent-contact-email"
                      type="email"
                      value={messageEmail}
                      onChange={(e) => setMessageEmail(e.target.value)}
                      placeholder="name@email.com"
                      className="w-full text-xs bg-[#F7F4EE] border border-[#E9E3D8] rounded-sm py-2 px-3 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="agent-contact-message" className="block text-xs font-bold uppercase tracking-wider text-[#17352D] mb-1">
                    Message
                  </label>
                  <textarea
                    id="agent-contact-message"
                    rows={3}
                    value={messageBody}
                    onChange={(e) => setMessageBody(e.target.value)}
                    placeholder={`Hello ${agent.name.split(' ')[0]}, I would like to discuss...`}
                    className="w-full text-xs bg-[#F7F4EE] border border-[#E9E3D8] rounded-sm py-2 px-3 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#17352D] hover:bg-[#10241E] text-[#F7F4EE] text-xs font-bold uppercase tracking-wider rounded-sm flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5 text-[#B49A63]" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
