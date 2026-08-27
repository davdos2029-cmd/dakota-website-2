import React from 'react';
import { Trees, Compass, ArrowRight, CheckCircle2, ShieldAlert, Award, FileText } from 'lucide-react';

interface LandRanchFeatureProps {
  onExploreLand: () => void;
  onRequestValuation: () => void;
}

export const LandRanchFeature: React.FC<LandRanchFeatureProps> = ({
  onExploreLand,
  onRequestValuation,
}) => {
  return (
    <section id="land-ranch" className="relative py-24 lg:py-32 bg-[#17352D] text-[#F7F4EE] overflow-hidden">
      {/* High-res Panoramic Background with Opacity */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=85"
          alt="Expansive Dakota prairie and ranchland"
          className="w-full h-full object-cover object-center opacity-25 filter brightness-90 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#10241E] via-[#17352D]/95 to-[#17352D]/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Editorial Content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#10241E] border border-[#B49A63]/50 text-[#B49A63] text-xs font-semibold uppercase tracking-[0.25em] mb-6">
              <Trees className="w-3.5 h-3.5" />
              Agricultural &amp; Land Specialization
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F7F4EE] leading-[1.15] mb-6">
              More Than Property. <br />
              <span className="italic text-[#E9E3D8] font-normal">It’s Land With Possibility.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#E9E3D8]/90 font-normal leading-relaxed mb-8">
              Whether you’re searching for productive agricultural ground, a working cattle ranch, hunting acreage, recreational timber, or a place to build your next chapter, our team understands the soil, water rights, and market forces that define Midwestern acreage.
            </p>

            {/* Core Land Competencies */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-sm">
              <div className="p-4 bg-[#10241E]/70 border border-white/10 rounded-sm">
                <div className="flex items-center gap-2 font-semibold text-[#F7F4EE] mb-1.5">
                  <Award className="w-4 h-4 text-[#B49A63]" />
                  <span>Soil Productivity (PI / CSR)</span>
                </div>
                <p className="text-xs text-[#E9E3D8]/75 leading-normal">
                  In-depth analysis of NRCS soil maps, drainage tile layouts, and crop yield histories.
                </p>
              </div>

              <div className="p-4 bg-[#10241E]/70 border border-white/10 rounded-sm">
                <div className="flex items-center gap-2 font-semibold text-[#F7F4EE] mb-1.5">
                  <FileText className="w-4 h-4 text-[#B49A63]" />
                  <span>1031 Exchange Reinvestment</span>
                </div>
                <p className="text-xs text-[#E9E3D8]/75 leading-normal">
                  Fiduciary coordination with CPAs and Qualified Intermediaries to preserve farm equity.
                </p>
              </div>

              <div className="p-4 bg-[#10241E]/70 border border-white/10 rounded-sm">
                <div className="flex items-center gap-2 font-semibold text-[#F7F4EE] mb-1.5">
                  <Compass className="w-4 h-4 text-[#B49A63]" />
                  <span>Cattle &amp; Grazing Capacity</span>
                </div>
                <p className="text-xs text-[#E9E3D8]/75 leading-normal">
                  Animal unit calculations, pasture cross-fencing, and artesian stock water management.
                </p>
              </div>

              <div className="p-4 bg-[#10241E]/70 border border-white/10 rounded-sm">
                <div className="flex items-center gap-2 font-semibold text-[#F7F4EE] mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B49A63]" />
                  <span>CRP &amp; Conservation Programs</span>
                </div>
                <p className="text-xs text-[#E9E3D8]/75 leading-normal">
                  Maximizing passive annual USDA contract revenues on habitat and buffer acres.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreLand}
                className="px-7 py-3.5 bg-[#B49A63] hover:bg-[#C9B382] text-[#10241E] text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Land &amp; Ranch Properties</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onRequestValuation}
                className="px-6 py-3.5 bg-transparent hover:bg-white/10 border border-white/30 text-[#F7F4EE] text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
              >
                Request Land Valuation
              </button>
            </div>
          </div>

          {/* Right Visual Feature Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#10241E] border border-[#B49A63]/30 p-8 rounded-sm shadow-2xl">
              <div className="absolute top-0 right-0 transform translate-x-3 -translate-y-3 w-20 h-20 border-t-2 border-r-2 border-[#B49A63]/40 pointer-events-none" />

              <span className="block text-xs uppercase tracking-widest text-[#B49A63] font-semibold mb-2">
                Landowner Representation
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#F7F4EE] mb-4">
                Generational Farm &amp; Ranch Succession
              </h3>
              <p className="text-sm text-[#E9E3D8]/80 leading-relaxed mb-6 font-normal">
                Selling family acreage requires strategic sensitivity, confidential buyer networking, and auction vs. private treaty marketing expertise. Our brokerage brings decades of real agricultural ownership experience.
              </p>

              <div className="space-y-3 mb-8 text-xs text-[#E9E3D8]/90">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B49A63]" />
                  <span>Licensed across North Dakota, South Dakota &amp; Minnesota</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B49A63]" />
                  <span>Custom boundary mapping &amp; 4K drone cinematography</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B49A63]" />
                  <span>Direct connections with regional agricultural capital</span>
                </div>
              </div>

              <div className="p-4 bg-[#17352D] rounded-sm border border-white/10 flex items-center justify-between">
                <div>
                  <span className="block text-[11px] text-[#E9E3D8]/70">Land Desk Direct</span>
                  <span className="font-serif text-base font-bold text-[#F7F4EE]">(701) 364-1330</span>
                </div>
                <button
                  onClick={onRequestValuation}
                  className="text-xs uppercase tracking-wider font-semibold text-[#B49A63] hover:text-[#F7F4EE] transition-colors"
                >
                  Consult Land Broker &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
