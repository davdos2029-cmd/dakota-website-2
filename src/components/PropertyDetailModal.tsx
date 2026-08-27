import React, { useState } from 'react';
import {
  X,
  MapPin,
  Bed,
  Bath,
  Maximize,
  Compass,
  DollarSign,
  Heart,
  Share2,
  Printer,
  Calendar,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle2,
  Calculator,
  Trees,
  Award,
  ChevronLeft,
  ChevronRight,
  Send,
} from 'lucide-react';
import { Property, Agent } from '../types';

interface PropertyDetailModalProps {
  property: Property | null;
  agent?: Agent;
  isSaved: boolean;
  onClose: () => void;
  onToggleSave: (property: Property) => void;
  onContactBroker: (property: Property, agent?: Agent) => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  agent,
  isSaved,
  onClose,
  onToggleSave,
  onContactBroker,
}) => {
  if (!property) return null;

  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'land' | 'calculator'>('overview');

  // Calculator State
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [loanTermYears, setLoanTermYears] = useState(30);
  const [interestRate, setInterestRate] = useState(6.5);

  // Calculate Loan Payment
  const loanAmount = property.price * (1 - downPaymentPercent / 100);
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTermYears * 12;
  const monthlyPrincipalInterest =
    loanAmount > 0 && monthlyRate > 0
      ? (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
      : 0;

  const estimatedTax = (property.price * 0.012) / 12;
  const estimatedInsurance = (property.price * 0.004) / 12;
  const totalMonthlyPayment = Math.round(monthlyPrincipalInterest + estimatedTax + estimatedInsurance);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${property.title} | Dakota Plains Realty`,
        text: `Check out this listing: ${property.title} in ${property.city}, ${property.state}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Listing link copied to clipboard!');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 lg:p-6 animate-fadeIn">
      <div className="bg-[#F7F4EE] w-full max-w-5xl rounded-sm shadow-2xl overflow-hidden border border-[#E9E3D8] my-auto flex flex-col max-h-[92vh]">
        {/* Modal Top Header Bar */}
        <div className="bg-[#17352D] text-[#F7F4EE] px-6 py-4 flex items-center justify-between border-b border-[#B49A63]/30 shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest font-mono text-[#B49A63]">
              MLS #{property.mlsNumber} &middot; {property.type}
            </span>
            <span className="text-xs px-2 py-0.5 rounded-xs font-semibold bg-[#B49A63] text-[#10241E]">
              {property.status}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleSave(property)}
              className={`p-2 rounded-sm text-xs flex items-center gap-1.5 transition-colors ${
                isSaved
                  ? 'bg-red-900/80 text-white border border-red-500'
                  : 'bg-[#10241E] text-[#E9E3D8] hover:text-[#B49A63]'
              }`}
              title={isSaved ? 'Saved to Favorites' : 'Save Property'}
            >
              <Heart className={`w-4 h-4 ${isSaved ? 'fill-red-500 text-red-500' : ''}`} />
              <span className="hidden sm:inline">{isSaved ? 'Saved' : 'Save'}</span>
            </button>

            <button
              onClick={handleShare}
              className="p-2 bg-[#10241E] text-[#E9E3D8] hover:text-[#B49A63] rounded-sm transition-colors"
              title="Share Listing"
            >
              <Share2 className="w-4 h-4" />
            </button>

            <button
              onClick={handlePrint}
              className="p-2 bg-[#10241E] text-[#E9E3D8] hover:text-[#B49A63] rounded-sm transition-colors hidden sm:block"
              title="Print Brochure"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 text-[#E9E3D8] hover:text-white hover:bg-white/10 rounded-sm transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-grow">
          {/* Main Photo Gallery Hero */}
          <div className="space-y-3">
            <div className="relative h-[320px] sm:h-[440px] bg-black rounded-sm overflow-hidden group">
              <img
                src={property.images[activePhotoIndex] || property.images[0]}
                alt={property.title}
                className="w-full h-full object-cover object-center"
              />

              {property.images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setActivePhotoIndex(
                        (prev) => (prev - 1 + property.images.length) % property.images.length
                      )
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/60 text-white rounded-sm hover:bg-black transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      setActivePhotoIndex((prev) => (prev + 1) % property.images.length)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/60 text-white rounded-sm hover:bg-black transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1 text-xs rounded-sm font-mono">
                {activePhotoIndex + 1} / {property.images.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {property.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {property.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePhotoIndex(i)}
                    className={`relative w-20 h-14 shrink-0 rounded-sm overflow-hidden border-2 transition-all ${
                      activePhotoIndex === i ? 'border-[#17352D] scale-102' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumb ${i}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Title, Address & Pricing Overview */}
          <div className="bg-[#FFFFFF] border border-[#E9E3D8] p-6 sm:p-8 rounded-sm shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#B49A63] uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4" />
                <span>{property.county} County &middot; {property.city}, {property.state} {property.zip}</span>
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#17352D] mb-2">
                {property.title}
              </h1>
              <p className="text-sm text-[#252826]/75 font-normal">
                {property.address}, {property.city}, {property.state} {property.zip}
              </p>
            </div>

            <div className="text-left md:text-right border-t md:border-t-0 pt-4 md:pt-0 border-[#E9E3D8]">
              <span className="text-xs uppercase tracking-widest text-[#252826]/60 font-semibold block">
                Offered At
              </span>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#17352D]">
                {formatCurrency(property.price)}
              </span>
              {property.acres > 0 && (
                <span className="block text-xs text-[#B49A63] font-semibold mt-1">
                  ${Math.round(property.price / property.acres).toLocaleString()} / Acre
                </span>
              )}
            </div>
          </div>

          {/* Key Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {property.beds && property.beds > 0 ? (
              <div className="p-4 bg-[#FFFFFF] border border-[#E9E3D8] rounded-sm text-center">
                <Bed className="w-5 h-5 text-[#B49A63] mx-auto mb-1.5" />
                <span className="font-serif text-xl font-bold text-[#17352D] block">
                  {property.beds}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-[#252826]/70">Bedrooms</span>
              </div>
            ) : null}

            {property.baths && property.baths > 0 ? (
              <div className="p-4 bg-[#FFFFFF] border border-[#E9E3D8] rounded-sm text-center">
                <Bath className="w-5 h-5 text-[#B49A63] mx-auto mb-1.5" />
                <span className="font-serif text-xl font-bold text-[#17352D] block">
                  {property.baths}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-[#252826]/70">Bathrooms</span>
              </div>
            ) : null}

            {property.acres > 0 ? (
              <div className="p-4 bg-[#FFFFFF] border border-[#E9E3D8] rounded-sm text-center">
                <Compass className="w-5 h-5 text-[#B49A63] mx-auto mb-1.5" />
                <span className="font-serif text-xl font-bold text-[#17352D] block">
                  {property.acres.toLocaleString()}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-[#252826]/70">Total Acres</span>
              </div>
            ) : null}

            {property.sqft && property.sqft > 0 ? (
              <div className="p-4 bg-[#FFFFFF] border border-[#E9E3D8] rounded-sm text-center">
                <Maximize className="w-5 h-5 text-[#B49A63] mx-auto mb-1.5" />
                <span className="font-serif text-xl font-bold text-[#17352D] block">
                  {property.sqft.toLocaleString()}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-[#252826]/70">Square Feet</span>
              </div>
            ) : null}
          </div>

          {/* Tab Navigation */}
          <div className="border-b border-[#E9E3D8] flex gap-4 overflow-x-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-3 text-xs font-bold uppercase tracking-wider cursor-pointer border-b-2 transition-colors ${
                activeTab === 'overview'
                  ? 'border-[#17352D] text-[#17352D]'
                  : 'border-transparent text-[#252826]/60 hover:text-[#17352D]'
              }`}
            >
              Description &amp; Overview
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`pb-3 text-xs font-bold uppercase tracking-wider cursor-pointer border-b-2 transition-colors ${
                activeTab === 'features'
                  ? 'border-[#17352D] text-[#17352D]'
                  : 'border-transparent text-[#252826]/60 hover:text-[#17352D]'
              }`}
            >
              Property Features &amp; Amenities
            </button>
            {(property.tillableAcres || property.soilProductivity || property.waterRights) && (
              <button
                onClick={() => setActiveTab('land')}
                className={`pb-3 text-xs font-bold uppercase tracking-wider cursor-pointer border-b-2 transition-colors ${
                  activeTab === 'land'
                    ? 'border-[#17352D] text-[#17352D]'
                    : 'border-transparent text-[#252826]/60 hover:text-[#17352D]'
                }`}
              >
                Agricultural &amp; Soil Specs
              </button>
            )}
            <button
              onClick={() => setActiveTab('calculator')}
              className={`pb-3 text-xs font-bold uppercase tracking-wider cursor-pointer border-b-2 transition-colors ${
                activeTab === 'calculator'
                  ? 'border-[#17352D] text-[#17352D]'
                  : 'border-transparent text-[#252826]/60 hover:text-[#17352D]'
              }`}
            >
              Payment Estimator
            </button>
          </div>

          {/* Tab Content Panels */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#17352D] mb-3">
                  Property Description
                </h3>
                <p className="text-sm sm:text-base text-[#252826]/85 font-normal leading-relaxed whitespace-pre-line">
                  {property.description}
                </p>
              </div>

              {/* Highlights List */}
              {property.highlights && property.highlights.length > 0 && (
                <div className="p-6 bg-[#FFFFFF] border border-[#E9E3D8] rounded-sm">
                  <h4 className="font-serif text-base font-bold text-[#17352D] mb-4">
                    Key Highlights &amp; Characteristics
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {property.highlights.map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#252826]/90">
                        <CheckCircle2 className="w-4 h-4 text-[#B49A63] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'features' && (
            <div className="bg-[#FFFFFF] border border-[#E9E3D8] p-6 rounded-sm space-y-6">
              <h3 className="font-serif text-xl font-bold text-[#17352D] mb-4">
                Detailed Property Specifications
              </h3>

              {property.features.interior && property.features.interior.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#B49A63] mb-3">
                    Interior &amp; Architecture
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {property.features.interior.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 p-2.5 bg-[#F7F4EE] rounded-xs border border-[#E9E3D8] text-xs font-medium text-[#17352D]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B49A63] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {property.features.exterior && property.features.exterior.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#B49A63] mb-3">
                    Exterior &amp; Grounds
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {property.features.exterior.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 p-2.5 bg-[#F7F4EE] rounded-xs border border-[#E9E3D8] text-xs font-medium text-[#17352D]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B49A63] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {property.features.landAndSoil && property.features.landAndSoil.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#B49A63] mb-3">
                    Land, Soil &amp; Agricultural Infrastructure
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {property.features.landAndSoil.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 p-2.5 bg-[#F7F4EE] rounded-xs border border-[#E9E3D8] text-xs font-medium text-[#17352D]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B49A63] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {property.features.utilities && property.features.utilities.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#B49A63] mb-3">
                    Utilities &amp; Mechanical Systems
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {property.features.utilities.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 p-2.5 bg-[#F7F4EE] rounded-xs border border-[#E9E3D8] text-xs font-medium text-[#17352D]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B49A63] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {property.features.financial && (
                <div className="p-4 bg-[#F7F4EE] rounded-xs border border-[#E9E3D8]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#17352D] mb-2">
                    Tax &amp; Financial Information
                  </h4>
                  <div className="flex flex-wrap gap-6 text-xs text-[#252826]/80">
                    {property.features.financial.annualTaxes && (
                      <div>
                        <span className="text-[#252826]/60">Annual Taxes: </span>
                        <span className="font-bold text-[#17352D]">${property.features.financial.annualTaxes.toLocaleString()} ({property.features.financial.taxYear || '2025'})</span>
                      </div>
                    )}
                    {property.features.financial.hoaFee !== undefined && (
                      <div>
                        <span className="text-[#252826]/60">HOA Fee: </span>
                        <span className="font-bold text-[#17352D]">${property.features.financial.hoaFee}/mo</span>
                      </div>
                    )}
                    {property.features.financial.soilPI !== undefined && (
                      <div>
                        <span className="text-[#252826]/60">Soil PI: </span>
                        <span className="font-bold text-[#B49A63]">{property.features.financial.soilPI}/100</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'land' && (
            <div className="bg-[#FFFFFF] border border-[#E9E3D8] p-6 rounded-sm space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#17352D]">
                <Trees className="w-4 h-4 text-[#B49A63]" />
                <span>Agricultural &amp; Soil Analysis</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                {property.tillableAcres && (
                  <div className="p-4 bg-[#F7F4EE] rounded-sm border border-[#E9E3D8]">
                    <span className="block text-[11px] text-[#252826]/70 uppercase tracking-wider">Tillable Acreage</span>
                    <span className="font-serif text-2xl font-bold text-[#17352D]">{property.tillableAcres} Acres</span>
                  </div>
                )}

                {property.soilProductivity && (
                  <div className="p-4 bg-[#F7F4EE] rounded-sm border border-[#E9E3D8]">
                    <span className="block text-[11px] text-[#252826]/70 uppercase tracking-wider">Productivity Index (PI)</span>
                    <span className="font-serif text-2xl font-bold text-[#B49A63]">{property.soilProductivity} / 100</span>
                  </div>
                )}

                {property.waterRights && (
                  <div className="p-4 bg-[#F7F4EE] rounded-sm border border-[#E9E3D8]">
                    <span className="block text-[11px] text-[#252826]/70 uppercase tracking-wider">Water &amp; Irrigation</span>
                    <span className="font-medium text-xs text-[#17352D] block mt-1">{property.waterRights}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'calculator' && (
            <div className="bg-[#FFFFFF] border border-[#E9E3D8] p-6 sm:p-8 rounded-sm shadow-xs space-y-6">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[#B49A63]" />
                <h3 className="font-serif text-xl font-bold text-[#17352D]">
                  Estimated Monthly Investment
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 space-y-4 text-xs">
                  <div>
                    <div className="flex justify-between font-semibold text-[#17352D] mb-1">
                      <span>Down Payment ({downPaymentPercent}%)</span>
                      <span>{formatCurrency(property.price * (downPaymentPercent / 100))}</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="50"
                      step="5"
                      value={downPaymentPercent}
                      onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                      className="w-full accent-[#17352D]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="calc-interest-rate" className="block font-semibold text-[#17352D] mb-1">Interest Rate (%)</label>
                      <input
                        id="calc-interest-rate"
                        type="number"
                        step="0.1"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-full bg-[#F7F4EE] border border-[#E9E3D8] rounded-sm py-2 px-3 text-xs"
                      />
                    </div>
                    <div>
                      <label htmlFor="calc-loan-term" className="block font-semibold text-[#17352D] mb-1">Loan Term</label>
                      <select
                        id="calc-loan-term"
                        value={loanTermYears}
                        onChange={(e) => setLoanTermYears(Number(e.target.value))}
                        className="w-full bg-[#F7F4EE] border border-[#E9E3D8] rounded-sm py-2 px-3 text-xs"
                      >
                        <option value={15}>15 Years Fixed</option>
                        <option value={20}>20 Years (Land Loan)</option>
                        <option value={30}>30 Years Fixed</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-5 bg-[#17352D] text-[#F7F4EE] p-6 rounded-sm text-center">
                  <span className="text-[11px] uppercase tracking-widest text-[#B49A63] font-semibold block mb-1">
                    Estimated Total Monthly
                  </span>
                  <div className="font-serif text-3xl font-bold text-[#F7F4EE] mb-3">
                    ${totalMonthlyPayment.toLocaleString()} <span className="text-xs font-sans font-normal text-[#E9E3D8]/70">/mo</span>
                  </div>
                  <div className="space-y-1 text-[11px] text-[#E9E3D8]/80 text-left border-t border-white/10 pt-3">
                    <div className="flex justify-between">
                      <span>Principal &amp; Interest:</span>
                      <span className="font-mono">${Math.round(monthlyPrincipalInterest).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Est. Property Tax:</span>
                      <span className="font-mono">${Math.round(estimatedTax).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Est. Insurance:</span>
                      <span className="font-mono">${Math.round(estimatedInsurance).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Assigned Agent Box */}
          {agent && (
            <div className="bg-[#FFFFFF] border border-[#E9E3D8] p-6 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <img
                  src={agent.photo}
                  alt={agent.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#B49A63]/50 shadow-sm"
                />
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-[#B49A63] block">
                    Listing Broker
                  </span>
                  <h4 className="font-serif text-lg font-bold text-[#17352D]">{agent.name}</h4>
                  <p className="text-xs text-[#252826]/75">{agent.title}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:${agent.phone.replace(/[^0-9]/g, '')}`}
                  className="px-4 py-2.5 bg-[#F7F4EE] border border-[#E9E3D8] hover:bg-[#E9E3D8] text-[#17352D] text-xs font-semibold uppercase tracking-wider rounded-sm flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B49A63]" />
                  <span>{agent.phone}</span>
                </a>

                <button
                  onClick={() => onContactBroker(property, agent)}
                  className="px-5 py-2.5 bg-[#17352D] hover:bg-[#10241E] text-[#F7F4EE] text-xs font-bold uppercase tracking-wider rounded-sm flex items-center gap-2 shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5 text-[#B49A63]" />
                  <span>Inquire on Property</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Fixed Footer CTA */}
        <div className="bg-[#FFFFFF] border-t border-[#E9E3D8] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="hidden sm:block">
            <span className="text-xs font-bold text-[#17352D] block">{property.title}</span>
            <span className="text-[11px] text-[#252826]/60">{property.address}, {property.city}</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => onContactBroker(property, agent)}
              className="flex-1 sm:flex-initial px-6 py-3 bg-[#B49A63] hover:bg-[#C9B382] text-[#10241E] text-xs font-bold uppercase tracking-wider rounded-sm transition-colors shadow-sm"
            >
              Schedule Private Showing
            </button>
            <button
              onClick={onClose}
              className="px-5 py-3 bg-[#F7F4EE] hover:bg-[#E9E3D8] border border-[#E9E3D8] text-[#17352D] text-xs font-semibold uppercase tracking-wider rounded-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
