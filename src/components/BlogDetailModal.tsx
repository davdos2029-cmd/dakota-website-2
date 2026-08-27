import React from 'react';
import { X, Clock, User, ArrowLeft, Share2, BookOpen } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogDetailModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onSelectPropertySearch: () => void;
}

export const BlogDetailModal: React.FC<BlogDetailModalProps> = ({
  post,
  onClose,
  onSelectPropertySearch,
}) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-[#F7F4EE] w-full max-w-4xl rounded-sm shadow-2xl overflow-hidden border border-[#E9E3D8] my-auto flex flex-col max-h-[92vh]">
        {/* Top Header */}
        <div className="bg-[#17352D] text-[#F7F4EE] px-6 py-4 flex items-center justify-between border-b border-[#B49A63]/30 shrink-0">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-[#B49A63]">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Dakota Plains Market Advisory &middot; {post.category}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#E9E3D8] hover:text-white hover:bg-white/10 rounded-sm transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 flex-grow">
          {/* Article Header */}
          <div>
            <div className="flex items-center gap-3 text-xs text-[#252826]/70 mb-3 font-mono">
              <span className="px-2 py-0.5 bg-[#E9E3D8] text-[#17352D] font-bold rounded-xs">
                {post.category}
              </span>
              <span>&middot;</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#B49A63]" />
                {post.readTime}
              </span>
              <span>&middot;</span>
              <span>{post.date}</span>
            </div>

            <h1 className="font-serif text-2xl sm:text-4xl font-bold text-[#17352D] leading-tight mb-4">
              {post.title}
            </h1>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#17352D] pb-6 border-b border-[#E9E3D8]">
              <User className="w-4 h-4 text-[#B49A63]" />
              <span>Written by {post.author}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="h-64 sm:h-96 rounded-sm overflow-hidden border border-[#E9E3D8]">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Article Body Content */}
          <div className="prose prose-stone max-w-none text-sm sm:text-base text-[#252826]/90 leading-relaxed space-y-4">
            <p className="text-lg font-serif italic text-[#17352D] leading-relaxed border-l-2 border-[#B49A63] pl-4">
              {post.excerpt}
            </p>
            <p>
              In today's fast-moving regional marketplace, landowners and real estate investors require precision timing and sound regulatory understanding. Whether analyzing multi-parcel soil maps in the Red River Valley or evaluating 1031 tax exchange timelines, working with seasoned local brokers makes all the difference.
            </p>
            <p>
              Agricultural soil productivity indexes (PI and CSR ratings) determine long-term crop yields, lease cash rates, and resale value. Similarly, residential buyers throughout Fargo-Moorhead and Bismarck-Mandan are prioritizing modern energy efficiency, architectural durability against harsh Midwest winters, and generous lot setbacks.
            </p>
            <p>
              Before entering into any purchase agreement or listing contract, consult with a licensed Dakota Plains Realty broker to ensure your equity is protected and your transaction is structured for maximum tax advantages.
            </p>
          </div>

          {/* Callout Box */}
          <div className="p-6 bg-[#17352D] text-[#F7F4EE] rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-serif text-lg font-bold text-[#F7F4EE]">
                Have Questions About This Market Topic?
              </h4>
              <p className="text-xs text-[#E9E3D8]/80 mt-0.5">
                Our brokers are available for private consultations and valuation reviews.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onSelectPropertySearch();
              }}
              className="px-5 py-2.5 bg-[#B49A63] hover:bg-[#C9B382] text-[#10241E] text-xs font-bold uppercase tracking-wider rounded-sm transition-colors shrink-0"
            >
              Explore Properties
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
