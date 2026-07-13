
import React, { useCallback } from 'react';
import { Button } from '@acweb/components/ui/button';
import { Link } from 'react-router-dom';
import { Upload, FileText, Send, Bell, Database, Search, Package, Eye, TrendingDown, Lock, CheckCircle } from 'lucide-react';
import { useUserType } from '@acweb/contexts/UserTypeContext';

/**
 * Renders the "How It Works" and "Everything Included" sections.
 */
const HowItWorks: React.FC = () => {
  const { userType } = useUserType();

  const handleScrollToDemo = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = 'request-demo-pricing';
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerElement = document.querySelector('header');
      const tabsElement = document.querySelector('[data-user-type-tabs]') as HTMLElement;
      const headerHeight = headerElement ? headerElement.offsetHeight : 160;
      const tabsHeight = tabsElement ? tabsElement.offsetHeight : 88;
      const totalOffset = headerHeight + tabsHeight;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - totalOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
    }
  }, []);

  // Everything Included — list items per spec
  const everythingIncluded = [
    "Centralized provider credentialing profiles",
    "Automated credentialing packet completion",
    "Custom facility-specific requirements",
    "License, DEA & certification document tracking",
    "Board certification documentation",
    "Malpractice insurance documentation",
    "Immunization & health record tracking",
    "Work history, education & references",
    "Facility affiliation & privileging tracking",
    "Credentialing status & workflow tracking",
    "Committee, board & medical staff tracking",
    "Reappointment & recredentialing workflows",
    "Expiration tracking & automated alerts",
    "Secure document storage & sharing",
    "Credentialing rosters & reports",
  ];

  return (
    <section className="section bg-gradient-to-br from-slate-50 to-blue-50" id="how-it-works">
      <div className="container-ac">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl font-bold text-ac-text mb-4 sm:text-3xl">
            {userType === 'provider' || userType === 'resident'
              ? "How It Works"
              : "What Your Providers Get in the App"
            }
          </h2>
          <p className="text-base text-ac-text-light max-w-3xl mx-auto sm:text-lg">
            {userType === 'provider' || userType === 'resident'
              ? "Simple steps to organize your credentials and stay compliant"
              : "Empower providers to manage their own credentials, driving efficiency and reducing administrative workload across your team."
            }
          </p>
        </div>

        {/* Provider / Resident "How It Works" steps */}
        {(userType === 'provider' || userType === 'resident') && (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14">
              {[
                { icon: <Upload className="h-8 w-8" />, color: "bg-blue-100 text-blue-600", title: "Upload & Centralize", desc: "Securely upload and store all your credentials and tax expenses in one place (e.g., CEUs, NPI, references, immunizations, contracts)" },
                { icon: <FileText className="h-8 w-8" />, color: "bg-green-100 text-green-600", title: "Credential Management", desc: "Maintain and track all licenses, certifications, and other important documents." },
                { icon: <Send className="h-8 w-8" />, color: "bg-purple-100 text-purple-600", title: "Send & Onboard", desc: "With one click, employers request or receive complete credentialing packets, signed contracts, or updated compliance docs." },
                { icon: <Bell className="h-8 w-8" />, color: "bg-orange-100 text-orange-600", title: "Expiration Alerts", desc: "Smart alerts warn of expiring docs. Dashboards show real-time status." },
                { icon: <Lock className="h-8 w-8" />, color: "bg-indigo-100 text-indigo-600", title: "Secure Cloud Storage", desc: "SOC 2 Type 2 Compliant infrastructure keeping all your credentials safe." },
              ].map((step, i) => (
                <div key={i} className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 sm:rounded-2xl sm:p-8">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 ${step.color} rounded-xl flex items-center justify-center mb-4 sm:mb-6 sm:rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-ac-text mb-3 sm:text-xl sm:mb-4">{step.title}</h3>
                  <p className="text-ac-text-light leading-relaxed text-sm sm:text-base">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* Everything Included section */}
            <div className="bg-[#0a1628] rounded-2xl p-8 sm:p-10 mb-10">
              <h3 className="text-2xl font-bold text-white text-center mb-8">One Centralized Platform — Everything Included</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {everythingIncluded.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-blue-100 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Employer "What providers get" */}
        {userType === 'employer' && (
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 sm:rounded-2xl sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-6 sm:space-y-8">
                  {[
                    { title: "Store & Manage All Credentials", desc: "Providers can store and manage all of their credentials in one place — including IDs, state licenses, board certifications, diplomas, case logs, ACLS, BLS, PALS, DEA, malpractice insurance, immunizations, TB, NPI number, resumes, references, work and education history, and more." },
                    { title: "Send Their Entire Packet Instantly", desc: "Providers can connect with their employer and share their full credential packet in seconds — or instantly send a PDF or encrypted file to any destination." },
                    { title: "Automatic CEU Tracking", desc: "Providers can upload and track continuing education credits directly in the app, ensuring their education and CEU history stays current." },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-ac-text mb-1 sm:mb-2 sm:text-lg">{item.title}</h4>
                        <p className="text-ac-text-light text-sm sm:text-base">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 sm:space-y-8">
                  {[
                    { title: "Reimbursement Requests Made Easy", desc: "Providers submit reimbursement requests through the app and can track approvals, allowances, and remaining balances — reducing HR follow-up and manual communication." },
                    { title: "Never Miss an Expiration", desc: "Providers receive automatic alerts before licenses, certifications, or other required documents expire — helping prevent delays, gaps, or compliance issues." },
                    { title: "Digitally Sign & Submit", desc: "Providers can complete forms and sign agreements directly in the app using built-in e-signature — eliminating printing, scanning, emailing, and paperwork choke points." },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-ac-text mb-1 sm:mb-2 sm:text-lg">{item.title}</h4>
                        <p className="text-ac-text-light text-sm sm:text-base">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-8 sm:mt-12">
          {userType === 'employer' ? (
            <a href="#request-demo-pricing" onClick={handleScrollToDemo}>
              <Button size="lg" className="w-full sm:w-auto bg-ac-primary hover:bg-ac-primary/90 text-white px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg">
                Get Started Now
              </Button>
            </a>
          ) : (
            <Link to="/register/provider">
              <Button size="lg" className="w-full sm:w-auto bg-ac-primary hover:bg-ac-primary/90 text-white px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg">
                Get Started Now
              </Button>
            </Link>
          )}
        </div>

        {/* Additional "How It Works" section for employers */}
        {userType === 'employer' && (
          <div className="mt-12 sm:mt-16">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl font-bold text-ac-text mb-4 sm:text-3xl">How It Works</h2>
              <p className="text-base text-ac-text-light max-w-3xl mx-auto sm:text-lg">
                Streamlined process to onboard providers and manage compliance all in one centralized platform.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { icon: <Database className="h-8 w-8" />, title: "Unified Credential Vault", desc: "All provider credentials — licenses, diplomas, DEA, immunizations, malpractice, references, education, work history — stored in one secure platform instead of scattered across inboxes and folders." },
                { icon: <Search className="h-8 w-8" />, title: "Smart Document Requests", desc: "Request specific documents with one click. Providers receive a direct notification and upload instantly. Every request is tracked so nothing gets lost." },
                { icon: <Package className="h-8 w-8" />, title: "Automated Onboarding Packets", desc: "Send onboarding packets that automatically auto-populate with the provider's stored documents — eliminating repetitive re-requests and manual packet assembly." },
                { icon: <Eye className="h-8 w-8" />, title: "Real-Time Compliance Visibility", desc: "See every provider's status across all facilities in a single dashboard. Instantly see who is cleared, who is pending, and who needs an update." },
                { icon: <Bell className="h-8 w-8" />, title: "Expiration Alerts & Tasking", desc: "Automatic reminders for upcoming expirations — licenses, certifications, immunizations, malpractice — so your team stays ahead, not behind." },
                { icon: <TrendingDown className="h-8 w-8" />, title: "Less Admin Work — More Capacity", desc: "Cut HR workload, reduce back-and-forth emails, and scale your practice without adding more administrative staff." },
              ].map((step, i) => (
                <div key={i} className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 sm:rounded-2xl sm:p-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 sm:rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-ac-text mb-3 sm:text-xl sm:mb-4">{step.title}</h3>
                  <p className="text-ac-text-light leading-relaxed text-sm sm:text-base">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HowItWorks;
