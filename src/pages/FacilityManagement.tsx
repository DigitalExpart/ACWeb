import React, { useCallback } from 'react';
import Header from '@acweb/components/Header';
import Footer from '@acweb/components/Footer';
import { ArrowRight, Building, Users, Shield, FileText, BarChart2, CheckCircle } from 'lucide-react';

const FacilityManagement: React.FC = () => {
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
              <Building className="h-4 w-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-semibold tracking-wide uppercase">Facility Management</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
              Manage Every Facility.<br /><span className="text-blue-400">From One Platform.</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
              Ensure compliance across all hospital and surgery center locations. Set custom credentialing rules, track privileges, and generate facility-specific rosters.
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
                { icon: <Building className="h-6 w-6 text-blue-600" />, title: "Custom Facility Rulesets", desc: "Set unique credentialing and compliance requirements per location." },
                { icon: <FileText className="h-6 w-6 text-blue-600" />, title: "Facility Roster Generation", desc: "Generate compliant provider rosters for any facility on demand." },
                { icon: <Shield className="h-6 w-6 text-blue-600" />, title: "Privilege Status Tracking", desc: "Monitor each provider's privileging status at every location." },
                { icon: <Users className="h-6 w-6 text-blue-600" />, title: "Site Administrator Portals", desc: "Give facility admins their own view without exposing sensitive data." },
                { icon: <BarChart2 className="h-6 w-6 text-blue-600" />, title: "Multi-Site Dashboards", desc: "See compliance and staffing across all facilities in one view." },
                { icon: <CheckCircle className="h-6 w-6 text-blue-600" />, title: "Credentialing Packet Routing", desc: "Route completed packets directly to the right facility office." },
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
          <h2 className="text-3xl font-extrabold mb-4">Run Every Facility with Confidence.</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">Eliminate facility-level compliance gaps and manage every location from one platform.</p>
          <a href="/#request-demo-pricing" onClick={handleDemoClick}>
            <button className="bg-white text-blue-700 hover:bg-blue-50 rounded-xl px-8 py-4 font-extrabold transition-colors">Schedule a Demo →</button>
          </a>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default FacilityManagement;
