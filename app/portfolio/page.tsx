'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Filter } from 'lucide-react'
import { PORTFOLIO } from '@/lib/constants'
import { cn } from '@/lib/utils'

type Category = 'all' | typeof PORTFOLIO[number]['id']

function ImageModal({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  images: { id: string; src: string; alt: string }[]
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        className="absolute left-4 md:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        className="absolute right-4 md:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-5xl aspect-[4/3] rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          className="object-contain"
        />
      </motion.div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
        <span className="text-white text-sm">
          {currentIndex + 1} / {images.length}
        </span>
      </div>
    </motion.div>
  )
}

export default function PortfolioPage() {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const [activeCategory, setActiveCategory] = useState<Category>('all')
  const [selectedImage, setSelectedImage] = useState<{
    images: { id: string; src: string; alt: string }[]
    index: number
  } | null>(null)

  const categories = [
    { id: 'all' as const, label: 'All Work' },
    ...PORTFOLIO.map((p) => ({ id: p.id as Category, label: p.title })),
  ]

  const filteredPortfolio =
    activeCategory === 'all'
      ? PORTFOLIO
      : PORTFOLIO.filter((p) => p.id === activeCategory)

  const allImages = filteredPortfolio.flatMap((category) =>
    category.images.map((img) => ({
      ...img,
      category: category.id,
      categoryTitle: category.title,
    }))
  )

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
              Our Portfolio
            </motion.span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Beauty in Every
              <span className="block text-gradient-gold">Detail</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our gallery of transformations and artistry. 
              Each image tells a story of beauty revealed through expert care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-border/50 sticky top-[72px] bg-background/80 backdrop-blur-xl z-30">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <Filter className="w-5 h-5 text-muted-foreground mr-2" />
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  'px-5 py-2 rounded-full font-medium text-sm transition-all duration-300',
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                    : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {allImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() =>
                    setSelectedImage({
                      images: allImages.map((img) => ({
                        id: img.id,
                        src: img.src,
                        alt: img.alt,
                      })),
                      index,
                    })
                  }
                  className={cn(
                    'relative cursor-pointer group overflow-hidden rounded-2xl',
                    index % 7 === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-[4/5]'
                  )}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/80 text-primary-foreground text-xs font-medium">
                      {image.categoryTitle}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                      <span className="text-sm font-medium text-white">View</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: '5000+', label: 'Happy Clients' },
              { value: '20+', label: 'Years Experience' },
              { value: '8', label: 'Services' },
              { value: '100%', label: 'Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <ImageModal
            images={selectedImage.images}
            currentIndex={selectedImage.index}
            onClose={() => setSelectedImage(null)}
            onPrev={() =>
              setSelectedImage((prev) =>
                prev
                  ? {
                      ...prev,
                      index:
                        (prev.index - 1 + prev.images.length) % prev.images.length,
                    }
                  : null
              )
            }
            onNext={() =>
              setSelectedImage((prev) =>
                prev
                  ? {
                      ...prev,
                      index: (prev.index + 1) % prev.images.length,
                    }
                  : null
              )
            }
          />
        )}
      </AnimatePresence>
    </>
  )
}
