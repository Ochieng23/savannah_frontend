'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'

export default function Register() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    government_id: '',
    phonenumber: '',
    password: '',
    role: '',
  })
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log('Form data', formData)

    try {
      const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        // Handle successful registration
        alert('Registration successful')
        router.push('/login')
      } else {
        // Handle registration error
        console.error('Registration failed')
      }
    } catch (error) {
      console.error('An error occurred', error)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h2 className="mt-20 text-lg font-semibold text-gray-900">
        Get started for free
      </h2>
      <p className="mt-2 text-sm text-gray-700">
        Already registered?{' '}
        <Link
          href="/login"
          className="font-medium text-blue-600 hover:underline"
        >
          Sign in
        </Link>{' '}
        to your account.
      </p>
      <form
        action="#"
        className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
        onSubmit={handleSubmit}
      >
        <TextField
          label="First name"
          name="firstname"
          type="text"
          autoComplete="given-name"
          required
          value={formData.firstname}
          onChange={handleChange}
        />
        <TextField
          label="Last name"
          name="lastname"
          type="text"
          autoComplete="family-name"
          required
          value={formData.lastname}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Government ID"
          name="government_id"
          type="text"
          autoComplete="off"
          required
          value={formData.government_id}
          onChange={handleChange}
        />
        <TextField
          label="Phone number"
          name="phonenumber"
          type="tel"
          autoComplete="tel"
          required
          value={formData.phonenumber}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          autoComplete="new-password"
          required
          value={formData.password}
          onChange={handleChange}
        />
        <SelectField
          label="What is your role"
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="">Select a role</option>
          <option value="patient">Patient</option>

          <option value="dentist">Dentist</option>
          <option value="general_practitioner">General Practitioner</option>
          <option value="pediatrician">Pediatrician</option>
          <option value="ophthalmologist">Ophthalmologist</option>
          <option value="gynecologist">Gynecologist</option>

          <option value="oncologist">Oncologist</option>
          <option value="physiotherapist">Physiotherapist</option>
        </SelectField>
        <div className="col-span-full">
          <Button type="submit" variant="solid" color="blue" className="w-full">
            <span>
              Sign up <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </form>
    </SlimLayout>
  )
}
