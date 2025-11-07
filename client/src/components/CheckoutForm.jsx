// import { useEffect, useState } from 'react';

// const appId = 'sandbox-sq0idb-eGcr2fVou-bp9cz2nqK8wQ'
// const locationId = 'LDV1MXZEE5Q7J'

// const CheckoutForm = () => {
//   const [card, setCard] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const waitForSquare = async () => {
//       let retries = 0;
//       while (!window.Square && retries < 10) {
//         await new Promise((res) => setTimeout(res, 200));
//         retries++;
//       }

//       if (!window.Square) {
//         console.error('window.Square still undefined after waiting');
//         return;
//       }

//       const payments = await window.Square.payments(appId, locationId);
//       const card = await payments.card();
//       await card.attach('#card-container');
//       setCard(card);
//       setIsLoading(false);
//     };

//     waitForSquare();
//   }, []);



//   const handlePayment = async () => {
//     if (!card) return;

//     try {
//       const result = await card.tokenize();
//       console.log(result)
//       if (result.status !== 'OK') {
//         console.error('Tokenization failed:', result.errors);
//         return;
//       }

//       const nonce = result.token;

//       const response = await fetch('/api/payments', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           nonce,
//           amount: 2000, // e.g. $20.00
//         }),
//       });

//       const data = await response.json();
//       console.log('Payment success:', data);
//     } catch (error) {
//       console.error('Payment error:', error);
//     }
//   };

//   // MAYBE NEW HANDLEPAYMENT

//   // const handlePayment = async () => {
//   //   if (!card) return;

//   //   try {
//   //     const result = await card.tokenize();
//   //     if (result.status !== "OK") {
//   //       console.error("Tokenization failed:", result.errors);
//   //       return;
//   //     }

//   //     const nonce = result.token;

//   //     const response = await fetch("/api/checkout", {
//   //       method: "POST",
//   //       headers: { "Content-Type": "application/json" },
//   //       body: JSON.stringify({ nonce }),
//   //       credentials: "include", // if you use cookies for auth
//   //     });

//   //     const data = await response.json();

//   //     if (response.ok) {
//   //       console.log("Checkout success:", data);
//   //       // maybe navigate to order confirmation page
//   //     } else {
//   //       console.error("Checkout failed:", data.error);
//   //     }
//   //   } catch (error) {
//   //     console.error("Payment error:", error);
//   //   }
//   // };


//   return (
//     <div style={{ padding: '2rem', background: '#fff' }}>
//       <div id="card-container" style={{ marginBottom: '1rem' }}></div>
//       <button
//         onClick={handlePayment}
//         disabled={isLoading}
//         style={{
//           backgroundColor: 'black',
//           color: 'white',
//           padding: '0.75rem 1.5rem',
//           border: 'none',
//           borderRadius: '8px',
//           cursor: isLoading ? 'not-allowed' : 'pointer',
//         }}
//       >
//         {isLoading ? 'Loading...' : 'Pay Now'}
//       </button>
//     </div>
//   );
// };

// export default CheckoutForm;




import { useEffect, useState } from "react";


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const isSandbox = import.meta.env.VITE_SQUARE_ENV === "sandbox";
const appId = isSandbox
  ? import.meta.env.VITE_SQUARE_SANDBOX_APP_ID
  : import.meta.env.VITE_SQUARE_PROD_APP_ID;
const locationId = isSandbox
  ? import.meta.env.VITE_SQUARE_SANDBOX_LOCATION_ID
  : import.meta.env.VITE_SQUARE_PROD_LOCATION_ID;


const CheckoutForm = () => {
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const initSquare = async () => {
      try {
        // Wait until the Square SDK loads
        let retries = 0;
        while (!window.Square && retries < 20) {
          await new Promise((res) => setTimeout(res, 200));
          retries++;
        }
        if (!window.Square) throw new Error("Square SDK failed to load.");

        const payments = window.Square.payments(appId, locationId);
        const cardInstance = await payments.card();
        await cardInstance.attach("#card-container");

        setCard(cardInstance);
        setIsLoading(false);
      } catch (err) {
        console.error("Square init error:", err);
        setMessage("Error initializing payment form.");
      }
    };

    initSquare();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/auth/user`, {
          method: 'GET',
          headers: { "Content-Type": "application/json" },
          credentials: "include", // ensures cookies (for logged-in user)
        });

        const data = await res.json(); // 👈 parse response body
        console.log('logged user:', data);
      } catch (err) {
        console.error('Error fetching user:', err);
      }
    };

    fetchUser();
  }, []);


  const handlePayment = async () => {
    if (!card) return;

    setIsLoading(true);
    setMessage("");

    try {
      const result = await card.tokenize();
      if (result.status !== "OK") {
        console.error("Tokenization failed:", result.errors);
        setMessage("Payment failed: unable to tokenize card.");
        setIsLoading(false);
        return;
      }

      const nonce = result.token;

      // Send nonce to backend checkout route
      const response = await fetch(`${API_BASE_URL}/api/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // ensures cookies (for logged-in user)
        body: JSON.stringify({ nonce }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("✅ Checkout success:", data);
        setMessage(`Payment successful! Order #${data.order.id}`);

        // Optionally redirect to confirmation page
        // window.location.href = `/order/${data.order.id}`;
      } else {
        console.error("Checkout failed:", data.error || data.details);
        setMessage(`❌ Checkout failed: ${data.error || data.details}`);
      }
    } catch (err) {
      console.error("Payment error:", err);
      setMessage("Something went wrong during checkout.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        padding: "2rem",
        background: "#fff",
        borderRadius: "12px",
        maxWidth: "400px",
        margin: "2rem auto",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ marginBottom: "1rem" }}>Checkout</h2>

      <div id="card-container" style={{ marginBottom: "1.5rem" }}></div>

      <button
        onClick={handlePayment}
        disabled={isLoading}
        style={{
          width: "100%",
          backgroundColor: isLoading ? "#ccc" : "black",
          color: "white",
          padding: "0.75rem",
          border: "none",
          borderRadius: "8px",
          cursor: isLoading ? "not-allowed" : "pointer",
        }}
      >
        {isLoading ? "Processing..." : "Pay Now"}
      </button>

      {message && (
        <p style={{ marginTop: "1rem", color: message.includes("❌") ? "red" : "green" }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default CheckoutForm;
