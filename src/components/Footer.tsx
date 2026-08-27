import React from 'react';
import { Compass, Phone, Mail, MapPin, ArrowUp, Shield } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onFilterByCategory: (category: string) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateSection,
  onFilterByCategory,
  onOpenContact,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#10241E] text-[#F7F4EE] border-t border-[#17352D] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          {/* Left Column: Brand Story */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-sm bg-[#B49A63] text-[#17352D] flex items-center justify-center shadow-sm">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="block font-serif text-xl font-bold tracking-tight text-[#F7F4EE] leading-none">
                  DAKOTA PLAINS
                </span>
                <span className="block text-[10px] tracking-[0.22em] uppercase font-semibold text-[#B49A63] mt-1">
                  REALTY &middot; EST. THE DAKOTAS
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#E9E3D8]/80 leading-relaxed mb-6 font-normal">
              A trusted, established regional real estate and land brokerage specializing in residential estates, fertile tillable farmland, working cattle ranches, recreational hunting ground, and commercial investment properties across North Dakota, South Dakota, and Minnesota.
            </p>

            <div className="flex items-center gap-3 text-xs text-[#E9E3D8]/70">
              <Shield className="w-4 h-4 text-[#B49A63]" />
              <span>Licensed in ND, SD &amp; MN &middot; Equal Housing Opportunity</span>
            </div>
          </div>

          {/* Center 1: Explore Properties */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h4 className="font-serif text-base font-bold text-[#F7F4EE] mb-4 pb-1 border-b border-[#B49A63]/30">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E9E3D8]/80 font-medium">
              <li>
                <button
                  onClick={() => onNavigateSection('properties')}
                  className="hover:text-[#B49A63] transition-colors"
                >
                  All Properties
                </button>
              </li>
              <li>
                <button
                  onClick={() => onFilterByCategory('Residential')}
                  className="hover:text-[#B49A63] transition-colors"
                >
                  Residential Homes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onFilterByCategory('Farm & Ranch')}
                  className="hover:text-[#B49A63] transition-colors"
                >
                  Farm &amp; Working Ranch
                </button>
              </li>
              <li>
                <button
                  onClick={() => onFilterByCategory('Land')}
                  className="hover:text-[#B49A63] transition-colors"
                >
                  Tillable Land &amp; Soil
                </button>
              </li>
              <li>
                <button
                  onClick={() => onFilterByCategory('Hunting & Recreational')}
                  className="hover:text-[#B49A63] transition-colors"
                >
                  Hunting &amp; Recreational
                </button>
              </li>
              <li>
                <button
                  onClick={() => onFilterByCategory('Lake Properties')}
                  className="hover:text-[#B49A63] transition-colors"
                >
                  Lakes Country Waterfront
                </button>
              </li>
              <li>
                <button
                  onClick={() => onFilterByCategory('Commercial')}
                  className="hover:text-[#B49A63] transition-colors"
                >
                  Commercial Real Estate
                </button>
              </li>
            </ul>
          </div>

          {/* Center 2: Company & Advisory */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h4 className="font-serif text-base font-bold text-[#F7F4EE] mb-4 pb-1 border-b border-[#B49A63]/30">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E9E3D8]/80 font-medium">
              <li>
                <button
                  onClick={() => onNavigateSection('about')}
                  className="hover:text-[#B49A63] transition-colors"
                >
                  About Dakota Plains
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('agents')}
                  className="hover:text-[#B49A63] transition-colors"
                >
                  Our Broker Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('selling')}
                  className="hover:text-[#B49A63] transition-colors"
                >
                  Property Valuation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('service-areas')}
                  className="hover:text-[#B49A63] transition-colors"
                >
                  Regional Service Areas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('resources')}
                  className="hover:text-[#B49A63] transition-colors"
                >
                  1031 &amp; Land Insights
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('testimonials')}
                  className="hover:text-[#B49A63] transition-colors"
                >
                  Client Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-[#B49A63] transition-colors"
                >
                  Contact Brokerage
                </button>
              </li>
            </ul>
          </div>

          {/* Right Column: Office Info & Hours */}
          <div className="lg:col-span-4">
            <h4 className="font-serif text-base font-bold text-[#F7F4EE] mb-4 pb-1 border-b border-[#B49A63]/30">
              Headquarters
            </h4>
            <div className="space-y-3 text-xs text-[#E9E3D8]/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B49A63] shrink-0 mt-0.5" />
                <span>
                  4302 13th Avenue South, Suite 100<br />
                  Fargo, North Dakota 58103
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B49A63] shrink-0" />
                <a href="tel:7013641330" className="hover:text-[#B49A63] transition-colors font-bold">
                  (701) 364-1330
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B49A63] shrink-0" />
                <a href="mailto:info@dakotaplainsrealty.com" className="hover:text-[#B49A63] transition-colors">
                  info@dakotaplainsrealty.com
                </a>
              </div>
            </div>

            <div className="mt-6 p-3.5 bg-[#17352D] rounded-sm border border-white/10 text-[11px] text-[#E9E3D8]/80 leading-relaxed">
              <strong className="text-[#F7F4EE] block mb-1">Equal Housing &amp; Professional Code:</strong>
              We are pledged to the letter and spirit of U.S. policy for the achievement of equal housing opportunity throughout the Nation.
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E9E3D8]/60">
          <div>
            &copy; {new Date().getFullYear()} Dakota Plains Realty, LLC. All rights reserved. Licensed in North Dakota, South Dakota, and Minnesota.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigateSection('about')}
              className="hover:text-[#F7F4EE] transition-colors"
            >
              Privacy Policy
            </button>
            <span>&middot;</span>
            <button
              onClick={() => onNavigateSection('about')}
              className="hover:text-[#F7F4EE] transition-colors"
            >
              Terms of Service
            </button>
            <span>&middot;</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#B49A63] hover:text-[#F7F4EE] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
