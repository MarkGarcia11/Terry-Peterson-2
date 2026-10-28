import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop, ScrollProgress } from './components/layout/ScrollProgress';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileStickyBar } from './components/layout/MobileStickyBar';

// Pages
import { HomePage } from './pages/HomePage';
import { ProblemsHubPage } from './pages/ProblemsHubPage';
import { ProblemDetailPage } from './pages/ProblemDetailPage';
import { ServicesHubPage } from './pages/ServicesHubPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { CaseNotesPage } from './pages/CaseNotesPage';
import { AboutPage } from './pages/AboutPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollProgress />
      <div className="min-h-screen flex flex-col bg-[#423E37] text-white selection:bg-[#B8905A] selection:text-white relative">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/problems" element={<ProblemsHubPage />} />
            <Route path="/problems/:slug" element={<ProblemDetailPage />} />
            <Route path="/services" element={<ServicesHubPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/case-notes" element={<CaseNotesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <MobileStickyBar />
      </div>
    </Router>
  );
}

export default App;
