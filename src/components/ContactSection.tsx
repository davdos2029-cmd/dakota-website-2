import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, ShieldCheck, Compass } from 'lucide-react';

interface ContactSectionProps {
  onExploreProperties: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onExploreProperties }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('Buying');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !email.trim() || !phone.trim()) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#17352D] text-[#F7F4EE] relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 rounded-full bg-[#10241E]/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 rounded-full bg-[#244E43]/40 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Messaging & Direct Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#10241E] border border-[#B49A63]/50 text-[#B49A63] text-xs font-semibold uppercase tracking-[0.25em] mb-6">
                <Compass className="w-3.5 h-3.5" />
                Start the Conversation
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F7F4EE] leading-[1.15] mb-6">
                Let’s Find the Right Property for You.
              </h2>

              <p className="text-base text-[#E9E3D8]/90 font-normal leading-relaxed mb-8">
                Whether you’re buying, selling, exchanging farmland, or simply exploring your options across North Dakota, South Dakota, and Minnesota, our seasoned team is ready to guide you.
              </p>

              {/* Direct Office Contact Info */}
              <div className="space-y-4 mb-8 text-sm">
                <a
                  href="tel:7013641330"
                  className="flex items-center gap-3.5 p-3.5 bg-[#10241E]/80 border border-white/10 rounded-sm hover:border-[#B49A63]/60 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-sm bg-[#17352D] text-[#B49A63] flex items-center justify-center group-hover:bg-[#B49A63] group-hover:text-[#17352D] transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-[#E9E3D8]/70 uppercase tracking-wider">Direct Office Line</span>
                    <span className="font-serif font-bold text-base text-[#F7F4EE]">(701) 364-1330</span>
                  </div>
                </a>

                <a
                  href="mailto:info@dakotaplainsrealty.com"
                  className="flex items-center gap-3.5 p-3.5 bg-[#10241E]/80 border border-white/10 rounded-sm hover:border-[#B49A63]/60 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-sm bg-[#17352D] text-[#B49A63] flex items-center justify-center group-hover:bg-[#B49A63] group-hover:text-[#17352D] transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-[#E9E3D8]/70 uppercase tracking-wider">Email Inquiry</span>
                    <span className="font-medium text-sm text-[#F7F4EE]">info@dakotaplainsrealty.com</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3.5 bg-[#10241E]/80 border border-white/10 rounded-sm">
                  <div className="w-9 h-9 rounded-sm bg-[#17352D] text-[#B49A63] flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-[#E9E3D8]/70 uppercase tracking-wider">Brokerage Headquarters</span>
                    <span className="text-xs text-[#F7F4EE]">4302 13th Avenue South, Suite 100, Fargo, ND 58103</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-[#E9E3D8]/70">
                <Clock className="w-4 h-4 text-[#B49A63]" />
                <span>Mon – Fri: 8:00 AM – 6:00 PM | Weekend Appts</span>
              </div>
              <button
                onClick={onExploreProperties}
                className="text-xs uppercase tracking-wider font-bold text-[#B49A63] hover:text-[#F7F4EE] transition-colors"
              >
                Browse Listings &rarr;
              </button>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#F7F4EE] text-[#252826] p-8 sm:p-10 rounded-sm shadow-2xl border border-[#E9E3D8]">
              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#B49A63] block mb-1">
                  Prompt Response Guaranteed
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#17352D]">
                  Let's Talk About Your Next Move.
                </h3>
              </div>

              {submitted ? (
                <div className="py-12 px-6 text-center animate-fadeIn">
                  <CheckCircle2 className="w-14 h-14 text-[#17352D] mx-auto mb-4" />
                  <h4 className="font-serif text-2xl font-bold text-[#17352D] mb-2">
                    Message Sent Successfully
                  </h4>
                  <p className="text-sm text-[#252826]/80 max-w-md mx-auto leading-relaxed mb-6">
                    Thank you, <span className="font-semibold">{firstName}</span>. Your inquiry has been forwarded to our managing broker. We will connect with you within 2 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFirstName('');
                      setLastName('');
                      setEmail('');
                      setPhone('');
                      setMessage('');
                    }}
                    className="px-6 py-2.5 bg-[#17352D] text-[#F7F4EE] text-xs font-semibold uppercase tracking-wider rounded-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-form-firstname" className="block text-xs font-bold uppercase tracking-wider text-[#17352D] mb-1">
                        First Name *
                      </label>
                      <input
                        id="contact-form-firstname"
                        type="text"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="John"
                        className="w-full text-sm bg-[#FFFFFF] border border-[#E9E3D8] rounded-sm py-2.5 px-3 focus:outline-none focus:border-[#17352D]"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-form-lastname" className="block text-xs font-bold uppercase tracking-wider text-[#17352D] mb-1">
                        Last Name
                      </label>
                      <input
                        id="contact-form-lastname"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Doe"
                        className="w-full text-sm bg-[#FFFFFF] border border-[#E9E3D8] rounded-sm py-2.5 px-3 focus:outline-none focus:border-[#17352D]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-form-email" className="block text-xs font-bold uppercase tracking-wider text-[#17352D] mb-1">
                        Email Address *
                      </label>
                      <input
                        id="contact-form-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full text-sm bg-[#FFFFFF] border border-[#E9E3D8] rounded-sm py-2.5 px-3 focus:outline-none focus:border-[#17352D]"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-form-phone" className="block text-xs font-bold uppercase tracking-wider text-[#17352D] mb-1">
                        Phone Number *
                      </label>
                      <input
                        id="contact-form-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(701) 000-0000"
                        className="w-full text-sm bg-[#FFFFFF] border border-[#E9E3D8] rounded-sm py-2.5 px-3 focus:outline-none focus:border-[#17352D]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-form-interest" className="block text-xs font-bold uppercase tracking-wider text-[#17352D] mb-1">
                      I'm Interested In
                    </label>
                    <select
                      id="contact-form-interest"
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="w-full text-sm bg-[#FFFFFF] border border-[#E9E3D8] rounded-sm py-2.5 px-3 focus:outline-none cursor-pointer"
                    >
                      <option value="Buying">Buying a Residential Property</option>
                      <option value="Selling">Selling a Residential Property</option>
                      <option value="Land">Farmland / Tillable Ground / 1031 Exchange</option>
                      <option value="Ranch">Working Cattle Ranch / Pasture</option>
                      <option value="Lake">Minnesota Lakefront Property</option>
                      <option value="Commercial">Commercial / Logistics / Leasing</option>
                      <option value="Valuation">Requesting a Professional Valuation</option>
                      <option value="Other">Other Advisory / General Questions</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-form-message" className="block text-xs font-bold uppercase tracking-wider text-[#17352D] mb-1">
                      Message / Property Preferences
                    </label>
                    <textarea
                      id="contact-form-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about what you're looking for, location preferences, timeline, or acreage requirements..."
                      className="w-full text-sm bg-[#FFFFFF] border border-[#E9E3D8] rounded-sm py-2.5 px-3 focus:outline-none focus:border-[#17352D]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#17352D] hover:bg-[#10241E] text-[#F7F4EE] text-xs font-bold uppercase tracking-wider rounded-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <Send className="w-4 h-4 text-[#B49A63]" />
                    <span>Send Message to Dakota Plains</span>
                  </button>

                  <div className="flex items-center justify-center gap-1.5 pt-2 text-[11px] text-[#252826]/70">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#17352D]" />
                    <span>Your privacy is respected. No spam or third-party sharing.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
