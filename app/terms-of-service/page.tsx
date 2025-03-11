import React from 'react'
import { 
  FaGavel, 
  FaScroll, 
  FaUserShield, 
  FaTools,
  FaUserCog,
  FaShieldAlt,
  FaEdit,
  FaCheckCircle
} from 'react-icons/fa'

const TermsOfService = () => {
  return (
    <section className="py-12 bg-black sm:pb-16 lg:pb-20 xl:pb-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaGavel className="text-cyan-500 text-4xl" />
            <h1 className="text-4xl font-normal text-white sm:text-5xl">
              Terms of Service
            </h1>
          </div>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 font-semibold">
              Zoho CRM - Acuity Scheduling Plugin
            </p>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="p-6 rounded-xl bg-gray-800/30 border border-gray-700">
            <h2 className="flex items-center gap-3 text-xl font-semibold text-white mb-4">
              <FaScroll className="text-cyan-500" />
              Quick Navigation
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Acceptance of Terms",
                "Service Description",
                "User Obligations",
                "Data Privacy",
                "Limitations of Liability",
                "Modifications"
              ].map((item, index) => (
                <a
                  key={index}
                  href={`#section-${index + 1}`}
                  className="p-3 text-gray-300 hover:text-white rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 text-center"
                >
                  {index + 1}. {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section 1 - Acceptance */}
          <section id="section-1" className="p-8 rounded-xl bg-gray-800/30 border border-gray-700">
            <h2 className="flex items-center gap-3 text-2xl font-semibold text-white mb-6">
              <FaUserShield className="text-cyan-500" />
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing and using the Zoho CRM - Acuity Scheduling Plugin, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use the plugin.
            </p>
          </section>

          {/* Section 2 - Service Description */}
          <section id="section-2" className="p-8 rounded-xl bg-gray-800/30 border border-gray-700">
            <h2 className="flex items-center gap-3 text-2xl font-semibold text-white mb-6">
              <FaTools className="text-cyan-500" />
              2. Service Description
            </h2>
            <p className="text-gray-300 mb-4">
              The plugin provides integration between Zoho CRM and Acuity Scheduling, offering features including but not limited to:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Appointment management and scheduling",
                "Multi-account support",
                "Dashboard analytics and reporting",
                "Custom email templates and branding"
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-300">
                  <FaCheckCircle className="text-cyan-500 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          {/* Section 3 - User Obligations */}
          <section id="section-3" className="p-8 rounded-xl bg-gray-800/30 border border-gray-700">
            <h2 className="flex items-center gap-3 text-2xl font-semibold text-white mb-6">
              <FaUserCog className="text-cyan-500" />
              3. User Obligations
            </h2>
            <p className="text-gray-300 mb-4">Users agree to:</p>
            <ul className="space-y-3">
              {[
                "Maintain accurate account information",
                "Protect account credentials",
                "Use the plugin in compliance with applicable laws",
                "Not misuse or attempt to exploit the service"
              ].map((obligation, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-300">
                  <FaCheckCircle className="text-cyan-500 flex-shrink-0" />
                  {obligation}
                </li>
              ))}
            </ul>
          </section>

          {/* Section 4 - Data Privacy */}
          <section id="section-4" className="p-8 rounded-xl bg-gray-800/30 border border-gray-700">
            <h2 className="flex items-center gap-3 text-2xl font-semibold text-white mb-6">
              <FaShieldAlt className="text-cyan-500" />
              4. Data Privacy
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We are committed to protecting your data privacy. All data processing complies with applicable privacy laws 
              and regulations. For detailed information, please refer to our Privacy Policy.
            </p>
          </section>

          {/* Section 5 - Limitations */}
          <section id="section-5" className="p-8 rounded-xl bg-gray-800/30 border border-gray-700">
            <h2 className="flex items-center gap-3 text-2xl font-semibold text-white mb-6">
              <FaGavel className="text-cyan-500" />
              5. Limitations of Liability
            </h2>
            <p className="text-gray-300 leading-relaxed">
              The plugin is provided "as is" without warranties of any kind. We shall not be liable for any damages 
              arising from the use or inability to use the service.
            </p>
          </section>

          {/* Section 6 - Modifications */}
          <section id="section-6" className="p-8 rounded-xl bg-gray-800/30 border border-gray-700">
            <h2 className="flex items-center gap-3 text-2xl font-semibold text-white mb-6">
              <FaEdit className="text-cyan-500" />
              6. Modifications
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify these terms at any time. Users will be notified of significant changes, 
              and continued use of the plugin constitutes acceptance of modified terms.
            </p>
          </section>

          {/* Footer */}
          <footer className="text-center space-y-4 pt-8">
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <FaShieldAlt className="text-cyan-500" />
              Secure & Compliant
            </div>
            <p className="text-gray-400">Last updated: 2024</p>
            <p className="text-gray-500">© All rights reserved.</p>
          </footer>
        </div>
      </div>
    </section>
  )
}

export default TermsOfService
