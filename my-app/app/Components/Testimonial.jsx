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
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 px-4 ">
      <div className="max-w-5xl mx-auto text-center">
         <h1 className="text-5xl text-center font-semibold pb-10">
                  Client Testimonials

                </h1>
        <div className="w-20 h-1 bg-orange-400 mx-auto mb-4 rounded"></div>
        <p className="text-gray-600 mb-12">
          Discover what our clients say about their experience working with us
        </p>

        <div className="relative flex flex-col md:flex-row gap-8 justify-center">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-2xl max-w-md text-left"
            >
              <div className="flex items-center gap-2 text-orange-400 mb-4">
               
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
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

          {/* Left arrow */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow rounded-full p-2"
          >
            ←
          </button>
          {/* Right arrow */}
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
