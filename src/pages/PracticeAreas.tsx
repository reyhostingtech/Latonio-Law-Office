import React, { ReactNode } from 'react';
import { Briefcase, FileText, Home, Users, Building, AlertTriangle, ShieldAlert, Gavel } from 'lucide-react';

interface PracticeAreaProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const PracticeArea: React.FC<PracticeAreaProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white border border-slate-200 p-8 rounded hover:border-amber-700 hover:shadow-lg transition-all group">
      <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center mb-6 text-amber-700 group-hover:bg-amber-50 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default function PracticeAreas() {
  const areas = [
    {
      icon: <Gavel className="w-6 h-6" />,
      title: 'Civil Law',
      description: 'Comprehensive representation in civil disputes, including torts, damages, personal injury, and general civil litigation matters.'
    },
    {
      icon: <ShieldAlert className="w-6 h-6" />,
      title: 'Criminal Defense',
      description: 'Vigorous and structured defense of the accused, safe-guarding constitutional rights through every stage of the criminal justice process.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Family Law',
      description: 'Handling sensitive domestic matters including marital disputes, adoption, guardianship, annulment, and estate distribution with discretion.'
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Labor & Employment Matters',
      description: 'Advisory and representation services concerning employment contracts, dispute resolution, workers\' rights, and corporate compliance.'
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: 'Property & Land Concerns',
      description: 'Legal assistance with real estate transactions, property disputes, land titles, zoning laws, and leasing agreements.'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Contracts & Legal Documentation',
      description: 'Drafting, reviewing, and negotiating complex commercial and private contracts to protect client interests and mitigate liability.'
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: 'Corporate / Business Legal Matters',
      description: 'Strategic counsel for enterprise formation, structural compliance, dispute mitigation, and commercial litigation.'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Notarial Services',
      description: 'Formal notarization and authentication of legal documents, affidavits, and sworn statements.'
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50">
      {/* Page Header */}
      <div className="bg-slate-900 py-16 md:py-24 border-b-4 border-amber-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Practice Areas</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto font-light">
            Providing comprehensive and strategic legal representation across multiple disciplines of the law.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Important Disclaimer Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded p-6 mb-12 flex items-start">
          <AlertTriangle className="w-6 h-6 text-amber-700 mr-4 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-sm font-bold text-amber-900 uppercase tracking-widest mb-1">Legal Disclaimer</h4>
            <p className="text-sm text-amber-800 leading-relaxed font-medium">
              Legal services and outcomes may vary significantly depending on the unique facts and circumstances of each individual matter and consultation. No prior result dictates a future outcome.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <PracticeArea 
              key={index} 
              icon={area.icon} 
              title={area.title} 
              description={area.description} 
            />
          ))}
        </div>

      </div>
    </div>
  );
}
