import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-[#F7F4EE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#E9E3D8] text-[#17352D] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-[#B49A63]" />
            Client Stories &amp; Feedback
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#17352D] tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base text-[#252826]/80 font-normal leading-relaxed">
            Real feedback from landowners, families, ranchers, and business leaders who trusted Dakota Plains Realty.
          </p>
        </div>

        {/* Featured Editorial Testimonial Carousel Card */}
        <div className="max-w-4xl mx-auto bg-[#FFFFFF] border border-[#E9E3D8] rounded-sm p-8 sm:p-12 shadow-xl relative editorial-shadow">
          {/* Large Decorative Quote Icon */}
          <div className="absolute top-6 right-8 text-[#B49A63]/20 pointer-events-none">
            <Quote className="w-20 h-20 sm:w-28 sm:h-28 rotate-180" />
          </div>

          <div className="relative z-10">
            {/* 5-Star Rating */}
            <div className="flex items-center gap-1.5 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#B49A63] text-[#B49A63]" />
              ))}
              <span className="text-xs uppercase tracking-widest text-[#17352D] font-bold ml-2">
                5.0 &middot; Verified Representation
              </span>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="font-serif text-lg sm:text-2xl text-[#17352D] leading-relaxed mb-8 italic">
              "{current.content}"
            </blockquote>

            {/* Client Meta Info */}
            <div className="pt-6 border-t border-[#E9E3D8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="font-serif text-lg font-bold text-[#17352D]">
                  {current.clientName}
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#252826]/75 mt-0.5">
                  <span className="font-semibold text-[#B49A63]">{current.role}</span>
                  <span>&middot;</span>
                  <span>{current.location}</span>
                  <span>&middot;</span>
                  <span className="italic">{current.propertyType}</span>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2 self-end sm:self-center">
                <button
                  onClick={prevTestimonial}
                  className="p-2.5 rounded-sm border border-[#E9E3D8] bg-[#F7F4EE] hover:bg-[#17352D] hover:text-[#F7F4EE] transition-colors"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono px-2 text-[#252826]/60">
                  {currentIndex + 1} / {testimonials.length}
                </span>
                <button
                  onClick={nextTestimonial}
                  className="p-2.5 rounded-sm border border-[#E9E3D8] bg-[#F7F4EE] hover:bg-[#17352D] hover:text-[#F7F4EE] transition-colors"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Secondary Testimonial Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
          {testimonials.slice(0, 3).map((t, idx) => (
            <div
              key={t.id}
              onClick={() => setCurrentIndex(idx)}
              className={`p-6 bg-[#FFFFFF] border rounded-sm transition-all cursor-pointer ${
                currentIndex === idx
                  ? 'border-[#17352D] ring-1 ring-[#17352D] shadow-md'
                  : 'border-[#E9E3D8] hover:border-[#B49A63]/60 shadow-xs'
              }`}
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#B49A63] text-[#B49A63]" />
                ))}
              </div>
              <p className="text-xs text-[#252826]/85 line-clamp-3 mb-4 leading-relaxed italic">
                "{t.content}"
              </p>
              <div className="pt-3 border-t border-[#E9E3D8]/60 text-xs">
                <span className="font-bold text-[#17352D] block">{t.clientName}</span>
                <span className="text-[11px] text-[#252826]/60">{t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
