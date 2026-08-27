import React from 'react';
import { Compass, Users, Sparkles, ShieldCheck, MapPin } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: MapPin,
      title: 'Local Expertise',
      description:
        'Deep generational knowledge of North Dakota, South Dakota, Minnesota and surrounding regional markets, zoning laws, and agricultural soils.',
    },
    {
      icon: Users,
      title: 'Personalized Guidance',
      description:
        'Every buyer, seller, farmer, and investor receives bespoke strategic attention and direct broker communication from consultation to closing.',
    },
    {
      icon: Compass,
      title: 'Broad Property Mastery',
      description:
        'Proven expertise across residential estates, commercial facilities, agricultural tillable ground, working ranches, and premier lakefront retreats.',
    },
    {
      icon: ShieldCheck,
      title: 'Trusted Relationships',
      description:
        'Rooted in enduring client relationships and fiduciary integrity rather than short-term transactions. Our reputation is our most valuable asset.',
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#E9E3D8] text-[#17352D] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B49A63]" />
            The Dakota Plains Standard
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#17352D] tracking-tight mb-4">
            Local Knowledge. Personal Service. <br className="hidden sm:inline" />
            Proven Experience.
          </h2>
          <p className="text-base text-[#252826]/80 font-normal leading-relaxed">
            We combine high-end modern marketing with time-tested Midwestern values to deliver outstanding results for every client we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#FFFFFF] border border-[#E9E3D8] p-8 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-sm bg-[#F7F4EE] border border-[#E9E3D8] flex items-center justify-center text-[#17352D] mb-6 group-hover:bg-[#17352D] group-hover:text-[#B49A63] transition-colors duration-300">
                    <Icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#17352D] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#252826]/75 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E9E3D8]/60 text-[11px] font-mono text-[#B49A63]">
                  0{idx + 1} &middot; PILLAR
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
