import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { GoArrowUpRight } from 'react-icons/go'

// Sample post data for illustration
const posts = [
  {
    _id: '1',
    tag: 'Pediatrics',
    slug: 'pediatrician-consultation',
    mainImage:
      'https://res.cloudinary.com/dhz4c0oae/image/upload/v1718460845/peditrician_dc4gkz.jpg',
    title: 'Pediatrician Consultation',
    description:
      'Get expert medical advice and care for your child from a qualified pediatrician.',
  },
  {
    _id: '2',
    tag: 'Dentistry',
    slug: 'dentist-consultation',
    mainImage:
      'https://res.cloudinary.com/dhz4c0oae/image/upload/v1718460968/dentist_fszd93.jpg',
    title: 'Dentist Consultation',
    description:
      'Schedule a consultation with a dentist for routine check-ups or dental issues.',
  },
  {
    _id: '3',
    tag: 'Gynecology',
    slug: 'gynecologist-consultation',
    mainImage:
      'https://res.cloudinary.com/dhz4c0oae/image/upload/v1718461091/gyna_n6ta7d.jpg',
    title: 'Gynecologist Consultation',
    description:
      "Consult a gynecologist for women's health, including reproductive health and other concerns.",
  },
  {
    _id: '4',
    tag: 'Ophthalmology',
    slug: 'ophthalmologist-consultation',
    mainImage:
      'https://res.cloudinary.com/dhz4c0oae/image/upload/v1718461169/ophthalmologist_dhoyo1.jpg',
    title: 'Ophthalmologist Consultation',
    description:
      'Receive expert eye care and treatment from a qualified ophthalmologist.',
  },
  {
    _id: '5',
    tag: 'General Medicine',
    slug: 'general-physician-consultation',
    mainImage:
      'https://res.cloudinary.com/dhz4c0oae/image/upload/v1718461495/istockphoto-1306213764-612x612_w9tajj.jpg',
    title: 'General Physician Consultation',
    description:
      'Consult a general physician for overall health check-ups and medical advice.',
  },
  {
    _id: '6',
    tag: 'Oncology',
    slug: 'oncologist-consultation',
    mainImage:
      'https://res.cloudinary.com/dhz4c0oae/image/upload/v1718461261/Life_as_a_Hematologist-Oncologist_0.png_chcrmv.webp',
    title: 'Oncologist Consultation',
    description:
      'Get specialized care and treatment for cancer from an experienced oncologist.',
  },
  {
    _id: '7',
    tag: 'Physiotherapy',
    slug: 'physiotherapist-consultation',
    mainImage:
      'https://res.cloudinary.com/dhz4c0oae/image/upload/v1718461410/Physiotherapy_o4bjzb.jpg',
    title: 'Physiotherapist Consultation',
    description:
      'Book a consultation with a physiotherapist for injury recovery and physical therapy.',
  },
]

function Features() {
  function truncateText(text, maxLength) {
    if (!text || text.length <= maxLength) {
      return text
    }
    const words = text.split(' ')
    const truncatedText = words.slice(0, maxLength).join(' ')
    return truncatedText + '...'
  }

  return (
    <div className="mt-0 flex flex-col gap-10 bg-white px-10 py-10">
      <h1 className="text-multicolored underline-red pt-4 font-bold text-black underline">
        Clinical Services
      </h1>
      {posts.map((post, index) => (
        <Link
          href="#"
          key={post._id}
          className="no-underline hover:no-underline"
        >
          <div
            className={`mt-2 flex flex-col items-center md:flex-row ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Image Section */}
            <div className="p-4 md:w-1/2">
              <img
                src={post.mainImage}
                width={500}
                height={300}
                className="rounded-lg object-cover"
                alt="main blog image"
              />
            </div>
            {/* Text Section */}
            <div className="flex w-full flex-col justify-between p-4 md:w-1/2">
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-yellow-600">{post.tag}</h3>
                <h2 className="text-2xl font-bold text-black">{post.title}</h2>
                <p className="text-xl text-black">
                  {truncateText(post.description, 100)}
                </p>
                <Link
                  href="https://10xtraders.ai/tbb1/"
                  className="mt-4 inline-flex items-center text-purple-600"
                >
                  <span>Get Started</span>
                  <GoArrowUpRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Features
