import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Footer from './Components/Footer/Footer'
import { isMobileDevice } from './utils/sanitize';
import TechStack from "./Components/TechStack/TechStack";
import Testimonial from "./Components/Testimonial/Testimonial";
import Portfolio from "./Components/Portfolio/Portfolio";
import Blog from "./Components/Blog/Blog";
import WebsiteReview from "./Components/Notification/WebsiteReview";
import emailjs from '@emailjs/browser';

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
      if (existingReview && existingReview !== "skipped") {
        const reviewData = JSON.parse(existingReview);
        const reviewDate = new Date(reviewData.timestamp);
        const currentDate = new Date();
        const daysDifference = (currentDate - reviewDate) / (1000 * 60 * 60 * 24);
        
        // Clear review if it's older than 3 days
        if (daysDifference > 3) {
          localStorage.removeItem("websiteReviews");
          setIsNotified(true);
        }
      } else if (!existingReview || existingReview === "") {
        const timeout = setTimeout(() => setIsNotified(true), 60000);
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
        
        // Send email notification
        const templateParams = {
          from_name: 'Website Review',
          message: sanitizedReview,
          to_name: 'Franklin', // Replace with your name
          reply_to: 'user@example.com', // Optional: if you want to collect user's email
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString()
        };

        emailjs.send(
          'service_3x622o2',
          'template_6gx0h83',
          templateParams,
          'A02LoOILweqDkxDS0'
        )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
          console.error('FAILED...', err);
        });

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

  const HomePage = () => (
    <main>
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Service />
      <TechStack/>
      <Qualification />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  );

  return (
    <Router>
      <ErrorBoundary>
        <CustomCursor />
        {!isMobile && <LoadingScreen />}
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:projectId" element={<Blog />} />
        </Routes>
        <WebsiteReview 
          isOpen={isNotified}
          onClose={handleCloseNotification}
          onSubmit={handleReviewSubmit}
          review={review}
          setReview={setReview}
        />
        <ScrollProgress />
        <BackToTop />
        <SectionNav />
      </ErrorBoundary>
    </Router>
  );
}

export default App;