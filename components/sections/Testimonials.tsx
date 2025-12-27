'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/constants'
import { cn } from '@/lib/utils'

function TestimonialCard({
  testimonial,
  isActive,
}: {
  testimonial: typeof TESTIMONIALS[number]
  isActive: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: isActive ? 1 : 0.5, scale: isActive ? 1 : 0.9 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'relative p-8 md:p-10 rounded-3xl border border-border/50 bg-card/80 backdrop-blur-sm',
        'transition-all duration-500',
        isActive && 'shadow-xl shadow-primary/10 border-primary/20'
      )}
    >
      {/* Quote Icon */}
      <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
        <Quote className="w-6 h-6 text-primary-foreground" />
      </div>

      {/* Stars */}
      <div className="flex items-center gap-1 mb-6 pt-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              'w-5 h-5',
              i < testimonial.rating
                ? 'text-primary fill-primary'
                : 'text-muted-foreground/30'
            )}
          />
        ))}
      </div>

      {/* Content */}
      <blockquote className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-8 font-serif italic">
        "{testimonial.content}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg">
          {testimonial.author.split(' ').map((n) => n[0]).join('')}
        </div>
        <div>
          <p className="font-semibold text-foreground">{testimonial.author}</p>
          <p className="text-sm text-muted-foreground">
            {testimonial.role} • {testimonial.location}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export function Testimonials() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-rotate testimonials
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isPaused])

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  }

  return (
    <section ref={sectionRef} className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />

      <div className="relative container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block font-serif text-sm tracking-[0.3em] text-primary uppercase mb-4"
          >
            Testimonials
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            What Our Clients
            <span className="block text-gradient-gold">Say About Us</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our valued clients 
            have to say about their experiences with us.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <TestimonialCard
                testimonial={TESTIMONIALS[activeIndex]}
                isActive={true}
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToPrev}
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    'w-3 h-3 rounded-full transition-all duration-300',
                    index === activeIndex
                      ? 'w-8 bg-primary'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  )}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToNext}
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-16 border-t border-border/50"
        >
          <div className="text-center">
            <p className="font-display text-3xl md:text-4xl font-bold text-gradient-gold">5000+</p>
            <p className="text-sm text-muted-foreground">Happy Clients</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-border" />
          <div className="text-center">
            <p className="font-display text-3xl md:text-4xl font-bold text-gradient-gold">4.8</p>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-border" />
          <div className="text-center">
            <p className="font-display text-3xl md:text-4xl font-bold text-gradient-gold">20+</p>
            <p className="text-sm text-muted-foreground">Years of Trust</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
