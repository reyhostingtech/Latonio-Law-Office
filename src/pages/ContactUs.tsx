import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook, Shield, Send } from 'lucide-react';

const MESSENGER_LINK = "https://m.me/latoniolawoffice";
const FACEBOOK_LINK = "https://www.facebook.com/latoniolawoffice";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      contactMethod: formData.get('contactMethod'),
      matterType: formData.get('matterType'),
      subject: formData.get('subject'),
      concern: formData.get('concern'),
      bestTime: formData.get('bestTime'),
      urgency: formData.get('urgency'),
    };

    const emailSubject = `New Legal Inquiry - ${data.matterType} - ${data.fullName}`;
    const emailBody = `Full Name: ${data.fullName}
Email Address: ${data.email}
Phone Number: ${data.phone}
Preferred Contact Method: ${data.contactMethod}
Legal Matter Type: ${data.matterType}
Subject: ${data.subject}
Urgency: ${data.urgency}
Best Time to Contact: ${data.bestTime || 'Not specified'}

Description of Concern:
${data.concern}`;

    const mailtoLink = `mailto:latoniolaw@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    setTimeout(() => {
      window.location.href = mailtoLink;
      setIsSubmitting(false);
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <div className="bg-white border border-slate-200 shadow-md rounded-lg p-8 md:p-12 mb-20 max-w-4xl mx-auto mt-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-3">Request Legal Consultation</h2>
        <p className="text-slate-600">Complete the form below and our legal team will contact you as soon as possible.</p>
      </div>

      {success && (
        <div className="mb-8 p-4 bg-green-50 border border-green-200 text-green-800 rounded flex items-start">
          <div className="ml-3">
            <h3 className="text-sm font-medium">Request form ready</h3>
            <div className="mt-1 text-sm text-green-700">
              <p>Your default email client should open shortly with your inquiry details. Please send the drafted email to complete your request.</p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
            <input required type="text" id="fullName" name="fullName" className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-amber-700 focus:border-amber-700 outline-none transition" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
            <input required type="email" id="email" name="email" className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-amber-700 focus:border-amber-700 outline-none transition" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number *</label>
            <input required type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-amber-700 focus:border-amber-700 outline-none transition" />
          </div>
          <div>
            <label htmlFor="contactMethod" className="block text-sm font-medium text-slate-700 mb-1">Preferred Contact Method *</label>
            <select required id="contactMethod" name="contactMethod" className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-amber-700 focus:border-amber-700 outline-none transition bg-white">
              <option value="">Select a method...</option>
              <option value="Phone Call">Phone Call</option>
              <option value="Email">Email</option>
              <option value="SMS">SMS</option>
            </select>
          </div>
        </div>

        <hr className="border-slate-100" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="matterType" className="block text-sm font-medium text-slate-700 mb-1">Legal Matter Type *</label>
            <select required id="matterType" name="matterType" className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-amber-700 focus:border-amber-700 outline-none transition bg-white">
              <option value="">Select matter type...</option>
              <option value="Family Law">Family Law</option>
              <option value="Labor Law">Labor Law</option>
              <option value="Criminal Defense">Criminal Defense</option>
              <option value="Civil Litigation">Civil Litigation</option>
              <option value="Property/Real Estate">Property/Real Estate</option>
              <option value="Immigration">Immigration</option>
              <option value="Business Law">Business Law</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="urgency" className="block text-sm font-medium text-slate-700 mb-1">Urgency Level *</label>
            <select required id="urgency" name="urgency" className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-amber-700 focus:border-amber-700 outline-none transition bg-white">
              <option value="">Select urgency...</option>
              <option value="Standard">Standard</option>
              <option value="Urgent">Urgent</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subject of Inquiry *</label>
            <input required type="text" id="subject" name="subject" className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-amber-700 focus:border-amber-700 outline-none transition" />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="concern" className="block text-sm font-medium text-slate-700 mb-1">Brief Description of Concern *</label>
            <textarea required id="concern" name="concern" rows={5} className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-amber-700 focus:border-amber-700 outline-none transition resize-y"></textarea>
          </div>
          <div className="md:col-span-2">
            <label htmlFor="bestTime" className="block text-sm font-medium text-slate-700 mb-1">Best Time to Contact (Optional)</label>
            <input type="text" id="bestTime" name="bestTime" placeholder="e.g. Weekdays after 5 PM" className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-amber-700 focus:border-amber-700 outline-none transition" />
          </div>
        </div>

        <div className="bg-slate-50 p-4 border border-slate-200 rounded">
          <label className="flex items-start cursor-pointer">
            <input required type="checkbox" name="consent" className="mt-1 h-4 w-4 text-amber-700 focus:ring-amber-700 border-gray-300 rounded cursor-pointer" />
            <span className="ml-3 text-sm text-slate-600">
              I understand that submitting this form does not create an attorney-client relationship and I agree not to submit highly confidential information through this form.
            </span>
          </label>
        </div>

        <div className="pt-2">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full md:w-auto px-8 py-3 bg-amber-700 hover:bg-amber-800 text-white font-medium rounded shadow-md transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span>Preparing Request...</span>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                <span>Request Consultation</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default function ContactUs() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-slate-900 py-16 md:py-24 border-b-4 border-amber-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Our Office</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto font-light">
            Secure, confidential consultation access and office information.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Office Information Directory */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 font-serif">Office Directory</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-amber-700 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-1">Office Address</h3>
                  <p className="text-gray-600">827 J.M. Ceniza St., Looc, Mandaue City, Philippines, 6014</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-amber-700 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-1">Phone Number</h3>
                  <p className="text-slate-600">0919 660 3976</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-amber-700 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-1">Email Address</h3>
                  <p className="text-slate-600">latoniolaw@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 text-amber-700 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-1">Office Hours</h3>
                  <dl className="text-slate-600 grid grid-cols-2 gap-x-4 gap-y-1 mt-2 text-sm">
                    <dt>Monday</dt><dd>8:00 AM - 9:00 PM</dd>
                    <dt>Tuesday</dt><dd>8:00 AM - 9:00 PM</dd>
                    <dt>Wednesday</dt><dd>8:00 AM - 9:00 PM</dd>
                    <dt>Thursday</dt><dd>8:00 AM - 9:00 PM</dd>
                    <dt>Friday</dt><dd>8:00 AM - 9:00 PM</dd>
                    <dt>Saturday</dt><dd>10:00 AM - 8:00 PM</dd>
                    <dt>Sunday</dt><dd>10:00 AM - 8:00 PM</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          {/* Secure Communications Panel */}
          <div>
            <div className="bg-white border border-slate-200 shadow-md rounded-lg p-8">
              <div className="flex items-center text-amber-700 mb-6">
                <Shield className="w-6 h-6 mr-2" />
                <h2 className="text-xl font-bold text-slate-900 font-serif">Secure Inquiries</h2>
              </div>
              
              <div className="bg-slate-50 border border-slate-100 p-4 rounded text-sm text-slate-600 mb-8 leading-relaxed">
                <strong>Privacy Notice:</strong> To protect client confidentiality, strict privacy protocols, and ethical standards, legal inquiries are handled exclusively through our official communication channels. We do not collect sensitive case information via public web submission forms.
              </div>

              <div className="space-y-4">
                <a
                  href={MESSENGER_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-6 py-4 text-base font-medium text-white transition-colors bg-slate-900 rounded shadow hover:bg-slate-800"
                >
                  <MessageCircle className="w-5 h-5 mr-3" />
                  Message Us on Facebook Messenger
                </a>
                
                <a
                  href={FACEBOOK_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-6 py-4 text-base font-medium text-gray-700 transition-colors bg-white border border-slate-300 rounded shadow-sm hover:bg-slate-50"
                >
                  <Facebook className="w-5 h-5 mr-3 text-gray-500" />
                  Visit Our Official Facebook Page
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Contact Form Container */}
        <div className="mt-12 w-full px-4 md:px-0">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
