import { Link } from 'react-router-dom';
import { Shield, Scale, Briefcase, ChevronRight, Facebook, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

const MESSENGER_LINK = "https://m.me/latoniolawoffice";
const FACEBOOK_LINK = "https://www.facebook.com/latoniolawoffice";

const FEATURES = [
  {
    icon: <Shield className="w-6 h-6 text-amber-700" />,
    title: 'Integrity',
    description: 'We uphold the highest ethical legal standards in every aspect of our practice.',
  },
  {
    icon: <Scale className="w-6 h-6 text-amber-700" />,
    title: 'Professionalism',
    description: 'Committed to delivering legal excellence with unwavering dedication to justice.',
  },
  {
    icon: <Briefcase className="w-6 h-6 text-amber-700" />,
    title: 'Confidentiality',
    description: 'Absolute discretion and strict protection of our clients’ private information.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="flex flex-col w-full bg-white">
        {/* Banner Image Area */}
        <div 
          className="relative w-full bg-white border-b border-slate-200"
          style={{ 
            backgroundImage: "url('https://raw.githubusercontent.com/reyhostingtech/Latonio-Law-Office/main/Background.png')", 
            backgroundSize: 'contain', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat',
            minHeight: '45vh'
          }}
        >
        </div>
        
        {/* Content Area - Completely separate to avoid overlap */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-5xl font-serif text-[#000000] leading-tight mb-4 font-bold">
              Conscientious Legal Service
            </h1>
            <p className="text-md md:text-lg text-[#111111] leading-relaxed mb-8 font-medium max-w-2xl mx-auto">
              Providing reliable legal guidance and representation with professionalism, discretion, and dedication to justice.
            </p>
            
            {/* Button Layout: Below text block, no overlap */}
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href={MESSENGER_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-700 text-white px-8 py-4 rounded font-bold text-sm uppercase tracking-wider hover:bg-amber-800 transition-all flex items-center justify-center shadow-md w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>Message Us on Messenger</span>
              </a>
              <a
                href={FACEBOOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1A1A1A] text-white px-8 py-4 rounded font-bold text-sm uppercase tracking-wider hover:bg-black transition-all flex items-center justify-center shadow-md w-full sm:w-auto"
              >
                <Facebook className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>Visit Our Facebook Page</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Firm */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-amber-700 font-bold text-xs uppercase tracking-[0.2em] mb-4">Our Philosophy</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">Why Choose Our Firm</h3>
            <div className="w-16 h-1 bg-amber-700 mx-auto opacity-50 mb-6"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are defined by our ethical legal practice and unwavering commitment to securing the best lawful outcomes for our clients, handled with absolute professionalism and discretion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
            {FEATURES.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-50 border border-slate-100 p-8 rounded-lg text-center hover:shadow-md transition-shadow"
              >
                <div className="mx-auto w-14 h-14 bg-white border border-slate-200 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brief Practice Areas Preview */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-amber-700 uppercase tracking-widest mb-2">Areas of Expertise</h2>
              <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">Practice Areas</h3>
              <p className="text-slate-600">Representing clients in complex legal matters with strategic insight and rigorous preparation.</p>
            </div>
            <div className="mt-6 md:mt-0">
              <Link to="/practice-areas" className="inline-flex items-center text-amber-700 hover:text-amber-800 font-medium transition-colors">
                View All Practice Areas <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Civil Law', 'Criminal Defense', 'Family Law', 'Labor & Employment'].map((area, idx) => (
              <Link key={idx} to="/practice-areas" className="group bg-white border border-slate-200 p-6 rounded-lg hover:border-amber-700 hover:shadow-md transition-all">
                <h4 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-2">{area}</h4>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">Comprehensive legal services dedicated to protecting your rights and corporate interests.</p>
                <span className="text-xs font-semibold text-slate-400 group-hover:text-amber-700 inline-flex items-center uppercase tracking-wider">
                  Learn More <ChevronRight className="w-3 h-3 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Notice Panel */}
      <section className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-300">
          <Shield className="w-8 h-8 text-amber-500 mx-auto mb-4 opacity-80" />
          <h4 className="text-amber-700 font-bold text-xs uppercase tracking-[0.2em] mb-4">Privacy & Confidentiality Notice</h4>
          <p className="text-sm leading-relaxed max-w-2xl mx-auto text-slate-400">
            To protect confidentiality and privacy, legal inquiries are handled exclusively through our official communication channels. Please message us directly on our official Facebook Messenger for any inquiries.
          </p>
        </div>
      </section>

    </div>
  );
}
