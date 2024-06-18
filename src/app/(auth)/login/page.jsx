'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'
import { useRouter } from 'next/navigation'
export default function Login() {
  const [formData, setFormData] = useState({
    phonenumber: '',
    password: '',
  })
  const router = useRouter()

  const [user, setUser] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Form data', formData)

    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const result = await response.json()
        console.log('Result:', result)

        const user = result.user // Access user from result.user
        console.log('User:', user)

        setUser(user)

        if (user.role === 'patient') {
          router.push('/patient')
        } else {
          router.push('/doctor')
        }
      } else {
        const errorText = await response.text()
        console.error('Login failed:', errorText)
      }
    } catch (error) {
      console.error('Fetch error:', error)
    }
  }

  useEffect(() => {
    if (user) {
      console.log('Updated User:', user)
    }
  }, [user])

  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h2 className="mt-20 text-lg font-semibold text-gray-900">
        Sign in to your account
      </h2>
      <p className="mt-2 text-sm text-gray-700">
        Don’t have an account?{' '}
        <Link
          href="/register"
          className="font-medium text-blue-600 hover:underline"
        >
          Sign up
        </Link>{' '}
        for a free trial.
      </p>
      <form
        onSubmit={handleSubmit}
        action="#"
        className="mt-10 grid grid-cols-1 gap-y-8 text-black"
      >
        <TextField
          label="Phone Number"
          name="phonenumber"
          type="phonenumber"
          value={formData.phonenumber}
          onChange={handleChange}
          autoComplete="tel"
          required
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          autoComplete="current-password"
          required
        />
        <div>
          <Button type="submit" variant="solid" color="blue" className="w-full">
            <span>
              Sign in <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </form>
    </SlimLayout>
  )
}
