import React, { useState, useMemo } from 'react';
import {
  Search,
  SlidersHorizontal,
  RotateCcw,
  LayoutGrid,
  List,
  Filter,
  X,
  Building,
  MapPin,
  DollarSign,
  Bed,
  Bath,
  Compass,
  ArrowUpDown,
  Home,
} from 'lucide-react';
import { Property, FilterState } from '../types';
import { PropertyCard } from './PropertyCard';

interface PropertySearchExplorerProps {
  properties: Property[];
  savedProperties: Property[];
  initialFilters: Partial<FilterState>;
  onToggleSave: (property: Property) => void;
  onSelectProperty: (property: Property) => void;
}

export const PropertySearchExplorer: React.FC<PropertySearchExplorerProps> = ({
  properties,
  savedProperties,
  initialFilters,
  onToggleSave,
  onSelectProperty,
}) => {
  const [filters, setFilters] = useState<FilterState>({
    type: initialFilters.type || '',
    status: initialFilters.status || '',
    state: initialFilters.state || '',
    city: initialFilters.city || '',
    minPrice: initialFilters.minPrice || 0,
    maxPrice: initialFilters.maxPrice || 10000000,
    minBeds: initialFilters.minBeds || 0,
    minBaths: initialFilters.minBaths || 0,
    minAcres: initialFilters.minAcres || 0,
    minSqft: initialFilters.minSqft || 0,
    keyword: initialFilters.keyword || '',
    sortBy: 'featured',
  });

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sync when initialFilters changes
  React.useEffect(() => {
    if (initialFilters) {
      setFilters((prev) => ({
        ...prev,
        ...initialFilters,
      }));
    }
  }, [initialFilters]);

  const resetFilters = () => {
    setFilters({
      type: '',
      status: '',
      state: '',
      city: '',
      minPrice: 0,
      maxPrice: 10000000,
      minBeds: 0,
      minBaths: 0,
      minAcres: 0,
      minSqft: 0,
      keyword: '',
      sortBy: 'featured',
    });
  };

  const filteredProperties = useMemo(() => {
    return properties
      .filter((p) => {
        // Type filter
        if (filters.type && filters.type !== 'All' && p.type !== filters.type) {
          return false;
        }
        // Status filter
        if (filters.status && filters.status !== 'All' && p.status !== filters.status) {
          return false;
        }
        // City / Region filter
        if (filters.city && filters.city !== 'All') {
          if (!p.city.toLowerCase().includes(filters.city.toLowerCase())) {
            return false;
          }
        }
        // State filter
        if (filters.state && p.state !== filters.state) {
          return false;
        }
        // Price min/max
        if (p.price < filters.minPrice) return false;
        if (filters.maxPrice < 10000000 && p.price > filters.maxPrice) return false;

        // Beds
        if (filters.minBeds > 0 && (!p.beds || p.beds < filters.minBeds)) {
          return false;
        }
        // Baths
        if (filters.minBaths > 0 && (!p.baths || p.baths < filters.minBaths)) {
          return false;
        }
        // Acres
        if (filters.minAcres > 0 && p.acres < filters.minAcres) {
          return false;
        }
        // Sqft
        if (filters.minSqft > 0 && (!p.sqft || p.sqft < filters.minSqft)) {
          return false;
        }
        // Keyword Search
        if (filters.keyword.trim()) {
          const kw = filters.keyword.toLowerCase();
          const matchTitle = p.title.toLowerCase().includes(kw);
          const matchAddress = p.address.toLowerCase().includes(kw);
          const matchCity = p.city.toLowerCase().includes(kw);
          const matchCounty = p.county.toLowerCase().includes(kw);
          const matchMls = p.mlsNumber.toLowerCase().includes(kw);
          const matchDesc = p.description.toLowerCase().includes(kw);
          if (!matchTitle && !matchAddress && !matchCity && !matchCounty && !matchMls && !matchDesc) {
            return false;
          }
        }
        return true;
      })
      .sort((a, b) => {
        if (filters.sortBy === 'price-asc') return a.price - b.price;
        if (filters.sortBy === 'price-desc') return b.price - a.price;
        if (filters.sortBy === 'acres-desc') return b.acres - a.acres;
        if (filters.sortBy === 'newest') {
          return new Date(b.dateListed).getTime() - new Date(a.dateListed).getTime();
        }
        // featured default
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
      });
  }, [properties, filters]);

  const isSaved = (propertyId: string) => {
    return savedProperties.some((p) => p.id === propertyId);
  };

  const propertyTypes = [
    'Residential',
    'Farm & Ranch',
    'Land',
    'Hunting & Recreational',
    'Lake Properties',
    'Commercial',
  ];

  return (
    <section id="properties" className="py-20 lg:py-28 bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#E9E3D8] text-[#17352D] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            <Compass className="w-3.5 h-3.5 text-[#B49A63]" />
            Property Marketplace
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#17352D] tracking-tight">
                Find Your Next Property
              </h2>
              <p className="text-sm sm:text-base text-[#252826]/80 mt-2 max-w-2xl font-normal">
                Search our comprehensive inventory of Dakota residential estates, productive farm ground, cattle ranches, recreational timber, and commercial developments.
              </p>
            </div>

            {/* Mobile Filter Button */}
            <div className="flex items-center gap-3 lg:hidden">
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="flex-1 py-2.5 px-4 bg-[#17352D] text-[#F7F4EE] text-xs font-semibold uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 shadow-sm"
              >
                <Filter className="w-4 h-4 text-[#B49A63]" />
                <span>Filters ({Object.values(filters).filter(Boolean).length})</span>
              </button>
            </div>
          </div>
        </div>

        {/* Explorer Workspace (Left Filters / Right Results) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Left Filter Sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="bg-[#FFFFFF] border border-[#E9E3D8] rounded-sm p-6 shadow-sm sticky top-28 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#E9E3D8]">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-[#B49A63]" />
                  <h3 className="font-serif font-bold text-base text-[#17352D]">Search Filters</h3>
                </div>
                <button
                  onClick={resetFilters}
                  className="text-xs text-[#B49A63] hover:text-[#17352D] flex items-center gap-1 font-semibold transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  Reset
                </button>
              </div>

              {/* Keyword Search */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#17352D] mb-2">
                  Keyword Search
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={filters.keyword}
                    onChange={(e) => setFilters({ ...filters, keyword: e.target.value })}
                    placeholder="City, County, MLS, feature..."
                    className="w-full text-xs bg-[#F7F4EE] border border-[#E9E3D8] rounded-sm py-2 pl-3 pr-8 focus:outline-none focus:border-[#17352D]"
                  />
                  <Search className="w-3.5 h-3.5 text-[#B49A63] absolute right-2.5 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#17352D] mb-2">
                  Property Category
                </label>
                <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                  <label className="flex items-center gap-2 text-xs font-medium text-[#252826] cursor-pointer hover:text-[#17352D]">
                    <input
                      type="radio"
                      name="propType"
                      checked={filters.type === '' || filters.type === 'All'}
                      onChange={() => setFilters({ ...filters, type: '' })}
                      className="text-[#17352D] focus:ring-[#17352D]"
                    />
                    <span>All Categories</span>
                  </label>
                  {propertyTypes.map((t) => (
                    <label
                      key={t}
                      className="flex items-center gap-2 text-xs font-medium text-[#252826] cursor-pointer hover:text-[#17352D]"
                    >
                      <input
                        type="radio"
                        name="propType"
                        checked={filters.type === t}
                        onChange={() => setFilters({ ...filters, type: t })}
                        className="text-[#17352D] focus:ring-[#17352D]"
                      />
                      <span>{t}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Market Location */}
              <div>
                <label htmlFor="filter-desktop-market" className="block text-xs font-bold uppercase tracking-wider text-[#17352D] mb-2">
                  Market Location
                </label>
                <select
                  id="filter-desktop-market"
                  value={filters.city}
                  onChange={(e) => setFilters({ ...filters, city: e.target.value })}
                  className="w-full text-xs bg-[#F7F4EE] border border-[#E9E3D8] rounded-sm py-2 px-3 focus:outline-none focus:border-[#17352D] cursor-pointer"
                >
                  <option value="">All Regional Markets</option>
                  <option value="Fargo">Fargo &amp; West Fargo, ND</option>
                  <option value="Bismarck">Bismarck &amp; Mandan, ND</option>
                  <option value="Grand Forks">Grand Forks, ND</option>
                  <option value="Sioux Falls">Sioux Falls, SD</option>
                  <option value="Aberdeen">Aberdeen, SD</option>
                  <option value="Pelican Rapids">Pelican Rapids, MN</option>
                  <option value="Ortonville">Ortonville / Big Stone, MN</option>
                </select>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#17352D] mb-2">
                  Price Range
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label htmlFor="filter-desktop-min-price" className="sr-only">Minimum Price</label>
                    <select
                      id="filter-desktop-min-price"
                      value={filters.minPrice}
                      onChange={(e) => setFilters({ ...filters, minPrice: Number(e.target.value) })}
                      className="w-full text-xs bg-[#F7F4EE] border border-[#E9E3D8] rounded-sm py-2 px-2 focus:outline-none focus:border-[#17352D]"
                    >
                      <option value={0}>Min Price</option>
                      <option value={500000}>$500k</option>
                      <option value={750000}>$750k</option>
                      <option value={1000000}>$1.0M</option>
                      <option value={1500000}>$1.5M</option>
                      <option value={2000000}>$2.0M</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="filter-desktop-max-price" className="sr-only">Maximum Price</label>
                    <select
                      id="filter-desktop-max-price"
                      value={filters.maxPrice}
                      onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
                      className="w-full text-xs bg-[#F7F4EE] border border-[#E9E3D8] rounded-sm py-2 px-2 focus:outline-none focus:border-[#17352D]"
                    >
                      <option value={10000000}>Max Price</option>
                      <option value={750000}>$750k</option>
                      <option value={1000000}>$1.0M</option>
                      <option value={1500000}>$1.5M</option>
                      <option value={2000000}>$2.0M</option>
                      <option value={3500000}>$3.5M</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Bedrooms & Baths */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="filter-desktop-min-beds" className="block text-xs font-bold uppercase tracking-wider text-[#17352D] mb-2">
                    Min Beds
                  </label>
                  <select
                    id="filter-desktop-min-beds"
                    value={filters.minBeds}
                    onChange={(e) => setFilters({ ...filters, minBeds: Number(e.target.value) })}
                    className="w-full text-xs bg-[#F7F4EE] border border-[#E9E3D8] rounded-sm py-2 px-2 focus:outline-none"
                  >
                    <option value={0}>Any</option>
                    <option value={3}>3+ Beds</option>
                    <option value={4}>4+ Beds</option>
                    <option value={5}>5+ Beds</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="filter-desktop-min-baths" className="block text-xs font-bold uppercase tracking-wider text-[#17352D] mb-2">
                    Min Baths
                  </label>
                  <select
                    id="filter-desktop-min-baths"
                    value={filters.minBaths}
                    onChange={(e) => setFilters({ ...filters, minBaths: Number(e.target.value) })}
                    className="w-full text-xs bg-[#F7F4EE] border border-[#E9E3D8] rounded-sm py-2 px-2 focus:outline-none"
                  >
                    <option value={0}>Any</option>
                    <option value={2}>2+ Baths</option>
                    <option value={3}>3+ Baths</option>
                    <option value={4}>4+ Baths</option>
                  </select>
                </div>
              </div>

              {/* Minimum Acreage */}
              <div>
                <label htmlFor="filter-desktop-min-acres" className="block text-xs font-bold uppercase tracking-wider text-[#17352D] mb-2">
                  Min Acreage (Land/Ranch)
                </label>
                <select
                  id="filter-desktop-min-acres"
                  value={filters.minAcres}
                  onChange={(e) => setFilters({ ...filters, minAcres: Number(e.target.value) })}
                  className="w-full text-xs bg-[#F7F4EE] border border-[#E9E3D8] rounded-sm py-2 px-3 focus:outline-none"
                >
                  <option value={0}>Any Acreage</option>
                  <option value={2}>2+ Acres (Suburban)</option>
                  <option value={5}>5+ Acres</option>
                  <option value={40}>40+ Acres (Quarter-Quarter)</option>
                  <option value={160}>160+ Acres (Quarter Section)</option>
                  <option value={640}>640+ Acres (Full Section)</option>
                </select>
              </div>

              {/* Property Status */}
              <div>
                <label htmlFor="filter-desktop-status" className="block text-xs font-bold uppercase tracking-wider text-[#17352D] mb-2">
                  Status
                </label>
                <select
                  id="filter-desktop-status"
                  value={filters.status}
                  onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                  className="w-full text-xs bg-[#F7F4EE] border border-[#E9E3D8] rounded-sm py-2 px-3 focus:outline-none cursor-pointer"
                >
                  <option value="">All Statuses</option>
                  <option value="For Sale">For Sale</option>
                  <option value="Pending">Pending</option>
                  <option value="Sold">Closed / Sold</option>
                </select>
              </div>
            </div>
          </div>

          {/* Right Results Column */}
          <div className="lg:col-span-3">
            {/* Top Toolbar */}
            <div className="bg-[#FFFFFF] border border-[#E9E3D8] rounded-sm p-4 mb-6 flex flex-wrap items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-[#17352D]">
                  {filteredProperties.length}
                </span>
                <span className="text-xs text-[#252826]/70 uppercase tracking-wider font-semibold">
                  Properties Available
                </span>
                {filters.type && (
                  <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 bg-[#E9E3D8] text-[#17352D] rounded-sm">
                    {filters.type}
                    <button
                      onClick={() => setFilters({ ...filters, type: '' })}
                      className="hover:text-red-700"
                    >
                      &times;
                    </button>
                  </span>
                )}
              </div>

              <div className="flex items-center gap-4">
                {/* Sort dropdown */}
                <div className="flex items-center gap-1.5">
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#B49A63]" />
                  <label htmlFor="filter-results-sort" className="sr-only">Sort properties by</label>
                  <select
                    id="filter-results-sort"
                    value={filters.sortBy}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        sortBy: e.target.value as FilterState['sortBy'],
                      })
                    }
                    className="text-xs bg-[#F7F4EE] border border-[#E9E3D8] rounded-sm py-1.5 px-2.5 focus:outline-none font-medium text-[#252826] cursor-pointer"
                  >
                    <option value="featured">Featured First</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="acres-desc">Acreage: Largest First</option>
                    <option value="newest">Newest Listed</option>
                  </select>
                </div>

                {/* Grid / List switcher */}
                <div className="hidden sm:flex items-center border border-[#E9E3D8] rounded-sm overflow-hidden bg-[#F7F4EE]">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 transition-colors ${
                      viewMode === 'grid'
                        ? 'bg-[#17352D] text-[#F7F4EE]'
                        : 'text-[#252826] hover:bg-[#E9E3D8]'
                    }`}
                    title="Grid View"
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-1.5 transition-colors ${
                      viewMode === 'list'
                        ? 'bg-[#17352D] text-[#F7F4EE]'
                        : 'text-[#252826] hover:bg-[#E9E3D8]'
                    }`}
                    title="List View"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Results Grid / List */}
            {filteredProperties.length > 0 ? (
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 gap-6'
                    : 'space-y-6'
                }
              >
                {filteredProperties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    isSaved={isSaved(property.id)}
                    onToggleSave={onToggleSave}
                    onSelectProperty={onSelectProperty}
                    layout={viewMode}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-[#FFFFFF] border border-[#E9E3D8] rounded-sm p-12 text-center shadow-sm">
                <Compass className="w-12 h-12 text-[#B49A63] mx-auto mb-4 opacity-70" />
                <h3 className="font-serif text-2xl font-bold text-[#17352D] mb-2">
                  No Properties Match Your Exact Criteria
                </h3>
                <p className="text-sm text-[#252826]/75 max-w-md mx-auto mb-6">
                  Try broadening your price parameters, clearing specific acreage limits, or reset your search filters.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2.5 bg-[#17352D] text-[#F7F4EE] text-xs font-semibold uppercase tracking-wider rounded-sm shadow hover:bg-[#10241E] transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Slide-Over Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs">
          <div className="w-full max-w-md bg-[#F7F4EE] h-full overflow-y-auto p-6 flex flex-col justify-between shadow-2xl animate-slideLeft">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E9E3D8] mb-6">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5 text-[#17352D]" />
                  <h3 className="font-serif text-xl font-bold text-[#17352D]">Filter Properties</h3>
                </div>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="p-1 rounded-sm text-[#252826] hover:bg-[#E9E3D8]"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Filter Form */}
              <div className="space-y-5 text-sm">
                <div>
                  <label htmlFor="filter-mobile-keyword" className="block text-xs font-bold uppercase tracking-wider text-[#17352D] mb-1.5">
                    Keyword Search
                  </label>
                  <input
                    id="filter-mobile-keyword"
                    type="text"
                    value={filters.keyword}
                    onChange={(e) => setFilters({ ...filters, keyword: e.target.value })}
                    placeholder="Search city, county, MLS..."
                    className="w-full bg-[#FFFFFF] border border-[#E9E3D8] rounded-sm py-2.5 px-3"
                  />
                </div>

                <div>
                  <label htmlFor="filter-mobile-category" className="block text-xs font-bold uppercase tracking-wider text-[#17352D] mb-1.5">
                    Category
                  </label>
                  <select
                    id="filter-mobile-category"
                    value={filters.type}
                    onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                    className="w-full bg-[#FFFFFF] border border-[#E9E3D8] rounded-sm py-2.5 px-3"
                  >
                    <option value="">All Categories</option>
                    {propertyTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="filter-mobile-location" className="block text-xs font-bold uppercase tracking-wider text-[#17352D] mb-1.5">
                    Location
                  </label>
                  <select
                    id="filter-mobile-location"
                    value={filters.city}
                    onChange={(e) => setFilters({ ...filters, city: e.target.value })}
                    className="w-full bg-[#FFFFFF] border border-[#E9E3D8] rounded-sm py-2.5 px-3"
                  >
                    <option value="">All Regional Markets</option>
                    <option value="Fargo">Fargo &amp; West Fargo, ND</option>
                    <option value="Bismarck">Bismarck &amp; Mandan, ND</option>
                    <option value="Grand Forks">Grand Forks, ND</option>
                    <option value="Sioux Falls">Sioux Falls, SD</option>
                    <option value="Aberdeen">Aberdeen, SD</option>
                    <option value="Pelican Rapids">Pelican Rapids, MN</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="filter-mobile-min-price" className="block text-xs font-bold uppercase tracking-wider text-[#17352D] mb-1.5">
                      Min Price
                    </label>
                    <select
                      id="filter-mobile-min-price"
                      value={filters.minPrice}
                      onChange={(e) => setFilters({ ...filters, minPrice: Number(e.target.value) })}
                      className="w-full bg-[#FFFFFF] border border-[#E9E3D8] rounded-sm py-2 px-2 text-xs"
                    >
                      <option value={0}>Any</option>
                      <option value={500000}>$500k</option>
                      <option value={1000000}>$1.0M</option>
                      <option value={2000000}>$2.0M</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="filter-mobile-max-price" className="block text-xs font-bold uppercase tracking-wider text-[#17352D] mb-1.5">
                      Max Price
                    </label>
                    <select
                      id="filter-mobile-max-price"
                      value={filters.maxPrice}
                      onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
                      className="w-full bg-[#FFFFFF] border border-[#E9E3D8] rounded-sm py-2 px-2 text-xs"
                    >
                      <option value={10000000}>Any</option>
                      <option value={1000000}>$1.0M</option>
                      <option value={2000000}>$2.0M</option>
                      <option value={3500000}>$3.5M</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="filter-mobile-min-beds" className="block text-xs font-bold uppercase tracking-wider text-[#17352D] mb-1.5">
                      Min Beds
                    </label>
                    <select
                      id="filter-mobile-min-beds"
                      value={filters.minBeds}
                      onChange={(e) => setFilters({ ...filters, minBeds: Number(e.target.value) })}
                      className="w-full bg-[#FFFFFF] border border-[#E9E3D8] rounded-sm py-2 px-2 text-xs"
                    >
                      <option value={0}>Any</option>
                      <option value={3}>3+ Beds</option>
                      <option value={4}>4+ Beds</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="filter-mobile-min-acres" className="block text-xs font-bold uppercase tracking-wider text-[#17352D] mb-1.5">
                      Min Acres
                    </label>
                    <select
                      id="filter-mobile-min-acres"
                      value={filters.minAcres}
                      onChange={(e) => setFilters({ ...filters, minAcres: Number(e.target.value) })}
                      className="w-full bg-[#FFFFFF] border border-[#E9E3D8] rounded-sm py-2 px-2 text-xs"
                    >
                      <option value={0}>Any</option>
                      <option value={5}>5+ Acres</option>
                      <option value={40}>40+ Acres</option>
                      <option value={160}>160+ Acres</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E9E3D8] space-y-3">
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="w-full py-3 bg-[#17352D] text-[#F7F4EE] text-sm font-semibold uppercase tracking-wider rounded-sm shadow-md"
              >
                Show {filteredProperties.length} Properties
              </button>
              <button
                onClick={resetFilters}
                className="w-full py-2 bg-transparent text-[#252826] text-xs font-semibold uppercase tracking-wider hover:underline"
              >
                Reset All Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
