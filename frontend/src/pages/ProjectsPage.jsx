import React from 'react';
import PageHero from '../components/PageHero';
import Projects from '../components/sections/Projects';
import ContactCTA from '../components/sections/ContactCTA';

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Projects"
        title="A portfolio of homes we’re proud of."
        subtitle="Browse a selection of custom homes, house-and-land builds and luxury residences we’ve crafted across SA."
      />
      <Projects preview={false} hideHeader />
      <ContactCTA />
    </>
  );
}
