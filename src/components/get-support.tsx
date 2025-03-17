import React from 'react'

import { FaTelegram, FaYoutube, FaGithub } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { SocialIcon } from './social-icon'

export function GetSupport() {
  return (
    <div className="w-full pb-32">
      <div className="w-full px-20 mx-auto">
        <div className="flex flex-wrap items-center gap-8 lg:gap-0 justify-evenly">
          {/* Telegram */}
          <SocialIcon
            className="rotate-[-6deg]"
            href="https://t.me/yourname"
            icon={<FaTelegram size={52} />}
            helpText="Join us on Telegram"
          />

          {/* YouTube */}
          <SocialIcon
            className="skew-y-[-6deg] rotate-[12deg]"
            href="https://youtube.com/@yourchannel"
            icon={<FaYoutube size={52} />}
            helpText="Visit us on YouTube"
          />

          {/* Heading */}
          <h2 className="order-first w-full !text-[50px] font-bold text-center text-white md:text-4xl md:order-none md:w-auto m-0">
            Get In Touch
          </h2>

          {/* Twitter */}
          <SocialIcon
            className="skew-x-[-12deg] skew-y-[-6deg] rotate-[8deg]"
            href="https://x.com/yourhandle"
            icon={<FaXTwitter size={52} />}
            helpText="Follow us on X"
          />

          {/* GitHub */}
          <SocialIcon
            className="skew-x-[-9deg] skew-y-[6deg] rotate-[-9deg]"
            href="https://github.com/yourname"
            icon={<FaGithub size={52} />}
            helpText="Contribute to ink!"
          />
        </div>
      </div>
    </div>
  )
}
