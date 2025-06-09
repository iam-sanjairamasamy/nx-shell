'use client';

import { useState, useEffect } from 'react';
import { HeroSection } from '../components/landing/hero-section';
import Loading from './loading';


export default function HomePage() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAgents = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };
    fetchAgents();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <HeroSection />
    </>
  );
}
