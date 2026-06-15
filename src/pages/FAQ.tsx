import { HelpCircle } from 'lucide-react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon } from 'lucide-react';

const MESSENGER_LINK = "https://m.me/latoniolawoffice";

const FAQS = [
  {
    question: "What are your standard office hours?",
    answer: "Please contact us directly through our official channels to inquire about our current operating hours and availability for consultation scheduling."
  },
  {
    question: "Do you offer free initial consultations?",
    answer: "Consultation availability and associated fees vary depending on the nature of the legal matter. We kindly request that you message our office to discuss setting up an initial meeting."
  },
  {
    question: "How do I secure an appointment with an attorney?",
    answer: "The most efficient way to schedule an appointment is to reach out via our official Facebook Messenger or by calling our office line. Our staff will assist in finding a suitable time for your consultation."
  },
  {
    question: "Why can't I submit my case details through this website?",
    answer: "To ensure the highest standard of confidentiality and security, we prohibit the transmission of sensitive legal information through automated web forms. All inquiries are screened and processed securely through our direct communication channels."
  },
  {
    question: "Does messaging the office mean you are my lawyer?",
    answer: "No. Sending a message or requesting a consultation does not create an attorney-client relationship. A formal relationship is only established once we agree to take your case and a written engagement contract is mutually executed."
  }
];

export default function FAQ() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <div className="bg-white border-b border-slate-200 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="w-12 h-12 text-slate-800 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
            General informational inquiries regarding our practice and consultation process.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="bg-amber-50 border border-amber-200 p-6 rounded mb-10 text-amber-900 text-sm font-medium">
          Note: The information provided below is general in nature. We strictly do not provide personalized or case-specific legal guidance through this FAQ platform. For legal advice pertinent to your situation, please structure a formal consultation.
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
             <Disclosure as="div" key={index} className="bg-white border border-slate-200 rounded-lg">
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex w-full justify-between items-center px-6 py-5 text-left text-base font-bold text-slate-900 focus:outline-none focus-visible:ring focus-visible:ring-amber-500 focus-visible:ring-opacity-75">
                      <span>{faq.question}</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-slate-500 transition-transform`}
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="px-6 pb-5 pt-0 text-slate-600 leading-relaxed font-light">
                      {faq.answer}
                    </DisclosurePanel>
                  </>
                )}
             </Disclosure>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-4">Cannot find the answer to your general inquiry?</p>
          <a
            href={MESSENGER_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-amber-700 font-bold hover:text-amber-800 transition-colors"
          >
            Direct your question to our Facebook Messenger →
          </a>
        </div>
      </div>
    </div>
  );
}
