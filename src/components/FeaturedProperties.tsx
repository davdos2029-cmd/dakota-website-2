import React, { useState } from 'react';
import { Compass, ArrowRight, Sparkles } from 'lucide-react';
import { Property } from '../types';
import { PropertyCard } from './PropertyCard';

interface FeaturedPropertiesProps {
  properties: Property[];
  savedProperties: Property[];
  onToggleSave: (property: Property) => void;
  onSelectProperty: (property: Property) => void;
  onViewAll: () => void;
}

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  properties,
  savedProperties,
  onToggleSave,
  onSelectProperty,
  onViewAll,
}) => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const filterTabs = ['All', 'Residential', 'Farm & Ranch', 'Land', 'Lake Properties', 'Commercial'];

  const filteredProperties = properties.filter((p) => {
    if (activeTab === 'All') return p.featured || true;
    return p.type === activeTab;
  });

  const isPropertySaved = (propertyId: string) => {
    return savedProperties.some((p) => p.id === propertyId);
  };

  return (
    <section id="featured-properties" className="py-20 lg:py-28 bg-[#EDE8DF]/60 border-y border-[#E9E3D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#17352D] text-[#B49A63] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Curated Portfolio
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#17352D] tracking-tight mb-3">
              Featured Properties
            </h2>
            <p className="text-base text-[#252826]/80 leading-relaxed font-normal">
              Explore a selection of premier residential estates, working ranches, fertile acreage, and lakefront retreats currently represented by Dakota Plains Realty.
            </p>
          </div>

          <button
            onClick={onViewAll}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#17352D] hover:bg-[#10241E] text-[#F7F4EE] text-xs font-semibold tracking-wider uppercase rounded-sm transition-all shadow-sm hover:shadow-md self-start md:self-auto shrink-0"
          >
            <span>View All Listings</span>
            <ArrowRight className="w-4 h-4 text-[#B49A63]" />
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all whitespace-nowrap cursor-pointer ${
                activeTab === tab
                  ? 'bg-[#17352D] text-[#F7F4EE] shadow-sm'
                  : 'bg-[#FFFFFF] text-[#252826] hover:bg-[#E9E3D8] border border-[#E9E3D8]'
              }`}
            >
              {tab === 'All' ? 'All Featured' : tab}
            </button>
          ))}
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProperties.slice(0, 6).map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              isSaved={isPropertySaved(property.id)}
              onToggleSave={onToggleSave}
              onSelectProperty={onSelectProperty}
            />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-[#FFFFFF] border border-[#E9E3D8] rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6 editorial-shadow">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="p-3 bg-[#F7F4EE] border border-[#B49A63]/40 text-[#17352D] rounded-sm hidden sm:block">
              <Compass className="w-6 h-6 text-[#B49A63]" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-[#17352D]">
                Looking for confidential or off-market land tracts?
              </h4>
              <p className="text-xs sm:text-sm text-[#252826]/75">
                Our brokers manage private farm succession sales and unlisted commercial portfolios across the Dakotas.
              </p>
            </div>
          </div>
          <button
            onClick={onViewAll}
            className="px-6 py-2.5 bg-[#B49A63] hover:bg-[#C9B382] text-[#10241E] text-xs font-bold uppercase tracking-wider rounded-sm transition-colors whitespace-nowrap shadow-sm"
          >
            Inquire Privately
          </button>
        </div>
      </div>
    </section>
  );
};
