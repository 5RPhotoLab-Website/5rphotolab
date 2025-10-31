import SideNav from './components/SideNav'
import './App.css'
import ResponsiveNav from './components/ResponsiveNav'
import { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import MailInPage from './pages/MailInPage';
import ContactPage from './pages/ContactPage';
import AccessibleSitePage from './pages/AccessibleSitePage';
import ItemDetailsPage from './pages/ItemDetailsPage';
import CheckoutForm from './components/CheckoutForm';
import ErrorPage from './pages/ErrorPage';
import Login from './components/Login';



function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('http://localhost:5050/api/items');
      const data = await response.json();
      setItems(data);
    }
    fetchItems();
  }, []);

  let element = useRoutes([
    {
      path: "/",
      element: <HomePage items={items} />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/services",
      element: <ServicesPage />
    },
    {
      path: "/mail-in",
      element: <MailInPage />
    },
    {
      path: "/contact",
      element: <ContactPage />
    },
    {
      path: "/accessible-site",
      element: <AccessibleSitePage />
    },
    {
      path: "/items/:id",
      element: <ItemDetailsPage items={items} />
    },
    {
      path: "/checkout",
      element: <CheckoutForm />
    },
    {
      path: "*",
      element: <ErrorPage />
    }
  ]);

  return (
    <div className="bg-mainBackground">
      {/* <ResponsiveNav /> */}
      <SideNav />
      {element}
    </div>
  )
}

export default App
