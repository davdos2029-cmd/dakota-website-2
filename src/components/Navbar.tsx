import React, { useState, useEffect } from 'react';
import { Phone, Heart, Menu, X, ChevronDown, Compass, Home, MapPin, Building2, Trees, Waves, Calculator } from 'lucide-react';
import { Property } from '../types';

interface NavbarProps {
  savedProperties?: Property[];
  savedCount?: number;
  onOpenSaved: () => void;
  onOpenCalculator?: () => void;
  onNavigateSection: (sectionId: string) => void;
  onFilterByCategory?: (category: string) => void;
  onFilterCategory?: (category: string) => void;
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  savedProperties = [],
  savedCount,
  onOpenSaved,
  onOpenCalculator,
  onNavigateSection,
  onFilterByCategory,
  onFilterCategory,
  onOpenContact = () => {},
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [propertyDropdownOpen, setPropertyDropdownOpen] = useState(false);

  const effectiveSavedCount = savedCount !== undefined ? savedCount : (savedProperties?.length || 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    onNavigateSection(sectionId);
    setMobileMenuOpen(false);
    setPropertyDropdownOpen(false);
  };

  const handleCategorySelect = (category: string) => {
    const selectFn = onFilterByCategory || onFilterCategory;
    if (selectFn) {
      selectFn(category);
    }
    setPropertyDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F4EE]/95 backdrop-blur-md py-3 shadow-md border-b border-[#E9E3D8]'
          : 'bg-gradient-to-b from-[#10241E]/90 via-[#10241E]/50 to-transparent text-[#F7F4EE] py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 text-left group focus:outline-none"
            aria-label="Dakota Plains Realty Home"
          >
            <div
              className={`w-10 h-10 rounded-sm flex items-center justify-center transition-colors ${
                isScrolled
                  ? 'bg-[#17352D] text-[#B49A63]'
                  : 'bg-[#B49A63] text-[#17352D]'
              } shadow-sm`}
            >
              <Compass className="w-6 h-6 transform group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <div>
              <span
                className={`block font-serif text-lg sm:text-xl font-bold tracking-tight leading-none ${
                  isScrolled ? 'text-[#17352D]' : 'text-[#F7F4EE]'
                }`}
              >
                DAKOTA PLAINS
              </span>
              <span
                className={`block text-[10px] tracking-[0.22em] uppercase font-semibold mt-1 ${
                  isScrolled ? 'text-[#B49A63]' : 'text-[#E9E3D8]/80'
                }`}
              >
                REALTY &middot; EST. THE DAKOTAS
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {/* Properties Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPropertyDropdownOpen(true)}
              onMouseLeave={() => setPropertyDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('properties')}
                className={`px-3 py-2 text-sm font-medium tracking-wide uppercase flex items-center gap-1 transition-colors ${
                  isScrolled
                    ? 'text-[#252826] hover:text-[#17352D]'
                    : 'text-[#F7F4EE] hover:text-[#B49A63]'
                }`}
              >
                Properties
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {propertyDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-[#F7F4EE] text-[#252826] shadow-xl border border-[#E9E3D8] rounded-sm py-2 z-50 animate-fadeIn">
                  <div className="px-3 py-1.5 text-[10px] uppercase font-semibold text-[#B49A63] tracking-widest border-b border-[#E9E3D8]/60">
                    Property Categories
                  </div>
                  <button
                    onClick={() => handleCategorySelect('All')}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-[#E9E3D8]/40 flex items-center gap-2.5 transition-colors font-medium"
                  >
                    <Compass className="w-4 h-4 text-[#17352D]" />
                    All Properties
                  </button>
                  <button
                    onClick={() => handleCategorySelect('Residential')}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-[#E9E3D8]/40 flex items-center gap-2.5 transition-colors"
                  >
                    <Home className="w-4 h-4 text-[#17352D]" />
                    Residential Homes
                  </button>
                  <button
                    onClick={() => handleCategorySelect('Farm & Ranch')}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-[#E9E3D8]/40 flex items-center gap-2.5 transition-colors"
                  >
                    <Trees className="w-4 h-4 text-[#17352D]" />
                    Farm &amp; Working Ranch
                  </button>
                  <button
                    onClick={() => handleCategorySelect('Land')}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-[#E9E3D8]/40 flex items-center gap-2.5 transition-colors"
                  >
                    <MapPin className="w-4 h-4 text-[#17352D]" />
                    Tillable Land &amp; Acreage
                  </button>
                  <button
                    onClick={() => handleCategorySelect('Lake Properties')}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-[#E9E3D8]/40 flex items-center gap-2.5 transition-colors"
                  >
                    <Waves className="w-4 h-4 text-[#17352D]" />
                    Lakes Country Waterfront
                  </button>
                  <button
                    onClick={() => handleCategorySelect('Commercial')}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-[#E9E3D8]/40 flex items-center gap-2.5 transition-colors"
                  >
                    <Building2 className="w-4 h-4 text-[#17352D]" />
                    Commercial &amp; Logistics
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleCategorySelect('Residential')}
              className={`px-3 py-2 text-sm font-medium tracking-wide uppercase transition-colors ${
                isScrolled ? 'text-[#252826] hover:text-[#17352D]' : 'text-[#F7F4EE] hover:text-[#B49A63]'
              }`}
            >
              Residential
            </button>

            <button
              onClick={() => handleNavClick('land-ranch')}
              className={`px-3 py-2 text-sm font-medium tracking-wide uppercase transition-colors ${
                isScrolled ? 'text-[#252826] hover:text-[#17352D]' : 'text-[#F7F4EE] hover:text-[#B49A63]'
              }`}
            >
              Land &amp; Ranch
            </button>

            <button
              onClick={() => handleCategorySelect('Commercial')}
              className={`px-3 py-2 text-sm font-medium tracking-wide uppercase transition-colors ${
                isScrolled ? 'text-[#252826] hover:text-[#17352D]' : 'text-[#F7F4EE] hover:text-[#B49A63]'
              }`}
            >
              Commercial
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`px-3 py-2 text-sm font-medium tracking-wide uppercase transition-colors ${
                isScrolled ? 'text-[#252826] hover:text-[#17352D]' : 'text-[#F7F4EE] hover:text-[#B49A63]'
              }`}
            >
              About
            </button>

            <button
              onClick={() => handleNavClick('agents')}
              className={`px-3 py-2 text-sm font-medium tracking-wide uppercase transition-colors ${
                isScrolled ? 'text-[#252826] hover:text-[#17352D]' : 'text-[#F7F4EE] hover:text-[#B49A63]'
              }`}
            >
              Our Agents
            </button>

            <button
              onClick={() => handleNavClick('selling')}
              className={`px-3 py-2 text-sm font-medium tracking-wide uppercase transition-colors ${
                isScrolled ? 'text-[#252826] hover:text-[#17352D]' : 'text-[#F7F4EE] hover:text-[#B49A63]'
              }`}
            >
              Sell
            </button>

            <button
              onClick={() => handleNavClick('resources')}
              className={`px-3 py-2 text-sm font-medium tracking-wide uppercase transition-colors ${
                isScrolled ? 'text-[#252826] hover:text-[#17352D]' : 'text-[#F7F4EE] hover:text-[#B49A63]'
              }`}
            >
              Resources
            </button>
          </nav>

          {/* Right Action Area */}
          <div className="hidden sm:flex items-center space-x-3 xl:space-x-4">
            {/* Phone Number */}
            <a
              href="tel:7013641330"
              className={`flex items-center gap-1.5 text-xs xl:text-sm font-medium transition-colors ${
                isScrolled ? 'text-[#17352D] hover:text-[#B49A63]' : 'text-[#F7F4EE] hover:text-[#B49A63]'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#B49A63]" />
              <span className="hidden md:inline">(701) 364-1330</span>
            </a>

            {/* Mortgage Calculator Trigger */}
            {onOpenCalculator && (
              <button
                onClick={onOpenCalculator}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-sm border transition-colors ${
                  isScrolled
                    ? 'border-[#17352D]/20 text-[#17352D] hover:bg-[#E9E3D8]'
                    : 'border-white/20 text-[#F7F4EE] hover:bg-white/10'
                }`}
                title="Mortgage & Payment Calculator"
                aria-label="Open Mortgage Calculator"
              >
                <Calculator className="w-3.5 h-3.5 text-[#B49A63]" />
                <span className="hidden lg:inline">Calculator</span>
              </button>
            )}

            {/* Saved Favorites Trigger */}
            <button
              onClick={onOpenSaved}
              className={`relative p-2 rounded-sm transition-colors ${
                isScrolled
                  ? 'text-[#252826] hover:bg-[#E9E3D8]'
                  : 'text-[#F7F4EE] hover:bg-white/10'
              }`}
              title="Saved Properties"
              aria-label="View Saved Properties"
            >
              <Heart className={`w-5 h-5 ${effectiveSavedCount > 0 ? 'fill-[#B49A63] text-[#B49A63]' : ''}`} />
              {effectiveSavedCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#17352D] text-[#F7F4EE] border border-[#B49A63] text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {effectiveSavedCount}
                </span>
              )}
            </button>

            {/* Primary CTA */}
            <button
              onClick={onOpenContact}
              className={`px-4 py-2 text-xs xl:text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-sm ${
                isScrolled
                  ? 'bg-[#17352D] hover:bg-[#10241E] text-[#F7F4EE]'
                  : 'bg-[#B49A63] hover:bg-[#C9B382] text-[#10241E]'
              }`}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {onOpenCalculator && (
              <button
                onClick={onOpenCalculator}
                className={`p-2 rounded-sm ${
                  isScrolled ? 'text-[#252826]' : 'text-[#F7F4EE]'
                }`}
                title="Calculator"
                aria-label="Open Mortgage Calculator"
              >
                <Calculator className="w-5 h-5 text-[#B49A63]" />
              </button>
            )}

            <button
              onClick={onOpenSaved}
              className={`relative p-2 rounded-sm ${
                isScrolled ? 'text-[#252826]' : 'text-[#F7F4EE]'
              }`}
              aria-label="View Saved Properties"
            >
              <Heart className={`w-5 h-5 ${effectiveSavedCount > 0 ? 'fill-[#B49A63] text-[#B49A63]' : ''}`} />
              {effectiveSavedCount > 0 && (
                <span className="absolute top-0 right-0 bg-[#17352D] text-[#F7F4EE] border border-[#B49A63] text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {effectiveSavedCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-sm ${
                isScrolled ? 'text-[#252826]' : 'text-[#F7F4EE]'
              }`}
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F7F4EE] text-[#252826] border-b border-[#E9E3D8] shadow-2xl px-6 py-6 space-y-4 animate-fadeIn">
          <div className="pb-3 border-b border-[#E9E3D8]">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#B49A63]">Navigation</span>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm font-medium">
            <button
              onClick={() => handleNavClick('properties')}
              className="text-left py-2 hover:text-[#17352D] font-semibold"
            >
              All Properties
            </button>
            <button
              onClick={() => handleCategorySelect('Residential')}
              className="text-left py-2 hover:text-[#17352D]"
            >
              Residential
            </button>
            <button
              onClick={() => handleNavClick('land-ranch')}
              className="text-left py-2 hover:text-[#17352D]"
            >
              Land &amp; Ranch
            </button>
            <button
              onClick={() => handleCategorySelect('Commercial')}
              className="text-left py-2 hover:text-[#17352D]"
            >
              Commercial
            </button>
            <button
              onClick={() => handleCategorySelect('Lake Properties')}
              className="text-left py-2 hover:text-[#17352D]"
            >
              Lake Properties
            </button>
            <button
              onClick={() => handleNavClick('selling')}
              className="text-left py-2 hover:text-[#17352D]"
            >
              Sell / Valuation
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-left py-2 hover:text-[#17352D]"
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick('agents')}
              className="text-left py-2 hover:text-[#17352D]"
            >
              Our Agents
            </button>
            <button
              onClick={() => handleNavClick('service-areas')}
              className="text-left py-2 hover:text-[#17352D]"
            >
              Service Areas
            </button>
            <button
              onClick={() => handleNavClick('resources')}
              className="text-left py-2 hover:text-[#17352D]"
            >
              Insights &amp; Guides
            </button>
          </div>

          <div className="pt-4 border-t border-[#E9E3D8] space-y-3">
            {onOpenCalculator && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCalculator();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#E9E3D8] text-[#17352D] font-semibold text-sm rounded-sm"
              >
                <Calculator className="w-4 h-4 text-[#B49A63]" />
                Mortgage &amp; Payment Calculator
              </button>
            )}
            <a
              href="tel:7013641330"
              className="flex items-center justify-center gap-2 py-2.5 px-4 bg-[#E9E3D8] text-[#17352D] font-semibold text-sm rounded-sm"
            >
              <Phone className="w-4 h-4 text-[#B49A63]" />
              Call (701) 364-1330
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 bg-[#17352D] text-[#F7F4EE] font-semibold text-sm uppercase tracking-wider rounded-sm shadow-md"
            >
              Contact Dakota Plains
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
