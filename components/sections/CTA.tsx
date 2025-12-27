'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Phone, MapPin, Calendar, ArrowRight, Sparkles } from 'lucide-react'
import { CONTACT, BUSINESS_INFO } from '@/lib/constants'

export function CTA() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-muted to-secondary/5" />
      
      {/* Animated Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full border border-primary/10"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full border border-secondary/10"
        />
      </div>

      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative p-8 md:p-12 lg:p-16 rounded-[3rem] bg-card border border-border/50 shadow-elegant overflow-hidden"
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
            
            {/* Glow */}
            <div className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full bg-primary/10 blur-[100px]" />
            <div className="absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full bg-secondary/10 blur-[100px]" />

            <div className="relative z-10 text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full border border-primary/30 bg-primary/10"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Limited Time Offer</span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              >
                Ready to Reveal Your
                <span className="block text-gradient-gold">Natural Radiance?</span>
              </motion.h2>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="max-w-xl mx-auto text-lg text-muted-foreground mb-10"
              >
                Book your personalized consultation today and experience the 
                difference that {BUSINESS_INFO.yearsInBusiness} years of expertise can make for your skin.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-full font-medium text-lg text-primary-foreground overflow-hidden shadow-xl shadow-primary/30"
                  >
                    <Calendar className="w-5 h-5" />
                    <span className="relative z-10">Book Appointment</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-secondary to-primary"
                      initial={{ x: '100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.4 }}
                    />
                  </Link>
                </motion.div>

                <motion.a
                  href={`tel:${CONTACT.phone}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-lg border-2 border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <span>{CONTACT.phone}</span>
                </motion.a>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col md:flex-row items-center justify-center gap-6 text-muted-foreground"
              >
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT.fullAddress)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  <span>{CONTACT.fullAddress}</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
