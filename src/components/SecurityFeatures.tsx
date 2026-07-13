import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Zap, FileCheck } from 'lucide-react';

const SecurityFeatures: React.FC = () => {
  const securityItems = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "SOC 2 Type 2 Compliant",
      description: "Our security program is built to full SOC 2 Type 2 compliance — documented controls, continuous monitoring, and third-party oversight aligned with AICPA Trust Service Criteria.",
      color: "blue"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Active Penetration Testing",
      description: "We conduct active, ongoing penetration testing to identify and resolve vulnerabilities before they can be exploited — keeping your data proactively protected.",
      color: "indigo"
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Trusted and Secure Encryption",
      description: "All data is encrypted in transit using TLS 1.3 and at rest with AES-256 encryption. Every document you store is protected with enterprise-grade security standards.",
      color: "navy"
    }
  ];

  const colorMap: Record<string, string> = {
    blue: "bg-blue-100 text-blue-700",
    indigo: "bg-indigo-100 text-indigo-700",
    navy: "bg-[#0d1f3c] text-white"
  };

  return (
    <section className="section bg-[#0a1628] py-20">
      <div className="container-ac">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Enterprise-Grade Security
          </h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            Your professional data deserves the highest level of protection. Anesthesia Connect is built on a security-first foundation trusted by healthcare organizations.
          </p>
        </div>

        {/* 3 security pillars */}
        <div className="grid gap-6 md:grid-cols-3 mb-14">
          {securityItems.map((item, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${colorMap[item.color]}`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-blue-200 leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom legal links */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-white text-center mb-8">Security Policies &amp; Legal</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileCheck className="h-6 w-6 text-blue-300" />
              </div>
              <h4 className="font-semibold text-white mb-2">Privacy Policy</h4>
              <p className="text-sm text-blue-300 mb-4">How we collect, use, and protect your data</p>
              <Link to="/privacy" className="text-blue-400 hover:text-blue-300 font-semibold">
                View Privacy Policy
              </Link>
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-blue-300" />
              </div>
              <h4 className="font-semibold text-white mb-2">Terms of Use</h4>
              <p className="text-sm text-blue-300 mb-4">Clear terms and conditions for using our platform</p>
              <Link to="/terms" className="text-blue-400 hover:text-blue-300 font-semibold">
                View Terms of Use
              </Link>
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lock className="h-6 w-6 text-blue-300" />
              </div>
              <h4 className="font-semibold text-white mb-2">SOC 2 Type 2 Compliance</h4>
              <p className="text-sm text-blue-300 mb-4">Partnered with Secureframe for continuous compliance</p>
              <a
                href="https://secureframe.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-semibold"
              >
                Learn More About Secureframe
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SecurityFeatures;
