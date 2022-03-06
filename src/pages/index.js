import React, { useEffect, useState } from 'react';
import Header from '../components/common/header/header.component';
import LandingImage from '../components/ui/landingimage/landingimage.component';

import '../styles/index.css';

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);

  return (
    <>
      <Header/>
      <main>
        <LandingImage/>
      </main>
    </>
  );
}

export default Index;
