import React, { useState, useEffect, useCallback } from "react";
import Header from "./Components/Header/Header";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Service from "./Components/Services/Service";
import Qualification from "./Components/Qualification/Qualification";
import Contact from "./Components/Contact/Contact";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";
import CustomCursor from './Components/CustomCursor/CustomCursor';
import ScrollProgress from './Components/Common/ScrollProgress';
import BackToTop from './Components/Common/BackToTop';
import SectionNav from './Components/Common/SectionNav';
import ErrorBoundary from './Components/Common/ErrorBoundary';
import { isMobileDevice } from './utils/sanitize';
import TechStack from "./Components/TechStack/TechStack";
import Testimonial from "./Components/Testimonial/Testimonial";
import Portfolio from "./Components/Portfolio/Portfolio";
import WebsiteReview from "./Components/Notification/WebsiteReview";

function App() {
  const [isNotified, setIsNotified] = useState(false);
  const [review, setReview] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);
  useEffect(() => {
    try {
      const existingReview = localStorage.getItem("websiteReviews");
      // Only show notification if there's no review and user hasn't skipped
      if (!existingReview || existingReview === "") {
        const timeout = setTimeout(() => setIsNotified(true), 50000);
        return () => clearTimeout(timeout);
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
  }, []);
  const handleReviewSubmit = useCallback(() => {
    if (review.trim()) {
      try {
        const sanitizedReview = review.replace(/[^a-zA-Z0-9\s.,!?-]/g, "");
        // Save both the review and a timestamp
        const reviewData = {
          text: sanitizedReview,
          timestamp: new Date().toISOString(),
          submitted: true
        };
        localStorage.setItem("websiteReviews", JSON.stringify(reviewData));
        setIsNotified(false);
        setReview("");
      } catch (error) {
        console.error("Error saving review to localStorage:", error);
      }
    }
  }, [review]);

  const handleCloseNotification = useCallback(() => {
    setIsNotified(false);
    localStorage.setItem("websiteReviews", "skipped");
  }, []);

  return (
    <>
      <ErrorBoundary>
        <CustomCursor />
        {!isMobile && <LoadingScreen />}
        <Header />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Service />
          <TechStack/>
          <Portfolio />
          <Qualification />
          <Testimonial />
          <Contact />
          <WebsiteReview 
            isOpen={isNotified}
            onClose={handleCloseNotification}
            onSubmit={handleReviewSubmit}
            review={review}
            setReview={setReview}
          />
        </main>
        
        <ScrollProgress />
        <BackToTop />
        <SectionNav />
      </ErrorBoundary>
    </>
  );
}

export default App;