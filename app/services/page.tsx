'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  Scissors,
  Palette,
  Sparkles,
  Footprints,
  Flower2,
  Hand,
  Zap,
  Brush,
  Clock,
  DollarSign,
  ArrowRight,
  Check,
  ChevronDown,
} from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ElementType> = {
  Scissors,
  Palette,
  Sparkles,
  Footprints,
  Flower2,
  Hand,
  Zap,
  Brush,
}

const serviceDetails: Record<number, { benefits: string[]; includes: string[] }> = {
  1: {
    benefits: ['Personalized style consultation', 'Expert precision cutting', 'Professional styling tips'],
    includes: ['Consultation', 'Shampoo & Condition', 'Cut & Style', 'Blow dry'],
  },
  2: {
    benefits: ['Long-lasting vibrant color', 'Hair health preservation', 'Custom color matching'],
    includes: ['Color consultation', 'Hair treatment', 'Color application', 'Styling'],
  },
  3: {
    benefits: ['Nail health improvement', 'Long-lasting polish', 'Relaxing hand massage'],
    includes: ['Nail shaping', 'Cuticle care', 'Hand massage', 'Polish application'],
  },
  4: {
    benefits: ['Soft, smooth feet', 'Improved circulation', 'Deep relaxation'],
    includes: ['Foot soak', 'Exfoliation', 'Nail care', 'Foot massage', 'Polish'],
  },
  5: {
    benefits: ['Deep skin cleansing', 'Improved skin texture', 'Radiant glow'],
    includes: ['Skin analysis', 'Deep cleansing', 'Extraction', 'Mask', 'Moisturizing'],
  },
  6: {
    benefits: ['Stress relief', 'Muscle relaxation', 'Improved circulation'],
    includes: ['Consultation', 'Full body massage', 'Aromatherapy options'],
  },
  7: {
    benefits: ['Silky smooth skin', 'Long-lasting results', 'Reduced hair regrowth'],
    includes: ['Skin preparation', 'Professional wax application', 'Aftercare'],
  },
  8: {
    benefits: ['Professional finish', 'Photo-ready look', 'Personal style enhancement'],
    includes: ['Consultation', 'Skin prep', 'Full makeup application', 'Touch-up tips'],
  },
}

function ServiceCard({ service, index }: { service: typeof SERVICES[number]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const Icon = iconMap[service.icon] || Sparkles
  const details = serviceDetails[service.id]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div
        className={cn(
          'relative p-8 rounded-3xl border border-border/50 bg-card/80 backdrop-blur-sm',
          'transition-all duration-500',
          'hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10',
          isExpanded && 'border-primary/30'
        )}
      >
        <div className="flex items-start gap-6">
          {/* Icon */}
          <div className="w-16 h-16 flex-shrink-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            <Icon className="w-8 h-8 text-primary" />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="font-display text-2xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
              {service.name}
            </h3>
            <p className="text-muted-foreground mb-4">{service.description}</p>

            {/* Details */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary" />
                <span>{service.duration}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-primary" />
                <span>{service.price}</span>
              </div>
            </div>

            {/* Expand Button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-primary font-medium"
            >
              <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>
          </div>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && details && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-6 mt-6 border-t border-border/50">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Benefits */}
                  <div>
                    <h4 className="font-semibold mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {details.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Includes */}
                  <div>
                    <h4 className="font-semibold mb-3">Service Includes</h4>
                    <ul className="space-y-2">
                      {details.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Book CTA */}
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent rounded-full font-medium text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                  >
                    <span>Book {service.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function ServicesPage() {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient" />
        <div className="relative container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block font-serif text-sm tracking-[0.3em] text-primary uppercase mb-4"
            >
              Our Services
            </motion.span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Premium Beauty
              <span className="block text-gradient-gold">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience our comprehensive range of luxury beauty treatments, 
              each designed to reveal your natural radiance and enhance your wellbeing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 max-w-4xl mx-auto">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block font-serif text-sm tracking-[0.3em] text-primary uppercase mb-4">
              Why Choose Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              The Art of Skin Care
              <span className="block text-gradient-gold">Difference</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Expert Team',
                description: 'Highly skilled professionals with years of experience in beauty and skincare.',
              },
              {
                title: 'Premium Products',
                description: 'We use only the highest-quality, professional-grade products for exceptional results.',
              },
              {
                title: 'Personalized Care',
                description: 'Every treatment is customized to your unique needs and skin concerns.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <span className="font-display text-2xl font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Ready to Book Your
              <span className="block text-gradient-gold">Treatment?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today to schedule your personalized beauty experience.
            </p>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-full font-medium text-lg text-primary-foreground shadow-xl shadow-primary/30"
              >
                <span>Book Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
