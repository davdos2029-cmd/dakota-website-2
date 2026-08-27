import React, { useState } from 'react';
import { Search, MapPin, Building, DollarSign, Home, SlidersHorizontal, CheckCircle2 } from 'lucide-react';
import { FilterState } from '../types';

interface HeroProps {
  onSearch: (filters: Partial<FilterState>) => void;
  onTalkToAgent: () => void;
  onExploreProperties: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSearch,
  onTalkToAgent,
  onExploreProperties,
}) => {
  const [propertyType, setPropertyType] = useState('All');
  const [location, setLocation] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [minBeds, setMinBeds] = useState('All');
  const [status, setStatus] = useState('For Sale');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let minPrice = 0;
    let maxPrice = 10000000;

    if (priceRange === 'under-500k') {
      maxPrice = 500000;
    } else if (priceRange === '500k-1m') {
      minPrice = 500000;
      maxPrice = 1000000;
    } else if (priceRange === '1m-2m') {
      minPrice = 1000000;
      maxPrice = 2000000;
    } else if (priceRange === '2m-plus') {
      minPrice = 2000000;
    }

    onSearch({
      type: propertyType === 'All' ? '' : propertyType,
      city: location === 'All' ? '' : location,
      minPrice,
      maxPrice,
      minBeds: minBeds === 'All' ? 0 : parseInt(minBeds, 10),
      status: status === 'All' ? '' : status,
    });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between bg-[#10241E] text-[#F7F4EE] pt-28 pb-16 lg:pb-24 overflow-hidden">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=85"
          alt="Dakota Plains rolling ranch and prairie at golden hour"
          className="w-full h-full object-cover object-center transform scale-105 animate-subtleZoom"
        />
        {/* Multi-tier gradient overlay for readability and rich depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#10241E] via-[#10241E]/60 to-[#10241E]/40" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#10241E]/80 mix-blend-multiply" />
      </div>

      {/* Hero Central Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col justify-center py-12 lg:py-16">
        <div className="max-w-3xl">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#17352D]/80 border border-[#B49A63]/50 text-[#F7F4EE] text-xs font-semibold tracking-[0.25em] uppercase mb-6 backdrop-blur-sm shadow-sm animate-fadeIn">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B49A63]" />
            DAKOTA PLAINS REALTY &middot; LICENSED IN ND, SD &amp; MN
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[#F7F4EE] leading-[1.08] mb-6 drop-shadow-sm">
            Find a Place Worth <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#E9E3D8]">Calling Home.</span>
          </h1>

          {/* Supporting Subtitle */}
          <p className="text-lg sm:text-xl text-[#E9E3D8]/90 font-normal leading-relaxed mb-8 max-w-2xl">
            Real estate rooted in local knowledge, trusted relationships, and the land we call home across North Dakota, South Dakota, and Minnesota.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-8">
            <button
              onClick={onExploreProperties}
              className="px-7 py-3.5 bg-[#B49A63] hover:bg-[#C9B382] text-[#10241E] font-semibold text-sm tracking-wider uppercase rounded-sm shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Search className="w-4 h-4" />
              Explore Properties
            </button>

            <button
              onClick={onTalkToAgent}
              className="px-7 py-3.5 bg-transparent hover:bg-[#F7F4EE]/10 text-[#F7F4EE] border border-[#F7F4EE]/60 font-semibold text-sm tracking-wider uppercase rounded-sm transition-all duration-200"
            >
              Talk to an Agent
            </button>
          </div>

          {/* Quick Trust Highlights */}
          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/10 text-xs text-[#E9E3D8]/80">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#B49A63]" />
              <span>Residential &amp; Luxury Homes</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#B49A63]" />
              <span>Tillable Farmland &amp; Working Ranches</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#B49A63]" />
              <span>Lakes Country &amp; Commercial</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Property Search Panel (Overlapping bottom) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#F7F4EE] text-[#252826] rounded-sm p-5 sm:p-7 shadow-2xl border border-[#E9E3D8] editorial-shadow">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E9E3D8]">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-[#17352D] text-[#B49A63] rounded-sm">
                <SlidersHorizontal className="w-4 h-4" />
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#17352D] tracking-tight">
                Find Your Property
              </h2>
            </div>
            <span className="hidden sm:inline-block text-xs uppercase tracking-widest text-[#B49A63] font-semibold">
              Live Regional Listings
            </span>
          </div>

          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 lg:gap-4 items-end">
            {/* Property Type */}
            <div>
              <label htmlFor="hero-prop-type" className="block text-xs font-semibold text-[#17352D] uppercase tracking-wider mb-1.5">
                Property Type
              </label>
              <div className="relative">
                <select
                  id="hero-prop-type"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full bg-[#FFFFFF] border border-[#E9E3D8] text-[#252826] text-sm py-2.5 px-3 rounded-sm focus:outline-none focus:border-[#17352D] focus:ring-1 focus:ring-[#17352D] transition-colors appearance-none font-medium cursor-pointer"
                >
                  <option value="All">All Property Types</option>
                  <option value="Residential">Residential Homes</option>
                  <option value="Farm & Ranch">Farm &amp; Working Ranch</option>
                  <option value="Land">Tillable Land / Acreage</option>
                  <option value="Hunting & Recreational">Hunting &amp; Recreational</option>
                  <option value="Lake Properties">Lake Properties</option>
                  <option value="Commercial">Commercial / Industrial</option>
                </select>
                <Building className="w-4 h-4 text-[#B49A63] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Location */}
            <div>
              <label htmlFor="hero-prop-location" className="block text-xs font-semibold text-[#17352D] uppercase tracking-wider mb-1.5">
                Location
              </label>
              <div className="relative">
                <select
                  id="hero-prop-location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-[#FFFFFF] border border-[#E9E3D8] text-[#252826] text-sm py-2.5 px-3 rounded-sm focus:outline-none focus:border-[#17352D] focus:ring-1 focus:ring-[#17352D] transition-colors appearance-none font-medium cursor-pointer"
                >
                  <option value="All">All Regional Markets</option>
                  <option value="Fargo">Fargo &amp; West Fargo, ND</option>
                  <option value="Bismarck">Bismarck &amp; Mandan, ND</option>
                  <option value="Grand Forks">Grand Forks, ND</option>
                  <option value="Sioux Falls">Sioux Falls, SD</option>
                  <option value="Aberdeen">Aberdeen, SD</option>
                  <option value="Pelican Rapids">Pelican Rapids &amp; MN Lakes</option>
                  <option value="Ortonville">Big Stone Lake, MN</option>
                </select>
                <MapPin className="w-4 h-4 text-[#B49A63] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Price Range */}
            <div>
              <label htmlFor="hero-prop-price" className="block text-xs font-semibold text-[#17352D] uppercase tracking-wider mb-1.5">
                Price Range
              </label>
              <div className="relative">
                <select
                  id="hero-prop-price"
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full bg-[#FFFFFF] border border-[#E9E3D8] text-[#252826] text-sm py-2.5 px-3 rounded-sm focus:outline-none focus:border-[#17352D] focus:ring-1 focus:ring-[#17352D] transition-colors appearance-none font-medium cursor-pointer"
                >
                  <option value="All">Any Price</option>
                  <option value="under-500k">Under $500,000</option>
                  <option value="500k-1m">$500,000 - $1,000,000</option>
                  <option value="1m-2m">$1,000,000 - $2,000,000</option>
                  <option value="2m-plus">$2,000,000+</option>
                </select>
                <DollarSign className="w-4 h-4 text-[#B49A63] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Bedrooms / Size */}
            <div>
              <label htmlFor="hero-prop-beds" className="block text-xs font-semibold text-[#17352D] uppercase tracking-wider mb-1.5">
                Bedrooms
              </label>
              <div className="relative">
                <select
                  id="hero-prop-beds"
                  value={minBeds}
                  onChange={(e) => setMinBeds(e.target.value)}
                  className="w-full bg-[#FFFFFF] border border-[#E9E3D8] text-[#252826] text-sm py-2.5 px-3 rounded-sm focus:outline-none focus:border-[#17352D] focus:ring-1 focus:ring-[#17352D] transition-colors appearance-none font-medium cursor-pointer"
                >
                  <option value="All">Any Bedrooms</option>
                  <option value="3">3+ Bedrooms</option>
                  <option value="4">4+ Bedrooms</option>
                  <option value="5">5+ Bedrooms</option>
                </select>
                <Home className="w-4 h-4 text-[#B49A63] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Search Action Button */}
            <div className="sm:col-span-2 lg:col-span-1">
              <button
                type="submit"
                className="w-full bg-[#17352D] hover:bg-[#10241E] text-[#F7F4EE] font-semibold text-sm uppercase tracking-wider py-2.5 px-4 rounded-sm shadow-md transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Search className="w-4 h-4 text-[#B49A63] group-hover:scale-110 transition-transform" />
                <span>Search</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
