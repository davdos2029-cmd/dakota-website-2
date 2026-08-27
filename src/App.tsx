import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PropertyCategories } from './components/PropertyCategories';
import { FeaturedProperties } from './components/FeaturedProperties';
import { PropertySearchExplorer } from './components/PropertySearchExplorer';
import { LandRanchFeature } from './components/LandRanchFeature';
import { WhyChooseUs } from './components/WhyChooseUs';
import { StatsSection } from './components/StatsSection';
import { AboutSection } from './components/AboutSection';
import { AgentsSection } from './components/AgentsSection';
import { SellYourProperty } from './components/SellYourProperty';
import { BuyingProcess } from './components/BuyingProcess';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ServiceAreaMap } from './components/ServiceAreaMap';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Modals
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { AgentDetailModal } from './components/AgentDetailModal';
import { BlogDetailModal } from './components/BlogDetailModal';
import { SavedPropertiesDrawer } from './components/SavedPropertiesDrawer';
import { MortgageCalculatorModal } from './components/MortgageCalculatorModal';

// Data
import { FEATURED_PROPERTIES } from './data/properties';
import { AGENTS } from './data/agents';
import { BLOG_POSTS, TESTIMONIALS } from './data/resources';
import { Property, Agent, BlogPost, FilterState } from './types';

