import React, { useState } from 'react';
import { MapPin, Compass, ArrowRight, CheckCircle2, Building, Trees, Waves } from 'lucide-react';
import { SERVICE_REGIONS } from '../data/resources';
import { ServiceRegion } from '../types';

interface ServiceAreaMapProps {
  onSelectRegion: (cityKeyword: string) => void;
}

export const ServiceAreaMap: React.FC<ServiceAreaMapProps> = ({ onSelectRegion }) => {
  const [activeRegionId, setActiveRegionId] = useState<string>(SERVICE_REGIONS[0].id);

  const activeRegion = SERVICE_REGIONS.find((r) => r.id === activeRegionId) || SERVICE_REGIONS[0];

  return (
    <section id="service-areas" className="py-20 lg:py-28 bg-[#EDE8DF]/50 border-t border-[#E9E3D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#17352D] text-[#B49A63] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Compass className="w-3.5 h-3.5" />
            Regional Coverage
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#17352D] tracking-tight mb-4">
            Serving the Dakotas &amp; Beyond
          </h2>
          <p className="text-base text-[#252826]/80 font-normal leading-relaxed">
            Full brokerage licensure and established on-the-ground presence across North Dakota, South Dakota, and Minnesota.
          </p>
        </div>

        {/* Region Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {SERVICE_REGIONS.map((region) => (
            <button
              key={region.id}
              onClick={() => setActiveRegionId(region.id)}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all flex items-center gap-2 cursor-pointer ${
                activeRegionId === region.id
                  ? 'bg-[#17352D] text-[#F7F4EE] shadow-md ring-2 ring-[#B49A63]/50'
                  : 'bg-[#FFFFFF] text-[#252826] hover:bg-[#E9E3D8] border border-[#E9E3D8]'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  activeRegionId === region.id ? 'bg-[#B49A63]' : 'bg-[#17352D]/40'
                }`}
              />
              <span>{region.name}</span>
            </button>
          ))}
        </div>

        {/* Region Interactive Feature Box */}
        <div className="bg-[#FFFFFF] border border-[#E9E3D8] rounded-sm shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 editorial-shadow">
          {/* Left Column: Stylized Vector Map & Hubs */}
          <div className="lg:col-span-6 p-8 sm:p-10 bg-[#17352D] text-[#F7F4EE] flex flex-col justify-between relative overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#B49A63_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs uppercase tracking-widest font-mono text-[#B49A63]">
                  LICENSED JURISDICTION &middot; STATE OF {activeRegion.state}
                </span>
                <span className="px-2.5 py-1 bg-[#10241E] text-[#E9E3D8] text-[10px] font-bold rounded-sm border border-white/10">
                  {activeRegion.state} Active Brokerage
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F4EE] mb-2">
                {activeRegion.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#B49A63] italic font-serif mb-6">
                "{activeRegion.tagline}"
              </p>

              <p className="text-xs sm:text-sm text-[#E9E3D8]/85 leading-relaxed mb-8">
                {activeRegion.description}
              </p>

              {/* Key Metro Hubs */}
              <div className="mb-8">
                <span className="block text-xs uppercase tracking-wider text-[#B49A63] font-semibold mb-3">
                  Key Municipalities &amp; Counties Served:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeRegion.keyHubs.map((hub, i) => (
                    <button
                      key={i}
                      onClick={() => onSelectRegion(hub)}
                      className="px-3 py-1.5 bg-[#10241E]/80 hover:bg-[#B49A63] hover:text-[#10241E] text-xs font-semibold text-[#F7F4EE] rounded-sm border border-white/15 transition-colors flex items-center gap-1.5"
                      title={`Filter properties in ${hub}`}
                    >
                      <MapPin className="w-3 h-3 text-[#B49A63]" />
                      <span>{hub}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Regional CTA */}
            <div className="relative z-10 pt-6 border-t border-white/15 flex items-center justify-between">
              <button
                onClick={() => onSelectRegion(activeRegion.keyHubs[0])}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#B49A63] hover:text-[#F7F4EE] transition-colors"
              >
                <span>View {activeRegion.name} Listings</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-[11px] text-[#E9E3D8]/60 font-mono">
                Dakota Plains Realty MLS Feed
              </span>
            </div>
          </div>

          {/* Right Column: Visual Photo & Specialties */}
          <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-[auto] flex flex-col justify-end p-8">
            <img
              src={activeRegion.image}
              alt={activeRegion.name}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10241E] via-[#10241E]/40 to-transparent" />

            <div className="relative z-10 text-[#F7F4EE] bg-[#10241E]/80 backdrop-blur-sm p-6 rounded-sm border border-white/10">
              <h4 className="font-serif text-lg font-bold text-[#F7F4EE] mb-2">
                Regional Property Highlights
              </h4>
              <ul className="space-y-2 text-xs text-[#E9E3D8]/90 mb-4">
                {activeRegion.propertyHighlights.map((hl, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B49A63] shrink-0" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onSelectRegion(activeRegion.keyHubs[0])}
                className="w-full py-2.5 bg-[#B49A63] hover:bg-[#C9B382] text-[#10241E] text-xs font-bold uppercase tracking-wider rounded-sm transition-colors text-center"
              >
                Search {activeRegion.name}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
