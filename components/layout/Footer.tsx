'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, ArrowUpRight, Heart } from 'lucide-react'
import { BUSINESS_INFO, CONTACT, NAV_LINKS, SERVICES } from '@/lib/constants'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-muted/30 border-t border-border/50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 py-16 lg:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-display text-3xl font-bold tracking-tight text-gradient-gold">
                {BUSINESS_INFO.name.split(' ')[0]}
              </span>
              <span className="block font-serif text-sm tracking-[0.3em] text-muted-foreground uppercase">
                {BUSINESS_INFO.name.split(' ').slice(1).join(' ')}
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {BUSINESS_INFO.tagline}
            </p>
            <div className="flex items-center gap-2 text-sm text-primary font-medium">
              <span className="inline-block w-10 h-0.5 bg-gradient-to-r from-primary to-transparent" />
              <span>{BUSINESS_INFO.yearsInBusiness}+ Years of Excellence</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-display text-lg font-semibold mb-6 text-foreground">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="w-0 group-hover:w-4 h-0.5 bg-primary transition-all duration-300" />
                  <span>{link.label}</span>
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="font-display text-lg font-semibold mb-6 text-foreground">
              Our Services
            </h3>
            <nav className="flex flex-col gap-3">
              {SERVICES.slice(0, 6).map((service) => (
                <Link
                  key={service.id}
                  href="/services"
                  className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="w-0 group-hover:w-4 h-0.5 bg-primary transition-all duration-300" />
                  <span>{service.name}</span>
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="font-display text-lg font-semibold mb-6 text-foreground">
              Visit Us
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT.fullAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>{CONTACT.fullAddress}</span>
              </a>
              <a
                href={`tel:${CONTACT.phone}`}
                className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>{CONTACT.phone}</span>
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="break-all">{CONTACT.email}</span>
              </a>
            </div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent rounded-full font-medium text-sm text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              >
                <span>Book Appointment</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="my-12 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
        >
          <p className="flex items-center gap-1">
            © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-4 h-4 text-secondary fill-secondary" /> in Somerset, NJ
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
