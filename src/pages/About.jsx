// File: src/pages/About.jsx
import React from 'react';
import AboutHero from '../components/About/AboutHero';

export default function About() {
  return (
    <main className="w-full flex flex-col bg-white">
      <AboutHero />
      {/* You can add more components here later, like <AboutTeam />, <AboutMission /> */}
    </main>
  );
}