'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  ArrowRight,
  Copy,
  Check,
} from 'lucide-react'
import { CONTACT, SERVICES } from '@/lib/constants'
import { cn } from '@/lib/utils'

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-green-500" />
          <span className="text-sm text-green-500">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" />
          <span className="text-sm">Copy</span>
        </>
      )}
    </button>
  )
}

export default function ContactPage() {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

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
              Get in Touch
            </motion.span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Let's Start Your
              <span className="block text-gradient-gold">Beauty Journey</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to experience the art of skin care? Reach out to us today 
              to schedule your personalized consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Visit Our Salon
                </h2>
                <p className="text-muted-foreground">
                  We'd love to welcome you to our salon. Drop by or give us a call 
                  to book your appointment.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Address */}
                <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-muted-foreground mb-2">{CONTACT.fullAddress}</p>
                      <div className="flex items-center gap-4">
                        <a
                          href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT.fullAddress)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:underline"
                        >
                          <span>Get Directions</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                        <CopyButton text={CONTACT.fullAddress} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground mb-2">{CONTACT.phone}</p>
                      <div className="flex items-center gap-4">
                        <a
                          href={`tel:${CONTACT.phone}`}
                          className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:underline"
                        >
                          <span>Call Now</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                        <CopyButton text={CONTACT.phone} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground mb-2 break-all">{CONTACT.email}</p>
                      <div className="flex items-center gap-4">
                        <a
                          href={`mailto:${CONTACT.email}`}
                          className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:underline"
                        >
                          <span>Send Email</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                        <CopyButton text={CONTACT.email} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted border border-border/50">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
                  <div className="text-center p-6">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="font-semibold mb-2">Find Us</p>
                    <p className="text-sm text-muted-foreground mb-4">{CONTACT.fullAddress}</p>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT.fullAddress)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium"
                    >
                      <span>Open in Maps</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="p-8 md:p-10 rounded-3xl bg-card border border-border/50 shadow-elegant">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 mx-auto rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-3">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false)
                        setFormState({
                          name: '',
                          email: '',
                          phone: '',
                          service: '',
                          message: '',
                        })
                      }}
                      className="text-primary font-medium hover:underline"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">
                      Book an Appointment
                    </h2>
                    <p className="text-muted-foreground mb-8">
                      Fill out the form below and we'll get back to you shortly.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          className={cn(
                            'w-full px-4 py-3 rounded-xl bg-muted/50 border-2 transition-all duration-300',
                            'focus:outline-none focus:border-primary focus:bg-background',
                            'border-transparent hover:border-border'
                          )}
                          placeholder="Your full name"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          className={cn(
                            'w-full px-4 py-3 rounded-xl bg-muted/50 border-2 transition-all duration-300',
                            'focus:outline-none focus:border-primary focus:bg-background',
                            'border-transparent hover:border-border'
                          )}
                          placeholder="your@email.com"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className={cn(
                            'w-full px-4 py-3 rounded-xl bg-muted/50 border-2 transition-all duration-300',
                            'focus:outline-none focus:border-primary focus:bg-background',
                            'border-transparent hover:border-border'
                          )}
                          placeholder="(123) 456-7890"
                        />
                      </div>

                      {/* Service */}
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium mb-2">
                          Service Interested In
                        </label>
                        <select
                          name="service"
                          id="service"
                          value={formState.service}
                          onChange={handleChange}
                          className={cn(
                            'w-full px-4 py-3 rounded-xl bg-muted/50 border-2 transition-all duration-300',
                            'focus:outline-none focus:border-primary focus:bg-background',
                            'border-transparent hover:border-border'
                          )}
                        >
                          <option value="">Select a service</option>
                          {SERVICES.map((service) => (
                            <option key={service.id} value={service.name}>
                              {service.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          required
                          rows={4}
                          value={formState.message}
                          onChange={handleChange}
                          className={cn(
                            'w-full px-4 py-3 rounded-xl bg-muted/50 border-2 transition-all duration-300 resize-none',
                            'focus:outline-none focus:border-primary focus:bg-background',
                            'border-transparent hover:border-border'
                          )}
                          placeholder="Tell us about your needs..."
                        />
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={cn(
                          'w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300',
                          'bg-gradient-to-r from-primary to-accent text-primary-foreground',
                          'shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30',
                          isSubmitting && 'opacity-70 cursor-not-allowed'
                        )}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>Send Message</span>
                          </>
                        )}
                      </motion.button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
