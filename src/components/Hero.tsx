
import React, { useCallback } from "react";
import { Button } from "@acweb/components/ui/button";
import { ArrowRight, Play, Shield, Users, FileCheck, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserType } from "@acweb/contexts/UserTypeContext";

const Hero = () => {
  const { userType } = useUserType();

  /**
   * Handles smooth scrolling to Request Demo & Pricing section
   * Security: Validates target exists before scrolling
   */
  const handleBookDemoClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    const targetElement = document.getElementById('request-demo-pricing');
    
    if (targetElement) {
      // Calculate total offset: header height + tabs height
      const headerElement = document.querySelector('header');
      const tabsElement = document.querySelector('[data-user-type-tabs]') as HTMLElement;
      
      const headerHeight = headerElement ? headerElement.offsetHeight : 160;
      const tabsHeight = tabsElement ? tabsElement.offsetHeight : 88;
      const totalOffset = headerHeight + tabsHeight;
      
      // Get element position
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - totalOffset;

      // Smooth scroll to target with offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Update URL hash without triggering scroll
      window.history.pushState(null, '', '#request-demo-pricing');
    }
  }, []);

  /**
   * Handles smooth scrolling to Demo Video section and triggers auto-play
   * Security: Validates target exists before scrolling
   */
  const handleWatchDemoClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    // Try to find the video player element first, fallback to section
    const videoPlayerElement = document.getElementById('demo-video-player');
    const targetElement = videoPlayerElement || document.getElementById('demo-video');
    
    if (targetElement) {
      // Calculate total offset: header height + tabs height
      const headerElement = document.querySelector('header');
      const tabsElement = document.querySelector('[data-user-type-tabs]') as HTMLElement;
      
      const headerHeight = headerElement ? headerElement.offsetHeight : 160;
      const tabsHeight = tabsElement ? tabsElement.offsetHeight : 88;
      // Add extra offset (100px) to scroll further down so video is more visible
      // This ensures the video player is well-positioned in the viewport
      const extraOffset = 100;
      const totalOffset = headerHeight + tabsHeight - extraOffset;
      
      // Get element position
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - totalOffset;

      // Smooth scroll to target with offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Update URL hash
      window.history.pushState(null, '', '#demo-video');

      // Dispatch custom event to trigger video auto-play after scroll completes
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('demo-video-autoplay'));
      }, 800); // Delay to allow scroll animation to complete
    }
  }, []);

  const providerContent = {
    title: (
      <>
        <span className="block whitespace-nowrap">Stop Chasing Paperwork.</span>
        <span className="block text-ac-primary whitespace-nowrap">Send Your Credentials Instantly.</span>
        <span className="block whitespace-nowrap">Store and Manage All Documents.</span>
        <span className="block text-ac-primary whitespace-nowrap">Your Career â€” Organized in One Secure Platform.</span>
      </>
    ),
    description: "Anesthesia Connect is your secure digital wallet for anesthesia providers â€” storing and managing every credential you need, including licenses, documents, diplomas, certifications, work and education history, references, CEUs, and reimbursement requests, while allowing you to confirm e-signature contracts and connect with or send everything to any employer with a click of a button.",
    ctaText: "Start 14-Day Free Trial",
    ctaLink: "/register/provider",
    secondaryText: "Watch Provider Demo"
  };

  const employerContent = {
    title: (
      <>
        <span className="block leading-tight whitespace-nowrap">All Provider Documents in One Place.</span>
        <span className="block text-ac-primary leading-tight whitespace-nowrap">Streamline Onboarding and Credentialing.</span>
        <span className="block leading-tight whitespace-nowrap">Reduce Administrative Workload.</span>
        <span className="block text-ac-primary leading-tight whitespace-nowrap">Improve Compliance.</span>
      </>
    ),
    description: "Anesthesia Connect empowers anesthesia employers to connect directly with their providers in one unified platform where onboarding, credentialing, reimbursement requests, compliance, and more are managed while maintaining the highest security standards all within a single protected platform.",
    ctaText: "Book Demo",
    ctaLink: "/register/employer",
    secondaryText: "Watch Employer Demo"
  };

  const content = userType === 'provider' ? providerContent : employerContent;

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Background video/animation placeholder */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-800/10">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230066cc' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="relative pb-16 pt-8 sm:pb-24 sm:pt-16 lg:pb-32 lg:pt-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center md:text-left">
              <h1 className={`font-bold tracking-tight text-ac-text flex flex-col gap-1 sm:gap-2 ${
                userType === 'employer'
                  ? 'text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl overflow-x-auto'
                  : 'text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'
              }`}>
                {content.title}
              </h1>
              {userType === 'provider' && (
                <div className="mt-4 flex justify-center md:justify-start">
                  <Link to="/provider/tax-tracker">
                    <Button 
                      size="lg" 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg shadow-sm"
                    >
                      NEW: Expense Tax Tracking & CPA Export
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                  </Link>
                </div>
              )}
              <p className="mt-4 text-base text-ac-text-light leading-6 sm:mt-6 sm:text-lg lg:text-xl max-w-3xl mx-auto md:mx-0">
                {content.description}
                {userType === "employer" && (
                  <span className="block mt-4 text-sm sm:text-base text-ac-primary font-semibold leading-snug whitespace-normal">
                    <span className="block">Automated Credentialing Packet Completion -&gt;</span>
                    <span className="block">Upload the Credentialing Packet.</span>
                    <span className="block">Anesthesia Connect Fills It Out.</span>
                  </span>
                )}
              </p>
              
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
                {content.ctaText === "Book Demo" ? (
                  <a href="#request-demo-pricing" onClick={handleBookDemoClick}>
                    <Button size="lg" className="w-full sm:w-auto bg-ac-primary hover:bg-ac-primary/90 text-white px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg">
                      {content.ctaText}
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                  </a>
                ) : (
                  <Link to={content.ctaLink}>
                    <Button size="lg" className="w-full sm:w-auto bg-ac-primary hover:bg-ac-primary/90 text-white px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg">
                      {content.ctaText}
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                  </Link>
                )}
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto border-ac-primary text-ac-primary hover:bg-ac-primary hover:text-white px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg"
                  onClick={handleWatchDemoClick}
                >
                  <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  {content.secondaryText}
                </Button>
              </div>

              {/* Security badges and Student button */}
              <div className="mt-6 flex flex-wrap justify-center md:justify-start items-center gap-3 sm:mt-8 sm:gap-6">
                <div className="flex flex-wrap items-center gap-3 opacity-75">
                  <div className="bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-200 sm:px-4">
                    <span className="text-xs font-semibold text-ac-text-light">AES-256 Encryption</span>
                  </div>
                  <div className="bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-200 sm:px-4">
                    <span className="text-xs font-semibold text-ac-text-light">TLS 1.3</span>
                  </div>
                  <div className="bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-200 sm:px-4">
                    <span className="text-xs font-semibold text-ac-text-light">DDoS protection</span>
                  </div>
                </div>
                <Link to="/register/provider?student=true">
                  <Button 
                    size="lg"
                    className="w-full sm:w-auto bg-ac-primary hover:bg-ac-primary/90 text-white px-4 py-3 text-sm sm:px-8 sm:py-4 sm:text-lg shadow-sm"
                  >
                    <span className="font-semibold whitespace-normal sm:whitespace-nowrap">Free Access for Anesthesia Students & Residents</span>
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
