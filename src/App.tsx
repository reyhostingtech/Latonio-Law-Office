import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import PracticeAreas from './pages/PracticeAreas';
import LegalInsights from './pages/LegalInsights';
import ContactUs from './pages/ContactUs';
import LegalDisclaimer from './pages/LegalDisclaimer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FAQ from './pages/FAQ';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="practice-areas" element={<PracticeAreas />} />
          <Route path="legal-insights" element={<LegalInsights />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="legal-disclaimer" element={<LegalDisclaimer />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="frequently-asked-questions" element={<FAQ />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
