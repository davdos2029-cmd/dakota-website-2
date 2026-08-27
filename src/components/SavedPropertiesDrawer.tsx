import React from 'react';
import { X, Heart, Trash2, ArrowRight, Compass, Bed, Bath, Maximize } from 'lucide-react';
import { Property } from '../types';

interface SavedPropertiesDrawerProps {
  isOpen: boolean;
  savedProperties: Property[];
  onClose: () => void;
  onSelectProperty: (property: Property) => void;
  onRemoveSaved: (property: Property) => void;
  onClearAll: () => void;
  onInquireAll: () => void;
}

export const SavedPropertiesDrawer: React.FC<SavedPropertiesDrawerProps> = ({
  isOpen,
  savedProperties,
  onClose,
  onSelectProperty,
  onRemoveSaved,
  onClearAll,
  onInquireAll,
}) => {
  if (!isOpen) return null;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-md bg-[#F7F4EE] h-full shadow-2xl flex flex-col justify-between border-l border-[#E9E3D8] animate-slideLeft">
        {/* Header */}
        <div className="bg-[#17352D] text-[#F7F4EE] p-5 flex items-center justify-between border-b border-[#B49A63]/30">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 fill-[#B49A63] text-[#B49A63]" />
            <h3 className="font-serif text-lg font-bold">
              Saved Properties ({savedProperties.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#E9E3D8] hover:text-white rounded-sm"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Property List */}
        <div className="p-5 overflow-y-auto flex-grow space-y-4">
          {savedProperties.length === 0 ? (
            <div className="text-center py-16">
              <Heart className="w-12 h-12 text-[#B49A63]/40 mx-auto mb-3" />
              <h4 className="font-serif text-lg font-bold text-[#17352D] mb-1">
                Your Saved List is Empty
              </h4>
              <p className="text-xs text-[#252826]/70 max-w-xs mx-auto mb-6">
                Click the heart icon on any property card or detail view to save listings for easy comparison.
              </p>
              <button
                onClick={onClose}
                className="px-5 py-2 bg-[#17352D] text-[#F7F4EE] text-xs font-semibold uppercase tracking-wider rounded-sm"
              >
                Browse Listings
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between text-xs pb-2 border-b border-[#E9E3D8]">
                <span className="text-[#252826]/70">Compare and manage your favorites</span>
                <button
                  onClick={onClearAll}
                  className="text-red-700 hover:underline font-semibold"
                >
                  Clear All
                </button>
              </div>

              {savedProperties.map((prop) => (
                <div
                  key={prop.id}
                  className="bg-[#FFFFFF] border border-[#E9E3D8] rounded-sm p-3 shadow-xs flex gap-3 group relative hover:border-[#17352D] transition-colors"
                >
                  <img
                    src={prop.images[0]}
                    alt={prop.title}
                    className="w-24 h-20 object-cover rounded-xs shrink-0 cursor-pointer"
                    onClick={() => {
                      onClose();
                      onSelectProperty(prop);
                    }}
                  />
                  <div className="flex-grow flex flex-col justify-between min-w-0">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#B49A63] tracking-wider block">
                        {prop.type}
                      </span>
                      <h5
                        onClick={() => {
                          onClose();
                          onSelectProperty(prop);
                        }}
                        className="font-serif font-bold text-sm text-[#17352D] truncate hover:text-[#B49A63] cursor-pointer"
                      >
                        {prop.title}
                      </h5>
                      <span className="text-xs font-bold text-[#17352D]">
                        {formatCurrency(prop.price)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-1 text-[11px] text-[#252826]/70">
                      <span>{prop.city}, {prop.state}</span>
                      <button
                        onClick={() => onRemoveSaved(prop)}
                        className="text-[#252826]/40 hover:text-red-700 p-1"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Footer CTAs */}
        {savedProperties.length > 0 && (
          <div className="p-5 bg-[#FFFFFF] border-t border-[#E9E3D8] space-y-2">
            <button
              onClick={() => {
                onClose();
                onInquireAll();
              }}
              className="w-full py-3 bg-[#17352D] hover:bg-[#10241E] text-[#F7F4EE] text-xs font-bold uppercase tracking-wider rounded-sm shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <span>Inquire on All {savedProperties.length} Properties</span>
              <ArrowRight className="w-4 h-4 text-[#B49A63]" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
