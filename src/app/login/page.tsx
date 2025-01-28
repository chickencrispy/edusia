"use client";
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })

    const data = await response.json()

    if (data.status === 'success') {
      router.push('/dashboard')
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <div className="login-container h-dvh place-content-center">
      <div className='w-full sm:w-1/4 mx-auto rounded-lg p-6'>
        <h1 className='text-2xl font-bold mb-4'>Login</h1>

        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit} className='space-y-2'>
          <div className="flex items-center">
            <label htmlFor="email" className='w-1/3'>Email</label>
            <input
              type="email"
              id="email"
              value={email}
              className="input w-2/3"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="password" className='w-1/3'>Password</label>
            <input
              type="password"
              id="password"
              value={password}
              className="input w-2/3"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className='text-end'>
            <button type="submit" className="btn btn-accent text-sm">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}
