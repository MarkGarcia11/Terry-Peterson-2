import React, { useState } from 'react';
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  Upload,
  CheckCircle2,
  X,
  AlertTriangle,
} from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { Reveal } from '../components/common/Reveal';
import { ContactFormData } from '../types';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    preferredContact: 'phone',
    operationType: 'job-shop',
    problemCategory: 'grounding',
    urgency: 'urgent-line-down',
    description: '',
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Basic validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.description.trim()) {
      setErrorMessage('Please fill out your name, email, and a brief description of the defect.');
      return;
    }

    setIsSubmitting(true);

    // TODO: Wire to Supabase or your custom email endpoint here.
    // e.g., await supabase.from('inquiries').insert([formData]);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="pt-28 pb-16 bg-[#423E37] text-white">
      {/* 1. HERO HEADER */}
      <section className="py-12 sm:py-16 border-b border-white/10 bg-[#2E2B26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            number="05 / DIRECT ACCESS"
            tag="GET IN TOUCH"
            title={
              <>
                Let’s talk about <span className="italic font-normal text-[#C9A46E]">what’s going wrong.</span>
              </>
            }
            subtitle="I read every message personally. Call, text, or submit details below—whichever is fastest for you."
          />

          {/* 4 Direct Options Up Top */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {/* Phone */}
            <a
              href="tel:8155457709"
              className="p-5 rounded-xl bg-[#423E37]/80 hover:bg-[#423E37] border border-white/10 hover:border-[#B8905A]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#B8905A] font-mono mb-2">
                  <span className="uppercase">Direct Call</span>
                  <Phone className="w-4 h-4" />
                </div>
                <p className="font-semibold text-white text-base group-hover:text-[#B8905A] transition-colors">
                  (815) 545-7709
                </p>
              </div>
              <p className="text-xs text-white/60 mt-3">
                Immediate phone triage with Terry
              </p>
            </a>

            {/* Text Message */}
            <a
              href="sms:8155457709"
              className="p-5 rounded-xl bg-[#423E37]/80 hover:bg-[#423E37] border border-white/10 hover:border-[#B8905A]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#B8905A] font-mono mb-2">
                  <span className="uppercase">Text / SMS</span>
                  <MessageSquare className="w-4 h-4" />
                </div>
                <p className="font-semibold text-white text-base group-hover:text-[#B8905A] transition-colors">
                  Text (815) 545-7709
                </p>
              </div>
              <p className="text-xs text-white/60 mt-3">
                Send quick photos directly from your phone
              </p>
            </a>

            {/* Email */}
            <a
              href="mailto:tepowder@msn.com"
              className="p-5 rounded-xl bg-[#423E37]/80 hover:bg-[#423E37] border border-white/10 hover:border-[#B8905A]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#B8905A] font-mono mb-2">
                  <span className="uppercase">Direct Email</span>
                  <Mail className="w-4 h-4" />
                </div>
                <p className="font-semibold text-white text-sm group-hover:text-[#B8905A] transition-colors truncate">
                  tepowder@msn.com
                </p>
              </div>
              <p className="text-xs text-white/60 mt-3">
                For spec sheets, QA reports & drawings
              </p>
            </a>

            {/* Address */}
            <div className="p-5 rounded-xl bg-[#423E37]/80 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-[#B8905A] font-mono mb-2">
                  <span className="uppercase">Office Base</span>
                  <MapPin className="w-4 h-4" />
                </div>
                <p className="font-semibold text-white text-xs leading-snug">
                  21635 Nadia Dr.
                  <br />
                  Shorewood, IL 60404
                </p>
              </div>
              <p className="text-xs text-white/60 mt-3">
                Chicagoland base · Nationwide travel
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN FORM & LOCATION SECTION */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Form */}
            <div className="lg:col-span-8">
              <div className="p-6 sm:p-10 rounded-2xl bg-[#454543]/40 border border-white/10">
                <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
                  <div>
                    <h2 className="font-display text-2xl sm:text-3xl text-white">
                      Describe What You’re Seeing
                    </h2>
                    <p className="text-white/70 text-xs sm:text-sm mt-1">
                      Give as much detail as you can. It helps me prepare before we speak.
                    </p>
                  </div>
                  <span className="tech-tag text-xs text-[#B8905A] font-mono hidden sm:inline">
                    CONFIDENTIAL
                  </span>
                </div>

                {isSubmitted ? (
                  <div className="p-8 rounded-xl bg-[#2E2B26] border border-[#B8905A] text-center animate-fadeIn space-y-4">
                    <div className="inline-flex p-3 rounded-full bg-[#B8905A]/20 text-[#B8905A]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl text-white">
                      Message Received
                    </h3>
                    <p className="text-white/80 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="text-[#B8905A] font-semibold">{formData.fullName}</span>. I have received your line details and will review your symptoms. I will get back to you via {formData.preferredContact} as soon as possible.
                    </p>
                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            fullName: '',
                            companyName: '',
                            email: '',
                            phone: '',
                            preferredContact: 'phone',
                            operationType: 'job-shop',
                            problemCategory: 'grounding',
                            urgency: 'urgent-line-down',
                            description: '',
                          });
                          setSelectedFile(null);
                        }}
                        className="text-xs text-white/70 hover:text-white underline"
                      >
                        Submit another note
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {errorMessage && (
                      <div className="p-3.5 rounded-lg bg-red-900/40 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Row 1: Name and Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase text-white/80 mb-1.5">
                          Your Name <span className="text-[#B8905A]">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. John Miller"
                          className="w-full bg-[#2E2B26]/80 border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#B8905A]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase text-white/80 mb-1.5">
                          Company / Shop Name
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="e.g. Midwest Custom Finishing"
                          className="w-full bg-[#2E2B26]/80 border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#B8905A]"
                        />
                      </div>
                    </div>

                    {/* Row 2: Email and Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase text-white/80 mb-1.5">
                          Email Address <span className="text-[#B8905A]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full bg-[#2E2B26]/80 border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#B8905A]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase text-white/80 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(815) 555-0123"
                          className="w-full bg-[#2E2B26]/80 border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#B8905A]"
                        />
                      </div>
                    </div>

                    {/* Row 3: Operation Type, Preferred Contact & Urgency */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase text-white/80 mb-1.5">
                          Type of Operation
                        </label>
                        <select
                          name="operationType"
                          value={formData.operationType}
                          onChange={handleChange}
                          className="w-full bg-[#2E2B26]/80 border border-white/15 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#B8905A]"
                        >
                          <option value="job-shop">Custom Job Shop</option>
                          <option value="oem">OEM Manufacturing Line</option>
                          <option value="aerospace">Aerospace / Defense</option>
                          <option value="architectural">Architectural Extrusions</option>
                          <option value="other">Other Finish Operation</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase text-white/80 mb-1.5">
                          Preferred Contact
                        </label>
                        <select
                          name="preferredContact"
                          value={formData.preferredContact}
                          onChange={handleChange}
                          className="w-full bg-[#2E2B26]/80 border border-white/15 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#B8905A]"
                        >
                          <option value="phone">Phone Call</option>
                          <option value="text">Text / SMS</option>
                          <option value="email">Email</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase text-white/80 mb-1.5">
                          Urgency Level
                        </label>
                        <select
                          name="urgency"
                          value={formData.urgency}
                          onChange={handleChange}
                          className="w-full bg-[#2E2B26]/80 border border-white/15 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#B8905A]"
                        >
                          <option value="urgent-line-down">Urgent / Line Down</option>
                          <option value="within-week">Within 1-2 Weeks</option>
                          <option value="routine-planning">Routine / Planning Ahead</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 4: Problem Category */}
                    <div>
                      <label className="block text-xs font-mono uppercase text-white/80 mb-1.5">
                        Primary Symptom Category
                      </label>
                      <select
                        name="problemCategory"
                        value={formData.problemCategory}
                        onChange={handleChange}
                        className="w-full bg-[#2E2B26]/80 border border-white/15 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#B8905A]"
                      >
                        <option value="grounding">Grounding & Wrap (Back-ionization, cage repelling)</option>
                        <option value="cleaning">Part Cleaning & Pretreatment (Fisheyes, cross-hatch peeling)</option>
                        <option value="powder-waste">Excessive Powder Waste & Mil Overbuild</option>
                        <option value="unusual">Unusual / Aerospace Challenge (Alloy outgassing, multi-coat)</option>
                        <option value="training">Team Training & Operator Coaching</option>
                        <option value="not-sure">Not Sure / Multiple Issues</option>
                      </select>
                    </div>

                    {/* Row 5: Detailed Description */}
                    <div>
                      <label className="block text-xs font-mono uppercase text-white/80 mb-1.5">
                        What Are You Seeing? <span className="text-[#B8905A]">*</span>
                      </label>
                      <textarea
                        name="description"
                        required
                        rows={5}
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Please describe the part substrate (steel, aluminum, casting), gun type, wash stages, and what the defect looks like (e.g. orange peel on flat surfaces, paint peeling on cross-hatch, starry pinpricks)..."
                        className="w-full bg-[#2E2B26]/80 border border-white/15 rounded-lg p-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#B8905A] leading-relaxed"
                      />
                    </div>

                    {/* File Attachment / Photo Upload Simulation */}
                    <div>
                      <label className="block text-xs font-mono uppercase text-white/80 mb-1.5">
                        Attach Photos of Defect or Drawing (Optional)
                      </label>
                      {!selectedFile ? (
                        <label className="border border-dashed border-white/20 rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer hover:border-[#B8905A]/50 hover:bg-white/[0.02] transition-all">
                          <Upload className="w-5 h-5 text-[#B8905A] mb-1" />
                          <span className="text-xs text-white/80">
                            Click to upload defect photo or part blueprint
                          </span>
                          <span className="text-[11px] text-white/40 mt-0.5">
                            JPG, PNG, PDF up to 25MB
                          </span>
                          <input
                            type="file"
                            onChange={handleFileChange}
                            accept="image/*,.pdf"
                            className="hidden"
                          />
                        </label>
                      ) : (
                        <div className="flex items-center justify-between p-3 rounded-lg bg-[#2E2B26] border border-[#B8905A]/40 text-xs">
                          <div className="flex items-center gap-2 text-white truncate max-w-xs">
                            <CheckCircle2 className="w-4 h-4 text-[#B8905A] shrink-0" />
                            <span className="truncate">{selectedFile.name}</span>
                          </div>
                          <button
                            type="button"
                            onClick={removeFile}
                            className="p-1 rounded hover:bg-white/10 text-white/60 hover:text-white"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 px-6 rounded-lg bg-[#B8905A] hover:bg-[#C9A46E] text-white font-semibold text-sm tracking-wide shadow-lg shadow-[#B8905A]/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Transmitting details...</span>
                        ) : (
                          <>
                            <span>Send Line Details to Terry</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>

                      <p className="text-center text-[11px] text-white/50 mt-3 flex items-center justify-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#B8905A]" />
                        <span>
                          I read every message myself and will reply as soon as I can.
                        </span>
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: Location Card & Expectations */}
            <div className="lg:col-span-4 space-y-6">
              {/* Location Card */}
              <Reveal direction="up" delay={0.1}>
                <div className="p-6 rounded-2xl bg-[#454543]/40 border border-white/10">
                  <div className="flex items-center gap-2 tech-tag text-[#B8905A] mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>CONSULTANT BASE</span>
                  </div>
                  <h3 className="font-display text-xl text-white mb-2">
                    Shorewood, Illinois
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed mb-4">
                    Located in Will County, with direct interstate access across the Chicagoland industrial corridor, Midwest manufacturing hubs, and rapid nationwide flight dispatch.
                  </p>

                  <div className="space-y-2 text-xs font-mono text-white/80 border-t border-white/10 pt-3">
                    <div>
                      <span className="text-white/40 block">ADDRESS</span>
                      <span>21635 Nadia Dr., Shorewood, IL 60404</span>
                    </div>
                    <div>
                      <span className="text-white/40 block">HOURS</span>
                      <span>Monday – Saturday: 7:00 AM – 6:00 PM CT</span>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* What Happens Next Card */}
              <Reveal direction="up" delay={0.2}>
                <div className="p-6 rounded-2xl bg-[#2E2B26] border border-[#B8905A]/30 space-y-3">
                  <div className="flex items-center gap-2 tech-tag text-[#B8905A]">
                    <Clock className="w-4 h-4" />
                    <span>WHAT HAPPENS AFTER YOU CONTACT</span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-white/80">
                    <li className="flex items-start gap-2">
                      <span className="text-[#B8905A] font-bold">1.</span>
                      <span>Terry reviews your message, defect photos, and line parameters.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#B8905A] font-bold">2.</span>
                      <span>We hold a direct 15-minute phone or video triage call.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#B8905A] font-bold">3.</span>
                      <span>If needed, we schedule an on-site audit with measurement tools.</span>
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
