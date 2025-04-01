import React from 'react'

import { FaTelegram, FaYoutube, FaGithub } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { SocialIcon } from './social-icon'
import { motion } from 'framer-motion'

export function GetSupport() {
  return (
    <div className="w-full pb-16">
      <div className="w-full mx-auto md:px-4 lg:px-10 xl:px-20">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-6 lg:gap-0 max-w-[1200px] mx-auto items-center">
          {/* Telegram */}
          <motion.div
            initial={{ x: 100, rotate: 15, skewX: -15, skewY: -3 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, rotate: 1, skewX: 0, skewY: 0 }}
            transition={{ duration: 1.9, ease: 'easeInOut' }}
          >
            <SocialIcon
              className="skew-y-[-6deg] scale-90 md:rotate-[-6deg] md:scale-100 justify-self-end md:justify-self-center"
              href="https://t.me/inkathon"
              icon={<FaTelegram size={52} />}
              helpText="Join us on Telegram"
            />
          </motion.div>

          {/* YouTube */}
          <motion.div
            initial={{ x: 50, rotate: 24, skewX: -24, skewY: -6 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, rotate: 1, skewX: 0, skewY: 0 }}
            transition={{ duration: 1.9, ease: 'easeInOut' }}
          >
            <SocialIcon
              className="skew-y-[-6deg] scale-90 md:rotate-[12deg] md:scale-100 md:justify-self-center"
              href="https://www.youtube.com/@ink-lang"
              icon={<FaYoutube size={52} />}
              helpText="Visit us on YouTube"
            />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 100, rotate: -5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0, rotate: 1 }}
            transition={{ duration: 1.9, ease: 'easeInOut' }}
            className="col-span-2 font-[400] md:col-span-4 lg:col-span-2 order-first w-full !text-[50px] text-center text-[rgb(244,241,254)] md:text-4xl lg:order-none sm:mx-18 self-center px-4 mb-0"
          >
            Get In Touch
          </motion.h2>

          <motion.div
            initial={{ x: -50, rotate: -7, skewX: -12, skewY: -6 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, rotate: 1, skewX: 0, skewY: 0 }}
            transition={{ duration: 1.9, ease: 'easeInOut' }}
          >
            <SocialIcon
              className="skew-y-[-6deg] scale-90 md:rotate-[8deg] md:scale-100 justify-self-end md:justify-self-center"
              href="https://x.com/ink_lang"
              icon={<FaXTwitter size={52} />}
              helpText="Follow us on X"
            />
          </motion.div>

          {/* GitHub */}
          <motion.div
            initial={{ x: -100, rotate: 24, skewX: -24, skewY: -6 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, rotate: 1, skewX: 0, skewY: 0 }}
            transition={{ duration: 1.9, ease: 'easeInOut' }}
          >
            <SocialIcon
              className="skew-y-[-6deg] scale-90 md:rotate-[-9deg] md:scale-100 md:justify-self-center"
              href="https://github.com/use-ink"
              icon={<FaGithub size={52} />}
              helpText="Contribute to ink!"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
