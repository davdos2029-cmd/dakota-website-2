import React from 'react';
import { Compass, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onMeetTeam: () => void;
  onExploreProperties: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onMeetTeam,
  onExploreProperties,
}) => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-[#F7F4EE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Image Showcase with Subtle Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl border border-[#E9E3D8]">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80"
                alt="Dakota Plains rolling countryside and heritage homestead"
                className="w-full h-[480px] sm:h-[540px] object-cover object-center"
              />
            </div>

            {/* Decorative Offset Frame */}
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-[#B49A63]/40 rounded-sm -z-0 hidden sm:block" />

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-4 right-4 sm:-right-4 z-20 bg-[#17352D] text-[#F7F4EE] p-6 rounded-sm shadow-xl border border-[#B49A63]/50 max-w-[240px]">
              <span className="font-serif text-3xl font-bold text-[#B49A63] block mb-1">
                20+ Years
              </span>
              <span className="text-xs uppercase tracking-wider text-[#E9E3D8] font-semibold block leading-tight">
                Dedicated Fiduciary Care Across the Dakotas
              </span>
            </div>
          </div>

          {/* Right Editorial Story */}
          <div className="lg:col-span-6 lg:pl-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#E9E3D8] text-[#17352D] text-xs font-semibold uppercase tracking-[0.2em] mb-6">
              <Compass className="w-3.5 h-3.5 text-[#B49A63]" />
              Our Heritage &amp; Roots
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#17352D] tracking-tight leading-[1.15] mb-6">
              Real Estate With a <br />
              <span className="italic font-normal text-[#252826]">Sense of Place.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#252826]/85 font-normal leading-relaxed mb-6">
              At Dakota Plains Realty, our foundation was built on a straightforward conviction: the best real estate guidance comes from advisors who live here, know the dirt, understand the local markets, and honor their word.
            </p>

            <p className="text-sm sm:text-base text-[#252826]/75 font-normal leading-relaxed mb-8">
              Whether working with a farm family passing down hundreds of acres of prime tillable ground, helping a young couple buy their first neighborhood home in Fargo, or marketing an executive lakefront lodge in Minnesota, we treat every transaction with the utmost diligence and personal care.
            </p>

            {/* Core Values Bullets */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B49A63] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#17352D]">Deep Regional Footprint</h4>
                  <p className="text-xs text-[#252826]/70">Fully licensed and active across North Dakota, South Dakota, and Minnesota.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B49A63] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#17352D]">High-Touch Fiduciary Representation</h4>
                  <p className="text-xs text-[#252826]/70">No automated call centers; direct access to seasoned principal brokers.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B49A63] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#17352D]">Cutting-Edge Marketing Technology</h4>
                  <p className="text-xs text-[#252826]/70">4K drone surveys, soil productivity mapping, and national multi-channel syndication.</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onMeetTeam}
                className="px-6 py-3 bg-[#17352D] hover:bg-[#10241E] text-[#F7F4EE] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors shadow-sm flex items-center gap-2"
              >
                <span>Meet Our Team</span>
                <ArrowRight className="w-4 h-4 text-[#B49A63]" />
              </button>

              <button
                onClick={onExploreProperties}
                className="px-6 py-3 bg-transparent hover:bg-[#E9E3D8] text-[#17352D] border border-[#17352D]/40 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors"
              >
                Explore Active Listings
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
