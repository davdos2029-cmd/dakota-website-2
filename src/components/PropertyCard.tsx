import React from 'react';
import { Heart, Bed, Bath, Maximize2, MapPin, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
  isSaved: boolean;
  onToggleSave: (property: Property) => void;
  onSelectProperty: (property: Property) => void;
  layout?: 'grid' | 'list';
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  isSaved,
  onToggleSave,
  onSelectProperty,
  layout = 'grid',
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'For Sale':
      case 'New Listing':
        return 'bg-[#17352D] text-[#F7F4EE] border-[#B49A63]/50';
      case 'Pending':
        return 'bg-[#8C7A58] text-[#F7F4EE] border-[#E9E3D8]/40';
      case 'Price Reduced':
        return 'bg-[#7A2A2A] text-[#F7F4EE] border-white/20';
      case 'Sold':
        return 'bg-[#252826] text-[#E9E3D8] border-white/20';
      default:
        return 'bg-[#17352D] text-[#F7F4EE]';
    }
  };

  if (layout === 'list') {
    return (
      <div className="bg-[#FFFFFF] border border-[#E9E3D8] rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row group">
        {/* Left Image Area */}
        <div className="sm:w-2/5 relative h-64 sm:h-auto overflow-hidden">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

          {/* Badges */}
          <div className="absolute top-3.5 left-3.5 flex flex-col gap-1.5 items-start">
            <span
              className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-sm border ${getStatusBadgeClass(
                property.status
              )}`}
            >
              {property.status}
            </span>
            <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-[#F7F4EE]/90 backdrop-blur-sm text-[#17352D] rounded-sm">
              {property.type}
            </span>
          </div>

          {/* Save Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave(property);
            }}
            className="absolute top-3.5 right-3.5 p-2 rounded-full bg-[#10241E]/70 hover:bg-[#10241E] text-[#F7F4EE] backdrop-blur-sm transition-transform active:scale-90"
            title={isSaved ? 'Remove from saved' : 'Save property'}
            aria-label="Save Property"
          >
            <Heart className={`w-4 h-4 ${isSaved ? 'fill-[#B49A63] text-[#B49A63]' : 'text-white'}`} />
          </button>

          {/* MLS info */}
          <div className="absolute bottom-3 left-3 text-[10px] text-white/80 font-mono">
            {property.mlsNumber}
          </div>
        </div>

        {/* Right Info Area */}
        <div className="sm:w-3/5 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-baseline justify-between mb-2">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#17352D]">
                {formatPrice(property.price)}
              </span>
              {property.features.financial?.soilPI && (
                <span className="text-xs font-semibold px-2 py-0.5 bg-[#E9E3D8] text-[#17352D] rounded-sm">
                  Soil PI: {property.features.financial.soilPI}
                </span>
              )}
            </div>

            <h3
              onClick={() => onSelectProperty(property)}
              className="font-serif text-xl font-bold text-[#252826] hover:text-[#17352D] cursor-pointer mb-2 line-clamp-1 transition-colors"
            >
              {property.title}
            </h3>

            <div className="flex items-center gap-1.5 text-xs text-[#252826]/70 mb-3">
              <MapPin className="w-3.5 h-3.5 text-[#B49A63] shrink-0" />
              <span>
                {property.address}, {property.city}, {property.state} {property.zip}
              </span>
            </div>

            <p className="text-sm text-[#252826]/80 line-clamp-2 mb-4 font-normal">
              {property.shortDescription}
            </p>
          </div>

          {/* Specs Bar */}
          <div className="pt-4 border-t border-[#E9E3D8] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-4 text-xs font-medium text-[#252826]/90">
              {property.beds !== undefined && (
                <div className="flex items-center gap-1">
                  <Bed className="w-4 h-4 text-[#B49A63]" />
                  <span>{property.beds} Beds</span>
                </div>
              )}
              {property.baths !== undefined && (
                <div className="flex items-center gap-1">
                  <Bath className="w-4 h-4 text-[#B49A63]" />
                  <span>{property.baths} Baths</span>
                </div>
              )}
              {property.sqft !== undefined && (
                <div className="flex items-center gap-1">
                  <Maximize2 className="w-4 h-4 text-[#B49A63]" />
                  <span>{property.sqft.toLocaleString()} Sq Ft</span>
                </div>
              )}
              <div className="flex items-center gap-1">
                <Compass className="w-4 h-4 text-[#B49A63]" />
                <span>{property.acres} Acres</span>
              </div>
            </div>

            <button
              onClick={() => onSelectProperty(property)}
              className="px-4 py-2 bg-[#17352D] hover:bg-[#10241E] text-[#F7F4EE] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center gap-1.5"
            >
              <span>View Property</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Grid Layout (Default)
  return (
    <div className="bg-[#FFFFFF] border border-[#E9E3D8] rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group h-full">
      {/* Top Image Container */}
      <div className="relative h-64 overflow-hidden cursor-pointer" onClick={() => onSelectProperty(property)}>
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover object-center transform group-hover:scale-106 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 flex flex-col gap-1.5 items-start">
          <span
            className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-sm border ${getStatusBadgeClass(
              property.status
            )}`}
          >
            {property.status}
          </span>
          <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-[#F7F4EE]/90 backdrop-blur-sm text-[#17352D] rounded-sm">
            {property.type}
          </span>
        </div>

        {/* Save Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave(property);
          }}
          className="absolute top-3.5 right-3.5 p-2 rounded-full bg-[#10241E]/70 hover:bg-[#10241E] text-[#F7F4EE] backdrop-blur-sm transition-transform active:scale-90 shadow-sm"
          title={isSaved ? 'Remove from saved' : 'Save property'}
          aria-label="Save Property"
        >
          <Heart className={`w-4 h-4 ${isSaved ? 'fill-[#B49A63] text-[#B49A63]' : 'text-white'}`} />
        </button>

        {/* Bottom Image Overlay: Price */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-[#F7F4EE]">
          <div>
            <span className="font-serif text-2xl font-bold tracking-tight drop-shadow-md text-[#FFFFFF]">
              {formatPrice(property.price)}
            </span>
          </div>
          {property.features.financial?.soilPI && (
            <span className="text-[11px] font-bold px-2 py-0.5 bg-[#B49A63] text-[#10241E] rounded-sm shadow-sm">
              PI {property.features.financial.soilPI}
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <h3
            onClick={() => onSelectProperty(property)}
            className="font-serif text-lg font-bold text-[#252826] hover:text-[#17352D] cursor-pointer mb-1.5 line-clamp-1 transition-colors"
          >
            {property.title}
          </h3>

          <div className="flex items-center gap-1.5 text-xs text-[#252826]/70 mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#B49A63] shrink-0" />
            <span className="truncate">
              {property.address}, {property.city}, {property.state}
            </span>
          </div>

          <p className="text-xs text-[#252826]/80 line-clamp-2 mb-4 leading-relaxed">
            {property.shortDescription}
          </p>
        </div>

        {/* Specs Grid */}
        <div className="pt-3 border-t border-[#E9E3D8]">
          <div className="grid grid-cols-3 gap-2 text-center text-xs font-medium text-[#252826]/90 mb-4 bg-[#F7F4EE]/60 py-2 px-2 rounded-sm">
            {property.beds !== undefined ? (
              <div className="flex flex-col items-center">
                <span className="text-[10px] text-[#252826]/60 uppercase">Beds</span>
                <span className="font-semibold text-[#17352D]">{property.beds}</span>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <span className="text-[10px] text-[#252826]/60 uppercase">Acres</span>
                <span className="font-semibold text-[#17352D]">{property.acres}</span>
              </div>
            )}

            {property.baths !== undefined ? (
              <div className="flex flex-col items-center border-x border-[#E9E3D8]">
                <span className="text-[10px] text-[#252826]/60 uppercase">Baths</span>
                <span className="font-semibold text-[#17352D]">{property.baths}</span>
              </div>
            ) : (
              <div className="flex flex-col items-center border-x border-[#E9E3D8]">
                <span className="text-[10px] text-[#252826]/60 uppercase">County</span>
                <span className="font-semibold text-[#17352D] truncate max-w-[70px]">{property.county.replace(' County', '')}</span>
              </div>
            )}

            {property.sqft !== undefined ? (
              <div className="flex flex-col items-center">
                <span className="text-[10px] text-[#252826]/60 uppercase">Sq Ft</span>
                <span className="font-semibold text-[#17352D]">{property.sqft.toLocaleString()}</span>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <span className="text-[10px] text-[#252826]/60 uppercase">Type</span>
                <span className="font-semibold text-[#17352D] truncate max-w-[70px]">{property.type}</span>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[11px] text-[#252826]/60 font-mono">
              MLS #{property.mlsNumber.replace('MLS-26-', '')}
            </span>

            <button
              onClick={() => onSelectProperty(property)}
              className="px-3 py-1.5 bg-[#17352D] hover:bg-[#10241E] text-[#F7F4EE] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center gap-1"
            >
              <span>View Property</span>
              <ArrowUpRight className="w-3 h-3 text-[#B49A63]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
