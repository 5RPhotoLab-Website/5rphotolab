// server/controllers/paymentsController.js
import axios from 'axios';
import crypto from 'crypto';
import dotenv from 'dotenv';
dotenv.config();

export const createPayment = async (req, res) => {
  const { nonce, amount } = req.body;

  if (!nonce || !amount) {
    return res.status(400).json({ error: 'Missing payment details' });
  }

  try {
    const response = await axios.post(
      'https://connect.squareupsandbox.com/v2/payments',
      {
        source_id: nonce,
        idempotency_key: crypto.randomUUID(),
        amount_money: {
          amount: parseInt(amount),
          currency: 'USD',
        },
        location_id: process.env.SQUARE_LOCATION_ID,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.SQUARE_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    const message = error.response?.data?.errors?.[0]?.detail || error.message;
    res.status(500).json({ error: message });
  }
};
