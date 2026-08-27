import React, { useState } from 'react';
import {
  TrendingUp,
  Camera,
  Layers,
  ShieldCheck,
  CheckCircle2,
  DollarSign,
  ArrowRight,
  Send,
  Building,
} from 'lucide-react';

interface SellYourPropertyProps {
  onContactTeam: () => void;
}

export const SellYourProperty: React.FC<SellYourPropertyProps> = ({ onContactTeam }) => {
  const [address, setAddress] = useState('');
  const [propertyType, setPropertyType] = useState('Residential');
  const [estimatedSize, setEstimatedSize] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerPhone, setOwnerPhone] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitValuation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.trim() || !ownerName.trim() || !ownerPhone.trim()) return;
    setSubmitted(true);
  };

  const marketingPillars = [
    {
      icon: TrendingUp,
      title: 'Precision Valuation & Soil Analytics',
      desc: 'Comparative market analysis and agricultural soil productivity (PI) assessment to establish maximum value.',
    },
    {
      icon: Camera,
      title: 'Architectural Media & 4K Drone Aerials',
      desc: 'Professional twilight photography, high-definition drone boundary mapping, and immersive 3D walkthroughs.',
    },
    {
      icon: Layers,
      title: 'Regional & National Syndication',
      desc: 'Featured placement across Dakota MLS networks, LandWatch, Land.com, Crexi, Zillow, and targeted print publications.',
    },
    {
      icon: ShieldCheck,
      title: 'Fiduciary Negotiation & Closing Support',
      desc: 'Protecting your equity through rigorous contract vetting, earnest money oversight, and 1031 exchange coordination.',
    },
  ];

  return (
    <section id="selling" className="py-20 lg:py-32 bg-[#F7F4EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Strategy Overview */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#E9E3D8] text-[#17352D] text-xs font-semibold uppercase tracking-[0.2em] mb-6">
              <TrendingUp className="w-3.5 h-3.5 text-[#B49A63]" />
              Strategic Seller Representation
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#17352D] tracking-tight leading-[1.15] mb-4">
              Thinking About Selling?
            </h2>

            <p className="text-xl font-serif italic text-[#B49A63] mb-6">
              "Your property deserves more than a listing. It deserves a strategy."
            </p>

            <p className="text-sm sm:text-base text-[#252826]/80 leading-relaxed mb-8 font-normal">
              Whether you are preparing to sell a luxury home in Fargo, an executive lakefront lodge, or hundreds of acres of generational farm ground, Dakota Plains Realty crafts a tailored marketing and negotiation strategy designed to maximize your net return.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {marketingPillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div key={i} className="p-4 bg-[#FFFFFF] border border-[#E9E3D8] rounded-sm shadow-xs">
                    <div className="flex items-center gap-2.5 mb-2 font-bold text-sm text-[#17352D]">
                      <Icon className="w-4 h-4 text-[#B49A63]" />
                      <span>{pillar.title}</span>
                    </div>
                    <p className="text-xs text-[#252826]/75 leading-normal font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onContactTeam}
                className="px-6 py-3 bg-[#17352D] hover:bg-[#10241E] text-[#F7F4EE] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors shadow-sm"
              >
                Talk to Our Listing Team
              </button>
              <a
                href="tel:7013641330"
                className="text-xs font-semibold uppercase tracking-wider text-[#17352D] hover:text-[#B49A63] transition-colors"
              >
                Call (701) 364-1330 &rarr;
              </a>
            </div>
          </div>

          {/* Right Interactive Valuation Estimator Card */}
          <div className="lg:col-span-6">
            <div className="bg-[#FFFFFF] border border-[#E9E3D8] p-8 sm:p-10 rounded-sm shadow-xl relative editorial-shadow">
              <div className="absolute top-0 right-0 transform translate-x-3 -translate-y-3 w-16 h-16 border-t-2 border-r-2 border-[#B49A63]/50 pointer-events-none" />

              <div className="mb-6">
                <span className="text-[11px] uppercase tracking-widest font-semibold text-[#B49A63] block mb-1">
                  Complimentary &middot; No Obligation
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#17352D]">
                  Request a Property Valuation
                </h3>
                <p className="text-xs sm:text-sm text-[#252826]/75 mt-1">
                  Receive a comprehensive Comparative Market Analysis (CMA) prepared by a licensed Dakota Plains broker.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-[#F7F4EE] border border-[#B49A63]/50 rounded-sm text-center animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-[#17352D] mx-auto mb-3" />
                  <h4 className="font-serif text-xl font-bold text-[#17352D] mb-2">
                    Valuation Request Received
                  </h4>
                  <p className="text-xs text-[#252826]/80 leading-relaxed mb-4">
                    Thank you, <span className="font-semibold">{ownerName}</span>. One of our regional brokers will review the market comps for <span className="font-semibold">{address}</span> and prepare your confidential valuation report.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setAddress('');
                      setOwnerName('');
                      setOwnerPhone('');
                      setOwnerEmail('');
                    }}
                    className="text-xs font-semibold uppercase tracking-wider text-[#17352D] hover:underline"
                  >
                    Submit Another Property
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitValuation} className="space-y-4">
                  <div>
                    <label htmlFor="valuation-prop-address" className="block text-xs font-bold uppercase tracking-wider text-[#17352D] mb-1">
                      Property Address / Legal Description *
                    </label>
                    <input
                      id="valuation-prop-address"
                      type="text"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="e.g. 1422 Prairie Ridge Rd, Fargo, ND or Sec 14 Cass Co."
                      className="w-full text-xs sm:text-sm bg-[#F7F4EE] border border-[#E9E3D8] rounded-sm py-2.5 px-3 focus:outline-none focus:border-[#17352D]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="valuation-prop-type" className="block text-xs font-bold uppercase tracking-wider text-[#17352D] mb-1">
                        Property Type
                      </label>
                      <select
                        id="valuation-prop-type"
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        className="w-full text-xs sm:text-sm bg-[#F7F4EE] border border-[#E9E3D8] rounded-sm py-2.5 px-3 focus:outline-none cursor-pointer"
                      >
                        <option value="Residential">Residential Home / Acreage</option>
                        <option value="Farm & Ranch">Tillable Farmland / Ranch</option>
                        <option value="Lake">Lakefront Property</option>
                        <option value="Commercial">Commercial / Industrial</option>
                        <option value="Hunting">Hunting / Recreational Tract</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="valuation-prop-size" className="block text-xs font-bold uppercase tracking-wider text-[#17352D] mb-1">
                        Approx. Sq Ft or Acres
                      </label>
                      <input
                        id="valuation-prop-size"
                        type="text"
                        value={estimatedSize}
                        onChange={(e) => setEstimatedSize(e.target.value)}
                        placeholder="e.g. 3,500 sq ft or 160 acres"
                        className="w-full text-xs sm:text-sm bg-[#F7F4EE] border border-[#E9E3D8] rounded-sm py-2.5 px-3 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label htmlFor="valuation-owner-name" className="block text-xs font-bold uppercase tracking-wider text-[#17352D] mb-1">
                        Your Name *
                      </label>
                      <input
                        id="valuation-owner-name"
                        type="text"
                        required
                        value={ownerName}
                        onChange={(e) => setOwnerName(e.target.value)}
                        placeholder="Full Name"
                        className="w-full text-xs sm:text-sm bg-[#F7F4EE] border border-[#E9E3D8] rounded-sm py-2.5 px-3 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="valuation-owner-phone" className="block text-xs font-bold uppercase tracking-wider text-[#17352D] mb-1">
                        Phone *
                      </label>
                      <input
                        id="valuation-owner-phone"
                        type="tel"
                        required
                        value={ownerPhone}
                        onChange={(e) => setOwnerPhone(e.target.value)}
                        placeholder="(701) 000-0000"
                        className="w-full text-xs sm:text-sm bg-[#F7F4EE] border border-[#E9E3D8] rounded-sm py-2.5 px-3 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="valuation-owner-email" className="block text-xs font-bold uppercase tracking-wider text-[#17352D] mb-1">
                        Email
                      </label>
                      <input
                        id="valuation-owner-email"
                        type="email"
                        value={ownerEmail}
                        onChange={(e) => setOwnerEmail(e.target.value)}
                        placeholder="name@email.com"
                        className="w-full text-xs sm:text-sm bg-[#F7F4EE] border border-[#E9E3D8] rounded-sm py-2.5 px-3 focus:outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#17352D] hover:bg-[#10241E] text-[#F7F4EE] text-xs font-bold uppercase tracking-wider rounded-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <Send className="w-4 h-4 text-[#B49A63]" />
                    <span>Request Confidential Valuation</span>
                  </button>

                  <p className="text-[11px] text-[#252826]/60 text-center font-normal">
                    We respect your privacy. Your information is never sold or shared.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
