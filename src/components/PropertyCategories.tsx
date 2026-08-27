import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';

interface PropertyCategoriesProps {
  onSelectCategory: (category: string) => void;
}

interface CategoryItem {
  id: string;
  name: string;
  categoryValue: string;
  count: string;
  description: string;
  image: string;
  tagline: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    id: 'cat-1',
    name: 'Residential Homes',
    categoryValue: 'Residential',
    count: '30+ Active',
    tagline: 'Custom Estates & Neighborhood Homes',
    description: 'Distinctive luxury estates, modern family residences, and executive acreage living throughout the Dakota metro and suburban communities.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'cat-2',
    name: 'Farm & Ranch',
    categoryValue: 'Farm & Ranch',
    count: 'Generational',
    tagline: 'Working Ranches & Livestock Operations',
    description: 'Expansive cattle ranches, pastureland, calving facilities, and multi-generational homesteads across the Northern Great Plains.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'cat-3',
    name: 'Tillable Land & Acreage',
    categoryValue: 'Land',
    count: 'Prime Soils',
    tagline: 'Class I & II High-Yield Farmland',
    description: 'High-productivity tillable cropland, pattern-tiled acreage, and development tracts in the fertile Red River Valley and beyond.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'cat-4',
    name: 'Hunting & Recreational',
    categoryValue: 'Hunting & Recreational',
    count: 'Waterfowl & Whitetail',
    tagline: 'Sportsman’s Legacy Ground & CRP',
    description: 'Prime pheasant belts, waterfowl flyway oxbows, and timbered whitetail coulees offering world-class recreation and passive CRP income.',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'cat-5',
    name: 'Lake Properties',
    categoryValue: 'Lake Properties',
    count: 'Waterfront Living',
    tagline: 'MN Lakes Country & Shoreline Lodges',
    description: 'Pristine sugar-sand shorelines, modern classic lake lodges, and sunset views across Otter Tail, Becker, and regional lakes.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'cat-6',
    name: 'Commercial & Logistics',
    categoryValue: 'Commercial',
    count: 'Industrial & Retail',
    tagline: 'Strategic Regional Business Locations',
    description: 'High-visibility distribution warehouses, multi-tenant industrial yards, corporate office suites, and commercial expansion tracts.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  },
];

export const PropertyCategories: React.FC<PropertyCategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section id="categories" className="py-20 lg:py-28 bg-[#F7F4EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#E9E3D8] text-[#17352D] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Compass className="w-3.5 h-3.5 text-[#B49A63]" />
            Areas of Practice
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#17352D] tracking-tight mb-4">
            Explore What We’re Known For
          </h2>
          <p className="text-base sm:text-lg text-[#252826]/80 font-normal leading-relaxed">
            From city homes to wide-open acreage, find the property that fits your lifestyle, enterprise, or investment goals.
          </p>
        </div>

        {/* 6 Editorial Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              onClick={() => onSelectCategory(category.categoryValue)}
              className="group relative h-[420px] rounded-sm overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1.5 flex flex-col justify-end p-6 sm:p-8"
            >
              {/* Background Image with Zoom on Hover */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#10241E] via-[#10241E]/65 to-transparent transition-opacity duration-500 group-hover:via-[#10241E]/80" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
              </div>

              {/* Top Tag */}
              <div className="absolute top-5 right-5 z-10">
                <span className="px-2.5 py-1 bg-[#F7F4EE]/90 backdrop-blur-sm text-[#17352D] text-[11px] uppercase tracking-wider font-semibold rounded-sm shadow-sm">
                  {category.count}
                </span>
              </div>

              {/* Card Content */}
              <div className="relative z-10 text-[#F7F4EE]">
                <span className="block text-xs uppercase tracking-widest text-[#B49A63] font-semibold mb-2">
                  {category.tagline}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#F7F4EE] mb-3 leading-snug group-hover:text-[#E9E3D8] transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-[#E9E3D8]/85 font-normal leading-relaxed line-clamp-3 mb-5 opacity-90 group-hover:opacity-100 transition-opacity">
                  {category.description}
                </p>
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#B49A63] group-hover:text-[#F7F4EE] transition-colors">
                  <span>Explore Properties</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </div>

              {/* Bottom Subtle Brass Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#B49A63] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
