import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Scale, MessageCircle, ChevronRight, Facebook } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const MESSENGER_LINK = "https://m.me/latoniolawoffice";
const FACEBOOK_LINK = "https://www.facebook.com/latoniolawoffice";

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Practice Areas', path: '/practice-areas' },
  { label: 'Legal Insights', path: '/legal-insights' },
  { label: 'Contact Us', path: '/contact-us' },
];

const FOOTER_LINKS = [
  ...NAV_LINKS,
  { label: 'FAQ', path: '/frequently-asked-questions' },
  { label: 'Legal Disclaimer', path: '/legal-disclaimer' },
  { label: 'Privacy Policy', path: '/privacy-policy' },
];

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-[#1A1A1A]">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full bg-white border-b-2 border-amber-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo Area */}
            <Link to="/" className="flex items-center space-x-3 md:space-x-4 group">
              <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center shrink-0 drop-shadow-md bg-white rounded overflow-hidden">
                <img src="/lawofficeLogo.jpg" alt="Latonio Law Office Logo" className="object-contain h-full w-full" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-gray-900 leading-tight">
                  Latonio Law Office
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-slate-900 pb-1 ${
                    location.pathname === link.path || (link.path === '/' && location.pathname === '/home')
                      ? 'text-slate-900 border-b-2 border-slate-900 font-semibold'
                      : 'text-gray-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              <a
                href={MESSENGER_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 bg-slate-900 text-white px-5 py-2.5 rounded text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Message Us on Messenger
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-slate-100 bg-white overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1 shadow-inner">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-3 py-3 text-base font-medium rounded-md ${
                      location.pathname === link.path || (link.path === '/' && location.pathname === '/home')
                        ? 'bg-slate-50 text-amber-700'
                        : 'text-gray-700 hover:bg-slate-50 hover:text-amber-700'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4">
                  <a
                    href={MESSENGER_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center px-5 py-3 text-base font-medium text-white transition-colors bg-slate-900 rounded-md hover:bg-slate-800"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Message Us on Messenger
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      {/* Floating CTA Button */}
      <a
        href={MESSENGER_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center py-3 px-5 text-xs font-bold uppercase transition-all shadow-xl bg-amber-700 text-slate-900 rounded-full hover:bg-amber-600 hover:scale-105 focus:outline-none border border-white/20"
        aria-label="Message Us on Messenger"
      >
        <MessageCircle className="w-5 h-5 mr-2" />
        <span className="hidden sm:inline">Message Us</span>
      </a>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 border-t border-amber-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Branding Column */}
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center space-x-3 mb-6 inline-flex">
                 <div className="w-12 h-12 flex items-center justify-center rounded shrink-0 bg-white drop-shadow-md overflow-hidden">
                  <img src="/lawofficeLogo.jpg" alt="Latonio Law Office Logo" className="object-contain h-full w-full" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-xl font-bold text-white leading-tight">
                    Latonio Law Office
                  </span>
                  <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
                    Excellence in Legal Practice
                  </span>
                </div>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-md">
                Providing reliable legal guidance and representation with professionalism, discretion, and dedication to justice.
              </p>
              
              <div className="flex space-x-4">
                <a
                  href={FACEBOOK_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                  aria-label="Visit Our Facebook Page"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={MESSENGER_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                  aria-label="Message Us on Messenger"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Quick Navigation</h3>
              <ul className="space-y-3">
                {FOOTER_LINKS.slice(0, 5).map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm text-slate-400 hover:text-amber-500 transition-colors flex items-center">
                      <ChevronRight className="w-3 h-3 mr-2 text-slate-600" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links Column */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Legal Directory</h3>
              <ul className="space-y-3">
                {FOOTER_LINKS.slice(5).map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm text-slate-400 hover:text-amber-500 transition-colors flex items-center">
                      <ChevronRight className="w-3 h-3 mr-2 text-slate-600" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-slate-800">
            <div className="flex flex-col space-y-4">
              <p className="text-xs text-gray-500 text-center md:text-left leading-relaxed">
                <strong className="text-slate-400 font-medium">Attorney Advertising / Legal Information Disclaimer:</strong> Prior results do not guarantee a similar outcome. Information contained herein is for informational purposes only and does not constitute legal advice.
              </p>
              <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-xs text-slate-500">
                <p>&copy; {new Date().getFullYear()} Latonio Law Office. All rights reserved.</p>
                <div className="flex space-x-4">
                  <Link to="/legal-disclaimer" className="hover:text-slate-300">Disclaimer</Link>
                  <Link to="/privacy-policy" className="hover:text-slate-300">Privacy Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
