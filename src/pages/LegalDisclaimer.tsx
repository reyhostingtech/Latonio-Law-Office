export default function LegalDisclaimer() {
  return (
    <div className="flex flex-col w-full bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-12">Legal Disclaimer</h1>
        
        <div className="prose prose-slate max-w-none text-gray-700 leading-loose font-light space-y-8">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. No Attorney-Client Relationship</h2>
            <p>
              The materials and information on this website have been prepared by Latonio Law Office for informational purposes only. The transmission and receipt of information contained on this website, in whole or in part, or communication with Latonio Law Office via the Internet, email, or social media networks does not constitute or create an attorney-client relationship between us and any recipient. You should not send us any confidential information in response to this webpage. Such responses will not create an attorney-client relationship, and whatever you disclose to us will not be privileged or confidential unless we have agreed to act as your legal counsel and you have executed a written engagement agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Informational Purposes Only / No Legal Advice</h2>
            <p>
              The information presented on this website is provided as a general resource and may not be up to date or reflect the most current legal developments. It is not intended to provide, and should not be relied on as, legal advice or as an offer to perform legal services on any matter. The information provided may not apply to your particular facts or circumstances; therefore, you should seek independent legal counsel in your specific jurisdiction regarding any legal questions you may have.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Communication and Confidentiality</h2>
            <p>
              Information communicated through this website, including but not limited to social media messaging platforms, may not be secure. Until a formal attorney-client relationship is explicitly established, any communication does not guarantee confidentiality. Users should contact the office directly through secured channels for formal consultation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Prior Results Do Not Guarantee Future Outcomes</h2>
            <p>
              Any references to past cases, successful outcomes, or representative matters are for illustrative purposes. Prior results do not guarantee or predict a similar outcome in any future matter, as every case involves unique legal and factual issues.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
