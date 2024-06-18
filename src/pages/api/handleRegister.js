export default async function handler(req, res) {
  if (req.method === 'POST') {
    const formData = req.body

    try {
      const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const data = await response.json()
        res.status(200).json(data)
      } else {
        const errorData = await response.json()
        res.status(response.status).json(errorData)
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' })
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}
