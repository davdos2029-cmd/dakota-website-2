import React from 'react';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      value: '22+',
      label: 'Years of Regional Experience',
      sublabel: 'Founded on trusted local relationships',
    },
    {
      value: '$450M+',
      label: 'Volume Represented',
      sublabel: 'Residential, farmland, and commercial',
    },
    {
      value: '3',
      label: 'States Licensed & Active',
      sublabel: 'North Dakota, South Dakota, Minnesota',
    },
    {
      value: '1,200+',
      label: 'Closed Transactions',
      sublabel: 'Fiduciary representation you can trust',
    },
  ];

  return (
    <section className="bg-[#10241E] text-[#F7F4EE] border-y border-[#B49A63]/30 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center lg:text-left ${
                index !== stats.length - 1 ? 'lg:border-r lg:border-[#17352D] lg:pr-8' : ''
              }`}
            >
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#B49A63] tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#F7F4EE] mb-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-[#E9E3D8]/60 font-normal">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
