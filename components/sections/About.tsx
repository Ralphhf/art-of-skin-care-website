'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Award, Users, Heart, Leaf } from 'lucide-react'
import { BUSINESS_INFO, STATS } from '@/lib/constants'

const features = [
  {
    icon: Award,
    title: 'Expert Care',
    description: 'Highly skilled estheticians with years of experience',
  },
  {
    icon: Users,
    title: 'Personal Touch',
    description: 'Customized treatments for your unique needs',
  },
  {
    icon: Heart,
    title: 'Premium Products',
    description: 'Only the highest-quality, professional-grade products',
  },
  {
    icon: Leaf,
    title: 'Natural Results',
    description: 'Reveal your skin\'s true, natural radiance',
  },
]

function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
      >
        {isInView && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {value.toLocaleString()}
          </motion.span>
        )}
      </motion.span>
      {suffix}
    </span>
  )
}

export function About() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      ref={sectionRef}
      className="relative section-padding overflow-hidden bg-muted/30"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-secondary/5 to-transparent" />
      </div>

      <div className="relative container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block font-serif text-sm tracking-[0.3em] text-primary uppercase mb-4"
          >
            Our Story
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Where Beauty Meets
            <span className="block text-gradient-gold">Artistry</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            For over two decades, we have been transforming skin and revealing 
            timeless beauty with personalized care and expert precision.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/images/portfolio-5.jpg"
                alt="Art of Skin Care team"
                fill
                className="object-cover"
              />
              {/* Decorative Frame */}
              <div className="absolute inset-4 border-2 border-white/20 rounded-2xl pointer-events-none" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-8 -right-8 md:bottom-8 md:right-8 bg-card rounded-2xl p-6 shadow-elegant border border-border/50"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="font-display text-2xl font-bold text-primary-foreground">
                    {BUSINESS_INFO.yearsInBusiness}
                  </span>
                </div>
                <div>
                  <p className="font-display text-xl font-semibold">Years of</p>
                  <p className="text-muted-foreground">Excellence</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-foreground/80 leading-relaxed">
                Located in the heart of Somerset, NJ, <strong className="text-primary">ART OF SKIN CARE</strong> is 
                dedicated to providing personalized, results-driven treatments tailored to each 
                individual's unique skin type and concerns.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                We take pride in our commitment to using only the highest-quality, professional-grade 
                products and the latest innovative techniques to deliver exceptional results that 
                reveal your natural beauty.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="group p-4 rounded-xl hover:bg-card transition-colors duration-300"
                >
                  <feature.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary font-medium group"
              >
                <span>Discover Our Full Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 rounded-3xl" />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 p-8 md:p-12 rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-gold mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
