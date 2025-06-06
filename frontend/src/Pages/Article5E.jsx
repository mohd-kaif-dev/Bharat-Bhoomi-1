import {
  RiFacebookFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
  RiWhatsappFill,
  RiFireFill, // Icon for Trending News
  RiLayoutGridFill, // Icon for Categories
} from "@remixicon/react"; // Assuming @remixicon/react is installed. Make sure to install it: npm install @remixicon/react
import { useEffect } from "react";

// Main App component for the news article page
const Article5E = () => {
  // --- Dummy Article Data (Replace with fetched data in a real application) ---
  const article = {
    id: "1",
    title:
      "India Forges Ahead: Unveiling a New Era of Sustainable Urban Development",
    category: "Environment",
    author: "Priya Sharma",
    date: "June 5, 2025",
    imageUrl:
      "https://img.freepik.com/premium-photo/aerial-view-sustainable-cityscape-with-solar-panels-green-roofs_161754-16815.jpg?w=900",
    imageAlt:
      "Modern cityscape with solar panels and green spaces, symbolizing sustainable urban development",
    tags: [
      "Sustainable Development",
      "Urban Planning",
      "India",
      "Innovation",
      "Green Initiatives",
      "Future Cities",
      "Environment",
    ],
    content: [
      {
        type: "paragraph",
        text: 'NEW DELHI – In a historic announcement today, the Indian government launched its ambitious "Green Cities 2047" initiative, a comprehensive blueprint designed to transform urban centers into sustainable, resilient, and inclusive spaces for future generations. This pioneering program emphasizes eco-friendly infrastructure, renewable energy, and community-centric planning, marking a significant moment in India\'s journey towards environmental preservation and enhanced urbanization.',
      },
      {
        type: "heading",
        text: "The Vision Behind Green Cities 2047",
      },
      {
        type: "paragraph",
        text: 'Led by the Ministry of Urban Development and Housing, the initiative aims to integrate cutting-edge green technologies with traditional ecological knowledge. "Our vision is clear: to create cities that not only thrive economically but also coexist in harmony with nature," stated Dr. Anil Gupta, Minister for Urban Development, during a press conference. "We are committed to a future where clean air, abundant green spaces, and efficient resource management are not luxuries, but fundamental rights for every citizen."',
      },
      {
        type: "image",
        src: "https://static.vecteezy.com/system/resources/previews/027/484/672/large_2x/sustainable-green-building-in-modern-city-green-architecture-eco-friendly-building-sustainable-residential-building-with-vertical-garden-reduce-co2-apartment-with-green-environment-generative-ai-photo.jpg", // Another placeholder image
        alt: "Artist's rendering of eco-friendly architecture with vertical gardens and solar panels",
        caption:
          "Depiction of proposed eco-friendly urban architecture with vertical gardens and integrated solar solutions.",
      },
      {
        type: "paragraph",
        text: "Key pillars of Green Cities 2047 include widespread adoption of solar and wind energy for municipal operations, robust waste management systems emphasizing recycling and waste-to-energy conversion, and the development of extensive public transportation networks powered by clean energy. Additionally, the plan allocates significant resources for urban forestry, rainwater harvesting, and the rejuvenation of local water bodies. The comprehensive strategy also involves smart grid technologies, efficient water usage systems, and promoting green building materials to reduce the environmental footprint of construction.",
      },
      {
        type: "heading",
        text: "Community Engagement: A Cornerstone of Success",
      },
      {
        type: "paragraph",
        text: 'A critical aspect of the "Green Cities 2047" initiative is its emphasis on community participation. The government plans to launch nationwide awareness campaigns and establish citizen forums to foster a sense of ownership among residents. "Sustainable development isn\'t just about technology; it\'s about people," Dr. Gupta stressed. "We believe that the active involvement of our communities will be the true catalyst for the success of this monumental endeavor. Without public support and active participation, even the most innovative plans will struggle to reach their full potential."',
      },
      {
        type: "list",
        items: [
          "**Increased Green Cover:** Targeting a 30% increase in urban green spaces by 2040 through extensive tree plantation and park development.",
          "**Renewable Energy Integration:** Mandating solar panels on all new public and commercial buildings and promoting rooftop solar for residential properties.",
          "**Smart Waste Management:** Implementing segregated waste collection, advanced recycling facilities, and innovative waste-to-energy projects in all major cities.",
          "**Water Conservation:** Promoting rainwater harvesting and greywater recycling in all urban households and public institutions, along with the rejuvenation of ancient stepwells and water bodies.",
        ],
      },
      {
        type: "paragraph",
        text: "Pilot projects are already underway in three major metropolitan areas – Bengaluru, Ahmedabad, and Pune – showcasing innovative urban farming techniques, smart grid technologies, and sustainable mobility solutions. Early results show promising outcomes in reducing carbon footprints, improving urban biodiversity, and enhancing residents' quality of life. These pilot projects are serving as living laboratories to refine strategies before nationwide expansion.",
      },
      {
        type: "quote",
        text: '"This initiative represents a bold step towards a greener, healthier, and more prosperous India. It is a testament to our commitment to lead by example on the global stage, demonstrating that development and environmental preservation can go hand in hand."',
        author:
          "Narendra Singh, Chief Urban Planner and Lead Architect of Green Cities 2047",
      },
      {
        type: "paragraph",
        text: "The “Green Cities 2047” initiative is expected to attract significant international investment in green technologies and urban infrastructure, opening new avenues for job creation, fostering innovation, and driving sustainable economic growth. Analysts believe that if successful, the program could serve as a global model for developing nations grappling with the dual challenges of rapid urbanization and climate change, offering a scalable and replicable framework for ecological modernization.",
      },
      {
        type: "paragraph",
        text: "As India embarks on this transformative journey, the world watches with anticipation, hoping that the vibrant colors of green and sustainable living will soon define its burgeoning urban landscapes, setting a new benchmark for environmentally conscious development.",
      },
    ],
  };

  // --- Dummy Related News Data (Replace with fetched data) ---
  const relatedNews = [
    {
      id: "2",
      title: "Tech Breakthroughs Powering India's Smart City Vision",
      category: "Technology",
      imageUrl:
        "https://images.pexels.com/photos/28884704/pexels-photo-28884704/free-photo-of-urban-electric-car-charging-station-in-glasgow.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "#",
    },
    {
      id: "3",
      title:
        "Monsoon Rains Bring Relief, New Challenges to Agricultural Sector",
      category: "Agriculture",
      imageUrl:
        "https://images.pexels.com/photos/14431103/pexels-photo-14431103.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "#",
    },
    {
      id: "4",
      title: "Cultural Festivals Boost Local Tourism Across States This Season",
      category: "Culture",
      imageUrl:
        "https://images.pexels.com/photos/6713242/pexels-photo-6713242.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "#",
    },
    {
      id: "5",
      title:
        "Economic Outlook: India's GDP Growth Projections for the Next Quarter",
      category: "Business",
      imageUrl:
        "https://images.pexels.com/photos/7947752/pexels-photo-7947752.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "#",
    },
  ];

  // --- Dummy Trending News Data ---
  const trendingNews = [
    {
      id: "t1",
      title: "Global Semiconductor Shortage Continues to Impact Tech Industry",
      link: "#",
    },
    {
      id: "t2",
      title: "Rise of Decentralized Finance: Opportunities and Risks",
      link: "#",
    },
    {
      id: "t3",
      title: "Impact of Climate Change on Coastal Ecosystems",
      link: "#",
    },
    {
      id: "t4",
      title: "Future of Work: Hybrid Models and Remote Collaboration",
      link: "#",
    },
  ];

  // --- Dummy Categories Data ---
  const categories = [
    "Technology",
    "Business",
    "Environment",
    "Culture",
    "Politics",
    "Sports",
    "Health",
    "Education",
  ];

  // --- Dummy Comments (Replace with fetched data and state management) ---
  const comments = [
    {
      id: 1,
      author: "Rajesh K.",
      date: "June 5, 2025",
      text: "This is truly an inspiring initiative. Hope to see widespread implementation soon!",
    },
    {
      id: 2,
      author: "Anjali S.",
      date: "June 6, 2025",
      text: "Focusing on community engagement is crucial. Sustainable development needs public participation.",
    },
    {
      id: 3,
      author: "Vikram M.",
      date: "June 6, 2025",
      text: "Great article, Bharat Bhoomi! Very insightful. What are the funding mechanisms for this project?",
    },
  ];

  // Helper function to render article content based on its type
  const renderContent = (contentBlocks) => {
    return contentBlocks.map((block, index) => {
      switch (block.type) {
        case "paragraph":
          return (
            <p
              key={index}
              className="mb-6 text-lg leading-relaxed text-primary-text dark:text-secondary-text"
            >
              {block.text}
            </p>
          );
        case "heading":
          return (
            <h2
              key={index}
              className="text-3xl md:text-4xl font-bold mb-4 mt-8 text-primary-text dark:text-secondary-text border-b border-primary-text/20 dark:border-secondary-text/20 pb-2"
            >
              {block.text}
            </h2>
          );
        case "image":
          return (
            <figure key={index} className="my-8 text-center">
              <img
                src={block.src}
                alt={block.alt}
                className="w-full h-auto rounded-lg shadow-lg mx-auto"
                onError={(e) => {
                  e.target.src =
                    "https://placehold.co/800x400/CCCCCC/000000?text=Image+Not+Found";
                }}
              />
              {block.caption && (
                <figcaption className="mt-3 text-base text-primary-text/70 dark:text-secondary-text/70 italic">
                  {block.caption}
                </figcaption>
              )}
            </figure>
          );
        case "list":
          return (
            <ul
              key={index}
              className="list-disc list-inside mb-6 space-y-2 text-lg text-primary-text dark:text-secondary-text pl-4"
            >
              {block.items.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }}></li>
              ))}
            </ul>
          );
        case "quote":
          return (
            <blockquote
              key={index}
              className="my-8 p-4 border-l-4 border-primary-accent dark:border-secondary-accent bg-primary-bg-light dark:bg-secondary-bg-dark italic text-xl text-primary-text dark:text-secondary-text rounded-md"
            >
              <p className="mb-2">"{block.text}"</p>
              {block.author && (
                <footer className="text-right text-primary-text/80 dark:text-secondary-text/80 not-italic">
                  – {block.author}
                </footer>
              )}
            </blockquote>
          );
        default:
          return null;
      }
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-primary-bg dark:bg-secondary-bg text-primary-text dark:text-secondary-text font-sans p-2 lg:p-4 transition-colors duration-300 w-full">
      {/* Main content area: Article + Sidebar */}
      <div className="w-full flex flex-col md:flex-row gap-2 lg:gap-8 ">
        {/* Left Section: Main Article Content (3/4 width on medium screens and up) */}
        <div className="w-full md:w-3/4">
          <article className="bg-primary-bg-light dark:bg-secondary-bg-dark rounded-lg shadow-xl p-2 lg:p-4 transition-colors duration-300">
            {/* Article Header */}
            <header className="mb-8 text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-primary-accent dark:text-secondary-text">
                {article.title}
              </h1>
              <p className="text-lg md:text-xl text-primary-text/80 dark:text-secondary-text/80 mb-2">
                By{" "}
                <span className="font-semibold text-primary-accent dark:text-secondary-text">
                  {article.author}
                </span>{" "}
                in{" "}
                <span className="font-semibold text-accent-color">
                  {article.category}
                </span>
              </p>
              <p className="text-md text-primary-text/60 dark:text-secondary-text/60">
                {article.date}
              </p>
            </header>

            {/* Main Article Image */}
            <div className="mb-8">
              <img
                src={article.imageUrl}
                alt={article.imageAlt}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                onError={(e) => {
                  e.target.src =
                    "https://placehold.co/1200x675/CCCCCC/000000?text=Main+Image+Not+Found";
                }}
              />
            </div>

            {/* Article Body Content */}
            <div className="prose lg:prose-xl prose-primary-text dark:prose-secondary-text mx-auto">
              {renderContent(article.content)}
            </div>

            {/* Tags Section */}
            <section className="my-10 border-t border-primary-text/10 dark:border-secondary-text/10 pt-6">
              <h3 className="text-2xl font-bold mb-4 text-primary-text dark:text-secondary-text">
                Tags:
              </h3>
              <div className="flex flex-wrap gap-3">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-primary-bg-light dark:bg-secondary-bg-dark text-primary-text dark:text-secondary-text px-4 py-1 rounded-full text-md font-medium border border-primary-text/20 dark:border-secondary-text/20 hover:bg-primary-accent hover:text-white dark:hover:bg-secondary-accent dark:hover:text-black transition-colors duration-200 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            {/* Social Sharing */}
            <section className="my-10 text-center border-t border-b border-primary-text/10 dark:border-secondary-text/10 py-6">
              <h3 className="text-2xl font-bold mb-4 text-primary-text dark:text-secondary-text">
                Share This Article:
              </h3>
              <div className="flex justify-center space-x-6">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    window.location.href
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-text dark:text-secondary-text hover:text-blue-600 transition-colors duration-200 text-3xl"
                  aria-label="Share on Facebook"
                >
                  <RiFacebookFill className="w-8 h-8" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    window.location.href
                  )}&text=${encodeURIComponent(article.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-text dark:text-secondary-text hover:text-blue-400 transition-colors duration-200 text-3xl"
                  aria-label="Share on Twitter"
                >
                  <RiTwitterXFill className="w-8 h-8" />
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                    window.location.href
                  )}&title=${encodeURIComponent(article.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-text dark:text-secondary-text hover:text-blue-700 transition-colors duration-200 text-3xl"
                  aria-label="Share on LinkedIn"
                >
                  <RiLinkedinBoxFill className="w-8 h-8" />
                </a>
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                    article.title + " " + window.location.href
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-text dark:text-secondary-text hover:text-green-500 transition-colors duration-200 text-3xl"
                  aria-label="Share on WhatsApp"
                >
                  <RiWhatsappFill className="w-8 h-8" />
                </a>
              </div>
            </section>
          </article>
        </div>

        {/* Right Section: Sidebar (1/4 width on medium screens and up) */}
        <aside className="w-full md:w-1/4 space-y-8">
          {" "}
          {/* Related News Section */}
          <section className="bg-primary-bg-light dark:bg-secondary-bg-dark rounded-lg shadow-lg p-2 transition-colors duration-300">
            <h2 className="text-2xl font-bold mb-4 text-primary-text dark:text-secondary-text border-b border-primary-text/10 dark:border-secondary-text/10 pb-3 flex items-center">
              <RiLayoutGridFill className="inline-block w-6 h-6 mr-2 text-accent-color" />
              Related News
            </h2>
            <div className="space-y-4">
              {relatedNews.map((news) => (
                <a
                  href={news.link}
                  key={news.id}
                  className="block group transition-transform duration-200 hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={news.imageUrl}
                      alt={news.title}
                      className="w-20 h-16 object-cover rounded-md flex-shrink-0"
                      onError={(e) => {
                        e.target.src =
                          "https://placehold.co/80x64/CCCCCC/000000?text=News";
                      }}
                    />
                    <div>
                      <p className="text-sm font-semibold text-accent-color">
                        {news.category}
                      </p>
                      <h3 className="text-md font-semibold text-primary-text dark:text-secondary-text group-hover:text-primary-accent dark:group-hover:text-secondary-accent leading-tight">
                        {news.title}
                      </h3>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
          {/* Trending News Section (New Addition) */}
          <section className="bg-primary-bg-light dark:bg-secondary-bg-dark rounded-lg shadow-lg p-6 transition-colors duration-300">
            <h2 className="text-2xl font-bold mb-4 text-primary-text dark:text-secondary-text border-b border-primary-text/10 dark:border-secondary-text/10 pb-3 flex items-center">
              <RiFireFill className="inline-block w-6 h-6 mr-2 text-red-500" />{" "}
              {/* Fire icon for trending */}
              Trending News
            </h2>
            <ul className="space-y-3">
              {trendingNews.map((news) => (
                <li key={news.id}>
                  <a
                    href={news.link}
                    className="text-primary-text dark:text-secondary-text hover:text-primary-accent dark:hover:text-secondary-accent transition-colors duration-200"
                  >
                    <span className="font-semibold">{news.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
          {/* Categories Section (New Addition) */}
          <section className="bg-primary-bg-light dark:bg-secondary-bg-dark rounded-lg shadow-lg p-6 transition-colors duration-300">
            <h2 className="text-2xl font-bold mb-4 text-primary-text dark:text-secondary-text border-b border-primary-text/10 dark:border-secondary-text/10 pb-3 flex items-center">
              <RiLayoutGridFill className="inline-block w-6 h-6 mr-2 text-accent-color" />
              Categories
            </h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <a
                  key={index}
                  href={`#${category.toLowerCase().replace(/\s/g, "-")}`} // Example link
                  className="bg-primary-bg-light dark:bg-secondary-bg-dark text-primary-text dark:text-secondary-text px-3 py-1 rounded-full text-sm font-medium border border-primary-text/20 dark:border-secondary-text/20 hover:bg-primary-accent hover:text-white dark:hover:bg-secondary-accent dark:hover:text-black transition-colors duration-200 cursor-pointer"
                >
                  {category}
                </a>
              ))}
            </div>
          </section>
          {/* Newsletter Signup */}
          <section className="bg-gradient-to-br from-primary-accent to-accent-color dark:from-secondary-accent dark:to-accent-color text-white rounded-lg shadow-lg p-6 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Subscribe to Our Newsletter
            </h2>
            <p className="mb-4 text-sm opacity-90">
              Get the latest headlines delivered straight to your inbox!
            </p>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md mb-3 bg-white bg-opacity-90 text-primary-text placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="w-full bg-white text-primary-accent dark:text-secondary-accent py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
              Subscribe
            </button>
          </section>
          {/* Advertising Placeholder */}
          <section className="bg-primary-bg-light dark:bg-secondary-bg-dark rounded-lg shadow-lg p-6 text-center transition-colors duration-300">
            <h3 className="text-xl font-bold mb-3 text-primary-text dark:text-secondary-text">
              Advertisement
            </h3>
            <div className="bg-gray-200 dark:bg-gray-700 h-48 flex items-center justify-center rounded-md text-gray-500 dark:text-gray-400">
              <p>Your Ad Here</p>
            </div>
          </section>
        </aside>
      </div>

      {/* Full-width Comments Section - Moved outside the flex container */}
      <section className="container mx-auto my-10 max-w-4xl">
        {" "}
        {/* Adjusted to align with article width */}
        <h2 className="text-3xl font-bold mb-6 text-primary-text dark:text-secondary-text border-b-2 border-primary-accent dark:border-secondary-accent pb-3">
          Comments ({comments.length})
        </h2>
        <div className="space-y-6">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-primary-bg-light dark:bg-secondary-bg-dark p-4 rounded-lg shadow transition-colors duration-300 border border-primary-text/10 dark:border-secondary-text/10"
            >
              <p className="font-semibold text-primary-text dark:text-secondary-text">
                {comment.author}{" "}
                <span className="text-sm text-primary-text/60 dark:text-secondary-text/60 ml-2">
                  {comment.date}
                </span>
              </p>
              <p className="mt-2 text-primary-text dark:text-secondary-text">
                {comment.text}
              </p>
            </div>
          ))}
          {/* Comment Form */}
          <div className="mt-8 p-4 bg-primary-bg-light dark:bg-secondary-bg-dark rounded-lg border border-primary-text/10 dark:border-secondary-text/10 shadow">
            <h4 className="text-xl font-semibold mb-4 text-primary-text dark:text-secondary-text">
              Leave a Comment
            </h4>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 mb-4 rounded-md border border-primary-text/30 dark:border-secondary-text/30 bg-transparent text-primary-text dark:text-secondary-text placeholder-primary-text/50 dark:placeholder-secondary-text/50 focus:outline-none focus:ring-2 focus:ring-primary-accent dark:focus:ring-secondary-accent"
            />
            <textarea
              placeholder="Your Comment"
              rows="5"
              className="w-full p-3 mb-4 rounded-md border border-primary-text/30 dark:border-secondary-text/30 bg-transparent text-primary-text dark:text-secondary-text placeholder-primary-text/50 dark:placeholder-secondary-text/50 focus:outline-none focus:ring-2 focus:ring-primary-accent dark:focus:ring-secondary-accent"
            ></textarea>
            <button className="bg-primary-accent dark:bg-secondary-accent text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-hover dark:hover:bg-secondary-hover transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-accent dark:focus:ring-secondary-accent focus:ring-offset-2">
              Post Comment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Article5E;
