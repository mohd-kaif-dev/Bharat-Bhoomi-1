import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Define the BreakingNewsMarquee component
const BreakingNewsMarquee = () => {
  // Mock data for breaking news (will be replaced by backend data)
  const mockBreakingNews = [
    {
      id: 1,
      text: "दिल्ली में प्रदूषण का स्तर बढ़ा: स्वास्थ्य विभाग ने अलर्ट जारी किया।",
      link: "article3",
    }, // Pollution level increased in Delhi: Health department issued an alert.
    {
      id: 2,
      text: "शेयर बाजार में रिकॉर्ड उछाल, निवेशकों में खुशी की लहर।",
      link: "article3",
    }, // Record surge in stock market, wave of happiness among investors.
    {
      id: 3,
      text: "क्रिकेट विश्व कप: भारत ने सेमीफाइनल में प्रवेश किया।",
      link: "article3",
    }, // Cricket World Cup: India entered the semi-finals.
    {
      id: 4,
      text: "ग्रामीण विकास योजनाओं के लिए नई फंडिंग की घोषणा।",
      link: "article3",
    }, // New funding announced for rural development schemes.
    {
      id: 5,
      text: "नए कृषि कानूनों पर किसानों और सरकार के बीच वार्ता जारी।",
      link: "article3",
    }, // Talks continue between farmers and government on new agricultural laws.
  ];

  // State to hold the breaking news articles
  const [breakingNews, setBreakingNews] = useState([]);

  // useEffect hook to load the mock data when the component mounts
  // In a real application, this would be where you'd fetch data from your API
  useEffect(() => {
    // Simulate a network request delay
    const fetchNews = async () => {
      // For now, directly set the mock data
      setBreakingNews(mockBreakingNews);
    };

    fetchNews();
  }, []); // Empty dependency array means this effect runs once after the initial render

  // If there's no news, don't render the marquee
  if (breakingNews.length === 0) {
    return null;
  }

  return (
    <>
      {/* Styles for the marquee */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(10%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 60s linear infinite;
          }
          .marquee-content-duplicate {
            display: inline-block;
            padding-left: 2rem;
          }
        `}
      </style>

      {/* Marquee container */}
      <div className="bg-gradient-to-r from-accent-color to-orange-800 text-white py-2 px-2 md:px-4 shadow-lg overflow-hidden relative rounded-lg mx-auto mt-12">
        <div className="flex items-center">
          {/* Breaking News label */}
          <div className="bg-white text-red-700 font-bold px-3 py-1 rounded-md text-xs md:text-sm uppercase flex-shrink-0 mr-2 md:mr-4 shadow-inner ">
            <span className="hidden md:inline">Breaking</span>
            <span className="md:hidden">Top</span> News {/* Breaking News */}
          </div>

          {/* Marquee content wrapper */}
          <div className="relative flex-grow overflow-hidden h-6">
            {" "}
            {/* Fixed height for smooth scrolling */}
            <div className="absolute whitespace-nowrap animate-marquee">
              {/* Render each news item */}
              {breakingNews.map((newsItem) => (
                <span
                  key={newsItem.id}
                  className="inline-block mx-4 text-md md:text-lg font-medium"
                >
                  <Link to={newsItem.link} className="hover:text-white/70">
                    {newsItem.text}
                  </Link>
                </span>
              ))}
              {/* Duplicate content for seamless loop on wider screens */}
              {breakingNews.map((newsItem) => (
                <span
                  key={`dup-${newsItem.id}`}
                  className="inline-block mx-4 text-md md:text-lg font-medium marquee-content-duplicate"
                >
                  <a href={newsItem.link}>{newsItem.text}</a>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreakingNewsMarquee;
