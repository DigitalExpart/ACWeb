import React from 'react';
import { Button } from '@acweb/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Bell, 
  Calendar, 
  Upload, 
  Send, 
  Edit3,
  Users, 
  ShieldCheck, 
  Clock,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  X,
  FolderX,
  CalendarX,
  ClipboardX,
  EyeOff,
  FileX,
  DollarSign
} from 'lucide-react';
import { useUserType } from '@acweb/contexts/UserTypeContext';

const PainPoints: React.FC = () => {
  const { userType } = useUserType();

  return (
    <section className="section bg-white py-12 sm:py-16 lg:py-20">
      <div className="container-ac">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl font-bold text-ac-text mb-4 sm:text-3xl">
            {userType === 'provider' 
              ? "We're solving the paperwork chaos for anesthesia providers."
              : "Centralize credentialing, streamline onboarding, and improve operational efficiency across your organization."
            }
          </h2>
        </div>

        {userType === 'provider' ? (
          <>
            {/* No More Section - Separate from For Anesthesia Providers */}
            <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border-2 border-blue-100 sm:rounded-2xl sm:p-8">
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-ac-text mb-2 sm:mb-3">
                    No More:
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="flex items-center space-x-3 bg-white rounded-lg p-3 sm:p-4 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FolderX className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                    </div>
                    <p className="text-sm sm:text-base font-medium text-ac-text">Lost documents</p>
                  </div>
                  
                  <div className="flex items-center space-x-3 bg-white rounded-lg p-3 sm:p-4 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Bell className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                    </div>
                    <p className="text-sm sm:text-base font-medium text-ac-text">Endless emails</p>
                  </div>
                  
                  <div className="flex items-center space-x-3 bg-white rounded-lg p-3 sm:p-4 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                    </div>
                    <p className="text-sm sm:text-base font-medium text-ac-text">Long credentialing headaches</p>
                  </div>
                  
                  <div className="flex items-center space-x-3 bg-white rounded-lg p-3 sm:p-4 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <DollarSign className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                    </div>
                    <p className="text-sm sm:text-base font-medium text-ac-text">Tax season chaos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* For Anesthesia Providers */}
            <div id="for-anesthesia-providers" className="max-w-4xl mx-auto scroll-mt-[180px] md:scroll-mt-[240px]">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 relative overflow-hidden sm:rounded-2xl sm:p-8">
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-blue-200/30 rounded-full -translate-y-12 translate-x-12 sm:-translate-y-16 sm:translate-x-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                    <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-ac-text sm:text-2xl">For Anesthesia Providers</h3>
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-ac-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-ac-text mb-1 sm:mb-2 text-sm sm:text-base">Store & Manage All Credentials</h4>
                      <p className="text-ac-text-light text-sm sm:text-base">Keep everything in one place: IDs, State Licenses, Board Certifications, Diplomas, Case Logs, ACLS, BLS, PALS, DEA, Malpractice Insurance, Immunizations, NPI number, Resumes, References, Work/Education history, and much more.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-ac-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-ac-text mb-1 sm:mb-2 text-sm sm:text-base">Send Your Documents in Seconds</h4>
                      <p className="text-ac-text-light text-sm sm:text-base">Connect with your employer and share your entire credentialing packet in seconds, or instantly send a PDF or secured file link to anyone with one click.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-ac-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-ac-text mb-1 sm:mb-2 text-sm sm:text-base">Expense Tax Tracking & CPA Export</h4>
                      <p className="text-ac-text-light text-sm sm:text-base">Track expenses and receipts in one place and securely send a complete tax-ready file to your CPA in seconds.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-ac-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-ac-text mb-1 sm:mb-2 text-sm sm:text-base">Track your CEUs Automatically</h4>
                      <p className="text-ac-text-light text-sm sm:text-base">Easily upload and track continuing education credits to ensure you are always compliant.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-ac-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-ac-text mb-1 sm:mb-2 text-sm sm:text-base">Request Reimbursements</h4>
                      <p className="text-ac-text-light text-sm sm:text-base">Connect directly with your employer and submit reimbursement requests from the app, while easily tracking approvals, allowances, and remaining balances.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-ac-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-ac-text mb-1 sm:mb-2 text-sm sm:text-base">Never Miss a Deadline</h4>
                      <p className="text-ac-text-light text-sm sm:text-base">Automatic alerts remind you when your licenses or certifications are about to expire.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-ac-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-ac-text mb-1 sm:mb-2 text-sm sm:text-base">Digitally Sign & Submit</h4>
                      <p className="text-ac-text-light text-sm sm:text-base">Complete forms and contracts directly in the app with e-signature confirmation, no scanning or printing required.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-blue-500 text-white rounded-lg">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div>
                        <p className="text-xl sm:text-2xl font-bold">$19.99/month</p>
                        <p className="text-xs sm:text-sm opacity-90 mt-1">if paid monthly</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg sm:text-xl font-semibold">$215.89/year</p>
                        <p className="text-base sm:text-lg font-bold bg-blue-600 px-2 py-1 rounded mt-1 inline-block">$17.99/month if paid annually</p>
                        <p className="text-xs sm:text-sm opacity-90 mt-1">Save $24/year</p>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base opacity-90 pt-2 border-t border-blue-400">No more paperwork headaches. No more lost documents.</p>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* For Employers & Groups */
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            {/* No More Section */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border-2 border-blue-100 sm:rounded-2xl sm:p-8">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-ac-text mb-2 sm:mb-3">
                  No More:
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <div className="flex items-center space-x-3 bg-white rounded-lg p-3 sm:p-4 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FolderX className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <p className="text-sm sm:text-base font-medium text-ac-text">Scattered provider documents</p>
                </div>
                
                <div className="flex items-center space-x-3 bg-white rounded-lg p-3 sm:p-4 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <CalendarX className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <p className="text-sm sm:text-base font-medium text-ac-text">Delayed onboarding timelines</p>
                </div>
                
                <div className="flex items-center space-x-3 bg-white rounded-lg p-3 sm:p-4 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <ClipboardX className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <p className="text-sm sm:text-base font-medium text-ac-text">Manual credential tracking</p>
                </div>
                
                <div className="flex items-center space-x-3 bg-white rounded-lg p-3 sm:p-4 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <EyeOff className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <p className="text-sm sm:text-base font-medium text-ac-text">Lack of real-time visibility</p>
                </div>
                
                <div className="flex items-center space-x-3 bg-white rounded-lg p-3 sm:p-4 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileX className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <p className="text-sm sm:text-base font-medium text-ac-text">Redundant administrative work</p>
                </div>

                <div className="flex items-center space-x-3 bg-white rounded-lg p-3 sm:p-4 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <p className="text-sm sm:text-base font-medium text-ac-text">Manually Filling Out Credentialing Packets</p>
                </div>
              </div>
            </div>

            {/* For Employers & Groups Section */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 relative overflow-hidden sm:rounded-2xl sm:p-8">
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-green-200/30 rounded-full -translate-y-12 translate-x-12 sm:-translate-y-16 sm:translate-x-16"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-ac-text sm:text-2xl">For Anesthesia Employers</h3>
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-ac-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-ac-text mb-1 sm:mb-2 text-sm sm:text-base">Streamlined Onboarding</h4>
                      <p className="text-ac-text-light text-sm sm:text-base">Request and view provider documents instantly â€” licenses, diplomas, DEA, board certifications, immunizations, work/education history, references, malpractice insurance, and more. Send standardized onboarding templates with a click.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-ac-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-ac-text mb-1 sm:mb-2 text-sm sm:text-base">Automated Credentialing Packet Completion</h4>
                      <p className="text-ac-text-light text-sm sm:text-base">Upload any hospital credentialing packet and Anesthesia Connect automatically scans provider documents and autofills the entire credentialing form.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-ac-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-ac-text mb-1 sm:mb-2 text-sm sm:text-base">Automatic Compliance Tracking</h4>
                      <p className="text-ac-text-light text-sm sm:text-base">Automatic expiration alerts and compliance tracking across your entire team â€” track by facility, specialty, or employment type, and always know who is cleared, who is pending, and who needs updates.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-ac-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-ac-text mb-1 sm:mb-2 text-sm sm:text-base">Secure Document Management</h4>
                      <p className="text-ac-text-light text-sm sm:text-base">Receive and store provider documents securely in one protected platform. Replace folders, spreadsheets, and email threads with an organized credential vault built for anesthesia operations with enterprise-grade security.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-ac-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-ac-text mb-1 sm:mb-2 text-sm sm:text-base">Digital Workflows</h4>
                      <p className="text-ac-text-light text-sm sm:text-base">Request documents, send onboarding packets, route agreements for e-signature, and send secured links with a providerâ€™s documents to credentialing offices with the click of a button â€” eliminating repetitive back-and-forth and moving providers forward faster.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-ac-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-ac-text mb-1 sm:mb-2 text-sm sm:text-base">Build Credentialed Teams</h4>
                      <p className="text-ac-text-light text-sm sm:text-base">Organize active providers by employment type and facility, assign onboarding templates, receive reimbursement requests, and build fully credentialed teams without chasing paperwork or adding more HR load.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-ac-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-ac-text mb-1 sm:mb-2 text-sm sm:text-base">Data Migration</h4>
                      <p className="text-ac-text-light text-sm sm:text-base">The platform offers SOC 2 Type IIâ€“compliant data migration, enabling anesthesia groups to securely move existing provider records into Anesthesia Connect, or let clinicians upload and manage their own documents during migration.</p>
                    </div>
                  </div>

                </div>
                
                <div className="mt-8 p-4 bg-green-500 text-white rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">Enterprise Ready</p>
                      <p className="text-sm opacity-90">Add 5-5000+ providers with ease</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="text-center mt-8 sm:mt-12">
          <Link to={userType === 'provider' ? '/register/provider' : '/register/employer'}>
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
