import React from 'react';
import PageHero from '../components/PageHero';
import ContactCTA from '../components/sections/ContactCTA';

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb="Contact"
        title="Let’s talk about your next home."
        subtitle="Share a few details about your project and a real human will be in touch within 24 hours."
      />
      <ContactCTA />
    </>
  );
}
