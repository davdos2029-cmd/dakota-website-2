import React from 'react';
import { BookOpen, Clock, ArrowRight, User } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogSectionProps {
  posts: BlogPost[];
  onSelectPost: (post: BlogPost) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ posts, onSelectPost }) => {
  return (
    <section id="resources" className="py-20 lg:py-32 bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#E9E3D8] text-[#17352D] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <BookOpen className="w-3.5 h-3.5 text-[#B49A63]" />
              Editorial &amp; Insights
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#17352D] tracking-tight mb-3">
              Insights From Dakota Plains
            </h2>
            <p className="text-base text-[#252826]/80 font-normal leading-relaxed">
              Expert commentary on 1031 exchanges, farmland soil ratings, residential market trends, and recreation management.
            </p>
          </div>
        </div>

        {/* Editorial Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="bg-[#FFFFFF] border border-[#E9E3D8] rounded-sm overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1"
            >
              {/* Post Image with Hover Zoom */}
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-106 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-[#17352D] text-[#F7F4EE] text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 text-[11px] text-[#252826]/60 mb-2 font-mono">
                    <Clock className="w-3 h-3 text-[#B49A63]" />
                    <span>{post.readTime}</span>
                    <span>&middot;</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#17352D] group-hover:text-[#B49A63] transition-colors leading-snug mb-2.5 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#252826]/75 line-clamp-3 leading-relaxed mb-4 font-normal">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 pt-0 border-t border-[#E9E3D8]/60 mt-auto">
                <div className="pt-3 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#252826]/70">
                    <User className="w-3 h-3 text-[#B49A63]" />
                    <span className="font-medium">{post.author}</span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#17352D] group-hover:text-[#B49A63] transition-colors">
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
