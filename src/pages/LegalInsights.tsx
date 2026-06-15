import { BookOpen, AlertCircle, Scale, Users, Home, Briefcase, FileText } from 'lucide-react';

const ARTICLES = [
  {
    title: "Understanding Contracts Under Philippine Law",
    summary: "Explains the essential elements that make a contract valid, the enforceable obligations of parties involved, and common issues encountered in civil agreements.",
    category: "Civil Law",
    icon: <FileText className="w-5 h-5 text-amber-700" />,
    content: "Under the Civil Code of the Philippines, a contract is a meeting of minds between two persons whereby one binds himself, with respect to the other, to give something or to render some service. For a contract to be valid and fully enforceable, it must possess three essential elements: consent of the contracting parties, a certain object which is the subject matter of the contract, and the cause of the obligation which is established. Contracts arise in everyday transactions, from simple purchases to complex business agreements. It is crucial for parties to read and comprehend the terms stipulated before signing, as obligations arising from contracts have the force of law between the contracting parties and should be complied with in good faith. When ambiguities or breaches occur, civil actions for specific performance or damages may be initiated to seek legal remedies."
  },
  {
    title: "The Fundamentals of Property Ownership and Titling",
    summary: "A guide on how land ownership is established, the importance of registering titles, and common issues surrounding inheritance and property disputes.",
    category: "Property Law",
    icon: <Home className="w-5 h-5 text-amber-700" />,
    content: "Property ownership in the Philippines is heavily regulated, and the Torrens System of land registration is utilized to provide conclusive evidence of land ownership. A Certificate of Title is the best proof of ownership over a parcel of land. Understanding the processes of transferring titles—whether through sale, donation, or succession—is vital to prevent future disputes. Additionally, purchasing property requires due diligence, including verifying the title's authenticity with the Registry of Deeds and checking for any existing liens or encumbrances. Inheritance also plays a significant role in property law, where the rights to the succession are transmitted from the moment of the decedent's death. Extrajudicial settlement of estates may be pursued if the deceased left no will and no debts, provided all heirs agree on the division, simplifying the transfer of property lines."
  },
  {
    title: "Employee Rights and Valid Grounds for Dismissal",
    summary: "Details the basic rights of employees in the Philippines, including minimum wage, leave benefits, and the conditions for just and authorized causes of termination.",
    category: "Labor Law",
    icon: <Briefcase className="w-5 h-5 text-amber-700" />,
    content: "The Labor Code of the Philippines offers robust protections for the working class, ensuring their right to security of tenure, humane working conditions, and a living wage. Employees cannot be terminated without due process and a valid cause. The law distinguishes between 'just causes' for dismissal, which are brought about by the employee's own wrongful acts or negligence (such as serious misconduct, habitual neglect of duties, or fraud), and 'authorized causes', which are business-related reasons initiated by the employer (like retrenchment to prevent losses or installation of labor-saving devices). It is critical for employers to follow both substantive and procedural due process before terminating an employee; failure to do so can result in illegal dismissal claims, rendering the employer liable for reinstatement and backwages. Employees must remain informed of their rights to ensure fair treatment in the workplace."
  },
  {
    title: "Rights of the Accused in the Criminal Justice System",
    summary: "An overview of the constitutional rights afforded to individuals facing criminal allegations, detailing arrest procedures and the presumption of innocence.",
    category: "Criminal Law",
    icon: <Scale className="w-5 h-5 text-amber-700" />,
    content: "The Philippine Constitution enshrines fundamental rights to protect individuals accused of a crime, emphasizing that every person is presumed innocent until proven guilty beyond a reasonable doubt. Upon apprehension, the accused is read their 'Miranda Rights', which include the right to remain silent, the right to have competent and independent counsel preferably of their own choice, and the right to be informed of the nature and cause of the accusation against them. Any confession or admission obtained in violation of these rights is inadmissible in evidence. The criminal justice process ensures that a warrant of arrest is issued by a judge only after determining probable cause. For a fair trial, the accused has the right to be heard by himself and counsel, to have a speedy, impartial, and public trial, and to meet the witnesses face to face. These safeguards exist to prevent arbitrary state action and protect liberty."
  },
  {
    title: "Navigating Annulment and Legal Separation",
    summary: "Clarifies the legal differences between annulment, declaration of nullity, and legal separation under the Family Code of the Philippines.",
    category: "Family Law",
    icon: <Users className="w-5 h-5 text-amber-700" />,
    content: "In the Philippines, where absolute divorce is not currently recognized, the Family Code provides specific remedies for troubled marriages: Declaration of Nullity, Annulment, and Legal Separation. A Declaration of Nullity asserts that a marriage was void from the very beginning due to specific grounds like psychological incapacity, minority, or close blood relations. An Annulment applies to marriages that are valid until annulled by a court due to factors present at the time of marriage, such as fraud, force, or impotence. Conversely, Legal Separation does not sever the marital bond; it allows spouses to live separately and divides their properties, often granted on grounds like repeated physical violence, sexual infidelity, or abandonment. Each legal option carries different requirements regarding evidence, duration, and the resulting status of children and property, necessitating careful evaluation of the specific marital circumstances."
  },
  {
    title: "Legal Obligations and Damages in Civil Disputes",
    summary: "Discusses how legal obligations arise from law, contracts, quasi-contracts, or illicit acts, and how damages are awarded for breaches.",
    category: "Civil Law",
    icon: <FileText className="w-5 h-5 text-amber-700" />,
    content: "Obligations in civil law dictate that a person is bound to give, to do, or not to do something. These obligations can arise from laws, contracts, quasi-contracts, delicts (crimes), and quasi-delicts (negligence). When a party fails to perform their obligation, or performs it in contravention of the agreement, the aggrieved party is entitled to seek damages. Philippine law recognizes several types of damages: actual or compensatory (to cover exact financial losses), moral (for physical suffering or mental anguish), nominal (to vindicate a right), temperate (when exact loss cannot be determined), liquidated (agreed upon in a contract), and exemplary (imposed as a deterrent). Understanding the nature of the obligation breached is critical in determining the appropriate civil action and the scope of liability for damages."
  },
  {
    title: "Child Custody and Support Guidelines",
    summary: "Focuses on the paramount consideration of the 'child's best interest' in custody battles and how financial support obligations are determined.",
    category: "Family Law",
    icon: <Users className="w-5 h-5 text-amber-700" />,
    content: "When parents separate, child custody and support become sensitive issues guided invariably by the principle of the 'best interest of the child'. Under Philippine law, children under seven years of age shall not be separated from their mother, unless the court finds compelling reasons to do so. For older children, the courts consider various factors, including the child's preference if they are over seven years old, the moral and physical environment provided by the parents, and their financial capacity. Both parents are legally obligated to provide support for their children, which encompasses sustenance, dwelling, clothing, medical attendance, education, and transportation in keeping with the financial capacity of the family. The amount of child support is not a fixed rate but is determined proportionately according to the necessities of the recipient and the resources of the person obliged to furnish it."
  },
  {
    title: "Understanding Easements and Right of Way",
    summary: "Provides clarity on property easements, specifically discussing how a legal right of way is established between neighboring estates.",
    category: "Property Law",
    icon: <Home className="w-5 h-5 text-amber-700" />,
    content: "An easement, or servitude, is an encumbrance imposed upon an immovable for the benefit of another immovable belonging to a different owner. One of the most common issues is the legal easement of right of way. Under the Civil Code, an owner of an estate enveloped by other estates, without adequate access to a public highway, is entitled to demand a right of way through neighboring estates, provided that proper indemnity is paid. For this right to be granted, certain conditions must be met: the isolation must not be due to the proprietor's own acts, the indemnification must be settled, and the right of way must be established at the point least prejudicial to the servient estate. This legal mechanism ensures that landlocked properties remain useful while balancing the property rights of neighboring landowners."
  }
];

