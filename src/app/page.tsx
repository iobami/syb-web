"use client";

import React from "react";
import {
  Hero,
  PreviousWork,
  WorkWithUs,
  MeetTheTeam,
  OurServices,
  HowWeWork,
  BookACall,
  Footer
} from "@/components/shared/home";

export default function Page() {
  return (
    <div className="baba_wrapper">
      <main className="h-full app_main">
        <Hero />
        <PreviousWork />
        <WorkWithUs />
        <OurServices />
        <HowWeWork />
        <BookACall />
        <MeetTheTeam />
        <Footer />
      </main>
    </div>
  );
}