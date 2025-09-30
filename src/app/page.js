"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import {
  Smile,
  Shirt,
  MapPin,
  MessageSquare,
  Truck,
  Shield,
  Gem,
  Leaf,
} from "lucide-react";
import Image from "next/image";
import HeroFloatingElements from "@/components/HeroFloatingElements";

export default function Home() {
  const featuredProducts = products.slice(0, 6);
  const bestSellers = products.slice(2, 8);
  const newArrivals = products.slice(4, 10);

  // Refs for scroll animations
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const featuredRef = useRef(null);
  const bestSellersRef = useRef(null);
  const newArrivalsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const featuresInView = useInView(featuresRef, {
    once: true,
    margin: "-50px",
  });
  const featuredInView = useInView(featuredRef, {
    once: true,
    margin: "-50px",
  });
  const bestSellersInView = useInView(bestSellersRef, {
    once: true,
    margin: "-50px",
  });
  const newArrivalsInView = useInView(newArrivalsRef, {
    once: true,
    margin: "-50px",
  });
  const testimonialsInView = useInView(testimonialsRef, {
    once: true,
    margin: "-50px",
  });

  // Testimonial auto-rotate...
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      number: "10K+",
      label: "Happy Customers",
      icon: <Smile className="liquid-icon" size={40} />,
    },
    {
      number: "500+",
      label: "Products",
      icon: <Shirt className="liquid-icon" size={40} />,
    },
    {
      number: "50+",
      label: "Cities",
      icon: <MapPin className="liquid-icon" size={40} />,
    },
    {
      number: "24/7",
      label: "Support",
      icon: <MessageSquare className="liquid-icon" size={40} />,
    },
  ];

  const categories = [
    {
      name: "T-Shirts",
      count: "120+",
      image: "/api/placeholder/300/300",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Polo Shirts",
      count: "80+",
      image: "/api/placeholder/300/300",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Hoodies",
      count: "60+",
      image: "/api/placeholder/300/300",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Accessories",
      count: "40+",
      image: "/api/placeholder/300/300",
      color: "from-orange-500 to-red-500",
    },
  ];

  const testimonials = [
    {
      name: "Ahmed Rahman",
      role: "Regular Customer",
      content:
        "The quality of Deen Fashion products is exceptional. The cotton is so soft and the stitching is perfect. Highly recommended!",
      rating: 5,
      image: "/api/placeholder/100/100",
    },
    {
      name: "Fatima Begum",
      role: "Fashion Blogger",
      content:
        "As someone who values both style and modesty, Deen Fashion has become my go-to brand. Their designs are modern yet respectful.",
      rating: 5,
      image: "/api/placeholder/100/100",
    },
    {
      name: "Mohammad Ali",
      role: "Student",
      content:
        "Affordable prices with premium quality. The t-shirts are comfortable for daily wear and the colors stay vibrant after multiple washes.",
      rating: 4,
      image: "/api/placeholder/100/100",
    },
  ];

  const brands = [
    {
      name: "Premium Cotton",
      icon: <Leaf className="liquid-icon" size={40} />,
      description: "100% Organic",
    },
    {
      name: "Eco-Friendly",
      icon: <Leaf className="liquid-icon" size={40} />,
      description: "Sustainable",
    },
    {
      name: "Fast Delivery",
      icon: <Truck className="liquid-icon" size={40} />,
      description: "Across BD",
    },
    {
      name: "Easy Returns",
      icon: <Shield className="liquid-icon" size={40} />,
      description: "30 Days",
    },
  ];

  const clothingElements = [
    { type: "fabric", src: "/images/fabric-swatch-1.png", size: 60 },
    { type: "button", src: "/images/button-1.png", size: 40 },
    { type: "tag", src: "/images/tag-1.png", size: 50 },
    { type: "fabric", src: "/images/fabric-swatch-2.png", size: 70 },
    { type: "button", src: "/images/button-2.png", size: 35 },
    { type: "tag", src: "/images/tag-2.png", size: 45 },
    { type: "fabric", src: "/images/fabric-swatch-3.png", size: 65 },
    { type: "button", src: "/images/button-3.png", size: 38 },
    { type: "tag", src: "/images/tag-3.png", size: 55 },
    { type: "fabric", src: "/images/fabric-swatch-4.png", size: 62 },
  ];

  return (
    <div className="overflow-x-hidden">
      <style jsx>{`
        .liquid-icon {
          animation: liquid 1.5s ease-in-out infinite;
        }
        @keyframes liquid {
          0% {
            transform: scale(1, 1);
          }
          50% {
            transform: scale(1.1, 0.9);
          }
          100% {
            transform: scale(1, 1);
          }
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background-image: url("/api/placeholder/1920/1080");
          background-size: cover;
          background-position: center;
          animation: zoom 20s ease-in-out infinite;
        }
        @keyframes zoom {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>

      {/* Enhanced Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background with Premium Store Photo */}
        <div className="hero-bg">
          {/* colorfull gradiant */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 opacity-70 mix-blend-multiply"></div>
        </div>

        {/* Floating Elements */}
        <HeroFloatingElements />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center text-white mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                heroInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold border border-white/30">
                🎉 Premium Islamic Fashion Since 2020
              </span>
            </motion.div>

            <motion.h1
              className="font-black mb-6 leading-tight text-[clamp(2.5rem,5vw+1rem,5rem)]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                heroInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Elevate Your Timeless, Elegant
              <motion.span
                className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -50 }}
                animate={
                  heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                }
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Modest Fashion Style
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={
                heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed"
            >
              Discover our exclusive collection of premium modest wear, blending
              contemporary fashion with traditional values
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/shop"
                className="group bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 flex items-center gap-3 shadow-lg"
              >
                <span>Shop Collection</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-xl"
                >
                  →
                </motion.span>
              </Link>

              <Link
                href="/shop?category=new-arrivals"
                className="group border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-500 transform hover:scale-105 backdrop-blur-sm"
              >
                New Arrivals
              </Link>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, delay: 1.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-2xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    heroInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                  className="text-center flex flex-col items-center justify-center"
                >
                  <div className="mb-2">{stat.icon} </div>
                  <div className="text-2xl md:text-3xl font-bold mb-1">
                    {stat.number}
                  </div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white text-center"
          >
            <div className="text-sm mb-2 opacity-80">Scroll to explore</div>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center mx-auto">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Fade Transition Between Hero & Features */}
      <div className="relative h-40 -mt-40 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white pointer-events-none" />
      </div>

      {/* Enhanced Features Section */}
      <section
        ref={featuresRef}
        className="py-20 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={featuresInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            >
              Why Choose Us
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Experience The <span className="text-blue-600">Deen Fashion</span>{" "}
              Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We&apos;re committed to providing you with the best modest fashion
              experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Truck className="liquid-icon" size={40} />,
                title: "Free Shipping",
                desc: "Free delivery across Bangladesh with no minimum order required",
                color: "from-green-400 to-blue-500",
                features: [
                  "All over Bangladesh",
                  "No minimum order",
                  "2-5 days delivery",
                ],
              },
              {
                icon: <Shield className="liquid-icon" size={40} />,
                title: "Secure Payment",
                desc: "100% protected transactions with bank-level encryption security",
                color: "from-purple-400 to-pink-500",
                features: [
                  "SSL Encrypted",
                  "Multiple methods",
                  "Money back guarantee",
                ],
              },
              {
                icon: <Gem className="liquid-icon" size={40} />,
                title: "Premium Quality",
                desc: "Guaranteed premium fabrics and expert craftsmanship in every stitch",
                color: "from-orange-400 to-red-500",
                features: [
                  "100% Cotton",
                  "Expert stitching",
                  "Quality checked",
                ],
              },
              {
                icon: <Leaf className="liquid-icon" size={40} />,
                title: "Eco Friendly",
                desc: "Sustainable materials and ethical production methods for a better world",
                color: "from-teal-400 to-green-500",
                features: [
                  "Organic materials",
                  "Ethical production",
                  "Eco-friendly packaging",
                ],
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${feature.color} text-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-center">
                  {feature.desc}
                </p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Shop By <span className="text-blue-600">Category</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our diverse collection of modest fashion categories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div
                  className={`h-64 bg-gradient-to-br ${category.color} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-6xl text-white/20">
                    {category.name.charAt(0)}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-white/80">{category.count} Products</p>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-1 bg-white mt-2"
                    ></motion.div>
                  </div>
                </div>
                <Link
                  href={`/shop?category=${category.name.toLowerCase()}`}
                  className="absolute inset-0"
                >
                  <span className="sr-only">Shop {category.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section
        ref={featuredRef}
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              featuredInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={featuredInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            >
              Editor&apos;s Pick
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Featured <span className="text-blue-600">Products</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked selection of our most premium and popular items
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={
                  featuredInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 30, scale: 0.9 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={featuredInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <Link
              href="/shop"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span>View All Products</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-xl"
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* New Arrivals */}
      <section ref={newArrivalsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              newArrivalsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={newArrivalsInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            >
              Just Launched
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              New <span className="text-green-600">Arrivals</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fresh styles just added to our collection. Be the first to own
              them!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {newArrivals.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={
                  newArrivalsInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 30, scale: 0.9 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section
        ref={bestSellersRef}
        className="py-20 bg-gradient-to-br from-orange-50 to-red-50"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              bestSellersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={bestSellersInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            >
              Customer Favorites
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Best <span className="text-orange-600">Sellers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Loved by thousands of customers. These are our most popular items!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {bestSellers.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={
                  bestSellersInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 30, scale: 0.9 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              What Our <span className="text-blue-600">Customers</span> Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our
              satisfied customers have to say.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 md:p-12 shadow-xl"
              >
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-xl ${
                            i < testimonials[currentTestimonial].rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      &quot;{testimonials[currentTestimonial].content}&quot;
                    </p>
                    <div>
                      <div className="font-bold text-gray-900">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-gray-600">
                        {testimonials[currentTestimonial].role}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Testimonial Navigation */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial
                      ? "bg-blue-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Our <span className="text-blue-400">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Committed to excellence in quality, service, and community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {brand.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{brand.name}</h3>
                <p className="text-gray-300">{brand.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Elevate Your Style?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of satisfied customers who trust Deen Fashion for
              their modest wear needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/shop"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Start Shopping Now
              </Link>
              <Link
                href="/dashboard"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Create Account
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
