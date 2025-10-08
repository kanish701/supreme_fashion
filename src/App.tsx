import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Imageshoot from '../src/assets/photo-shoot.png';
import apparelImage from '../src/assets/Free psd stylish black hoodie mockup template isolated on transparent background _ Premium AI-generated PSD.jpeg';
import Tshirticon from '../src/assets/tshirt-icon.png';
import apparelImg2 from '../src/assets/Sweatshirt.jpeg';
import sportswearImg3 from '../src/assets/sportswear.png';
import collorshirt from '../src/assets/pngwing.com (2).png';
import doubleshirt from '../src/assets/pngwing.com (1).png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
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
            
            {/* Brand Logo/Name - Stronger, accented typography */}
            <div className={`text-2xl font-extrabold tracking-tight transition-colors duration-300 ${
                scrollY > 50 ? 'text-gray-900' : 'text-white md:text-gray-900' // Adjust logo color based on scroll if starting on a dark hero
            }`}>
              SUPREME <span className="text-slate-600 font-normal">FASHION</span>
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
          <div className="text-left py-12">

            {/* Subtitle/Location - Increased tracking and clear contrast */}
            <span className="uppercase text-sm tracking-[0.3em] font-medium text-slate-600 block mb-3">
              FROM TIRUPUR, THE KNITWEAR CAPITAL OF INDIA 🇮🇳
            </span>

            {/* Main Headline - Bigger, bolder, and better structured for readability */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight mb-4 text-gray-900">
              SUPREME <br className="hidden md:block" />
              <span className="text-slate-600/90 italic font-serif font-light">FASHION</span>
              <span className="block text-5xl md:text-6xl font-light">INDIA</span>
            </h1>

            {/* Core Value Proposition - Clearer and more impactful */}
            <h2 className="text-2xl md:text-3xl font-light italic mb-6 text-gray-800">
              Your vision, **taking shape into reality**
            </h2>

            {/* Description - Enhanced max-width for better line length */}
            <p className="text-gray-600 text-lg mb-10 max-w-xl">
              We are a **premium buying house** providing unparalleled sourcing and procurement solutions. With our extensive industry knowledge and global network, we deliver exceptional services that exceed client expectations, ensuring seamless and successful product acquisition.
            </p>

            {/* Call to Action Button - Primary focus element */}
            <button
              className="px-8 py-3 bg-slate-600 text-white font-semibold rounded-full shadow-lg 
                            hover:bg-slate-700 transition duration-300 transform hover:scale-[1.02]
                            focus:outline-none focus:ring-4 focus:ring-slate-300">
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
                // Note: {Imageshoot} must be defined elsewhere in your React file (e.g., import Imageshoot from './path/to/image.jpg';)
                src={Imageshoot}
                alt="Premium apparel manufacturing and sourcing"
                className="rounded-2xl object-cover w-full h-[400px] md:h-[550px] shadow-2xl transition-all duration-500 hover:shadow-slate-500/50"
              />
            </div>
          </aside>

        </div>
      </section>

      {/* Supreme Service Section - Boxes with Hover Effect - Color Change: Indigo -> Slate Gray */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-16 lg:mb-20">
            Supreme is<br />
            <span className="font-extrabold text-slate-600">service</span>
          </h2>

          {/* Service Grid with Boxes and Hover */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

            {/* WE (Box with Hover) */}
            <div className="flex flex-col p-8 bg-gray-50 border border-gray-200 rounded-lg shadow-sm
                          transition-all duration-300 ease-in-out
                          hover:shadow-lg hover:border-slate-400 transform hover:-translate-y-1">
              <div className="mb-6 text-4xl text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe-2">
                  <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
                  <path d="M12 2v20" />
                  <path d="M21.54 9H17a2 2 0 0 1-2-2V2.46" />
                  <path d="M3.46 15H7a2 2 0 0 1 2 2v4.54" />
                  <path d="M3.46 9H7a2 2 0 0 0 2-2V2.46" />
                  <path d="M12 2a22 22 0 0 0-5 10c0 1.3.49 2.63 1.35 3.73M12 22a22 22 0 0 1 5-10c0-1.3-.49-2.63-1.35-3.73" />
                </svg>
              </div>
              <h3 className="text-xl font-bold tracking-wide uppercase mb-4 text-gray-900">WE</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                are a fashion company with a **worldwide sourcing platform** and **GLOCAL expertise**, focused on design and product. We accompany our clients from concept to delivery, create, implement, and invest so that fashion becomes **climate friendly**.
              </p>
            </div>

            {/* THINKING AHEAD (Box with Hover) */}
            <div className="flex flex-col p-8 bg-gray-50 border border-gray-200 rounded-lg shadow-sm
                          transition-all duration-300 ease-in-out
                          hover:shadow-lg hover:border-slate-400 transform hover:-translate-y-1">
              <div className="mb-6 text-4xl text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb">
                  <path d="M15 14c.2-.8.8-1.7 1.4-2.2v-.7c0-2.8-5.6-5-8-2-2.3-2-2 2.7-2 4.5V14" />
                  <path d="M14 20v1H10v-1" />
                  <path d="M10 17H7.3c-.6 0-.8-.4-.4-1.2l.6-.9c.4-.7.4-.9.2-1.4-.2-.5-1-.5-1-.9V9" />
                  <path d="M17 17H14.7c.6 0 .8-.4 .4-1.2l-.6-.9c-.4-.7-.4-.9-.2-1.4.2-.5 1-.5 1-.9V9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold tracking-wide uppercase mb-4 text-gray-900">THINKING AHEAD</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                and working together. Bring in your expertise, wishes, and ideas, and we will work out proposals and solutions. Quick solutions, simple ones, complex ones. Always **joint solutions** that we realize for you. We are your partner.
              </p>
            </div>

            {/* SOURCING (Box with Hover) */}
            <div className="flex flex-col p-8 bg-gray-50 border border-gray-200 rounded-lg shadow-sm
                          transition-all duration-300 ease-in-out
                          hover:shadow-lg hover:border-slate-400 transform hover:-translate-y-1">
              <div className="mb-6 text-4xl text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold tracking-wide uppercase mb-4 flex items-center text-gray-900">
                SOURCING
                <span className="ml-3 text-xs font-medium border border-slate-600 text-slate-600 bg-white rounded-full w-4 h-4 flex items-center justify-center p-2 leading-none">+</span>
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                is **global and local** for us. We work with the biggest and best textile manufacturers that invest in **sustainable high-tech** and new-age materials, as well as with ambitious spinners and weavers engaged in traditional craftsmanship.
              </p>
            </div>

            {/* GOOD PRODUCTS (Box with Hover) */}
            <div className="flex flex-col p-8 bg-gray-50 border border-gray-200 rounded-lg shadow-sm
                          transition-all duration-300 ease-in-out
                          hover:shadow-lg hover:border-slate-400 transform hover:-translate-y-1">
              <div className="mb-6 text-4xl text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tag">
                  <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.586 8.586a2 2 0 0 0 2.828 0l7.172-7.172a2 2 0 0 0 0-2.828L12.586 2.586Z" />
                  <path d="M14 8h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold tracking-wide uppercase mb-4 flex items-center text-gray-900">
                GOOD PRODUCTS
                <span className="ml-3 text-xs font-medium border border-slate-600 text-slate-600 bg-white rounded-full w-4 h-4 flex items-center justify-center p-2 leading-none">+</span>
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                are those that have high design standards and exciting materials, while being **environmentally friendly**. This is the quality we deliver to our customers. Apparel for women, men, kids. Activewear, footwear, and fashion accessories. And a wide range of home and pet items.
              </p>
            </div>

            {/* OUR CUSTOMERS (Box with Hover) */}
            <div className="flex flex-col p-8 bg-gray-50 border border-gray-200 rounded-lg shadow-sm
                          transition-all duration-300 ease-in-out
                          hover:shadow-lg hover:border-slate-400 transform hover:-translate-y-1">
              <div className="mb-6 text-4xl text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold tracking-wide uppercase mb-4 text-gray-900">OUR CUSTOMERS</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                are mostly international fashion brands and sometimes local start-ups. They can fly because we are the **ground crew**. We listen and implement; we are there where they can’t be themselves. For them we develop new fabrics, create four in-house collections, and present in **3D**.
              </p>
            </div>

            {/* OUR STRENGTH (Box with Hover) */}
            <div className="flex flex-col p-8 bg-gray-50 border border-gray-200 rounded-lg shadow-sm
                          transition-all duration-300 ease-in-out
                          hover:shadow-lg hover:border-slate-400 transform hover:-translate-y-1">
              <div className="mb-6 text-4xl text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold tracking-wide uppercase mb-4 text-gray-900">OUR STRENGTH</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                are our people, who are at home in three worlds. As humans on our planet; together in the world of fashion; and on our **digital platform** that connects us all, our customers and manufacturers, as well as farmers. Together we work for the future of fashion.
              </p>
            </div>

          </div>
        </div>
      </section>
      
      {/* What We Do Section - Color Change: Indigo -> Slate Gray */}
<section className="py-28 lg:py-40 bg-gray-50">
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
        <div className="w-164 h-1604 bg-slate-100 rounded-3xl flex items-center justify-center overflow-hidden shadow-lg">
          <img
            src="https://img.freepik.com/free-photo/young-emotional-woman-black-hat-is-dancing-white-background_231208-2054.jpg?t=st=1759897874~exp=1759901474~hmac=91359599d24b0bf4d3eccc23810e8600c8b92b43eb38867ec0064d51392733ba&w=1480"
            alt="Creative Process Visual"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute top-1/4 left-1/4 text-slate-300/50 text-9xl font-extrabold opacity-50 select-none">6</div>
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
              We leverage our global network to find the **best fabrics, trims, and manufacturers**, ensuring premium quality and ethical sourcing from the outset.
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
              Our R&D team analyzes **market trends and forecasts**, developing innovative concept products that keep your brand ahead of the curve.
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
              We meticulously create and refine **samples for approval**, ensuring every detail matches your vision before moving into mass production.
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
              Our Merchandising Team acts as your **key project liaison**, managing communication, deadlines, and the entire production timeline from start to finish.
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
              We implement **rigorous quality checks** at every stage, guaranteeing that every final product meets your specifications and global excellence standards.
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
              Our professionals handle all **shipping, customs, and documentation**, ensuring timely and seamless delivery of your products to any destination worldwide.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</section>

      {/* Tailored Manufacturing Solutions - Color Change: Indigo -> Slate Gray */}
      <section id="services" className="py-28 lg:py-40 bg-gray-50 overflow-hidden">
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
                From startups to established brands, we provide **bespoke manufacturing services** that align with your unique vision. We manage the entire production cycle, ensuring **quality, efficiency, and timely delivery** for your brand, every single time.
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

      {/* With Passion & Purpose Section - Color Change: Indigo -> Slate Gray */}
      <section id="process" className="py-28 lg:py-40 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header and Description */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 lg:mb-20">
            <div className="max-w-xl">
              <h2 className="text-5xl font-extrabold tracking-tight mb-4 text-gray-900 leading-tight">
                <span className="text-slate-600">PASSION</span> & PURPOSE
              </h2>
              <p className="text-gray-600 text-lg">
                Our passion for textiles and a purpose-driven approach guide us to deliver **exceptional results** for our clients worldwide. Get to know the numbers that define us.
              </p>
            </div>
          </div>

          {/* Tabbed Navigation (Replacing Clunky Selects) */}
          {/* This structure is better for demonstrating interactive content sections */}
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
              <div className="text-gray-600 text-sm">We are the trusted manufacturing partner for over **50 brands** across the globe, from emerging labels to retail giants.</div>
            </div>

            {/* 2. YEARS OF EXPERIENCE - Main Metric */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg 
                            transition-all duration-300 ease-in-out cursor-pointer
                            hover:shadow-slate-300/40 hover:border-slate-400">
              <div className="text-sm font-semibold text-slate-600 mb-2 uppercase tracking-wider">YEARS OF EXPERIENCE</div>
              <div className="text-5xl font-extrabold mb-4 text-gray-900">15+</div>
              <div className="text-gray-600 text-sm">With over **fifteen years** in the industry, our expertise ensures a seamless and reliable production experience.</div>
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
              <div className="text-gray-300 text-base">Our skilled artisans, technicians, and managers are the **heart of our operations**, driving innovation and maintaining world-class quality standards.</div>
            </div>

            {/* 4. CLIENT SATISFACTION - Grid adjusted to 4 columns */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg 
                            transition-all duration-300 ease-in-out cursor-pointer
                            hover:shadow-slate-300/40 hover:border-slate-400">
              <div className="text-sm font-semibold text-slate-600 mb-2 uppercase tracking-wider">CLIENT SATISFACTION</div>
              <div className="text-5xl font-extrabold mb-4 text-gray-900">100%</div>
              <div className="text-gray-600 text-sm">We pride ourselves on delivering **100% client satisfaction**, building lasting partnerships through quality and trust.</div>
            </div>

            {/* 5. PRODUCTION CAPACITY */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg 
                            transition-all duration-300 ease-in-out cursor-pointer
                            hover:shadow-slate-300/40 hover:border-slate-400">
              <div className="text-sm font-semibold text-slate-600 mb-2 uppercase tracking-wider">PRODUCTION CAPACITY</div>
              <div className="text-5xl font-extrabold mb-4 text-gray-900">500K+</div>
              <div className="text-gray-600 text-sm">We produce over **500,000 high-quality garments** annually for our diverse clientele.</div>
            </div>

            {/* 6. FABRIC VARIETIES */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg 
                            transition-all duration-300 ease-in-out cursor-pointer
                            hover:shadow-slate-300/40 hover:border-slate-400">
              <div className="text-sm font-semibold text-slate-600 mb-2 uppercase tracking-wider">FABRIC VARIETIES</div>
              <div className="text-5xl font-extrabold mb-4 text-gray-900">200+</div>
              <div className="text-gray-600 text-sm">We source and work with over **200 types of premium fabrics** to match your exact specifications.</div>
            </div>

            {/* 7. GLOBAL REACH */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg 
                            transition-all duration-300 ease-in-out cursor-pointer
                            hover:shadow-slate-300/40 hover:border-slate-400">
              <div className="text-sm font-semibold text-slate-600 mb-2 uppercase tracking-wider">GLOBAL REACH</div>
              <div className="text-5xl font-extrabold mb-4 text-gray-900">20+</div>
              <div className="text-gray-600 text-sm">Our products are shipped to more than **20 countries**, making us a truly global manufacturing partner.</div>
            </div>

          </div>
        </div>
      </section>

      {/* Commitment, Vision & Team Section - Color Change: Indigo -> Slate Gray */}
      <section className="py-28 lg:py-40 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* Optional Title for Context */}
          <h2 className="text-4xl font-extrabold tracking-tight mb-16 text-gray-900 text-center">
            OUR CORE VALUES IN <span className="text-slate-600">ACTION</span>
          </h2>

          {/* Enhanced Masonry-style Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">

            {/* 1. OUR MOTTO - Featured Value Card (Span 2x2) */}
            <div className="md:col-span-2 row-span-2 bg-slate-600 rounded-xl p-8 lg:p-10 shadow-xl flex flex-col justify-end min-h-[300px] transition-all duration-300 hover:shadow-2xl">
              <div className="text-sm font-semibold text-slate-200 mb-2 uppercase tracking-widest">OUR MOTTO</div>
              <div className="text-3xl font-extrabold mb-4 text-white leading-tight">COMMITMENT TO QUALITY</div>
              <div className="text-slate-100 text-base">We are committed to delivering the **highest quality apparel**, ensuring every stitch and seam meets global standards of excellence.</div>
            </div>

            {/* 2. Image: Apparel (Span 2x1) - Tighter focus on image */}
            <div className="col-span-2 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:opacity-90">
              <img src={apparelImage} alt="Premium apparel laid out" className="object-cover w-full h-full min-h-[150px]" />
            </div>

            {/* 3. Image: Double Shirt (1x1) - Small, square visual */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:opacity-90">
              <img src={doubleshirt} alt="Sewing machine detail" className="object-cover w-full h-full min-h-[150px]" />
            </div>

            {/* 4. Image: Team Planning/Product Detail (1x1) - Small, square visual */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:opacity-90">
              <img src="https://i.etsystatic.com/37447880/r/il/1264ab/5053847961/il_fullxfull.5053847961_qgqk.jpg" alt="Product Note" className="object-cover w-full h-full min-h-[150px]" />
            </div>

            {/* 5. Image: Fabric Rolls (1x1) */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:opacity-90">
              <img src={sportswearImg3} alt="Fabric rolls" className="object-cover w-full h-full min-h-[150px]" />
            </div>

            {/* 6. Image: Collor Shirt (1x1) */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:opacity-90">
              <img src={collorshirt} alt="Quality check on collared shirt" className="object-cover w-full h-full min-h-[150px]" />
            </div>

            {/* 7. OUR VISION - Secondary Value Card (Span 2x1) */}
            <div className="col-span-2 bg-white border-2 border-slate-200 rounded-xl p-8 shadow-md flex flex-col justify-center min-h-[150px] transition-all duration-300 hover:border-slate-400 hover:shadow-lg">
              <div className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-widest">OUR VISION</div>
              <div className="text-2xl font-bold mb-1 text-gray-900">EMPOWERING FASHION BRANDS</div>
              <div className="text-gray-600 text-sm">Our vision is to be the backbone of fashion brands by providing reliable, ethical, and high-quality manufacturing solutions.</div>
            </div>

            {/* 8. Image: Garment Close-up (1x1) */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:opacity-90">
              <img src="https://i5.walmartimages.com/asr/3158e571-19b2-4a5f-92e5-2c7e90139266.7817fce2d9d55377419d46031f729146.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" alt="Garment detail" className="object-cover w-full h-full min-h-[150px]" />
            </div>

            {/* 9. Image: Team Collaboration (1x1) */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:opacity-90">
              <img src="https://i.etsystatic.com/30396561/r/il/130466/3272494384/il_fullxfull.3272494384_l4r0.jpg" alt="Team discussion" className="object-cover w-full h-full min-h-[150px]" />
            </div>

            {/* 10. Image: Model/Wearable (1x1) */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:opacity-90">
              <img src="https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E29214s4.jpg?im=Resize,width=750" alt="Model wearing product" className="object-cover w-full h-full min-h-[150px]" />
            </div>

            {/* 11. Image: Office Workspace (1x1) */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:opacity-90">
              <img src="https://i.pinimg.com/236x/53/3e/d9/533ed9d9db79cf780cac415b387ef108.jpg" alt="Office workspace" className="object-cover w-full h-full min-h-[150px]" />
            </div>

          </div>
        </div>
      </section>

      {/* Our Philosophy Section - Color Change: Indigo -> Slate Gray */}
      <section id="about" className="py-28 lg:py-40 bg-gray-900 text-white">
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
                Rooted in the rich textile heritage of Tirupur, Supreme Fashion India is built on a foundation of craftsmanship,
                integrity, and innovation. We believe in building partnerships, not just client lists.
                Our philosophy is simple: combine traditional techniques with modern technology to produce apparel of
                unparalleled quality. We are dedicated to ethical practices and sustainable sourcing, ensuring every garment
                we create is one we are proud of.
              </div>
              <div className="text-gray-300">
                Our philosophy is simple: combine traditional techniques with **modern technology** to produce apparel of unparalleled quality. We are dedicated to **ethical practices** and sustainable sourcing, ensuring every garment we create is one we are proud of.
              </div>
            </div>
          </div>

          {/* Philosophy Detail Cards - Enhanced Design and Hover */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* 1. INNOVATION - Card with Image */}
            <div className="bg-gray-800 rounded-xl p-6 lg:p-8 flex flex-col min-h-[400px] relative border border-gray-700
                            transition-all duration-300 hover:bg-gray-700 hover:border-slate-600 group">
              <div className="text-sm font-semibold text-slate-400 mb-2 uppercase tracking-widest">INNOVATION</div>
              <div className="text-2xl font-extrabold text-white mb-4">EXPERIENCED & DRIVEN</div>
              <div className="text-gray-300 text-base mb-4 flex-grow">
                We invest in the latest manufacturing technologies to ensure precision, efficiency, and the **best possible finish** for all our products.
              </div>
              {/* Hover Icon (Cleaned up Arrow) */}
            </div>

            {/* 2. LEADERSHIP - Card with Text Focus */}
            <div className="bg-gray-800 rounded-xl p-6 lg:p-8 flex flex-col min-h-[400px] relative border border-gray-700
                            transition-all duration-300 hover:bg-gray-700 hover:border-slate-600 group">
              <div className="text-sm font-semibold text-slate-400 mb-2 uppercase tracking-widest">LEADERSHIP</div>
              <div className="text-2xl font-extrabold text-white mb-4">EXPERIENCED & DRIVEN</div>
              <div className="text-gray-300 text-base mb-4 flex-grow">
                Our management team combines decades of industry experience with a drive for forward-thinking strategies, guiding our clients through complex supply chains with ease.
              </div>
              {/* Hover Icon */}
              <div className="absolute top-4 right-4 text-gray-500 text-2xl transition-transform duration-300 group-hover:text-slate-400 group-hover:translate-x-1 group-hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l10-10M7 7h10v10" /></svg>
              </div>
            </div>

            {/* 3. MATERIALS - Card with Detailed Image Grid */}
            <div className="bg-gray-800 rounded-xl p-6 lg:p-8 flex flex-col min-h-[400px] relative border border-gray-700
                            transition-all duration-300 hover:bg-gray-700 hover:border-slate-600 group">
              <div className="text-sm font-semibold text-slate-400 mb-2 uppercase tracking-widest">MATERIALS</div>
              <div className="text-2xl font-extrabold text-white mb-4">EXPERIENCED & DRIVEN</div>
              <div className="text-gray-300 text-base mb-4 flex-grow">
                We source only the finest fabrics and materials from trusted suppliers to guarantee comfort, durability, and a premium feel.
              </div>
              {/* Hover Icon */}
              <div className="absolute top-4 right-4 text-gray-500 text-2xl transition-transform duration-300 group-hover:text-slate-400 group-hover:translate-x-1 group-hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l10-10M7 7h10v10" /></svg>
              </div>
            </div>

            {/* 4. CRAFTSMANSHIP - Card with Image */}
            <div className="bg-gray-800 rounded-xl p-6 lg:p-8 flex flex-col min-h-[400px] relative border border-gray-700
                            transition-all duration-300 hover:bg-gray-700 hover:border-slate-600 group">
              <div className="text-sm font-semibold text-slate-400 mb-2 uppercase tracking-widest">CRAFTSMANSHIP</div>
              <div className="text-2xl font-extrabold text-white mb-4">EXPERIENCED & DRIVEN</div>
              <div className="text-gray-300 text-base mb-4 flex-grow">
                Our skilled artisans bring **decades of experience** to every garment, ensuring meticulous attention to detail from the first cut to the final stitch.
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight text-gray-900">
            OUR <span className="text-slate-600">PRODUCT SHOWCASE</span>
          </h2>

          {/* Grid Container - Added Spacing */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">

            {/* 1. T-Shirt Card */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl">
              <img
                src="https://media.centrepointstores.com/i/centrepoint/5016797-HQ166130-SPWIN25160725_01-2100.jpg?$prodimg-d-prt-3$&$quality-standard$&fmt=auto&sm=c"
                alt="T-Shirt Apparel"
                className="object-cover w-full h-[350px] md:h-[450px] transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay and Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider transition-opacity duration-300 group-hover:opacity-100">T-SHIRTS</h3>
                <p className="text-slate-400 text-sm font-medium transition-opacity duration-300 opacity-80">KNIT ESSENTIALS</p>
              </div>
            </div>

            {/* 2. Hoodie Card */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&w=600&h=800&q=80"
                alt="Hoodie Outerwear"
                className="object-cover w-full h-[350px] md:h-[450px] transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay and Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider transition-opacity duration-300 group-hover:opacity-100">HOODIES</h3>
                <p className="text-slate-400 text-sm font-medium opacity-80">CASUAL FLEECE</p>
              </div>
            </div>

            {/* 3. Pants Card */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl">
              <img
                src="https://media.centrepointstores.com/i/centrepoint/4207641-HQ170202-SPWIN25140725_01-2100.jpg?$prodimg-d-prt-3-2x$&$quality-retina$&fmt=auto&sm=c"
                alt="Pants Bottoms"
                className="object-cover w-full h-[350px] md:h-[450px] transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay and Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider transition-opacity duration-300 group-hover:opacity-100">JOGGERS</h3>
                <p className="text-slate-400 text-sm font-medium opacity-80">ACTIVEWEAR</p>
              </div>
            </div>

            {/* 4. Kids Wear Card */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?auto=format&fit=crop&w=600&h=800&q=80"
                alt="Kids wear Collection"
                className="object-cover w-full h-[350px] md:h-[450px] transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay and Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider transition-opacity duration-300 group-hover:opacity-100">KIDS WEAR</h3>
                <p className="text-slate-400 text-sm font-medium opacity-80">JUVENILE LINE</p>
              </div>
            </div>

            {/* 5. Accessories Card */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=600&h=800&q=80"
                alt="Accessories"
                className="object-cover w-full h-[350px] md:h-[450px] transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay and Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider transition-opacity duration-300 group-hover:opacity-100">ACCESSORIES</h3>
                <p className="text-slate-400 text-sm font-medium opacity-80">BAGS & BELTS</p>
              </div>
            </div>

            {/* 6. Sportswear Card */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl">
              <img
                src="https://media.centrepointstores.com/i/centrepoint/JI8858-Black-JI8854-CP12052025_01-2100.jpg?$prodimg-d-prt-3-2x$&$quality-retina$&fmt=auto&sm=c"
                alt="Sportswear Collection"
                className="object-cover w-full h-[350px] md:h-[450px] transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay and Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider transition-opacity duration-300 group-hover:opacity-100">SPORTSWEAR</h3>
                <p className="text-slate-400 text-sm font-medium opacity-80">ATHLETIC GEAR</p>
              </div>
            </div>

            {/* 7. Formal Wear Card */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl">
              <img
                src="https://media.centrepointstores.com/i/centrepoint/4207521-HQ166582-SPWIN25300425_01-2100.jpg?$prodimg-d-prt-3-2x$&$quality-retina$&fmt=auto&sm=c"
                alt="Formal Wear Collection"
                className="object-cover w-full h-[350px] md:h-[450px] transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay and Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider transition-opacity duration-300 group-hover:opacity-100">FORMAL WEAR</h3>
                <p className="text-slate-400 text-sm font-medium opacity-80">SUITS & SHIRTS</p>
              </div>
            </div>

            {/* 8. Outerwear Card */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl">
              <img
                src="https://media.centrepointstores.com/i/centrepoint/PKV027S25MULTICOLORMULTISHADE-PKV027S25-SS25-1224_01-2100.jpg?$prodimg-d-prt-3$&$quality-standard$&fmt=auto&sm=c"
                alt="kidswear Collection"
                className="object-cover w-full h-[350px] md:h-[450px] transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay and Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider transition-opacity duration-300 group-hover:opacity-100">KIDSWEAR</h3>
                <p className="text-slate-400 text-sm font-medium opacity-80">SleepSuit</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Get In Touch Footer Section - Color Change: Indigo -> Slate Gray */}
      <footer id="contact" className="bg-gray-900 text-gray-100 pt-24 pb-8 mt-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* 1. Left: Navigation & Catalog (Spans 2 columns on large screens) */}
            <div className="lg:col-span-2">
              <div className="text-2xl font-extrabold tracking-tight mb-10 text-white">
                SUPREME FASHION <span className="text-slate-500">INDIA</span>
              </div>
              <div className="grid grid-cols-2 gap-8">

                {/* Navigation */}
                <div>
                  <div className="text-sm mb-4 font-semibold uppercase text-slate-400">Navigation</div>
                  <ul className="space-y-3 text-base">
                    <li><a href="#" className="hover:text-slate-400 transition duration-200">HOME</a></li>
                    <li><a href="#about" className="hover:text-slate-400 transition duration-200">ABOUT US</a></li>
                    <li><a href="#services" className="hover:text-slate-400 transition duration-200">SERVICES</a></li>
                    <li><a href="#process" className="hover:text-slate-400 transition duration-200">PROCESS</a></li>
                    <li><a href="#showcase" className="hover:text-slate-400 transition duration-200">SHOWCASE</a></li>
                    <li><a href="#contact" className="hover:text-slate-400 transition duration-200">CONTACT</a></li>
                  </ul>
                </div>

                {/* Our Products */}
                <div>
                  <div className="text-sm mb-4 font-semibold uppercase text-slate-400">Our Products</div>
                  <ul className="space-y-3 text-base">
                    <li><a href="#" className="hover:text-slate-400 transition duration-200">T-SHIRTS & POLOS</a></li>
                    <li><a href="#" className="hover:text-slate-400 transition duration-200">OUTERWEAR</a></li>
                    <li><a href="#" className="hover:text-slate-400 transition duration-200">PANTS & SHORTS</a></li>
                    <li><a href="#" className="hover:text-slate-400 transition duration-200">KIDS APPAREL</a></li>
                    <li><a href="#" className="hover:text-slate-400 transition duration-200">CUSTOM APPAREL</a></li>
                    <li><a href="#" className="font-bold text-slate-400 hover:text-slate-300 transition duration-200">VIEW ALL →</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2. Right: Contact Info & CTA (Spans 3 columns on large screens) */}
            <div className="lg:col-span-3">
              {/* Main CTA - Elevated design */}
              <h2 className="text-6xl md:text-7xl font-extrabold mb-12 tracking-tight leading-none text-white">
                GET
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200 ml-3">
                  IN TOUCH
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">

                {/* Phone */}
                <div className="border-b border-gray-700 pb-4">
                  <div className="text-xs text-slate-400 mb-1 font-semibold uppercase">01 / Phone</div>
                  <div className="text-xl font-bold text-white transition-colors duration-200 hover:text-slate-400">+91-987-654-3210</div>
                </div>

                {/* Email */}
                <div className="border-b border-gray-700 pb-4">
                  <div className="text-xs text-slate-400 mb-1 font-semibold uppercase">02 / Email</div>
                  <div className="text-xl font-bold text-white">
                    <a href="mailto:contact@supremefashion.in" className="underline hover:text-slate-400 transition duration-200">contact@supremefashion.in</a>
                  </div>
                </div>

                {/* Address */}
                <div className="border-b border-gray-700 pb-4">
                  <div className="text-xs text-slate-400 mb-1 font-semibold uppercase">03 / Address</div>
                  <div className="text-base font-medium text-gray-300">123 Industrial Estate, P.N. Road<br />Tirupur, Tamil Nadu, 641602</div>
                </div>

                {/* Socials - Professional Icons */}
                <div className="pb-4">
                  <div className="text-xs text-slate-400 mb-2 font-semibold uppercase">04 / Socials</div>
                  <div className="flex gap-4 mt-2">
                    {/* Instagram Icon */}
                    <a href="#" className="text-gray-400 hover:text-slate-400 transition duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                    </a>
                    {/* LinkedIn Icon (Professional choice for B2B) */}
                    <a href="#" className="text-gray-400 hover:text-slate-400 transition duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                    </a>
                    {/* Email/Mail Icon */}
                    <a href="mailto:contact@supremefashion.in" className="text-gray-400 hover:text-slate-400 transition duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Bottom Bar - Cleaned up and Centered Content */}
          <div className="border-t border-gray-800 mt-16 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 px-0">

            {/* Policy Links */}
            <div className="flex gap-6 mb-3 md:mb-0">
              <a href="#" className="hover:text-slate-400 transition duration-200">PRIVACY POLICY</a>
              <a href="#" className="hover:text-slate-400 transition duration-200">TERMS OF SERVICE</a>
            </div>

            {/* Copyright and Location */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <span className="order-2 md:order-1">Supreme Fashion India © 2025</span>
              <a href="#top" className="text-sm font-extrabold text-slate-400 hover:text-slate-300 transition duration-200 order-1 md:order-2">
                BACK TO TOP ↑
              </a>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;