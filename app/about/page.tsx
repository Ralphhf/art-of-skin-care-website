'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Award, Users, Heart, Leaf, Clock, Target, ArrowRight, Star } from 'lucide-react'
import { BUSINESS_INFO, STATS } from '@/lib/constants'

const values = [
  {
    icon: Heart,
    title: 'Personalized Care',
    description:
      'Every client receives customized treatments tailored to their unique skin type and concerns.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description:
      'We use only the highest-quality, professional-grade products and cutting-edge techniques.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description:
      'Our highly skilled estheticians bring years of experience and passion to every service.',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description:
      'We focus on delivering visible, lasting results that exceed your expectations.',
  },
  {
    icon: Leaf,
    title: 'Natural Beauty',
    description:
      'Our approach enhances your natural radiance rather than masking it.',
  },
  {
    icon: Clock,
    title: 'Dedication',
    description:
      'Over two decades of commitment to transforming skin and revealing timeless beauty.',
  },
]

const timeline = [
  {
    year: new Date().getFullYear() - 20,
    title: 'Our Beginning',
    description: 'Art of Skin Care opened its doors in Somerset, NJ with a vision to provide premium skincare services.',
  },
  {
    year: new Date().getFullYear() - 15,
    title: 'Expanding Services',
    description: 'We expanded our offerings to include a full range of beauty services from hair to nails.',
  },
  {
    year: new Date().getFullYear() - 10,
    title: 'Growing Team',
    description: 'Our team of expert estheticians grew as demand for our personalized services increased.',
  },
  {
    year: new Date().getFullYear() - 5,
    title: 'Innovation',
    description: 'We introduced advanced techniques and professional-grade products for enhanced results.',
  },
  {
    year: new Date().getFullYear(),
    title: 'Today',
    description: 'Celebrating 20+ years of excellence and thousands of happy clients.',
  },
]

export default function AboutPage() {
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
              About Us
            </motion.span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Our Story of
              <span className="block text-gradient-gold">Beauty & Care</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              For over {BUSINESS_INFO.yearsInBusiness} years, we've been dedicated to helping 
              our clients look and feel their absolute best through personalized, results-driven treatments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                <Image
                  src="/images/portfolio-5.jpg"
                  alt="Art of Skin Care salon"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-elegant border border-border/50">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Star className="w-8 h-8 text-primary-foreground fill-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold">4.8</p>
                    <p className="text-sm text-muted-foreground">Average Rating</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
                Where Every Visit is a
                <span className="text-gradient-gold"> Journey to Radiance</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  ART OF SKIN CARE is a premier beauty salon located in the heart of Somerset, NJ, 
                  offering a wide range of skin care and beauty services to help clients look and 
                  feel their absolute best.
                </p>
                <p>
                  With a team of highly skilled and experienced estheticians, our salon is dedicated 
                  to providing personalized, results-driven treatments tailored to each individual's 
                  unique skin type and concerns.
                </p>
                <p>
                  We take pride in our commitment to using only the highest-quality, professional-grade 
                  products and the latest innovative techniques to deliver exceptional results.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              What We Stand
              <span className="block text-gradient-gold">For</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block font-serif text-sm tracking-[0.3em] text-primary uppercase mb-4">
              Our Journey
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              {BUSINESS_INFO.yearsInBusiness} Years of
              <span className="block text-gradient-gold">Excellence</span>
            </h2>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-secondary" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-primary shadow-lg shadow-primary/50" />

                {/* Content */}
                <div
                  className={`ml-20 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                    {item.year}
                  </span>
                  <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Ready to Experience the
              <span className="block text-gradient-gold">Art of Skin Care?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book your appointment today and discover why thousands of clients trust us 
              with their beauty needs.
            </p>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-full font-medium text-lg text-primary-foreground shadow-xl shadow-primary/30"
              >
                <span>Book Your Appointment</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
