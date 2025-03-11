import React from 'react'

const OurPlugin = () => {
  return (
    <section className="relative overflow-hidden bg-black sm:py-16 lg:py-20 xl:py-24">

        <div className="absolute inset-0">
            <img className="object-cover w-full h-full opacity-50" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png" alt="" />
        </div>

        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center lg:text-left">
                <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                    Seamless Integrations for Your SaaS Products
                </h2>
                <p className="mt-4 text-lg font-normal text-gray-400">
                    Bring your favorite apps directly into your CRM, Support Desk, WhatsApp Web, and more with our seamless integrations. Enhance your workflows and improve your communication with the best tools available.
                </p>
            </div>

            <div className="grid grid-cols-1 mt-12 sm:mt-16 lg:mt-20 xl:mt-24 lg:grid-cols-3 lg:gap-x-20 lg:gap-y-16 gap-y-8 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-12">
                <div className="flex items-start">
                    <img className="object-contain w-10 h-auto shrink-0" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/integration/1/slack.svg" alt="" />
                    <div className="ml-6">
                        <p className="text-2xl font-normal text-white">Slack</p>
                        <p className="mt-3 text-base font-normal text-gray-400">Lorem ipsum dolor sit amet, consec tetur adipiscing elit sit proaton.</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <img className="object-contain w-10 h-auto shrink-0" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/integration/1/intercom.svg" alt="" />
                    <div className="ml-6">
                        <p className="text-2xl font-normal text-white">Intercom</p>
                        <p className="mt-3 text-base font-normal text-gray-400">Lorem ipsum dolor sit amet, consec tetur adipiscing elit sit proaton.</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <img className="object-contain w-10 h-auto shrink-0" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/integration/1/figma.svg" alt="" />
                    <div className="ml-6">
                        <p className="text-2xl font-normal text-white">Figma</p>
                        <p className="mt-3 text-base font-normal text-gray-400">Lorem ipsum dolor sit amet, consec tetur adipiscing elit sit proaton.</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <img className="object-contain w-10 h-auto shrink-0" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/integration/1/google-drive.svg" alt="" />
                    <div className="ml-6">
                        <p className="text-2xl font-normal text-white">Google Drive</p>
                        <p className="mt-3 text-base font-normal text-gray-400">Lorem ipsum dolor sit amet, consec tetur adipiscing elit sit proaton.</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <img className="object-contain w-10 h-auto shrink-0" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/integration/1/shopify.svg" alt="" />
                    <div className="ml-6">
                        <p className="text-2xl font-normal text-white">Shopify</p>
                        <p className="mt-3 text-base font-normal text-gray-400">Lorem ipsum dolor sit amet, consec tetur adipiscing elit sit proaton.</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <img className="object-contain w-10 h-auto shrink-0" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/integration/1/tiktok.svg" alt="" />
                    <div className="ml-6">
                        <p className="text-2xl font-normal text-white">Tiktok</p>
                        <p className="mt-3 text-base font-normal text-gray-400">Lorem ipsum dolor sit amet, consec tetur adipiscing elit sit proaton.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default OurPlugin
