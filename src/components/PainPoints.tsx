import React from 'react';
import { Button } from '@acweb/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Bell, 
  Upload,
  Send, 
  Users, 
  CheckCircle,
  ArrowRight,
  FolderX,
  CalendarX,
  ClipboardX,
  EyeOff,
  FileX,
  DollarSign,
  Edit3,
  BookOpen,
  MessageSquare,
  Briefcase,
  Lock,
  ChevronRight,
  GraduationCap,
  Shield,
  ShieldAlert,
  Cloud,
  ChevronDown
} from 'lucide-react';
import { useUserType } from '@acweb/contexts/UserTypeContext';

const PainPoints: React.FC = () => {
  const { userType } = useUserType();

  // ── PROVIDER / RESIDENT VIEW ───────────────────────────────────────────────
  if (userType === 'provider' || userType === 'resident') {
    return (
      <div className="bg-white">
        {/* ── Everything you need section ─────────────────────────────────── */}
        <section className="pt-16 pb-12 sm:pt-20">
          <div className="container-ac text-center px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Everything you need.
              <br />
              <span className="text-blue-600">All in one secure platform.</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg mb-8 leading-relaxed">
              Anesthesia Connect is your digital wallet for storing and managing every credential, license, certification, and document you need throughout your career — all in one secure place.
            </p>

            {/* NEW Dark Blue Badge Banner */}
            <div className="max-w-3xl mx-auto bg-[#051e3f] text-white rounded-xl p-4 sm:p-5 flex items-center justify-between shadow-md hover:bg-[#07254c] transition-colors cursor-pointer group text-left">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <span className="bg-white text-[#051e3f] text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider self-start sm:self-auto">
                  NEW
                </span>
                <div>
                  <span className="font-bold text-sm sm:text-base mr-2">Expense Tax Tracking &amp; CPA Export</span>
                  <span className="text-blue-200 text-xs sm:text-sm block sm:inline mt-0.5 sm:mt-0">
                    Track expenses. Maximize deductions. Export with ease.
                  </span>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-blue-400 group-hover:translate-x-1 transition-transform flex-shrink-0 ml-4" />
            </div>
          </div>
        </section>

        {/* ── WHAT YOU CAN DO 9-Icon Grid ────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-white" id="for-anesthesia-providers">
          <div className="container-ac px-4 sm:px-6">
            <h3 className="text-center text-xs font-extrabold text-blue-600 tracking-widest uppercase mb-10">
              WHAT YOU CAN DO
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: <FileText className="h-6 w-6 text-blue-600" />, title: "Store All Credentials", desc: "Licenses, certifications, CEUs, immunizations, and more." },
                { icon: <Send className="h-6 w-6 text-blue-600" />, title: "Share Instantly", desc: "Send docs to any employer with a click of a button." },
                { icon: <Bell className="h-6 w-6 text-blue-600" />, title: "Expiration Alerts", desc: "Never miss a renewal with smart 30-day alerts." },
                { icon: <Edit3 className="h-6 w-6 text-blue-600" />, title: "E-Sign & Contracts", desc: "Review and e-sign contracts securely in-app." },
                { icon: <DollarSign className="h-6 w-6 text-blue-600" />, title: "Reimbursement Requests", desc: "Submit and track reimbursement requests." },
                { icon: <Briefcase className="h-6 w-6 text-blue-600" />, title: "Tax & Mileage Tracking", desc: "Track expenses and export for tax season." },
                { icon: <BookOpen className="h-6 w-6 text-blue-600" />, title: "CEU Tracking", desc: "Track and organize your CEUs all in one place." },
                { icon: <Users className="h-6 w-6 text-blue-600" />, title: "Integrated Job Board", desc: "Find anesthesia job opportunities tailored to you." },
                { icon: <MessageSquare className="h-6 w-6 text-blue-600" />, title: "Provider Messaging", desc: "Secure in-app messaging with employers." },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-left">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 text-base mb-1.5">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS 3-Step Flow ────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container-ac px-4 sm:px-6">
            <h3 className="text-center text-xs font-extrabold text-blue-600 tracking-widest uppercase mb-12">
              HOW IT WORKS
            </h3>
            
            <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start gap-8 max-w-4xl mx-auto">
              {[
                { step: "1", title: "Upload", desc: "Add your credentials and documents." },
                { step: "2", title: "Organize", desc: "We keep everything in one secure place." },
                { step: "3", title: "Share", desc: "Send to employers instantly." }
              ].map((item, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex-1 text-center flex flex-col items-center">
                    <div className="w-14 h-14 bg-blue-50 border border-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg mb-3 shadow-inner">
                      {item.step}
                    </div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500 max-w-xs">{item.desc}</p>
                  </div>
                  {idx < 2 && (
                    <div className="hidden md:flex items-center justify-center h-14 text-gray-300 text-2xl font-bold self-start mt-0">
                      →
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* ── For Anesthesia Programs Green Banner ─────────────────────────── */}
        <section className="py-8 bg-white">
          <div className="container-ac px-4 sm:px-6 max-w-5xl mx-auto">
            <div className="bg-[#f0faf5] border border-[#d1ebd9] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="flex items-center gap-4 text-left">
                <div className="w-14 h-14 bg-[#e2f5e9] rounded-full flex items-center justify-center flex-shrink-0 text-emerald-600 border border-[#b2e0c2]">
                  <GraduationCap className="h-7 w-7" />
                </div>
                <div>
                  <h4 className="font-bold text-emerald-900 text-lg">For Anesthesia Programs</h4>
                  <p className="text-sm text-emerald-700 mt-0.5">
                    Manage clinical rotations, student compliance, and document tracking — all in one platform.
                  </p>
                </div>
              </div>
              <Link to="/programs" className="w-full md:w-auto">
                <Button variant="outline" className="w-full bg-white hover:bg-emerald-50 text-emerald-700 hover:text-emerald-700 border border-[#b2e0c2] font-semibold px-6 py-3 shadow-sm flex items-center justify-center gap-2">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ── TRUSTED & SECURE Badges Banner ─────────────────────────────── */}
        <section className="py-12 bg-white">
          <div className="container-ac px-4 sm:px-6 max-w-5xl mx-auto">
            <h3 className="text-center text-xs font-extrabold text-blue-600 tracking-widest uppercase mb-8">
              TRUSTED &amp; SECURE
            </h3>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
                {[
                  { icon: <Lock className="h-5 w-5 text-gray-500" />, title: "AES-256", desc: "Encryption" },
                  { icon: <Shield className="h-5 w-5 text-gray-500" />, title: "TLS 1.3", desc: "Security" },
                  { icon: <Users className="h-5 w-5 text-gray-500" />, title: "SOC 2 Type 2", desc: "Compliant" },
                  { icon: <Cloud className="h-5 w-5 text-gray-500" />, title: "DDoS", desc: "Protection" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 justify-center">
                    <div className="w-10 h-10 bg-white rounded-lg border border-gray-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                      {item.icon}
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-bold text-gray-900 leading-tight">{item.title}</p>
                      <p className="text-xs text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // ── EMPLOYER VIEW ──────────────────────────────────────────────────────────
  return (
    <section className="section bg-white py-12 sm:py-16 lg:py-20">
      <div className="container-ac">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl font-bold text-ac-text mb-4 sm:text-3xl">
            Centralize credentialing, streamline onboarding, and improve operational efficiency across your organization.
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* No More Section */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border-2 border-blue-100 sm:rounded-2xl sm:p-8">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-ac-text mb-2 sm:mb-3">No More:</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {[
                { icon: <FolderX className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />, label: "Scattered provider documents" },
                { icon: <CalendarX className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />, label: "Delayed onboarding timelines" },
                { icon: <ClipboardX className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />, label: "Manual credential tracking" },
                { icon: <EyeOff className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />, label: "Lack of real-time visibility" },
                { icon: <FileX className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />, label: "Redundant administrative work" },
                { icon: <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />, label: "Manually Filling Out Credentialing Packets" },
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 bg-white rounded-lg p-3 sm:p-4 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <p className="text-sm sm:text-base font-medium text-ac-text">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* For Employers */}
          <div className="bg-gradient-to-br from-slate-800 to-[#0a1628] rounded-xl p-6 relative overflow-hidden sm:rounded-2xl sm:p-8">
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-blue-500/10 rounded-full -translate-y-12 translate-x-12 sm:-translate-y-16 sm:translate-x-16"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white sm:text-2xl">For Anesthesia Employers</h3>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {[
                  { title: "Streamlined Onboarding", desc: "Request and view provider documents instantly — licenses, diplomas, DEA, board certifications, immunizations, work/education history, references, malpractice insurance, and more. Send standardized onboarding templates with a click." },
                  { title: "Automated Credentialing Packet Completion", desc: "Upload any hospital credentialing packet and Anesthesia Connect automatically scans provider documents and autofills the entire credentialing form." },
                  { title: "Automatic Compliance Tracking", desc: "Automatic expiration alerts and compliance tracking across your entire team — track by facility, specialty, or employment type, and always know who is cleared, who is pending, and who needs updates." },
                  { title: "Secure Document Management", desc: "Receive and store provider documents securely in one protected platform. Replace folders, spreadsheets, and email threads with an organized credential vault built for anesthesia operations with enterprise-grade security." },
                  { title: "Digital Workflows", desc: "Request documents, send onboarding packets, route agreements for e-signature, and send secured links with a provider's documents to credentialing offices with the click of a button — eliminating repetitive back-and-forth and moving providers forward faster." },
                  { title: "Build Credentialed Teams", desc: "Organize active providers by employment type and facility, assign onboarding templates, receive reimbursement requests, and build fully credentialed teams without chasing paperwork or adding more HR load." },
                  { title: "Data Migration", desc: "The platform offers SOC 2 Type 2-compliant data migration, enabling anesthesia groups to securely move existing provider records into Anesthesia Connect, or let clinicians upload and manage their own documents during migration." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3 sm:space-x-4">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</h4>
                      <p className="text-blue-200 text-sm sm:text-base">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-blue-600/20 border border-blue-500/30 text-white rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">Enterprise Ready</p>
                    <p className="text-sm opacity-90 text-blue-200">Add 5–5000+ providers with ease</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Link to="/register/employer">
            <Button size="lg" className="w-full sm:w-auto bg-ac-primary hover:bg-ac-primary/90 text-white px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
