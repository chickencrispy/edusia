import { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  status: string;
  message?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method === 'POST') {
    const { email, password } = req.body

    if (typeof email !== 'string' || typeof password !== 'string') {
      return res.status(400).json({ status: 'failed', message: 'Invalid input' })
    }

    try {
      const response = await fetch('http://mcp.loc/process/api/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      console.log(data)

      if (data.status === 'success') {
        res.status(200).json({ status: 'success', message: 'Login successful' })
      } else {
        res.status(400).json({ status: 'failed', message: 'Invalid email or password' })
      }
    } catch (error) {
      console.error('Error during login API call:', error)
      res.status(500).json({ status: 'failed', message: 'Internal server error' })
    }
  } else {
    res.status(405).json({ status: 'failed', message: 'Method Not Allowed' })
  }
}
