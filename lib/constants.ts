export const BUSINESS_INFO = {
  name: "ART OF SKIN CARE",
  tagline: "Transforming skin, revealing timeless beauty.",
  description: `ART OF SKIN CARE is a premier beauty salon located in the heart of Somerset, NJ, offering a wide range of skin care and beauty services to help clients look and feel their absolute best. With a team of highly skilled and experienced estheticians, our salon is dedicated to providing personalized, results-driven treatments tailored to each individual's unique skin type and concerns.

At ART OF SKIN CARE, we take pride in our commitment to using only the highest-quality, professional-grade products and the latest innovative techniques to deliver exceptional results. From luxurious facials and rejuvenating peels to advanced microdermabrasion and laser treatments, our expert staff is passionate about helping our clients achieve a radiant, healthy complexion. We understand that each person's skin is different, which is why we take the time to thoroughly consult with each client, ensuring that they receive the most effective and customized care possible.

Experience the difference that professional skin care can make at ART OF SKIN CARE. Book your appointment today and let us help you unlock your skin's true potential. Discover the art of skin care and feel confident in your natural beauty.`,
  yearsInBusiness: 20,
  businessType: "beauty_salon",
} as const

export const CONTACT = {
  email: "ralph_farah_2001@hotmail.com",
  phone: "(732) 846-7100",
  address: "155 Hamilton Street",
  city: "Somerset",
  state: "NJ",
  zipCode: "08873",
  fullAddress: "155 Hamilton Street, Somerset, NJ 08873",
} as const

export const SERVICES = [
  {
    id: 1,
    name: "Haircuts",
    description: "Expert precision cuts tailored to your face shape, hair texture, and personal style. Our master stylists create looks that enhance your natural beauty.",
    icon: "Scissors",
    duration: "45-60 min",
    price: "From $65",
  },
  {
    id: 2,
    name: "Coloring",
    description: "From subtle highlights to bold transformations, our color specialists use premium products to achieve vibrant, long-lasting results.",
    icon: "Palette",
    duration: "90-180 min",
    price: "From $120",
  },
  {
    id: 3,
    name: "Manicures",
    description: "Luxurious nail care treatments that pamper your hands while delivering flawless, long-lasting results with premium polishes.",
    icon: "Sparkles",
    duration: "30-45 min",
    price: "From $35",
  },
  {
    id: 4,
    name: "Pedicures",
    description: "Rejuvenating foot treatments that smooth, soften, and beautify while providing a deeply relaxing spa experience.",
    icon: "Footprints",
    duration: "45-60 min",
    price: "From $55",
  },
  {
    id: 5,
    name: "Facials",
    description: "Customized treatments addressing your unique skin concerns, from anti-aging to deep cleansing, leaving you with a radiant glow.",
    icon: "Flower2",
    duration: "60-90 min",
    price: "From $95",
  },
  {
    id: 6,
    name: "Massages",
    description: "Therapeutic massage treatments that relieve tension, improve circulation, and restore balance to body and mind.",
    icon: "Hand",
    duration: "60-90 min",
    price: "From $85",
  },
  {
    id: 7,
    name: "Waxing",
    description: "Gentle yet effective hair removal using premium waxes that leave skin silky smooth with lasting results.",
    icon: "Zap",
    duration: "15-60 min",
    price: "From $25",
  },
  {
    id: 8,
    name: "Makeup Services",
    description: "Professional makeup artistry for any occasion, from natural everyday looks to glamorous special event styling.",
    icon: "Brush",
    duration: "45-90 min",
    price: "From $75",
  },
] as const

export const TESTIMONIALS = [
  {
    id: "1",
    author: "Emily Johnson",
    role: "Business Owner",
    location: "Dallas, TX",
    content: "I've been coming to Art of Skin Care for years and they never disappoint. The facials and massages are truly exceptional, and the staff is always friendly and attentive. Highly recommended for anyone looking to pamper themselves!",
    rating: 5,
  },
  {
    id: "2",
    author: "Michael Rodriguez",
    role: "Property Manager",
    location: "Houston, TX",
    content: "As a busy professional, I appreciate the convenience and quality of services at Art of Skin Care. The waxing and manicures are always precise, and the salon's relaxing atmosphere helps me unwind after a long day. I wouldn't go anywhere else.",
    rating: 4,
  },
  {
    id: "3",
    author: "Sophia Hernandez",
    role: "Homeowner",
    location: "San Antonio, TX",
    content: "The team at Art of Skin Care is simply the best. From the moment I walk in, I'm greeted with warm smiles and attentive service. The haircuts and color treatments are always on point, and the facials leave my skin glowing. I highly recommend this salon!",
    rating: 5,
  },
] as const

export const PORTFOLIO = [
  {
    id: "hair-styling",
    title: "Hair Styling",
    description: "Transformative hair artistry that brings out your unique beauty",
    images: [
      { id: "1", src: "/images/portfolio-1.jpg", alt: "A woman getting her hair washed in a salon" },
      { id: "2", src: "/images/portfolio-2.jpg", alt: "A woman blow drying her hair with a hair dryer" },
      { id: "3", src: "/images/portfolio-3.jpg", alt: "A woman holding a hair dryer in her hand" },
      { id: "4", src: "/images/portfolio-4.jpg", alt: "A woman holding a hair dryer in her hand" },
      { id: "5", src: "/images/portfolio-5.jpg", alt: "Three women holding scissors and brush" },
    ],
  },
  {
    id: "nails-polishing",
    title: "Nails Polishing",
    description: "Exquisite nail artistry for the modern beauty connoisseur",
    images: [
      { id: "6", src: "/images/portfolio-6.jpg", alt: "Woman with manicure and ring" },
      { id: "7", src: "/images/portfolio-7.jpg", alt: "Beautiful manicured nails" },
      { id: "8", src: "/images/portfolio-8.jpg", alt: "A woman's hands with red nail polish" },
      { id: "9", src: "/images/portfolio-9.jpg", alt: "A woman's hand with a ring" },
      { id: "10", src: "/images/portfolio-10.jpg", alt: "Person with styled nails" },
      { id: "11", src: "/images/portfolio-11.jpg", alt: "A woman's hand with white and pink manicure" },
    ],
  },
] as const

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
] as const

export const STATS = [
  { value: 20, label: "Years of Excellence", suffix: "+" },
  { value: 5000, label: "Happy Clients", suffix: "+" },
  { value: 8, label: "Expert Services", suffix: "" },
  { value: 100, label: "Satisfaction Rate", suffix: "%" },
] as const
