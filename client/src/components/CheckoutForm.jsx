import { useEffect, useState } from 'react';

const appId='sandbox-sq0idb-eGcr2fVou-bp9cz2nqK8wQ'
const locationId='LDV1MXZEE5Q7J'

const CheckoutForm = () => {
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  const waitForSquare = async () => {
    let retries = 0;
    while (!window.Square && retries < 10) {
      await new Promise((res) => setTimeout(res, 200));
      retries++;
    }

    if (!window.Square) {
      console.error('window.Square still undefined after waiting');
      return;
    }

    const payments = await window.Square.payments(appId, locationId);
    const card = await payments.card();
    await card.attach('#card-container');
    setCard(card);
    setIsLoading(false);
  };

  waitForSquare();
}, []);



  const handlePayment = async () => {
    if (!card) return;

    try {
      const result = await card.tokenize();
      if (result.status !== 'OK') {
        console.error('Tokenization failed:', result.errors);
        return;
      }

      const nonce = result.token;

      const response = await fetch('/api/payments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nonce,
          amount: 2000, // e.g. $20.00
        }),
      });

      const data = await response.json();
      console.log('Payment success:', data);
    } catch (error) {
      console.error('Payment error:', error);
    }
  };

  return (
    <div style={{ padding: '2rem', background: '#fff' }}>
      <div id="card-container" style={{ marginBottom: '1rem' }}></div>
      <button
        onClick={handlePayment}
        disabled={isLoading}
        style={{
          backgroundColor: 'black',
          color: 'white',
          padding: '0.75rem 1.5rem',
          border: 'none',
          borderRadius: '8px',
          cursor: isLoading ? 'not-allowed' : 'pointer',
        }}
      >
        {isLoading ? 'Loading...' : 'Pay Now'}
      </button>
    </div>
  );
};

export default CheckoutForm;
