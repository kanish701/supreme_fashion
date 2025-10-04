import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Imageshoot from '../src/assets/photo-shoot.png';

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
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-light tracking-wider">
              SUPREME FASHION INDIA
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Services', 'Process', 'Showcase', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm tracking-wide hover:text-amber-600 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-6 py-4 space-y-4">
              {['About', 'Services', 'Process', 'Showcase', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-sm tracking-wide hover:text-amber-600 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 to-white" style={{ transform: `translateY(${scrollY * 0.5}px)` }} />
        <div className="relative max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-6xl font-extrabold tracking-tight leading-none mb-2">CRAFTING APPAREL</h1>
            <span className="uppercase text-xs tracking-widest text-gray-500 block mb-8">From Tirupur, The Knitwear Capital of India</span>
            <h2 className="text-3xl font-bold mb-4">YOUR VISION, WOVEN INTO REALITY</h2>
            <p className="text-gray-700 mb-8 max-w-lg">
              We are a premier apparel manufacturer specializing in premium quality garments for men, women, and children. Your designs, our expertise.
            </p>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-6">
                <span className="text-gray-400 font-mono w-8">01</span>
                <span className="font-semibold">CUTTING & SEWING</span>
              </li>
              <li className="flex items-center gap-6">
                <span className="text-gray-400 font-mono w-8">02</span>
                <span className="font-semibold">PRINTING & EMBROIDERY</span>
              </li>
              <li className="flex items-center gap-6">
                <span className="text-gray-400 font-mono w-8">03</span>
                <span className="font-semibold">QUALITY ASSURANCE</span>
              </li>
              <li className="flex items-center gap-6">
                <span className="text-gray-400 font-mono w-8">04</span>
                <span className="font-semibold">PACKAGING & LOGISTICS</span>
              </li>
            </ul>
          </div>
          <aside className="flex justify-center items-center">
            <img
              src={Imageshoot}
              alt="Premium apparel manufacturing"
              className="rounded-lg object-cover w-full max-w-md h-96 shadow-lg"
            />
          </aside>
        </div>
      </section>

      {/* Tailored Manufacturing Solutions */}
      <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=600&q=80"
            alt="Custom apparel solutions"
            className="rounded-lg object-cover w-full max-w-lg h-120 shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-4xl font-light tracking-tight mb-6 text-black">
            TAILORED MANUFACTURING<br />SOLUTIONS
          </h2>
          <p className="text-black text-base max-w-md">
            From startups to established brands, we provide bespoke manufacturing services that align with your unique vision. We manage the entire production cycle, ensuring quality, efficiency, and timely delivery for your brand.
          </p>
        </div>
      </div>
    </section>

      {/* With Passion & Purpose Section */}
      <section id="process" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
              <h2 className="text-4xl font-light tracking-tight mb-4 md:mb-0 text-black">WITH PASSION & PURPOSE</h2>
              <p className="text-black text-base max-w-xl md:text-right">
                Our passion for textiles and a purpose-driven approach guide us to deliver exceptional results for our clients worldwide.
              </p>
          </div>
          <div className="flex gap-4 mb-8">
              <select className="border border-black rounded px-3 py-2 text-sm bg-white text-black">
              <option>EXPERTISE</option>
            </select>
              <select className="border border-black rounded px-3 py-2 text-sm bg-white text-black">
              <option>PHILOSOPHY</option>
            </select>
              <select className="border border-black rounded px-3 py-2 text-sm bg-white text-black">
              <option>VISION</option>
            </select>
              <select className="border border-black rounded px-3 py-2 text-sm bg-white text-black">
              <option>TEAM</option>
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-8 flex flex-col justify-between min-h-[180px]">
              <div className="text-xs font-semibold text-gray-500 mb-2">GLOBAL BRANDS</div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-gray-600 text-sm">We are the trusted manufacturing partner for over 50 brands across the globe, from emerging labels to retail giants.</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8 flex flex-col justify-between min-h-[180px]">
              <div className="text-xs font-semibold text-gray-500 mb-2">YEARS OF EXPERIENCE</div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-gray-600 text-sm">With over fifteen years in the industry, our expertise ensures a seamless and reliable production experience.</div>
            </div>
            <div className="bg-white rounded-lg p-8 flex flex-col justify-between min-h-[180px] border">
              <div className="text-xs font-semibold text-gray-500 mb-2">OUR TEAM</div>
                <div className="flex items-center gap-4">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80" alt="Our Team" className="rounded-lg w-20 h-20 object-cover" />
                  <div className="text-3xl font-bold">EXPERTS</div>
                </div>
                <div className="text-gray-600 text-sm">Our skilled artisans, technicians, and managers are the heart of our operations.</div>
              </div>
            <div className="bg-gray-900 rounded-lg p-8 flex flex-col justify-between min-h-[180px] text-white">
              <div className="text-xs font-semibold mb-2">CLIENT SATISFACTION</div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-sm">We pride ourselves on delivering 100% client satisfaction, building lasting partnerships through quality and trust.</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8 flex flex-col justify-between min-h-[180px]">
              <div className="text-xs font-semibold text-gray-500 mb-2">PRODUCTION CAPACITY</div>
              <div className="text-3xl font-bold mb-2">500K+</div>
              <div className="text-gray-600 text-sm">We produce over 500,000 high-quality garments annually for our diverse clientele.</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8 flex flex-col justify-between min-h-[180px]">
              <div className="text-xs font-semibold text-gray-500 mb-2">FABRIC VARIETIES</div>
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="text-gray-600 text-sm">We source and work with over 200 types of premium fabrics to match your exact specifications.</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8 flex flex-col justify-between min-h-[180px]">
              <div className="text-xs font-semibold text-gray-500 mb-2">GLOBAL REACH</div>
              <div className="text-3xl font-bold mb-2">20+</div>
              <div className="text-gray-600 text-sm">Our products are shipped to more than 20 countries, making us a truly global manufacturing partner.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment, Vision & Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-gray-50 rounded-lg p-8 flex flex-col justify-between min-h-[180px]">
              <div className="text-xs font-semibold text-gray-500 mb-2">OUR MOTTO</div>
              <div className="text-xl font-bold mb-2">COMMITMENT TO QUALITY</div>
              <div className="text-gray-600 text-sm">We are committed to delivering the highest quality apparel, ensuring every stitch and seam meets global standards of excellence.</div>
            </div>
            <div className="bg-white rounded-lg flex items-center justify-center min-h-[180px] border">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80" alt="Team planning" className="rounded-lg w-32 h-32 object-cover" />
            </div>
            <div className="bg-white rounded-lg flex items-center justify-center min-h-[180px] border">
              <img src="https://images.unsplash.com/photo-1616421233824-77a33a17f678?auto=format&fit=crop&w=400&q=80" alt="Sewing machine detail" className="rounded-lg w-32 h-32 object-cover" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-lg flex items-center justify-center min-h-[180px] border">
              <img src="https://images.unsplash.com/photo-1551821793-b5709110757c?auto=format&fit=crop&w=400&q=80" alt="Fabric rolls" className="rounded-lg w-32 h-32 object-cover" />
            </div>
            <div className="bg-white rounded-lg flex items-center justify-center min-h-[180px] border">
              <img src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=400&q=80" alt="Team member" className="rounded-lg w-32 h-32 object-cover" />
            </div>
            <div className="bg-gray-50 rounded-lg p-8 flex flex-col justify-between min-h-[180px]">
              <div className="text-xs font-semibold text-gray-500 mb-2">OUR VISION</div>
              <div className="text-xl font-bold mb-2">EMPOWERING FASHION BRANDS</div>
              <div className="text-gray-600 text-sm">Our vision is to be the backbone of fashion brands worldwide by providing reliable, ethical, and high-quality manufacturing solutions.</div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="bg-white rounded-lg flex items-center justify-center min-h-[120px] border">
              <img src="https://images.unsplash.com/photo-1556740738-b6a63e2775d2?auto=format&fit=crop&w=400&q=80" alt="Team collaboration" className="rounded-lg w-20 h-20 object-cover" />
            </div>
            <div className="bg-white rounded-lg flex items-center justify-center min-h-[120px] border">
              <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=400&q=80" alt="Team member portrait" className="rounded-lg w-20 h-20 object-cover" />
            </div>
            <div className="bg-white rounded-lg flex items-center justify-center min-h-[120px] border">
              <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=400&q=80" alt="Team discussion" className="rounded-lg w-20 h-20 object-cover" />
            </div>
            <div className="bg-white rounded-lg flex items-center justify-center min-h-[120px] border">
              <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=400&q=80" alt="Team hands" className="rounded-lg w-20 h-20 object-cover" />
            </div>
            <div className="bg-white rounded-lg flex items-center justify-center min-h-[120px] border">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80" alt="Office workspace" className="rounded-lg w-20 h-20 object-cover" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Philosophy Section */}
      <section id="about" className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div className="text-xs mb-2 tracking-widest">ABOUT US</div>
            <h2 className="text-5xl font-light tracking-tight mb-6">OUR<br />PHILOSOPHY</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="text-gray-200 text-base">
                Rooted in the rich textile heritage of Tirupur, Supreme Fashion India is built on a foundation of craftsmanship, integrity, and innovation. We believe in building partnerships, not just client lists.
              </div>
              <div className="text-gray-200 text-base">
                Our philosophy is simple: combine traditional techniques with modern technology to produce apparel of unparalleled quality. We are dedicated to ethical practices and sustainable sourcing, ensuring every garment we create is one we are proud of.
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-gray-800 rounded-lg p-6 flex flex-col justify-between min-h-[180px] relative">
              <div className="text-xs font-semibold text-gray-400 mb-2">INNOVATION</div>
              <div className="text-gray-200 text-sm mb-4">We invest in the latest manufacturing technologies to ensure precision, efficiency, and the best possible finish for all our products.</div>
              <div className="absolute top-4 right-4 text-gray-400 text-2xl">↗</div>
              <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=400&q=80" alt="Innovation" className="rounded-lg w-full h-32 object-cover mt-4" />
            </div>
            <div className="bg-gray-800 rounded-lg p-6 flex flex-col justify-between min-h-[180px]">
              <div className="text-xs font-semibold text-gray-400 mb-2">LEADERSHIP</div>
              <div className="font-semibold mb-2">EXPERIENCED & DRIVEN</div>
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=400&q=80" alt="Leadership" className="rounded-lg w-full h-32 object-cover" />
              <div className="mt-2 text-gray-400 text-2xl">↗</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 flex flex-col justify-between min-h-[180px] relative">
              <div className="text-xs font-semibold text-gray-400 mb-2">MATERIALS</div>
              <div className="text-gray-200 text-sm mb-4">We source only the finest fabrics and materials from trusted suppliers to guarantee comfort, durability, and a premium feel.</div>
              <div className="absolute top-4 right-4 text-gray-400 text-2xl">↗</div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                <div>
                  <div className="text-xs text-gray-400 mb-1">01 / COTTON</div>
                  <img src="https://images.unsplash.com/photo-1620723146394-d2b638a5a0a3?auto=format&fit=crop&w=400&q=80" alt="Cotton" className="rounded-lg w-full h-16 object-cover" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-1">02 / BLENDS</div>
                  <img src="https://images.unsplash.com/photo-1594938384914-25a3a7801842?auto=format&fit=crop&w=400&q=80" alt="Blended fabrics" className="rounded-lg w-full h-16 object-cover" />
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 flex flex-col justify-between min-h-[180px] relative">
              <div className="text-xs font-semibold text-gray-400 mb-2">CRAFTSMANSHIP</div>
              <div className="text-gray-200 text-sm mb-4">Our skilled artisans bring decades of experience to every garment, ensuring meticulous attention to detail from the first cut to the final stitch.</div>
              <div className="absolute top-4 right-4 text-gray-400 text-2xl">↗</div>
              <img src="https://images.unsplash.com/photo-1599360856263-8f3752678826?auto=format&fit=crop&w=400&q=80" alt="Craftsmanship" className="rounded-lg w-full h-32 object-cover mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Collections Grid Section */}
      <section id="showcase" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center mb-12 tracking-wide">PRODUCT SHOWCASE</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <img src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=400&q=80" alt="T-Shirt" className="rounded-lg object-cover w-full h-64"/>
            <img src="https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&w=400&q=80" alt="Hoodie" className="rounded-lg object-cover w-full h-64"/>
            <img src="https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=400&q=80" alt="Pants" className="rounded-lg object-cover w-full h-64"/>
            <img src="https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?auto=format&fit=crop&w=400&q=80" alt="Kids wear" className="rounded-lg object-cover w-full h-64"/>
          </div>
        </div>
      </section>

      {/* Main Categories Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-extrabold mb-8 tracking-wide">MAIN CATEGORIES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Left: Main image */}
            <div className="md:col-span-1">
              <img src="https://images.unsplash.com/photo-1516478177764-9fe567e9777d?auto=format&fit=crop&w=600&q=80" alt="Apparel collection" className="rounded-lg object-cover w-full h-72" />
            </div>
            {/* Center: Description and shop now */}
            <div className="md:col-span-1 flex flex-col gap-4">
              <p className="text-gray-700 text-sm">
                We manufacture a diverse range of apparel across all categories. Our state-of-the-art facility is equipped to handle various styles, fabrics, and quantity requirements with precision and care.
              </p>
              <a href="#contact" className="text-black font-semibold text-sm inline-flex items-center gap-2 hover:underline">CONTACT US TO START <span className="text-lg">↗</span></a>
              <div className="flex gap-2 mt-2">
                <img src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=100&q=80" alt="Menswear example" className="rounded-lg w-16 h-16 object-cover" />
                <img src="https://images.unsplash.com/photo-1572804013427-4d7ca7268211?auto=format&fit=crop&w=100&q=80" alt="Womenswear example" className="rounded-lg w-16 h-16 object-cover" />
              </div>
            </div>
            {/* Right: Category list */}
            <div className="md:col-span-1 flex flex-col gap-2 mt-8 md:mt-0">
              <div className="border-b py-3 px-4 flex items-center justify-between text-black font-bold bg-gray-100 cursor-pointer">
                <span className="font-bold">MENSWEAR</span>
                <span className="text-lg">↗</span>
              </div>
              <div className="border-b py-3 px-4 flex items-center justify-between text-gray-700 hover:bg-gray-50 cursor-pointer">
                <span className="font-medium">WOMENSWEAR</span>
                <span className="text-lg">↗</span>
              </div>
              <div className="border-b py-3 px-4 flex items-center justify-between text-gray-700 hover:bg-gray-50 cursor-pointer">
                <span className="font-medium">KIDSWEAR</span>
                <span className="text-lg">↗</span>
              </div>
              <div className="border-b py-3 px-4 flex items-center justify-between text-gray-700 hover:bg-gray-50 cursor-pointer">
                <span className="font-medium">SPORTSWEAR</span>
                <span className="text-lg">↗</span>
              </div>
              <div className="border-b py-3 px-4 flex items-center justify-between text-gray-700 hover:bg-gray-50 cursor-pointer">
                <span className="font-medium">UNIFORMS</span>
                <span className="text-lg">↗</span>
              </div>
              <div className="py-3 px-4 flex items-center justify-between text-gray-700 hover:bg-gray-50 cursor-pointer">
                <span className="font-medium">ACCESSORIES</span>
                <span className="text-lg">↗</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Get In Touch Footer Section */}
      <footer id="contact" className="bg-black text-[#f5ecd7] pt-24 pb-8 mt-0">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Navigation & Catalog */}
          <div>
            <div className="text-lg font-bold tracking-widest mb-8">SUPREME FASHION INDIA</div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-xs mb-3 text-[#b3a98c]">Navigation</div>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:underline">HOME</a></li>
                  <li><a href="#about" className="hover:underline">ABOUT US</a></li>
                  <li><a href="#services" className="hover:underline">SERVICES</a></li>
                  <li><a href="#process" className="hover:underline">PROCESS</a></li>
                  <li><a href="#showcase" className="hover:underline">SHOWCASE</a></li>
                  <li><a href="#contact" className="hover:underline">CONTACT</a></li>
                </ul>
              </div>
              <div>
                <div className="text-xs mb-3 text-[#b3a98c]">Our Products</div>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:underline">T-SHIRTS</a></li>
                  <li><a href="#" className="hover:underline">HOODIES</a></li>
                  <li><a href="#" className="hover:underline">POLOS</a></li>
                  <li><a href="#" className="hover:underline">PANTS & SHORTS</a></li>
                  <li><a href="#" className="hover:underline">KIDS APPAREL</a></li>
                  <li><a href="#" className="hover:underline">CUSTOM APPAREL</a></li>
                  <li><a href="#" className="hover:underline">VIEW ALL</a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* Right: Contact Info */}
          <div>
            <h2 className="text-5xl font-extrabold mb-8 tracking-tight">GET <span className="font-outline">IN TOUCH</span></h2>
            <div className="space-y-6">
              <div className="border-b border-[#2d2d2d] pb-4">
                <div className="text-xs text-[#b3a98c] mb-1">01</div>
                <div className="font-semibold">Phone</div>
                <div className="text-lg">+91-987-654-3210</div>
              </div>
              <div className="border-b border-[#2d2d2d] pb-4">
                <div className="text-xs text-[#b3a98c] mb-1">02</div>
                <div className="font-semibold">Email</div>
                <div className="text-lg"><a href="mailto:contact@supremefashion.in" className="underline">contact@supremefashion.in</a></div>
              </div>
              <div className="border-b border-[#2d2d2d] pb-4">
                <div className="text-xs text-[#b3a98c] mb-1">03</div>
                <div className="font-semibold">Address</div>
                <div className="text-lg">123 Industrial Estate, P.N. Road<br />Tirupur, Tamil Nadu, 641602</div>
              </div>
              <div className="pb-4">
                <div className="text-xs text-[#b3a98c] mb-1">04</div>
                <div className="font-semibold">Socials</div>
                <div className="flex gap-4 mt-2">
                  <a href="#" className="text-2xl"><span>✉️</span></a>
                  <a href="#" className="text-2xl"><span>◎</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="border-t border-[#2d2d2d] mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-[#b3a98c] px-6">
          <div className="flex gap-6 mb-2 md:mb-0">
            <a href="#" className="hover:underline">PRIVACY POLICY</a>
            <a href="#" className="hover:underline">COPYRIGHT</a>
          </div>
          <div className="flex gap-4 items-center">
            <span>Supreme Fashion India © 2025</span>
          </div>
          <div className="flex gap-4 items-center">
            <span>MADE WITH ♥ IN TIRUPUR</span>
            <span className="text-lg">↑</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;