import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Imageshoot from '../src/assets/Herosection.jpeg';
import supreme from '../src/assets/supreme_logo_black-removebg-preview.png';
import Heroimage from '../src/assets/Left-pose-image.png';
import SEDEX from '../src/assets/sedex-.png';
import OEKO_TEX from '../src/assets/OEKO-TEX-removebg-preview.png';
import FAIR_TRADE from '../src/assets/global-recycled-standard-certification-service.png';
import GOTS from '../src/assets/GOTS-removebg-preview.png';
import Warap from '../src/assets/Warap-removebg-preview.png';
import walmart from '../src/assets/Walmart-removebg-preview.png';
import Disney from '../src/assets/Disnep-removebg-preview.png';
import Oragnic from '../src/assets/images-removebg-preview.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation - Color Change: Indigo -> Slate Gray */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        // On scroll, change from transparent to solid white with shadow
        scrollY > 50
          ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-slate-100'
          : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Brand Logo/Name - Supreme logo image */}
            <div className="flex items-center">
              <img
                src={supreme}
                alt="Supreme Fashion Logo"
                // FIX: Removed the filter/invert logic that was hiding the logo on mobile at the top of the page.
                className="h-12 w-auto transition-all duration-300"
              />
            </div>

            {/* Desktop Menu - Professional Links with Accent Hover */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Services', 'Process', 'Showcase', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium uppercase tracking-wider text-gray-700 
                              hover:text-slate-600 transition-colors duration-300 relative group"
                >
                  {item}
                  {/* Subtle underline hover effect */}
                  <span className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-slate-600 
                                  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300">
                  </span>
                </button>
              ))}

              {/* Contact Button (CTA) */}
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm font-bold tracking-wider px-4 py-1.5 bg-slate-600 text-white rounded-full 
                            shadow-md hover:bg-slate-700 transition duration-300 ml-4"
              >
                GET IN TOUCH
              </button>
            </div>

            {/* Mobile Menu Button - Styled with consistent color */}
            <button
              className="md:hidden text-gray-700 hover:text-slate-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Enhanced with Shadow and Accent */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-xl transition-all duration-300 ease-in-out">
            <div className="px-6 py-4 space-y-3">
              {['About', 'Services', 'Process', 'Showcase', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-base font-medium uppercase tracking-wider text-gray-700 
                              py-2 border-b border-gray-100 hover:text-slate-600 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
      {/* Hero Section - Color Change: Indigo -> Slate Gray */}
      <section className="relative min-h-screen py-32 md:py-40 flex items-center overflow-hidden bg-gray-50">

        {/* Background Gradient/Effect (Simplified Parallax) */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-white" />

        <div className="relative max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content Column */}
          <div className="text-left">
            {/* Subtitle/Location - Increased tracking and clear contrast */}
            <span className="uppercase text-sm tracking-[0.3em] font-medium text-slate-600 block mb-3">
              FROM, THE KNITWEAR CAPITAL OF INDIA
            </span>

            {/* Main Headline - Bigger, bolder, and better structured for readability */}
            <h1 className="text-6xl md:text-6xl lg:text-7xl italic font-serif tracking-tight leading-tight mb-4 text-slate-600/90">
              SUPREME <br className="hidden md:block" />
              <span className="text-slate-600/90 italic font-serif font-light whitespace-nowrap">
                FASHIONS
                <span className="ml-1 inline-block align-baseline break-words md:whitespace-nowrap text-base md:text-5xl">
                  (India)
                </span>
              </span>
              <span className="block text-5xl md:text-6xl font-light"></span>
            </h1>

            {/* Core Value Proposition - Clearer and more impactful */}
            <h2 className="text-2xl md:text-3xl font-light italic mb-6 text-gray-800">
              Your vision,taking shape into reality
            </h2>

            {/* Description - Enhanced max-width for better line length */}
            <p className="text-gray-600 text-lg mb-10 max-w-xl">
              We are a premium buying house providing unparalleled sourcing and procurement solutions. With our extensive industry knowledge and global network, we deliver exceptional services that exceed client expectations, ensuring seamless and successful product acquisition.
            </p>

            {/* Call to Action Button - Primary focus element */}
            <button
              className="px-8 py-3 bg-slate-600 text-white font-semibold rounded-full shadow-lg 
                          hover:bg-slate-700 transition duration-300 transform hover:scale-[1.02]
                          focus:outline-none focus:ring-4 focus:ring-slate-300"
              onClick={() => scrollToSection('services')} // Added handler
            >
              Explore Our Services →
            </button>
          </div>

          {/* Right Image Column - Visually improved container */}
          <aside className="flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-lg">
              {/* Decorative Border/Frame */}
              <div className="absolute -top-6 -left-6 w-16 h-16 border-l-4 border-t-4 border-slate-300 rounded-tl-xl hidden md:block" />
              <div className="absolute -bottom-6 -right-6 w-16 h-16 border-r-4 border-b-4 border-slate-300 rounded-br-xl hidden md:block" />

              {/* Image Container */}
              <img
                src={Imageshoot} // Corrected use of imported variable
                alt="Premium apparel manufacturing and sourcing"
                className="rounded-2xl object-cover w-full h-[400px] md:h-[550px] shadow-2xl transition-all duration-500 hover:shadow-slate-500/50"
              />
            </div>
          </aside>

        </div>
      </section>

      {/* With Passion & Purpose Section - Color Change: Indigo -> Slate Gray */}
      <section id="process" className="py-28 lg:py-20 bg-white"> {/* Changed from gray-50 to white for subtle contrast */}
        <div className="max-w-7xl mx-auto px-6">

          {/* Header and Description */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 lg:mb-20">
            <div className="max-w-xl">
              <h2 className="text-5xl font-extrabold tracking-tight mb-4 text-gray-900 leading-tight">
                <span className="text-slate-600">PASSION</span> & PURPOSE
              </h2>
              <p className="text-gray-600 text-lg">
                Our passion for textiles and a purpose-driven approach guide us to deliver exceptional results for our clients worldwide. Get to know the numbers that define us.
              </p>
            </div>
          </div>

          {/* Tabbed Navigation (Static for now, can be made dynamic later) */}
          <div className="flex flex-wrap gap-3 mb-16 border-b border-gray-200">
            <button className="px-5 py-2 text-sm font-semibold rounded-t-lg bg-slate-600 text-white shadow-md transition duration-200">
              EXPERTISE
            </button>
            <button className="px-5 py-2 text-sm font-medium rounded-t-lg text-gray-700 hover:text-slate-600 transition duration-200">
              PHILOSOPHY
            </button>
            <button className="px-5 py-2 text-sm font-medium rounded-t-lg text-gray-700 hover:text-slate-600 transition duration-200">
              VISION
            </button>
            <button className="px-5 py-2 text-sm font-medium rounded-t-lg text-gray-700 hover:text-slate-600 transition duration-200">
              TEAM
            </button>
          </div>

          {/* Metric Cards Grid - Enhanced with Hover Effects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* 1. GLOBAL BRANDS - Main Metric */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg 
                            transition-all duration-300 ease-in-out cursor-pointer
                            hover:shadow-slate-300/40 hover:border-slate-400">
              <div className="text-sm font-semibold text-slate-600 mb-2 uppercase tracking-wider">GLOBAL BRANDS</div>
              <div className="text-5xl font-extrabold mb-4 text-gray-900">50+</div>
              <div className="text-gray-600 text-sm">We are the trusted manufacturing partner for over 50 brands across the globe, from emerging labels to retail giants.</div>
            </div>

            {/* 2. YEARS OF EXPERIENCE - Main Metric */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg 
                            transition-all duration-300 ease-in-out cursor-pointer
                            hover:shadow-slate-300/40 hover:border-slate-400">
              <div className="text-sm font-semibold text-slate-600 mb-2 uppercase tracking-wider">YEARS OF EXPERIENCE</div>
              <div className="text-5xl font-extrabold mb-4 text-gray-900">35+</div>
              <div className="text-gray-600 text-sm">With over thirty five years in the industry, our expertise ensures a seamless and reliable production experience.</div>
            </div>

            {/* 3. OUR TEAM - Featured Card with Image and Background Contrast */}
            <div className="bg-gray-900 border border-gray-900 rounded-xl p-8 shadow-xl text-white 
                            transition-all duration-300 ease-in-out cursor-pointer
                            hover:shadow-slate-500/50 hover:border-slate-400 lg:col-span-2">
              <div className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">OUR TEAM</div>
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&h=300&q=80"
                  alt="Our Team"
                  className="rounded-lg w-24 h-24 object-cover border-4 border-slate-400"
                />
                <div className="text-5xl font-extrabold tracking-tight">INDUSTRY EXPERTS</div>
              </div>
              <div className="text-gray-300 text-base">Our skilled designers, technicians, and managers are the heart of our operations.</div>
            </div>

            {/* 4. CLIENT SATISFACTION - Grid adjusted to 4 columns */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg 
                            transition-all duration-300 ease-in-out cursor-pointer
                            hover:shadow-slate-300/40 hover:border-slate-400">
              <div className="text-sm font-semibold text-slate-600 mb-2 uppercase tracking-wider">CLIENT SATISFACTION</div>
              <div className="text-5xl font-extrabold mb-4 text-gray-900">100%</div>
              <div className="text-gray-600 text-sm">We pride ourselves on delivering 100% client satisfaction, building lasting partnerships through quality and trust.</div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg 
                            transition-all duration-300 ease-in-out cursor-pointer
                            hover:shadow-slate-300/40 hover:border-slate-400">
              <div className="text-sm font-semibold text-slate-600 mb-2 uppercase tracking-wider">FABRIC VARIETIES</div>
              <div className="text-5xl font-extrabold mb-4 text-gray-900">200+</div>
              <div className="text-gray-600 text-sm">We source and work with over 200 types of premium fabrics to match your exact specifications.</div>
            </div>

            {/* 7. GLOBAL REACH */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg 
                            transition-all duration-300 ease-in-out cursor-pointer
                            hover:shadow-slate-300/40 hover:border-slate-400">
              <div className="text-sm font-semibold text-slate-600 mb-2 uppercase tracking-wider">GLOBAL REACH</div>
              <div className="text-5xl font-extrabold mb-4 text-gray-900">20+</div>
              <div className="text-gray-600 text-sm">Our products are shipped to more than 20 countries, making us a truly global manufacturing partner.</div>
            </div>

          </div>
        </div>
      </section>

      {/* Our 6-Step Process Section - Reduced Top Space */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600 mb-2">
              Our Core Methodology
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900 leading-tight">
              The <span className="text-slate-600">6-Step Process</span> to Creative Execution.
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We ensure quality and consistency by following a structured and detailed approach to every project, from concept to delivery.
            </p>
          </div>

          {/* Service Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left Column: Featured Visual/Icon Area */}
            <div className="hidden lg:flex items-center justify-center relative min-h-[400px]">
              {/* Placeholder for a large SVG or animation representing the process flow */}
              <div className="w-full h-full bg-slate-100 rounded-3xl flex items-center justify-center overflow-hidden shadow-lg">
                <img
                  src={Heroimage}
                  alt="Creative Process Visual"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Right Column: Numbered List of Services */}
            <div className="space-y-8">

              {/* 1. PRODUCT SOURCING */}
              <div className="flex group items-start border-b border-gray-200 pb-8 transition-colors duration-300 hover:border-slate-400">
                <div className="text-3xl font-extrabold text-slate-600 mr-6">01</div>
                <div>
                  <h3 className="text-2xl font-bold tracking-wide text-gray-900 mb-2 group-hover:text-slate-800 transition-colors duration-300">
                    PRODUCT SOURCING
                  </h3>
                  <p className="text-gray-700 text-base">
                    We leverage our global network to find the best fabrics, trims, and manufacturers, ensuring premium quality and ethical sourcing from the outset.
                  </p>
                </div>
              </div>

              {/* 2. RESEARCH AND DEVELOPMENT */}
              <div className="flex group items-start border-b border-gray-200 pb-8 transition-colors duration-300 hover:border-slate-400">
                <div className="text-3xl font-extrabold text-slate-600 mr-6">02</div>
                <div>
                  <h3 className="text-2xl font-bold tracking-wide text-gray-900 mb-2 group-hover:text-slate-800 transition-colors duration-300">
                    RESEARCH AND DEVELOPMENT
                  </h3>
                  <p className="text-gray-700 text-base">
                    Our R&D team analyzes market trends and forecasts, developing innovative concept products that keep your brand ahead of the curve.
                  </p>
                </div>
              </div>

              {/* 3. SAMPLE DEVELOPMENT */}
              <div className="flex group items-start border-b border-gray-200 pb-8 transition-colors duration-300 hover:border-slate-400">
                <div className="text-3xl font-extrabold text-slate-600 mr-6">03</div>
                <div>
                  <h3 className="text-2xl font-bold tracking-wide text-gray-900 mb-2 group-hover:text-slate-800 transition-colors duration-300">
                    SAMPLE DEVELOPMENT
                  </h3>
                  <p className="text-gray-700 text-base">
                    We meticulously create and refine samples for approval, ensuring every detail matches your vision before moving into mass production.
                  </p>
                </div>
              </div>

              {/* 4. MERCHANDISING */}
              <div className="flex group items-start border-b border-gray-200 pb-8 transition-colors duration-300 hover:border-slate-400">
                <div className="text-3xl font-extrabold text-slate-600 mr-6">04</div>
                <div>
                  <h3 className="text-2xl font-bold tracking-wide text-gray-900 mb-2 group-hover:text-slate-800 transition-colors duration-300">
                    MERCHANDISING
                  </h3>
                  <p className="text-gray-700 text-base">
                    Our Merchandising Team acts as your key project liaison, managing communication, deadlines, and the entire production timeline from start to finish.
                  </p>
                </div>
              </div>

              {/* 5. QUALITY ASSURANCE */}
              <div className="flex group items-start border-b border-gray-200 pb-8 transition-colors duration-300 hover:border-slate-400">
                <div className="text-3xl font-extrabold text-slate-600 mr-6">05</div>
                <div>
                  <h3 className="text-2xl font-bold tracking-wide text-gray-900 mb-2 group-hover:text-slate-800 transition-colors duration-300">
                    QUALITY ASSURANCE
                  </h3>
                  <p className="text-gray-700 text-base">
                    We implement rigorous quality checks at every stage, guaranteeing that every final product meets your specifications and global excellence standards.
                  </p>
                </div>
              </div>

              {/* 6. LOGISTIC SUPPORT */}
              <div className="flex group items-start pb-2 transition-colors duration-300">
                <div className="text-3xl font-extrabold text-slate-600 mr-6">06</div>
                <div>
                  <h3 className="text-2xl font-bold tracking-wide text-gray-900 mb-2 group-hover:text-slate-800 transition-colors duration-300">
                    LOGISTIC SUPPORT
                  </h3>
                  <p className="text-gray-700 text-base">
                    Our professionals handle all shipping, customs, and documentation, ensuring timely and seamless delivery of your products to any destination worldwide.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section - IMPROVED UI & GRID LAYOUT (4 per line) */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600 mb-2">
              Commitment to Quality
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Our <span className="text-slate-600">Certifications & Accreditations</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-4">
              We adhere to the highest international standards, ensuring our products are ethically sourced, sustainably produced, and of premium quality.
            </p>
          </div>

          {/* Certification Logos Grid - Strict 4-Column Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-x-8 gap-y-12 items-center justify-items-center">

            {/* GOTS Logo */}
            <div className="text-center group w-full p-2">
              <img
                src={GOTS}
                alt="GOTS Certified"
                className="h-25 max-w-full mx-auto group-hover:grayscale-0 group-hover:opacity-100 object-contain"
                style={{ maxHeight: '80px' }}
              />
            </div>

            {/* OEKO-TEX Logo */}
            <div className="text-center group w-full p-2">
              <img
                src={OEKO_TEX}
                alt="OEKO-TEX Certified"
                className="h-25 max-w-full mx-auto group-hover:grayscale-0 group-hover:opacity-100 object-contain"
                style={{ maxHeight: '80px' }}
              />
            </div>

            {/* SEDEX Logo */}
            <div className="text-center group w-full p-2">
              <img
                src={SEDEX}
                alt="SEDEX Certified"
                className="h-20 max-w-full mx-auto group-hover:grayscale-0 group-hover:opacity-100 object-contain"
                style={{ maxHeight: '80px' }}
              />
            </div>

            {/* FAIR TRADE Logo */}
            <div className="text-center group w-full p-2">
              <img
                src={FAIR_TRADE}
                alt="Fair Trade Certified"
                className="h-25 max-w-full mx-auto group-hover:grayscale-0 group-hover:opacity-100 object-contain"
                style={{ maxHeight: '80px' }}
              />
            </div>

            {/* WRAP Logo */}
            <div className="text-center group w-full p-2">
              <img
                src={Warap}
                alt="WRAP Certified"
                className="h-25 max-w-full mx-auto group-hover:grayscale-0 group-hover:opacity-100 object-contain"
                style={{ maxHeight: '80px' }}
              />
            </div>

            {/* Organic Cotton Logo (Placeholder name, assuming it's the 'Oragnic' import) */}
            <div className="text-center group w-full p-2">
              <img
                src={Oragnic}
                alt="Organic Certified"
                className="h-25 max-w-full mx-auto group-hover:grayscale-0 group-hover:opacity-100 object-contain"
                style={{ maxHeight: '80px' }}
              />
            </div>

            {/* Walmart Accreditation */}
            <div className="text-center group w-full p-2">
              <img
                src={walmart}
                alt="Walmart Approved Vendor"
                // Use a slightly different height for this, as it's typically horizontal
                className="h-10 max-w-full mx-auto group-hover:grayscale-0 group-hover:opacity-100 object-contain"
                style={{ maxHeight: '40px', marginTop: '20px' }} // Center it vertically with others
              />
            </div>

            {/* Disney Accreditation */}
            <div className="text-center group w-full p-2">
              <img
                src={Disney}
                alt="Disney Approved Vendor"
                className="h-20 max-w-full mx-auto group-hover:grayscale-0 group-hover:opacity-100 object-contain"
                style={{ maxHeight: '80px' }}
              />
            </div>

          </div>
        </div>
      </section>
      
      {/* Tailored Manufacturing Solutions - Color Change: Indigo -> Slate Gray */}
      <section id="services" className="py-18 lg:py-10 bg-white overflow-hidden"> {/* Changed from gray-50 to white */}
        <div className="max-w-7xl mx-auto px-6">

          {/* Grid Container with Responsive Column Order */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left Content Column (Spanning 5/12) */}
            <div className="flex flex-col justify-center items-start lg:col-span-5 order-2 lg:order-1">

              {/* Subtitle/Accent */}
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-600 mb-2">
                Your Production Partner
              </span>

              {/* Main Title - Bolder, accented, and better line height */}
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-8 text-gray-900">
                TAILORED <br />
                <span className="text-slate-600">MANUFACTURING</span><br />
                SOLUTIONS
              </h2>

              {/* Description - Larger font and better line length */}
              <p className="text-gray-700 text-lg mb-8 max-w-lg leading-relaxed border-l-4 border-slate-400 pl-4">
                From startups to established brands, we provide bespoke manufacturing services that align with your unique vision. We manage the entire production cycle, ensuring quality, efficiency, and timely delivery for your brand, every single time.
              </p>

              {/* Optional: Add a subtle list of key services */}
              <ul className="space-y-2 text-sm font-medium text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  End-to-end Production Cycle
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  Global Sourcing & Material Procurement
                </li>
              </ul>

            </div>

            {/* Right Image Column (Spanning 7/12) */}
            <div className="flex justify-center lg:justify-end items-center lg:col-span-7 order-1 lg:order-2 relative">

              {/* Image - Better Aspect Ratio and Modern Styling */}
              <img
                src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=800&q=80"
                alt="Custom apparel solutions"
                className="rounded-xl object-cover w-full h-80 md:h-96 lg:h-[500px] max-w-full lg:max-w-4xl shadow-2xl transition-all duration-500 hover:shadow-slate-500/50"
              />

              {/* Decorative Element 1 (Accent Box) */}
              <div className="absolute top-0 right-0 lg:-top-6 lg:-right-6 w-3/4 h-3/4 bg-slate-100/40 rounded-xl -z-10 transform translate-x-1/4 translate-y-1/4 hidden lg:block" />

            </div>
          </div>
        </div>
      </section>
      {/* Our Philosophy Section - Color Change: Indigo -> Slate Gray */}
      <section id="about" className="py-28 lg:py-40 bg-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header and Philosophy Text - Stronger Visual Hierarchy */}
          <div className="mb-16 lg:mb-24">
            <div className="text-sm mb-2 tracking-[0.3em] uppercase font-semibold text-slate-400">
              ABOUT US
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8 leading-tight">
              OUR <span className="text-slate-500">PHILOSOPHY</span>
            </h2>

            {/* Philosophy Text - Cleaned-up columns, larger font, and slight accent */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg font-light">
              <div className="text-gray-300 border-l-4 border-slate-500 pl-4">
                Rooted in the rich textile heritage of Tirupur, Supreme Fashions India is built on a foundation of craftsmanship,
                integrity, and innovation. We believe in building partnerships, not just client lists.
                Our philosophy is simple: combine traditional techniques with modern technology to produce apparel of
                unparalleled quality. We are dedicated to ethical practices and sustainable sourcing, ensuring every garment
                we create is one we are proud of.
              </div>
            </div>
          </div>

          {/* Philosophy Detail Cards - Enhanced Design and Hover */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* 1. INNOVATION - Card with Image */}
            <div className="bg-gray-600 rounded-xl p-6 lg:p-8 flex flex-col min-h-[400px] relative border border-gray-700
                            transition-all duration-300 hover:bg-gray-700 hover:border-slate-600 group">
              <div className="text-sm font-semibold text-slate-400 mb-2 uppercase tracking-widest">INNOVATION</div>
              <div className="text-2xl font-extrabold text-white mb-4">FUTURE-FOCUSED PRECISION</div>
              <div className="text-gray-300 text-base mb-4 flex-grow">
                We invest in the latest manufacturing technologies to ensure precision, efficiency, and the best possible finish for all our products.
              </div>
              {/* Hover Icon (Cleaned up Arrow) */}
            </div>

            {/* 2. LEADERSHIP - Card with Text Focus */}
            <div className="bg-gray-600 rounded-xl p-6 lg:p-8 flex flex-col min-h-[400px] relative border border-gray-700
                            transition-all duration-300 hover:bg-gray-700 hover:border-slate-600 group">
              <div className="text-sm font-semibold text-slate-400 mb-2 uppercase tracking-widest">LEADERSHIP</div>
              <div className="text-2xl font-extrabold text-white mb-4">STRATEGIC SUPPLY CHAIN MASTERY</div>
              <div className="text-gray-300 text-base mb-4 flex-grow">
                Our management team combines decades of industry experience with a drive for forward-thinking strategies, guiding our clients through complex supply chains with ease.
              </div>
              {/* Hover Icon */}
              <div className="absolute top-4 right-4 text-gray-500 text-2xl transition-transform duration-300 group-hover:text-slate-400 group-hover:translate-x-1 group-hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l10-10M7 7h10v10" /></svg>
              </div>
            </div>

            {/* 3. MATERIALS - Card with Detailed Image Grid */}
            <div className="bg-gray-600 rounded-xl p-6 lg:p-8 flex flex-col min-h-[400px] relative border border-gray-700
                            transition-all duration-300 hover:bg-gray-700 hover:border-slate-600 group">
              <div className="text-sm font-semibold text-slate-400 mb-2 uppercase tracking-widest">MATERIALS</div>
              <div className="text-2xl font-extrabold text-white mb-4">UNCOMPROMISING PREMIUM SOURCING</div>
              <div className="text-gray-300 text-base mb-4 flex-grow">
                We source only the finest fabrics and materials from trusted suppliers to guarantee comfort, durability, and a premium feel.
              </div>
              {/* Hover Icon */}
              <div className="absolute top-4 right-4 text-gray-500 text-2xl transition-transform duration-300 group-hover:text-slate-400 group-hover:translate-x-1 group-hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l10-10M7 7h10v10" /></svg>
              </div>
            </div>

            {/* 4. CRAFTSMANSHIP - Card with Image */}
            <div className="bg-gray-600 rounded-xl p-6 lg:p-8 flex flex-col min-h-[400px] relative border border-gray-700
                            transition-all duration-300 hover:bg-gray-700 hover:border-slate-600 group">
              <div className="text-sm font-semibold text-slate-400 mb-2 uppercase tracking-widest">CRAFTSMANSHIP</div>
              <div className="text-2xl font-extrabold text-white mb-4">HERITAGE QUALITY & DETAIL</div>
              <div className="text-gray-300 text-base mb-4 flex-grow">
                Our skilled artisans bring decades of experience to every garment, ensuring meticulous attention to detail from the first cut to the final stitch.
              </div>
              {/* Hover Icon */}
              <div className="absolute top-4 right-4 text-gray-500 text-2xl transition-transform duration-300 group-hover:text-slate-400 group-hover:translate-x-1 group-hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l10-10M7 7h10v10" /></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Grid Section - Color Change: Indigo -> Slate Gray */}
      <section id="showcase" className="py-28 lg:py-40 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* Title - Larger, more impactful, and uses accent color */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight text-gray-100">
            OUR <span className="text-slate-600">PRODUCT SHOWCASE</span>
          </h2>

          {/* Grid Container - Added Spacing */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">

            {/* 1. T-Shirt Card */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl">
              <img
                src="https://media.centrepointstores.com/i/centrepoint/5016797-HQ166130-SPWIN25160725_01-2100.jpg?$prodimg-d-prt-3$&$quality-standard$&fmt=auto&sm=c"
                alt="Polo Apparel"
                className="object-cover w-full h-[350px] md:h-[450px] transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay and Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent p-6 flex flex-col justify-end"> {/* Used gray-900 for dark gradient */}
                <h3 className="text-xl font-bold text-white uppercase tracking-wider transition-opacity duration-300 group-hover:opacity-100">POLOS</h3>
                <p className="text-white text-sm font-medium transition-opacity duration-300 opacity-80">KNIT ESSENTIALS</p> {/* Changed color for visibility */}
              </div>
            </div>

            {/* 2. T-Shirt Card */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl">
              <img
                src="https://m.media-amazon.com/images/I/61+Hxi-JoEL._AC_SY445_.jpg"
                alt="T-Shirt Apparel"
                className="object-cover w-full h-[350px] md:h-[450px] transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay and Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider transition-opacity duration-300 group-hover:opacity-100">T-SHIRTS</h3>
                <p className="text-white text-sm font-medium transition-opacity duration-300 opacity-80">KNIT ESSENTIALS</p>
              </div>
            </div>

            {/* 3. Hoodie Card */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl">
              <img
                src="https://img4.dhresource.com/webp/m/0x0/f3/albu/jc/g/02/dfdc8285-c6b8-4bff-8bbf-bbc38fae8610.jpg"
                alt="Hoodie Outerwear"
                className="object-cover w-full h-[350px] md:h-[450px] transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay and Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider transition-opacity duration-300 group-hover:opacity-100">HOODIES</h3>
                <p className="text-white text-sm font-medium opacity-80">CASUAL FLEECE</p>
              </div>
            </div>

            {/* 4. Pants Card */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl">
              <img
                src="https://media.centrepointstores.com/i/centrepoint/4207641-HQ170202-SPWIN25140725_01-2100.jpg?$prodimg-d-prt-3-2x$&$quality-retina$&fmt=auto&sm=c"
                alt="Pants Bottoms"
                className="object-cover w-full h-[350px] md:h-[450px] transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay and Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider transition-opacity duration-300 group-hover:opacity-100">JOGGERS</h3>
                <p className="text-white text-sm font-medium opacity-80">ACTIVEWEAR</p>
              </div>
            </div>

            {/* 5. Kids Wear Card (Index 8 in original code) */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl">
              <img
                src="https://i5.walmartimages.com/asr/3158e571-19b2-4a5f-92e5-2c7e90139266.7817fce2d9d55377419d46031f729146.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
                alt="Kids wear Collection"
                className="object-cover w-full h-[350px] md:h-[450px] transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay and Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider transition-opacity duration-00 group-hover:opacity-100">COMFPRT NIGHTS</h3>
                <p className="text-white text-sm font-medium opacity-80">ALL CATEGORIES</p>
              </div>
            </div>

            {/* 6. Outerwear Card (Index 9 in original code) */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl">
              <img
                src="https://media.centrepointstores.com/i/centrepoint/PKV027S25MULTICOLORMULTISHADE-PKV027S25-SS25-1224_01-2100.jpg?$prodimg-d-prt-3$&$quality-standard$&fmt=auto&sm=c"
                alt="kidswear Collection"
                className="object-cover w-full h-[350px] md:h-[450px] transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay and Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider transition-opacity duration-300 group-hover:opacity-100">BABT</h3>
                <p className="text-white text-sm font-medium opacity-80">SleepSuit</p>
              </div>
            </div>

            {/* 7. Mens Wear Card (Index 10 in original code) */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl">
              <img
                src="https://img.baba-blog.com/2024/03/mens-T-shirt6.jpg?x-oss-process=style%2Ffull"
                alt="Men's T-Shirt Collection"
                className="object-cover w-full h-[350px] md:h-[450px] transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay and Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider transition-opacity duration-300 group-hover:opacity-100">MENS</h3>
                <p className="text-white text-sm font-medium opacity-80">CASUALS</p>
              </div>
            </div>

            {/* 8. Women T-shirt Card (Index 11 in original code) */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl">
              <img
                src="https://i.etsystatic.com/26355780/r/il/3204c9/3748518820/il_1080xN.3748518820_4vcx.jpg"
                alt="Women T-Shirt Collection"
                className="object-cover w-full h-[350px] md:h-[450px] transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay and Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider transition-opacity duration-300 group-hover:opacity-100">WOMENS</h3> {/* Changed to be more descriptive */}
                <p className="text-white text-sm font-medium opacity-80">CASUALS</p>
              </div>
            </div>

            {/* 5. Kids Wear Card (Index 8 in original code) */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl">
              <img
                src="https://media.babyshopstores.com/i/babyshop/PKV013XS25MULTICOLORMULTISHADE-PKV013XS25-SS25-1224_01-2100.jpg?$prodimg-d-prt-3-2x$&$quality-retina$&fmt=auto&sm=c"
                alt="Kids wear Collection"
                className="object-cover w-full h-[350px] md:h-[450px] transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay and Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider transition-opacity duration-00 group-hover:opacity-100">BABY</h3>
                <p className="text-white text-sm font-medium opacity-80">BODY SUIT</p>
              </div>
            </div>

            {/* 6. Outerwear Card (Index 9 in original code) */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl">
              <img
                src="https://5.imimg.com/data5/SELLER/Default/2022/7/ZI/ME/UI/154485093/61ihajqyfol-sx679-sx-ux-sy-uy--1000x1000.jpg"
                alt="kidswear Collection"
                className="object-cover w-full h-[350px] md:h-[450px] transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay and Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider transition-opacity duration-300 group-hover:opacity-100">GIRLS</h3>
                <p className="text-white text-sm font-medium opacity-80">DRESS</p>
              </div>
            </div>

            {/* 7. Mens Wear Card (Index 10 in original code) */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl">
              <img
                src="https://media.babyshopstores.com/i/babyshop/MZGB003A24BLUEC-SHADE-MZGB003A24-AW24-190724_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-zoom$"
                alt="Men's T-Shirt Collection"
                className="object-cover w-full h-[350px] md:h-[450px] transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay and Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider transition-opacity duration-300 group-hover:opacity-100">BABY</h3>
                <p className="text-white text-sm font-medium opacity-80">ESSENTIALS</p>
              </div>
            </div>

            {/* 12. Women T-shirt Card (Index 11 in original code) */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl">
              <img
                src="https://cdn.media.amplience.net/i/lmg/SS24G2DR306-MCMS-SS24G2DR306-BSRG28022025_01-2100.jpg?$prodimg-d-prt-3-2x$&$quality-retina$&fmt=auto&sm=c"
                alt="Women T-Shirt Collection"
                className="object-cover w-full h-[350px] md:h-[450px] transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay and Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider transition-opacity duration-300 group-hover:opacity-100">GIRLS</h3> {/* Changed to be more descriptive */}
                <p className="text-white text-sm font-medium opacity-80">CASUALS</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Get In Touch Footer Section - IMPROVED UI */}
      <footer id="contact" className="bg-gray-700 text-gray-100 pt-20 pb-8 mt-0 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* 1. Left: Branding and CTA Headline (Spans 5 columns on large screens) */}
            <div className="lg:col-span-5 flex flex-col justify-start">
              <div className="text-3xl font-extrabold tracking-tight mb-8 text-white">
                SUPREME FASHIONS <span className="text-slate-500 font-bold">(India)</span>
              </div>

              {/* Main CTA - Elevated design, made slightly smaller for the footer */}
              <h2 className="text-5xl md:text-6xl font-extrabold mb-10 tracking-tight leading-none text-white">
                READY TO
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200 ml-3 block sm:inline">
                  GET STARTED?
                </span>
              </h2>

              <p className="text-gray-400 max-w-sm"> {/* Corrected text color for contrast on dark background */}
                Contact our team today to discuss your sourcing and manufacturing needs. Your vision is our next mission.
              </p>
            </div>

            {/* 2. Right: Contact Info & Quick Links (Spans 7 columns on large screens) */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">

              {/* --- Contact Details --- */}
              <div>
                <div className="text-sm mb-4 font-semibold uppercase text-slate-400 border-b border-gray-700 pb-2">01 / Contact Details</div>

                {/* Phone (Consolidated for space) */}
                <div className="space-y-4 pt-4">
                  <div className="">
                    <div className="text-xs text-slate-500 mb-1 font-semibold uppercase">Office & General Inquiries</div>
                    <div className="text-lg font-bold text-white transition-colors duration-200 hover:text-slate-400">
                      <a href="tel:+9142145400040">+91-421 454000 40 / 43 555 35</a>
                    </div>
                  </div>
                  <div className="">
                    <div className="text-xs text-slate-500 mb-1 font-semibold uppercase">Mobile & WhatsApp</div>
                    <div className="text-lg font-bold text-white transition-colors duration-200 hover:text-slate-400">
                      <a href="tel:+919842228885">+91-98420 95599</a>
                    </div>
                  </div>
                  {/* Email */}
                  <div className="">
                    <div className="text-xs text-slate-500 mb-1 font-semibold uppercase">Email</div>
                    <div className="text-lg font-bold text-white">
                      <a href="mailto:info@supremefashion.in" className="underline hover:text-slate-400 transition duration-200">info@supremeindia.in</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- Quick Links & Address --- */}
              <div>

    {/* Section Header for Navigation */}
    <div className="text-sm mb-4 font-semibold uppercase text-slate-400 border-b border-gray-700 pb-2">02 / Navigation & Locations</div>

    <div className="grid grid-cols-2 gap-x-6 gap-y-6 pt-4">
        
        {/* Left Column: Navigation Links */}
        <ul className="space-y-3 text-base text-gray-300">
            {/* Using <a> tags for actual navigation, but keeping buttons since the original code had them. */}
            <li><button onClick={() => scrollToSection('top')} className="hover:text-slate-400 transition duration-200">HOME</button></li>
            <li><button onClick={() => scrollToSection('about')} className="hover:text-slate-400 transition duration-200">ABOUT US</button></li>
            <li><button onClick={() => scrollToSection('services')} className="hover:text-slate-400 transition duration-200">SERVICES</button></li>
            <li><button onClick={() => scrollToSection('process')} className="hover:text-slate-400 transition duration-200">PROCESS</button></li>
            <li><button onClick={() => scrollToSection('showcase')} className="hover:text-slate-400 transition duration-200">SHOWCASE</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="hover:text-slate-400 transition duration-200">CONTACT</button></li>
        </ul>

        {/* Right Column: Address and Global Reach (Consolidated) */}
        <div className="space-y-6">
            {/* Head Quarters Address */}
            <div>
                <div className="text-xs text-slate-500 mb-1 font-semibold uppercase">Head Quarters</div>
                <div className="text-base font-medium text-gray-300">
                    Tirupur, 641603. India
                </div>
            </div>

            {/* Global Presence / Satellite */}
            <div>
                <div className="text-xs text-slate-500 mb-2 font-semibold uppercase">Satellite Offices</div>
                <div className="text-base font-medium text-gray-300 mb-3">
                    Tirupur, 641603. India (Satellite)
                </div>

                {/* Country Flags - More prominent and cleaner display */}
                <div className="flex flex-wrap items-center gap-4 pt-1">
                    {/* <img src="https://flagcdn.com/in.svg" alt="India" className="h-6 w-9 rounded shadow-lg border border-gray-600 hover:scale-105 transition" /> */}
                    <img src="https://flagcdn.com/in.svg" alt="India" className="h-6 w-9 rounded shadow-lg border border-gray-600 hover:scale-105 transition" />
                    <img src="https://flagcdn.com/us.svg" alt="United States" className="h-6 w-9 rounded shadow-lg border border-gray-600 hover:scale-105 transition" />
                    <img src="https://flagcdn.com/lk.svg" alt="Sri Lanka" className="h-6 w-9 rounded shadow-lg border border-gray-600 hover:scale-105 transition" />
                    
                </div>
            </div>
        </div>
    </div>
</div>

            </div>
          </div>

          {/* --- Bottom Bar --- */}
          <div className="border-t border-gray-800 mt-16 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 px-0">

            {/* Copyright and Location */}
            <div className="flex flex-col md:flex-row gap-4 items-center order-2 md:order-1">
              <span>Supreme Fashion India © 2025. All Rights Reserved.</span>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;