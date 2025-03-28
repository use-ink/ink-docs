import React from 'react'
import { motion } from 'framer-motion'
import Link from '@docusaurus/Link'
import { Button } from '../ui/button'
import { MainCta } from './main-cta'
import { Star } from '@phosphor-icons/react'
import { AnimatedText } from '../animated-text'
import { RiveAnimation } from '../rive-animation'

export function SectionHero() {
  return (
    <section className="relative flex flex-col lg:h-[710px] pointer-events-none section-intro md:my-0">
      <div className="container lg:!px-0 relative z-10 flex flex-col items-center justify-center">
        <MainCta
          classNames={{
            container: 'h-full',
          }}
          notice={
            <a
              className="flex flex-row items-center gap-2 !text-[#ffc249] hover:!text-[rgb(189,130,253)] justify-center lg:justify-start pointer-events-auto"
              href="https://github.com/use-ink/ink"
            >
              <Star size={16} weight="fill" className="inline animate-flip" />
              <AnimatedText text="1.4K+ stars on GitHub!" element="span" className="text-[16px] font-[600]" />
            </a>
          }
          title="Build Rust-Based Smart Contracts"
          description="Create, manage, and deploy smart contracts with ink!"
          cta={
            <div className="flex flex-col gap-3 md:flex-row">
              <Link to="/docs" className=" !transition-all duration-300 flex-1 lg:flex-none pointer-events-auto">
                <Button size="lg" className="w-full lg:w-auto">
                  Start building
                </Button>
              </Link>

              <Link to="/tutorials" className="flex-1 pointer-events-auto lg:flex-none">
                <Button variant="secondary" size="lg" className="!transition-all duration-300 w-full lg:w-auto">
                  View tutorials
                </Button>
              </Link>
            </div>
          }
          media={
            <motion.div
              initial={{ opacity: 0, y: -100, rotateY: 0 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="w-full h-full px-4"
            >
              <div className="w-full mt-8 lg:mt-0 h-[500px] lg:h-[710px]">
                <RiveAnimation
                  src="animations/Hero_2.riv"
                  autoplay={true}
                  animations={['main', 'head', 'code', 'floating']}
                />
              </div>
              {/* <Hero style={{ filter: 'drop-shadow(0 10px 10px #0003' }} className=" animate-float" /> */}
            </motion.div>
          }
        />
      </div>
    </section>
  )
}
