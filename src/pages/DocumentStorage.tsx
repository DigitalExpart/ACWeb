import React, { useCallback } from 'react';
import Header from '@acweb/components/Header';
import Footer from '@acweb/components/Footer';
import { ArrowRight, Folder, Lock, Shield, Search, FileText, Zap } from 'lucide-react';

const DocumentStorage: React.FC = () => {
  const handleDemoClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = '/#request-demo-pricing';
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow pt-28 sm:pt-32">

        {/* HERO */}
        <section className="relative overflow-hidden bg-[#0a1628] text-white py-16 sm:py-20 lg:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#0a1628]"></div>
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6">
              <Folder className="h-4 w-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-semibold tracking-wide uppercase">Document Storage</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
              Every Document.<br /><span className="text-blue-400">Secure. Organized. Instant.</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
              Replace folders, email chains, and spreadsheets with an enterprise-grade credential vault built for anesthesia operations.
            </p>
            <a href="/#request-demo-pricing" onClick={handleDemoClick}>
              <button className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white rounded-xl px-8 py-4 text-base font-bold shadow-md transition-colors">
                Schedule a Demo <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </a>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-16 sm:py-20 bg-[#f4f7fc]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] mb-10 text-center">Everything Included</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Lock className="h-6 w-6 text-blue-600" />, title: "AES-256 Encryption", desc: "Enterprise-grade encryption protects every document at rest and in transit." },
                { icon: <Search className="h-6 w-6 text-blue-600" />, title: "Global Search", desc: "Find any document instantly with smart search and custom tags." },
                { icon: <FileText className="h-6 w-6 text-blue-600" />, title: "Historical Archive", desc: "Full version history for every document — never lose a record." },
                { icon: <Shield className="h-6 w-6 text-blue-600" />, title: "SOC 2 Type 2 Compliant", desc: "Meets the highest security standards for healthcare organizations." },
                { icon: <Zap className="h-6 w-6 text-blue-600" />, title: "Encrypted Share Links", desc: "Send secure document links directly to credentialing offices." },
                { icon: <Folder className="h-6 w-6 text-blue-600" />, title: "Organized by Provider", desc: "Every provider has their own organized credential vault." },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">{item.icon}</div>
                  <h4 className="font-bold text-[#0a1628] text-base mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-600 text-white text-center">
          <h2 className="text-3xl font-extrabold mb-4">Stop Hunting for Documents.</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">Centralize every credential and document in one secure, searchable vault.</p>
          <a href="/#request-demo-pricing" onClick={handleDemoClick}>
            <button className="bg-white text-blue-700 hover:bg-blue-50 rounded-xl px-8 py-4 font-extrabold transition-colors">Schedule a Demo →</button>
          </a>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default DocumentStorage;
