import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook, Shield } from 'lucide-react';

const MESSENGER_LINK = "https://m.me/latoniolawoffice";
const FACEBOOK_LINK = "https://www.facebook.com/latoniolawoffice";

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
      </div>
    </div>
  );
}
