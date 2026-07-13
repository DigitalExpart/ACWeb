import React, { useCallback } from "react";
import { Button } from "@acweb/components/ui/button";
import { ArrowRight, Play, CheckCircle, Lock, Zap, Bell, Cloud } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserType } from "@acweb/contexts/UserTypeContext";
import { SUPABASE_URL } from "@acweb/integrations/supabase/client";

const Hero = () => {
  const { userType } = useUserType();

  /**
   * Handles smooth scrolling to Request Demo & Pricing section
   */
  const handleBookDemoClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById('request-demo-pricing');
    if (targetElement) {
      const headerElement = document.querySelector('header');
      const tabsElement = document.querySelector('[data-user-type-tabs]') as HTMLElement;
      const headerHeight = headerElement ? headerElement.offsetHeight : 160;
      const tabsHeight = tabsElement ? tabsElement.offsetHeight : 88;
      const totalOffset = headerHeight + tabsHeight;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - totalOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      window.history.pushState(null, '', '#request-demo-pricing');
    }
  }, []);

  /**
   * Handles smooth scrolling to Demo Video section and triggers auto-play
   */
  const handleWatchDemoClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const videoPlayerElement = document.getElementById('demo-video-player');
    const targetElement = videoPlayerElement || document.getElementById('demo-video');
    if (targetElement) {
      const headerElement = document.querySelector('header');
      const tabsElement = document.querySelector('[data-user-type-tabs]') as HTMLElement;
      const headerHeight = headerElement ? headerElement.offsetHeight : 160;
      const tabsHeight = tabsElement ? tabsElement.offsetHeight : 88;
      const extraOffset = 100;
      const totalOffset = headerHeight + tabsHeight - extraOffset;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - totalOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      window.history.pushState(null, '', '#demo-video');
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('demo-video-autoplay'));
      }, 800);
    }
  }, []);

  // ── PROVIDER HERO ──────────────────────────────────────────────────────────
  if (userType === 'provider') {
    return (
      <div className="relative">
        <div className="relative overflow-hidden bg-[#0a1628]">
          <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f9fff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#0a1628]"></div>

        <div className="relative pb-12 pt-8 sm:pb-20 sm:pt-12 lg:pb-20 lg:pt-16">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Left: copy */}
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
                  Your Career.
                  <br />
                  <span className="text-blue-400">All In One Place.</span>
                </h1>

                <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-6 max-w-xl">
                  The secure digital wallet built for anesthesia professionals.
                </p>

                {/* 3 bullet points */}
                <div className="space-y-3 mb-8">
                  {[
                    "Store & manage all credentials",
                    "Instantly share with employers",
                    "Stay organized & never miss an expiration",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <span className="text-blue-100 text-base">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Link to="/register/provider">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-7 py-4 text-base font-semibold w-full sm:w-auto">
                      Start 14 Day Free Trial
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <button
                    style={{ color: '#ffffff', backgroundColor: 'transparent' }}
                    className="inline-flex items-center justify-center h-11 rounded-md border border-white/40 px-7 py-4 text-base font-semibold w-full sm:w-auto hover:bg-white/10 transition-colors duration-200"
                    onClick={handleWatchDemoClick}
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch Provider Demo
                  </button>
                </div>
              </div>

              {/* Right: single phone mockup */}
              <div className="flex items-center justify-center">
                <div className="relative w-60 sm:w-72 lg:w-80">
                  <div className="bg-[#1a2744] rounded-3xl p-3 shadow-2xl border border-white/10">
                    <img
                      src="/media__1783908417354.png"
                      alt="Anesthesia Connect mobile app"
                      className="w-full rounded-2xl object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white text-xs font-bold px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
                    AES-256 Encrypted
                  </div>
                  <div className="absolute -top-4 -right-4 bg-green-600 text-white text-xs font-bold px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
                    SOC 2 Type 2
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        </div>
        
        {/* Floating Feature Strip under the Hero */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-6 px-4 sm:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100 gap-y-6 md:gap-y-0 text-center">
              {[
                { icon: <Lock className="h-6 w-6 text-blue-500" />, line1: "Bank-Level", line2: "Security" },
                { icon: <Zap className="h-6 w-6 text-blue-500" />, line1: "Instant Sharing", line2: "& E-Signatures" },
                { icon: <Bell className="h-6 w-6 text-blue-500" />, line1: "Expiration", line2: "Alerts" },
                { icon: <Cloud className="h-6 w-6 text-blue-500" />, line1: "Secure Cloud", line2: "Storage" }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-center gap-3 px-2">
                  <div className="flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-700 text-left leading-snug">
                    {item.line1}
                    <br />
                    {item.line2}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── RESIDENT HERO ──────────────────────────────────────────────────────────
  if (userType === 'resident') {
    return (
      <div className="relative overflow-hidden bg-[#0a1628]">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f9fff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#0a1628]"></div>

        <div className="relative pb-12 pt-8 sm:pb-20 sm:pt-12 lg:pb-28 lg:pt-16">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Left: copy */}
              <div>
                <div className="inline-flex items-center bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6">
                  <span className="text-blue-300 text-sm font-semibold tracking-wide uppercase">For Residents & Programs</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                  Anesthesia Connect
                  <br />
                  <span className="text-blue-400">Gives Back.</span>
                </h1>

                <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-6 max-w-xl">
                  We support the next generation of anesthesia professionals. Anesthesia Connect is free for anesthesia residents — store credentials, track CEUs, and share documents with future employers, all in one secure platform.
                </p>

                <div className="bg-blue-600/20 border border-blue-500/30 rounded-xl p-5 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-bold text-lg">100 complimentary free for all students, residents and programs.</p>
                      <p className="text-blue-200 text-sm mt-1">No credit card required. No strings attached.</p>
                    </div>
                  </div>
                </div>

                {/* Feature bullets */}
                <div className="space-y-3 mb-8">
                  {[
                    "Store licenses, certifications, and credentials",
                    "Track CEUs and expiration dates automatically",
                    "Send credentialing packets to employers instantly",
                    "E-signature for contracts and forms",
                    "Reimbursement requests built in",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <span className="text-blue-100 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/register/provider?student=true">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-7 py-4 text-base font-semibold w-full sm:w-auto">
                      Sign Up Free
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <button
                    style={{ color: '#ffffff', backgroundColor: 'transparent' }}
                    className="inline-flex items-center justify-center h-11 rounded-md border border-white/40 px-7 py-4 text-base font-semibold w-full sm:w-auto hover:bg-white/10 transition-colors duration-200"
                    onClick={handleWatchDemoClick}
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </button>
                </div>
              </div>

              {/* Right: screenshots side-by-side */}
              <div className="flex items-end justify-center gap-6 lg:gap-8">
                <div className="relative flex-shrink-0 w-40 sm:w-52">
                  <div className="bg-[#1a2744] rounded-3xl p-2 shadow-2xl border border-white/10">
                    <img
                      src={`${SUPABASE_URL}/storage/v1/object/public/website/provider.png`}
                      alt="Anesthesia Connect mobile app"
                      className="w-full rounded-2xl object-cover"
                    />
                  </div>
                </div>
                <div className="relative flex-shrink-0 flex-1 max-w-sm">
                  <div className="bg-[#1a2744] rounded-xl p-2 shadow-2xl border border-white/10">
                    <div className="bg-gray-200 rounded-t-lg h-4 flex items-center px-2 gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                    <img
                      src={`${SUPABASE_URL}/storage/v1/object/public/website/employer.png`}
                      alt="Anesthesia Connect dashboard"
                      className="w-full rounded-b-lg object-cover"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── EMPLOYER HERO ──────────────────────────────────────────────────────────
  return (
    <div className="relative overflow-hidden bg-[#0a1628]">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f9fff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#0a1628]"></div>

      <div className="relative pb-12 pt-8 sm:pb-20 sm:pt-12 lg:pb-28 lg:pt-16">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left: copy */}
            <div>
              <div className="inline-flex items-center bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6">
                <span className="text-blue-300 text-sm font-semibold tracking-wide uppercase">For Anesthesia Employers</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                All Provider Documents in One Place.
                <br />
                <span className="text-blue-400">Streamline Onboarding and Credentialing.</span>
                <br />
                Reduce Administrative Workload.
                <br />
                <span className="text-blue-400">Complete credentialing in minutes, not weeks.</span>
              </h1>

              <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-6 max-w-xl">
                Anesthesia Connect empowers anesthesia employers to connect directly with their providers in one centralized platform where onboarding, credentialing, reimbursement requests, compliance, and more are managed — all within a single secure platform.
              </p>

              {/* Automated credentialing highlight */}
              <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-8">
                <p className="text-white font-semibold text-base mb-1">Automated Credentialing Packet Completion</p>
                <p className="text-blue-200 text-sm">Upload the Credentialing Packet. Anesthesia Connect Fills It Out.</p>
                <p className="text-blue-300 text-xs mt-2 font-medium">Start Providers Weeks Earlier</p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#request-demo-pricing" onClick={handleBookDemoClick}>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-7 py-4 text-base font-semibold w-full sm:w-auto">
                    Book Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <button
                  style={{ color: '#ffffff', backgroundColor: 'transparent' }}
                  className="inline-flex items-center justify-center h-11 rounded-md border border-white/40 px-7 py-4 text-base font-semibold w-full sm:w-auto hover:bg-white/10 transition-colors duration-200"
                  onClick={handleWatchDemoClick}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Employer Demo
                </button>
              </div>
            </div>

            {/* Right: laptop screenshot */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-lg">
                <div className="bg-[#1a2744] rounded-xl p-2 shadow-2xl border border-white/10">
                  <div className="bg-gray-200 rounded-t-lg h-5 flex items-center px-2 gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                  <img
                    src={`${SUPABASE_URL}/storage/v1/object/public/website/employer.png`}
                    alt="Anesthesia Connect employer dashboard"
                    className="w-full rounded-b-lg object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
