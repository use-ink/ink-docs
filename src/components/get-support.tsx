import React from 'react'

import { FaTelegram, FaYoutube, FaGithub } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { SocialIcon } from './social-icon'

export function GetSupport() {
  return (
    <div className="w-full pb-32">
      <div className="w-full mx-auto md:px-4 lg:px-10 xl:px-20">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-6 lg:gap-0 max-w-[1200px] mx-auto items-centers">
          {/* Telegram */}
          <SocialIcon
            className="skew-y-[-6deg] scale-90 md:rotate-[-6deg] md:scale-100 justify-self-end md:justify-self-center"
            href="https://t.me/inkathon"
            icon={<FaTelegram size={52} />}
            helpText="Join us on Telegram"
          />

          {/* YouTube */}
          <SocialIcon
            className="skew-y-[-6deg] scale-90 md:rotate-[12deg] md:scale-100 md:justify-self-center"
            href="https://youtube.com/@yourchannel"
            icon={<FaYoutube size={52} />}
            helpText="Visit us on YouTube"
          />

          {/* Heading */}
          <h2 className="col-span-2 md:col-span-4 lg:col-span-2 order-first w-full !text-[50px] font-bold text-center text-white md:text-4xl lg:order-none sm:mx-18 self-center px-4">
            Get In Touch
          </h2>

          <SocialIcon
            className="skew-y-[-6deg] scale-90 md:rotate-[8deg] md:scale-100 justify-self-end md:justify-self-center"
            href="https://x.com/yourhandle"
            icon={<FaXTwitter size={52} />}
            helpText="Follow us on X"
          />

          {/* GitHub */}
          <SocialIcon
            className="skew-y-[-6deg] scale-90 md:rotate-[-9deg] md:scale-100 md:justify-self-center"
            href="https://github.com/yourname"
            icon={<FaGithub size={52} />}
            helpText="Contribute to ink!"
          />
        </div>
      </div>
    </div>
  )
}
