import type { NextApiRequest, NextApiResponse } from 'next';

// Mock database interaction
const books: Record<string, any> = {}; // In-memory storage for demonstration

// Validate request body based on API specification
function validateBookUpdate(body: any): { valid: boolean; errors?: string[] } {
  const errors = [];
  if (typeof body.title !== 'string' || !body.title.trim()) {
    errors.push('Title is required and must be a string.');
  }
  if (typeof body.author !== 'string' || !body.author.trim()) {
    errors.push('Author is required and must be a string.');
  }
  if (typeof body.publishedYear !== 'number' || isNaN(body.publishedYear)) {
    errors.push('PublishedYear is required and must be a number.');
  }
  if (typeof body.genre !== 'string' || !body.genre.trim()) {
    errors.push('Genre is required and must be a string.');
  }
  if (body.available !== undefined && typeof body.available !== 'boolean') {
    errors.push('Available must be a boolean if provided.');
  }
  return { valid: errors.length === 0, errors };
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
    body,
  } = req;

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid or missing book ID.' });
  }

  // PATCH request to update book fields
  if (method === 'PATCH') {
    if (!body || typeof body !== 'object') {
      return res.status(400).json({ error: 'Request body must be JSON.' });
    }

    // Validate fields
    const { valid, errors } = validateBookUpdate(body);
    if (!valid) {
      return res.status(400).json({ errors });
    }

    // Mock: Update the book in DB (in-memory for now)
    const prev = books[id] || { _id: id };
    const updated = {
      ...prev,
      ...body,
      _id: id,
    };
    books[id] = updated;

    return res.status(200).json(updated);
  }

  res.setHeader('Allow', ['PATCH']);
  res.status(405).end(`Method ${method} Not Allowed`);
}