export default function LegalInsights() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Page Header (Hero Section) */}
      <div className="bg-slate-900 border-b-4 border-amber-700 py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="w-12 h-12 text-amber-700 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Legal Insights</h1>
          <h2 className="text-xl md:text-2xl font-serif text-slate-300 mb-6 font-medium">Understanding the Law. Empowering Legal Awareness.</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
            A professional collection of legal articles and educational content provided by Latonio Law Office for public awareness and guidance.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full flex flex-col space-y-16">
        
        {/* Introduction Section */}
        <section className="bg-white border border-slate-200 p-10 rounded shadow-sm text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">The Importance of Legal Education</h3>
          <p className="text-gray-600 leading-relaxed font-light text-lg">
            A well-informed public is the foundation of a just society. Latonio Law Office is committed to bridging the gap between complex legal doctrines and everyday understanding. In the Philippines, navigating the legal landscape can often seem daunting. By demystifying basic legal concepts, we aim to empower individuals to better understand their fundamental rights, the procedures of the justice system, and the legal implications of their personal and professional transactions. Knowledge of the law is the first step toward effective legal advocacy and protecting one's interests.
          </p>
        </section>

        {/* Article List Section */}
        <section>
          <div className="text-center mb-12">
            <h3 className="text-amber-700 font-bold text-xs uppercase tracking-[0.2em] mb-2">Educational Library</h3>
            <h2 className="text-3xl font-serif font-bold text-slate-900">Featured Legal Articles</h2>
            <div className="w-16 h-1 bg-amber-700 mx-auto opacity-50 mt-4"></div>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {ARTICLES.map((article, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  {article.icon}
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{article.category}</span>
                </div>
                <h4 className="text-2xl font-serif font-bold text-slate-900 mb-3">{article.title}</h4>
                <p className="text-slate-600 font-medium mb-6 leading-relaxed">
                  {article.summary}
                </p>
                <div className="prose prose-slate max-w-none text-slate-600 font-light text-sm leading-loose border-l-4 border-amber-700 pl-6 py-2 bg-slate-50">
                  {article.content}
                </div>
                <div className="mt-8 text-xs text-slate-400 font-medium bg-slate-100 p-3 rounded inline-block">
                  <span className="font-bold">Note:</span> This article is for informational purposes only and does not constitute legal advice.
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dedicated Disclaimer Section */}
        <section className="bg-slate-900 border border-slate-800 p-8 rounded-lg">
          <div className="flex items-start">
            <AlertCircle className="w-6 h-6 text-amber-700 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-sm font-bold text-amber-700 uppercase tracking-widest mb-2">Legal Disclaimer</h4>
              <p className="text-slate-300 leading-relaxed font-light text-sm">
                All materials published under Legal Insights are for general informational purposes only and do not constitute legal advice. No attorney-client relationship is created through the use of this website or its content. If you require legal assistance specific to your circumstances, please contact our office for a formal consultation.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