export default function App() {
  const [properties] = useState<Property[]>(FEATURED_PROPERTIES);
  const [agents] = useState<Agent[]>(AGENTS);
  const [blogPosts] = useState<BlogPost[]>(BLOG_POSTS);
  const [testimonials] = useState(TESTIMONIALS);

  // Saved / Favorite properties state (persisted locally)
  const [savedProperties, setSavedProperties] = useState<Property[]>(() => {
    try {
      const stored = localStorage.getItem('dpr_saved_properties');
      return stored ? JSON.parse(stored) : [FEATURED_PROPERTIES[0], FEATURED_PROPERTIES[1]];
    } catch {
      return [FEATURED_PROPERTIES[0]];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('dpr_saved_properties', JSON.stringify(savedProperties));
    } catch {
      // ignore
    }
  }, [savedProperties]);

  // Modal / Drawer states
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);
  const [isCalcModalOpen, setIsCalcModalOpen] = useState(false);

  // Search Filter state passed to explorer
  const [explorerFilters, setExplorerFilters] = useState<Partial<FilterState>>({});

  // Toggle Save Property
  const handleToggleSave = (property: Property) => {
    setSavedProperties((prev) => {
      const exists = prev.some((p) => p.id === property.id);
      if (exists) {
        return prev.filter((p) => p.id !== property.id);
      } else {
        return [...prev, property];
      }
    });
  };

  const handleRemoveSaved = (property: Property) => {
    setSavedProperties((prev) => prev.filter((p) => p.id !== property.id));
  };

  const handleClearAllSaved = () => {
    setSavedProperties([]);
  };

  // Navigation handlers
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (category: string) => {
    setExplorerFilters((prev) => ({
      ...prev,
      type: category === 'All' ? '' : category,
    }));
    scrollToSection('properties');
  };

  const handleHeroSearch = (filters: Partial<FilterState>) => {
    setExplorerFilters(filters);
    scrollToSection('properties');
  };

  const handleRegionSelect = (cityKeyword: string) => {
    setExplorerFilters({
      city: cityKeyword,
      type: '',
    });
    scrollToSection('properties');
  };

  const handleContactBroker = (property: Property, agent?: Agent) => {
    setSelectedProperty(null);
    scrollToSection('contact');
  };

  // Find agent assigned to selected property
  const currentAssignedAgent = selectedProperty
    ? agents.find((a) => a.id === selectedProperty.agentId) || agents[0]
    : undefined;

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#252826] flex flex-col font-sans selection:bg-[#B49A63] selection:text-[#10241E]">
      {/* Sticky Navigation */}
      <Navbar
        savedProperties={savedProperties}
        savedCount={savedProperties.length}
        onOpenSaved={() => setIsSavedDrawerOpen(true)}
        onOpenCalculator={() => setIsCalcModalOpen(true)}
        onNavigateSection={scrollToSection}
        onFilterByCategory={handleCategorySelect}
        onFilterCategory={handleCategorySelect}
        onOpenContact={() => scrollToSection('contact')}
      />

      {/* Main Page Layout Flow */}
      <main className="flex-grow">
        {/* 1. Hero with Cinematic Backdrop & Instant Search Panel */}
        <Hero
          onSearch={handleHeroSearch}
          onExploreLand={() => handleCategorySelect('Farm & Ranch')}
          onExploreProperties={() => scrollToSection('properties')}
          onTalkToAgent={() => scrollToSection('contact')}
        />

        {/* 2. Editorial Property Category Cards */}
        <PropertyCategories onSelectCategory={handleCategorySelect} />

        {/* 3. Featured Properties Showcase */}
        <FeaturedProperties
          properties={properties}
          savedProperties={savedProperties}
          onToggleSave={handleToggleSave}
          onSelectProperty={(prop) => setSelectedProperty(prop)}
          onViewAll={() => scrollToSection('properties')}
        />

        {/* 4. Land & Ranch Highlight Banner */}
        <LandRanchFeature
          onExploreLand={() => handleCategorySelect('Farm & Ranch')}
          onRequestValuation={() => scrollToSection('selling')}
        />

        {/* 5. Comprehensive Property Search Explorer with Filters */}
        <PropertySearchExplorer
          properties={properties}
          savedProperties={savedProperties}
          initialFilters={explorerFilters}
          onToggleSave={handleToggleSave}
          onSelectProperty={(prop) => setSelectedProperty(prop)}
        />

        {/* 6. Why Choose Us (Four Pillars) */}
        <WhyChooseUs />

        {/* 7. Brokerage Track Record Statistics */}
        <StatsSection />

        {/* 8. Editorial About Company Story */}
        <AboutSection
          onMeetTeam={() => scrollToSection('agents')}
          onExploreProperties={() => scrollToSection('properties')}
        />

        {/* 9. Meet Our Brokers & Agents */}
        <AgentsSection
          agents={agents}
          onSelectAgent={(agent) => setSelectedAgent(agent)}
          onContactAgent={(agent) => {
            setSelectedAgent(agent);
          }}
        />

        {/* 10. Thinking About Selling & Instant Valuation Tool */}
        <SellYourProperty onContactTeam={() => scrollToSection('contact')} />

        {/* 11. 4-Step Strategic Buying Framework */}
        <BuyingProcess onStartSearch={() => scrollToSection('properties')} />

        {/* 12. Client Testimonials */}
        <TestimonialsSection testimonials={testimonials} />

        {/* 13. Regional Service Areas (ND, SD, MN) */}
        <ServiceAreaMap onSelectRegion={handleRegionSelect} />

        {/* 14. Editorial Resources & Land Insights */}
        <BlogSection
          posts={blogPosts}
          onSelectPost={(post) => setSelectedPost(post)}
        />

        {/* 15. Direct Consultation & Inquiry Form */}
        <ContactSection
          onExploreProperties={() => scrollToSection('properties')}
        />
      </main>

      {/* 16. Comprehensive Editorial Footer */}
      <Footer
        onNavigateSection={scrollToSection}
        onFilterByCategory={handleCategorySelect}
        onOpenContact={() => scrollToSection('contact')}
      />

      {/* Modals & Slide-Out Panels */}
      {selectedProperty && (
        <PropertyDetailModal
          property={selectedProperty}
          agent={currentAssignedAgent}
          isSaved={savedProperties.some((p) => p.id === selectedProperty.id)}
          onClose={() => setSelectedProperty(null)}
          onToggleSave={handleToggleSave}
          onContactBroker={handleContactBroker}
        />
      )}

      {selectedAgent && (
        <AgentDetailModal
          agent={selectedAgent}
          properties={properties}
          savedProperties={savedProperties}
          onClose={() => setSelectedAgent(null)}
          onToggleSave={handleToggleSave}
          onSelectProperty={(prop) => setSelectedProperty(prop)}
        />
      )}

      {selectedPost && (
        <BlogDetailModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
          onSelectPropertySearch={() => scrollToSection('properties')}
        />
      )}

      <SavedPropertiesDrawer
        isOpen={isSavedDrawerOpen}
        savedProperties={savedProperties}
        onClose={() => setIsSavedDrawerOpen(false)}
        onSelectProperty={(prop) => setSelectedProperty(prop)}
        onRemoveSaved={handleRemoveSaved}
        onClearAll={handleClearAllSaved}
        onInquireAll={() => {
          setIsSavedDrawerOpen(false);
          scrollToSection('contact');
        }}
      />

      <MortgageCalculatorModal
        isOpen={isCalcModalOpen}
        onClose={() => setIsCalcModalOpen(false)}
      />
    </div>
  );
}
