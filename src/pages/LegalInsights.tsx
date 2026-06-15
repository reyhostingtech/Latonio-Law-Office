import { BookOpen, AlertCircle } from 'lucide-react';

export default function LegalInsights() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-white border-b border-slate-200 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="w-12 h-12 text-slate-800 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Legal Insights & Resources</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
            Educational materials, legal updates, and public awareness content.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="bg-white border border-slate-200 p-8 rounded-lg shadow-sm mb-12">
          <div className="flex items-start">
            <AlertCircle className="w-6 h-6 text-slate-500 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-sm font-bold text-slate-700 uppercase tracking-widest mb-2">Important Notice</h4>
              <p className="text-slate-600 leading-relaxed font-medium">
                Articles and materials published in this section are intended for general educational and informational purposes only. They do not constitute personalized legal advice or case-specific recommendations. For formal legal counsel, please seek a direct consultation.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center py-24 bg-white border border-slate-100 rounded">
          <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-900 mb-2">Content Under Development</h3>
          <p className="text-slate-500 max-w-md mx-auto">
            Our legal professionals are currently compiling valuable legal resources and updates. Please check back later for full articles and insights.
          </p>
        </div>
      </div>
    </div>
  );
}
