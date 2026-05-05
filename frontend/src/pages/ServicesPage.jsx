import React from 'react';
import PageHero from '../components/PageHero';
import Services from '../components/sections/Services';
import ContactCTA from '../components/sections/ContactCTA';

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Services"
        title="Services designed around your journey home."
        subtitle="From your first sketch to the day you turn the key — we handle every stage with craft and clarity."
      />
      <Services preview={false} hideHeader />
      <ContactCTA />
    </>
  );
}
