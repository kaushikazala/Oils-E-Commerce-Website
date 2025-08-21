"use client";

import React, { useState } from "react";

const testimonials = [
  {
    text: "Working with this team has been absolutely transformative for our business. Their attention to detail and innovative approach exceeded all our expectations. The results speak for themselves - we've seen a 300% increase in our conversion rates.",
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    company: "TechStart Inc.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "The level of professionalism and expertise demonstrated by this team is unmatched. They delivered our project ahead of schedule and under budget, while maintaining the highest quality standards. I would recommend them without hesitation.",
    name: "Michael Chen",
    role: "Marketing Director, GrowthCorp",
    company: "GrowthCorp",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    text: "From the initial consultation to the final delivery, the experience was seamless. Their team is not only skilled but also incredibly responsive and easy to work with. Our new website has received rave reviews from our clients.",
    name: "Emily Davis",
    role: "Founder, Creative Solutions",
    company: "Creative Solutions",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    text: "I was impressed by their ability to understand our unique needs and tailor their services accordingly. The project management was top-notch, and they kept us informed every step of the way. The end result is a product that truly reflects our brand.",
    name: "David Smith",
    role: "Product Manager, Innovatech",
    company: "Innovatech",
    avatar: "https://randomuser.me/api/portraits/men/47.jpg",
  },
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 2) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 2 + testimonials.length) % testimonials.length);
  };

  // Get current and next testimonial (with wrap-around)
  const visibleTestimonials = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-semibold pb-10">
          Client Testimonials
          <div className="w-40 h-1 bg-orange-400 mx-auto mt-4 rounded"></div>
        </h1>

        <p className="text-gray-600 mb-12">
          Discover what our clients say about their experience working with us
        </p>

        <div className="relative flex flex-col md:flex-row gap-8 justify-center items-center">
          {visibleTestimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-2xl max-w-md text-left w-full md:w-1/2"
            >
              <div className="flex items-center gap-2 text-orange-400 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
              <p className="italic text-gray-700 mb-6">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{t.name}</h4>
                  <p className="text-sm text-orange-600">{t.role}</p>
                  <p className="text-xs text-gray-500">{t.company}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Prev Button */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow rounded-full p-2"
          >
            ←
          </button>

          {/* Next Button */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow rounded-full p-2"
          >
            →
          </button>
        </div>

        <div className="mt-12">
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">
            Join 500+ Happy Clients
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
