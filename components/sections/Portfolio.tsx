'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { PORTFOLIO } from '@/lib/constants'
import { cn } from '@/lib/utils'

function ImageModal({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  images: typeof PORTFOLIO[number]['images']
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Navigation Buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        className="absolute left-4 md:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        className="absolute right-4 md:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Image */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-4xl aspect-[4/3] rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Image Counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
        <span className="text-white text-sm">
          {currentIndex + 1} / {images.length}
        </span>
      </div>
    </motion.div>
  )
}

function PortfolioCategory({
  category,
  index,
}: {
  category: typeof PORTFOLIO[number]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const allImages = category.images

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        className="space-y-8"
      >
        {/* Category Header */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold mb-2">
              {category.title}
            </h3>
            <p className="text-muted-foreground">
              {category.description || `Explore our ${category.title.toLowerCase()} gallery`}
            </p>
          </div>
          <span className="hidden md:block text-sm text-muted-foreground">
            {category.images.length} Photos
          </span>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {category.images.map((image, imgIndex) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: imgIndex * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(imgIndex)}
              className={cn(
                'relative cursor-pointer group overflow-hidden rounded-2xl',
                imgIndex === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-[4/5]'
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* View indicator */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                  <span className="text-sm font-medium text-white">View</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <ImageModal
            images={allImages}
            currentIndex={selectedImage}
            onClose={() => setSelectedImage(null)}
            onPrev={() =>
              setSelectedImage((prev) =>
                prev !== null ? (prev - 1 + allImages.length) % allImages.length : 0
              )
            }
            onNext={() =>
              setSelectedImage((prev) =>
                prev !== null ? (prev + 1) % allImages.length : 0
              )
            }
          />
        )}
      </AnimatePresence>
    </>
  )
}

export function Portfolio() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="relative section-padding overflow-hidden bg-muted/30">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
      </div>

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
            Our Work
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Beauty in Every
            <span className="block text-gradient-gold">Detail</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore our portfolio of transformations and artistry. 
            Each image tells a story of beauty revealed.
          </p>
        </motion.div>

        {/* Portfolio Categories */}
        <div className="space-y-20">
          {PORTFOLIO.map((category, index) => (
            <PortfolioCategory key={category.id} category={category} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-primary text-primary rounded-full font-medium text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <span>View Full Portfolio</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
