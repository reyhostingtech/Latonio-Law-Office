import { ShieldCheck, Target, History, Scale } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Page Header */}
      <div className="border-b border-slate-200 py-16 md:py-24" style={{ backgroundColor: '#78938a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">About Our Firm</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            A tradition of professional excellence, rigorous advocacy, and ethical integrity.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-8 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <Scale className="w-6 h-6 text-amber-700 mr-3" />
                Law Office Overview
              </h2>
              <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed font-light">
                <p>
                  Latonio Law Office is a dedicated legal practice committed to providing high-quality, professional legal representation and comprehensive advisory services. We understand that navigating the legal system requires meticulous attention to detail, strategic foresight, and unwavering dedication to the law.
                </p>
                <p>
                  Our firm is built upon a foundation of mutual trust and respect. We prioritize the distinct needs of each individual client, offering measured, objective legal counsel aimed at achieving fair and lawful resolutions.
                </p>
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-y border-slate-100 py-12">
              <section className="bg-slate-50 p-8 rounded border border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <Target className="w-5 h-5 text-amber-700 mr-2" />
                  Our Mission
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To provide principled, effective, and reliable legal representation. We strive to interpret the complexities of the law for our clients while vigorously protecting their rights through all phases of legal inquiry and litigation.
                </p>
              </section>

              <section className="bg-slate-50 p-8 rounded border border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <ShieldCheck className="w-5 h-5 text-amber-700 mr-2" />
                  Our Vision
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To be recognized as a standard-bearer of legal excellence and professional integrity, cultivating long-term advisory relationships built on confidentiality, ethical practice, and consistent results.
                </p>
              </section>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <History className="w-6 h-6 text-amber-700 mr-3" />
                Professional Legal Philosophy
              </h2>
              <div className="space-y-6 text-slate-700 leading-relaxed font-light">
                <p>
                  We approach every case with an unyielding commitment to ethical legal standards. Our philosophy dictates that thorough preparation, honest evaluation, and clear communication are the cornerstones of successful legal advocacy.
                </p>
                <ul className="list-disc pl-5 space-y-3 text-slate-600">
                  <li><strong>Core Values:</strong> Integrity, Diligence, Respect for the Rule of Law, and Client Focus.</li>
                  <li><strong>Confidentiality Standards:</strong> We maintain the strictest attorney-client privilege. Your privacy and the security of your information are central to our practice.</li>
                  <li><strong>Ethical Commitment:</strong> We pledge to act purely in the best interests of our clients within the bounds of the law, avoiding conflicts of interest and ensuring transparent communication.</li>
                </ul>
              </div>
            </section>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-28 bg-slate-900 rounded-lg p-8 text-white shadow-lg">
               <div className="w-12 h-12 bg-white/10 rounded items-center justify-center flex mb-6">
                <Scale className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-lg font-bold mb-4">Important Disclaimer</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Information presented on this website is for general informational purposes only and does not constitute legal advice. Visiting this website or utilizing our social media links does not inherently create an attorney-client relationship.
              </p>
              <div className="mt-8 pt-6 border-t border-slate-700 text-center">
                <span className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Connect Securely</span>
                <a 
                  href="https://m.me/latoniolawoffice" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block w-full py-3 bg-amber-700 hover:bg-amber-600 text-white text-sm font-semibold rounded transition"
                >
                  Contact Our Office
                </a>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
