import React from 'react'
import { 
  FaShieldAlt, 
  FaInfoCircle, 
  FaUserShield, 
  FaDatabase,
  FaLock,
  FaHistory,
  FaUserCog,
  FaEnvelope,
  FaCheckCircle
} from 'react-icons/fa'

const PolicyPage = () => {
  return (
    <section className="py-12 bg-black sm:pb-16 lg:pb-20 xl:pb-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaShieldAlt className="text-cyan-500 text-4xl" />
            <h1 className="text-4xl font-normal text-white sm:text-5xl">
              Privacy Policy
            </h1>
          </div>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 font-semibold">
              Zoho CRM - Acuity Scheduling Plugin
            </p>
            <p className="mt-4 text-gray-400">
              Last Updated: March 2024
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-16">
          {/* Introduction */}
          <section className="p-8 rounded-xl bg-gray-800/30 border border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <FaInfoCircle className="text-cyan-500 text-2xl" />
              <h2 className="text-2xl font-semibold text-white">Introduction</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                This Privacy Policy outlines how the Zoho CRM - Acuity Scheduling Plugin ("we", "our", or "the Plugin") 
                collects, uses, and protects your information when you use our service.
              </p>
              <p>
                By using the Plugin, you agree to the collection and use of information in accordance with this policy. 
                We are committed to protecting your privacy and ensuring the security of your data.
              </p>
            </div>
          </section>

          {/* Information Collection */}
          <section className="space-y-8">
            <div className="flex items-center gap-3">
              <FaDatabase className="text-cyan-500 text-2xl" />
              <h2 className="text-2xl font-semibold text-white">Information We Collect</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <FaUserShield />,
                  title: "Personal Information",
                  items: [
                    "Name and contact details",
                    "Business information",
                    "Account credentials",
                    "User preferences"
                  ]
                },
                {
                  icon: <FaHistory />,
                  title: "Usage Data",
                  items: [
                    "Appointment history",
                    "Service selections",
                    "Interaction logs",
                    "Feature usage patterns"
                  ]
                },
                {
                  icon: <FaUserCog />,
                  title: "Integration Data",
                  items: [
                    "API configurations",
                    "Sync preferences",
                    "Connection settings",
                    "Automation rules"
                  ]
                }
              ].map((section, index) => (
                <div key={index} className="p-6 rounded-lg bg-gray-800/30 border border-gray-700 hover:bg-gray-700/30 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-cyan-500 text-xl">{section.icon}</span>
                    <h3 className="text-lg font-medium text-white">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <FaCheckCircle className="text-cyan-500 text-sm mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Data Protection */}
          <section className="p-8 rounded-xl bg-gray-800/30 border border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <FaLock className="text-cyan-500 text-2xl" />
              <h2 className="text-2xl font-semibold text-white">Data Protection Measures</h2>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Security",
                  items: [
                    "End-to-end encryption",
                    "Regular security audits",
                    "Access control systems",
                    "Data backup protocols"
                  ]
                },
                {
                  title: "Compliance",
                  items: [
                    "GDPR compliance",
                    "Data protection laws",
                    "Industry standards",
                    "Regular updates"
                  ]
                }
              ].map((section, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-lg font-medium text-white">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <FaCheckCircle className="text-cyan-500 text-sm mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="text-center p-8 rounded-xl bg-gray-800/30 border border-gray-700">
            <div className="max-w-md mx-auto">
              <FaEnvelope className="text-cyan-500 text-3xl mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-white mb-4">Need Assistance?</h2>
              <p className="text-gray-300 mb-6">
                For privacy-related inquiries or concerns, our support team is here to help
              </p>
              <div className="relative inline-flex group">
                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                <a 
                  href="mailto:support@innospherelabs.com" 
                  className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full gap-2"
                >
                  <FaEnvelope />
                  Contact Support
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default PolicyPage 