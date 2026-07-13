import React, { useState, useCallback } from 'react';
import { Button } from '@acweb/components/ui/button';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Loader2, CheckCircle, Shield, Zap, Lock } from 'lucide-react';
import { useUserType } from '@acweb/contexts/UserTypeContext';
import { supabase } from '@acweb/integrations/supabase/client';
import { toast } from 'sonner';

interface DemoRequestFormData {
  name: string;
  organization: string;
  email: string;
  phoneNumber: string;
  numberOfProviders: string;
  additionalNotes: string;
}

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const { userType } = useUserType();
  
  const [demoFormData, setDemoFormData] = useState<DemoRequestFormData>({
    name: '',
    organization: '',
    email: '',
    phoneNumber: '',
    numberOfProviders: '',
    additionalNotes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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

  const providerFeatures = [
    "Upload and organize licenses, CEUs, diplomas, immunizations, insurance, and more",
    "Expense Tax tracking & CPA export for all of your expenses",
    "Automatically track expirations and get notified before deadlines",
    "Secure, encrypted cloud storage",
    "One-click credentialing packets",
    "CEU tracking and dashboard overview",
    "Access from any device",
    "Auto-generate secure credentialing link or email",
    "One-click send to employer (PDF bundle)",
    "In-app expiration reminders for certifications and licenses",
    "Priority support",
    "Advanced analytics and reporting"
  ];

  const employerFeatures = [
    "Provider onboarding and document request tools",
    "Real-time expiration tracking for all licenses and credentials",
    "Team-wide CEU status dashboard",
    "One-click credentialing packets",
    "Upload contracts, policy documents, and receive e-signatures",
    "Secure, centralized credentialing database",
    "Unlimited document requests and provider accounts",
    "Admin dashboard with filters, search, and export tools",
    "Integrated DocuSign for contracts and forms",
    "One-click PDF email to credentialing staff",
    "Credential packet branding (headers/logos)",
    "Internal notes + credential status tracking",
    "Priority support",
    "Advanced analytics and compliance reporting"
  ];

  /**
   * Handles demo request form submission
   */
  const handleDemoFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!demoFormData.name.trim() || !demoFormData.organization.trim() || !demoFormData.email.trim() || !demoFormData.phoneNumber.trim()) {
      toast.error('Please fill in all required fields (Name, Organization, Email, and Phone Number).');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(demoFormData.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke('send-demo-request', {
        body: {
          name: demoFormData.name.trim(),
          organization: demoFormData.organization.trim(),
          email: demoFormData.email.trim(),
          phoneNumber: demoFormData.phoneNumber.trim(),
          numberOfProviders: demoFormData.numberOfProviders.trim() || null,
          additionalNotes: demoFormData.additionalNotes.trim() || null
        }
      });
      if (error) {
        console.error('Error submitting demo request:', error);
        toast.error('Failed to submit your request. Please try again later or contact support@anesthesiaconnect.net.');
        return;
      }
      if (data?.success) {
        setSubmitSuccess(true);
        toast.success('Demo request submitted successfully! Check your email for confirmation.');
      } else {
        throw new Error(data?.error || 'Unknown error occurred');
      }
    } catch (err) {
      console.error('Error submitting demo request:', err);
      toast.error('An error occurred while submitting your request. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── PROVIDER PRICING ───────────────────────────────────────────────────────
  if (userType === 'provider' || userType === 'resident') {
    return (
      <section id="pricing" className="section bg-white py-20">
        <div className="container-ac">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-ac-text mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-ac-text-light max-w-3xl mx-auto">
              {userType === 'resident'
                ? "Free for residents. Simple pricing for professionals."
                : "Choose the plan that fits your needs. No hidden fees, no surprises."}
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-lg">
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border-2 border-ac-primary">
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-ac-text mb-2">Professional Plan</h3>
                  <p className="text-ac-text-light mb-6">Complete credentialing solution for anesthesia providers</p>
                  
                  {/* Pricing */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                    <div className="text-center">
                      <p className="text-4xl font-bold text-ac-text">$19.99</p>
                      <p className="text-ac-text-light text-sm mt-1">per month</p>
                    </div>
                    <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-700">$17.99</p>
                      <p className="text-green-600 text-sm font-semibold mt-1">per month, billed annually</p>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm text-green-700 font-medium">Save when you pay annually — best value for active providers</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {providerFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-ac-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-ac-text-light text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/register/provider">
                  <Button className="w-full py-4 text-lg bg-ac-primary hover:bg-ac-primary/90 text-white">
                    Start 14 Day Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>

                <p className="text-center text-sm text-ac-text-light mt-4">
                  ✅ No credit card required to start.
                </p>
              </div>
            </div>
          </div>

          {/* Security trust strip */}
          <div className="mt-16 bg-[#0a1628] rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-blue-300" />
                </div>
                <p className="text-white font-semibold">SOC 2 Type 2 Compliant</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-6 w-6 text-blue-300" />
                </div>
                <p className="text-white font-semibold">Active Penetration Testing</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Lock className="h-6 w-6 text-blue-300" />
                </div>
                <p className="text-white font-semibold">Trusted and Secure Encryption</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    );
  }

  // ── EMPLOYER PRICING ───────────────────────────────────────────────────────
  return (
    <section id="pricing" className="section bg-white py-20">
      <div className="container-ac">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-ac-text mb-4">Simple Plans That Grow With You</h2>
          <p className="text-lg text-ac-text-light max-w-3xl mx-auto">
            Choose the plan that fits your needs. Simple, transparent pricing for anesthesia groups and employers.
          </p>
        </div>

        {/* Financial Impact Banner */}
        <div className="bg-[#0a1628] rounded-2xl p-8 mb-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Estimated Financial Impact (Per 100 Providers)</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 rounded-xl p-5">
              <p className="text-3xl font-bold text-blue-300 mb-1">5–10 min</p>
              <p className="text-blue-200 text-sm">Admin time saved per provider</p>
            </div>
            <div className="bg-white/10 rounded-xl p-5">
              <p className="text-3xl font-bold text-blue-300 mb-1">Weeks Faster</p>
              <p className="text-blue-200 text-sm">Start providers weeks earlier (100 providers annually)*</p>
            </div>
            <div className="bg-white/10 rounded-xl p-5">
              <p className="text-3xl font-bold text-blue-300 mb-1">95%</p>
              <p className="text-blue-200 text-sm">Faster credentialing packet completion</p>
            </div>
          </div>
        </div>

        {/* Employer plan card */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-lg">
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-ac-primary">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-ac-text mb-2">Professional Plan</h3>
                <p className="text-ac-text-light mb-6">Complete credentialing solution for anesthesia groups</p>
              </div>

              <ul className="space-y-3 mb-8">
                {employerFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-ac-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-ac-text-light text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#request-demo-pricing" onClick={handleScrollToDemo}>
                <Button className="w-full py-4 text-lg bg-ac-primary hover:bg-ac-primary/90 text-white">
                  Request Demo &amp; Pricing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>

              <p className="text-center text-ac-text-light text-sm mt-6 leading-relaxed px-2">
                Connect with our team to review platform capabilities, walk through a live product demo, and explore pricing options tailored to your anesthesia organization's workflow, compliance structure, and operational needs.
              </p>
            </div>
          </div>
        </div>

        {/* Security trust strip */}
        <div className="bg-[#0a1628] rounded-2xl p-6 mb-12">
          <div className="grid md:grid-cols-2 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <Shield className="h-6 w-6 text-blue-300 flex-shrink-0" />
              <p className="text-white font-semibold">SOC 2 Type 2 Compliant</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Zap className="h-6 w-6 text-blue-300 flex-shrink-0" />
              <p className="text-white font-semibold">Active Penetration Testing</p>
            </div>
          </div>
        </div>

        {/* Request Demo Form */}
        <div id="request-demo-pricing" className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 scroll-mt-[180px] md:scroll-mt-[240px]">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-ac-text mb-4">Request Demo &amp; Pricing</h3>
            <p className="text-lg text-ac-text-light max-w-2xl mx-auto">
              Connect with our team to review platform capabilities, walk through a live product demo, and explore pricing options tailored to your anesthesia organization's workflow.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold text-ac-text mb-4">Custom plans include:</h4>
              <ul className="space-y-2">
                {[
                  "Advanced analytics and credentialing compliance reporting",
                  "Dedicated account manager and support",
                  "Bulk document uploads and integration options",
                  "Internal messaging and compliance audit tools",
                  "Group-level permissions and multi-team support"
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-ac-primary mr-3" />
                    <span className="text-ac-text-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h4 className="text-lg font-semibold text-ac-text mb-4">Request Custom Pricing</h4>
              {submitSuccess ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h5 className="text-xl font-semibold text-ac-text mb-2">Request Submitted Successfully!</h5>
                  <p className="text-ac-text-light mb-4">
                    We've received your demo request. You will receive a confirmation email shortly, and one of our team members will reach out within 24 to 48 hours.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitSuccess(false);
                      setDemoFormData({ name: '', organization: '', email: '', phoneNumber: '', numberOfProviders: '', additionalNotes: '' });
                    }}
                    variant="outline"
                    className="mt-4"
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleDemoFormSubmit} className="space-y-4">
                  <input type="text" placeholder="Name *" required value={demoFormData.name}
                    onChange={(e) => setDemoFormData(prev => ({ ...prev, name: e.target.value }))}
                    maxLength={100}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ac-primary focus:border-transparent" />
                  <input type="text" placeholder="Organization *" required value={demoFormData.organization}
                    onChange={(e) => setDemoFormData(prev => ({ ...prev, organization: e.target.value }))}
                    maxLength={100}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ac-primary focus:border-transparent" />
                  <input type="email" placeholder="Email *" required value={demoFormData.email}
                    onChange={(e) => setDemoFormData(prev => ({ ...prev, email: e.target.value.toLowerCase().trim() }))}
                    maxLength={255}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ac-primary focus:border-transparent" />
                  <input type="tel" placeholder="Phone Number *" required value={demoFormData.phoneNumber}
                    onChange={(e) => setDemoFormData(prev => ({ ...prev, phoneNumber: e.target.value }))}
                    maxLength={20}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ac-primary focus:border-transparent" />
                  <input type="text" placeholder="Number of Providers" value={demoFormData.numberOfProviders}
                    onChange={(e) => setDemoFormData(prev => ({ ...prev, numberOfProviders: e.target.value }))}
                    maxLength={50}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ac-primary focus:border-transparent" />
                  <textarea placeholder="Additional Notes" rows={3} value={demoFormData.additionalNotes}
                    onChange={(e) => setDemoFormData(prev => ({ ...prev, additionalNotes: e.target.value }))}
                    maxLength={1000}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ac-primary focus:border-transparent resize-none" />
                  <Button type="submit" disabled={isSubmitting}
                    className="w-full bg-ac-primary hover:bg-ac-primary/90 text-white disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? (
                      <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</>
                    ) : 'Submit Inquiry'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
