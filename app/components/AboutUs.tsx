import React from 'react'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <section className="py-10 bg-black sm:py-16 lg:py-24" id="about">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
                <div className="relative lg:mb-12">
                    <img className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4" src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg" alt="" style={{filter: "invert(1)"}}/>
                    <div className="pl-12 pr-6">
                        <img className="relative" src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/girl-working-on-laptop.jpg" alt=""/>
                    </div>
                    <div className="absolute left-0 pr-12 bottom-8 xl:bottom-20">
                        <div className="max-w-xs bg-blue-600 rounded-lg sm:max-w-md xl:max-w-md">
                            <div className="px-3 py-4 sm:px-5 sm:py-8">
                                <div className="flex items-start">
                                    <p className="text-3xl sm:text-4xl">🔌</p>
                                    <blockquote className="ml-5">
                                        <p className="text-sm font-medium text-white sm:text-lg">"Connect your favorite apps seamlessly. From WhatsApp to Salesforce, everything works together perfectly."</p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="2xl:pl-16">
                    <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">100+ Integrations for Your Business Needs</h2>
                    <p className="text-xl leading-relaxed text-white-900 mt-9">Connect and manage conversations across all major platforms including WhatsApp, SMS, LINE, WeChat, and more. Enhance your messaging capabilities with top-tier CPaaS providers like Twilio, MessageBird, and RingCentral.</p>
                    <p className="mt-6 text-xl leading-relaxed text-white-900">Streamline your workflow with CRM integrations including Zoho CRM, HubSpot, Salesforce, and support desk solutions. Automate tasks, manage templates, and get real-time notifications all in one place.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs
