import {
  RiFacebookFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
  RiWhatsappFill,
} from "@remixicon/react";

const Article2 = () => {
  // --- Dummy Article Data (Replace with fetched data in a real application) ---
  const article = {
    id: "1",
    title:
      "India Forges Ahead: A New Era of Sustainable Urban Development Unveiled",
    category: "Environment",
    author: "Priya Sharma",
    date: "June 5, 2025",
    imageUrl:
      "https://img.freepik.com/premium-photo/aerial-view-sustainable-cityscape-with-solar-panels-green-roofs_161754-16815.jpg?w=900",
    imageAlt:
      "Modern cityscape with green spaces and solar panels, symbolizing sustainable urban development",
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
        text: 'NEW DELHI – In a landmark announcement today, the Indian government launched its ambitious "Green Cities 2047" initiative, a comprehensive blueprint designed to transform urban centers into sustainable, resilient, and inclusive spaces for future generations. This pioneering program emphasizes eco-friendly infrastructure, renewable energy, and community-centric planning, marking a pivotal moment in India\'s journey towards environmental stewardship and advanced urbanization.',
      },
      {
        type: "heading",
        text: "The Vision Behind Green Cities 2047",
      },
      {
        type: "paragraph",
        text: 'The initiative, spearheaded by the Ministry of Urban Development and Housing, aims to integrate cutting-edge green technologies with traditional ecological knowledge. "Our vision is clear: to build cities that not only thrive economically but also live in harmony with nature," stated Minister of Urban Development, Dr. Anil Gupta, during a press conference. "We are committing to a future where clean air, abundant green spaces, and efficient resource management are not luxuries, but fundamental rights for every citizen."',
      },
      {
        type: "image",
        src: "https://static.vecteezy.com/system/resources/previews/027/484/672/large_2x/sustainable-green-building-in-modern-city-green-architecture-eco-friendly-building-sustainable-residential-building-with-vertical-garden-reduce-co2-apartment-with-green-environment-generative-ai-photo.jpg", // Another placeholder image
        alt: "Artist's rendering of eco-friendly architecture with vertical gardens and solar panels",
        caption:
          "Illustration of proposed eco-friendly urban architecture with vertical gardens and integrated solar solutions.",
      },
      {
        type: "paragraph",
        text: "Key pillars of Green Cities 2047 include widespread adoption of solar and wind energy for municipal operations, robust waste management systems emphasizing recycling and waste-to-energy conversion, and the development of extensive public transportation networks powered by clean energy. Furthermore, the plan allocates significant resources for urban forestry, rainwater harvesting, and the restoration of local water bodies. The comprehensive strategy also includes smart grid technologies, efficient water usage systems, and the promotion of green building materials to reduce the environmental footprint of construction.",
      },
      {
        type: "heading",
        text: "Community Engagement: The Cornerstone of Success",
      },
      {
        type: "paragraph",
        text: 'A crucial aspect of the "Green Cities 2047" initiative is its emphasis on community participation. The government plans to launch nationwide awareness campaigns and establish citizen forums to gather feedback and foster a sense of ownership among residents. "Sustainable development is not just about technology; it\'s about people," Dr. Gupta emphasized. "We believe that the active involvement of our communities will be the true catalyst for the success of this monumental endeavor. Without public support and active participation, even the most innovative plans will struggle to reach their full potential."',
      },
      {
        type: "list",
        items: [
          "**Increased Green Cover:** Targets include increasing urban green spaces by 30% by 2040 through extensive tree planting and park development.",
          "**Renewable Energy Integration:** Mandating solar panels on all new public and commercial buildings and promoting rooftop solar for residential properties.",
          "**Smart Waste Management:** Implementing segregated waste collection, advanced recycling facilities, and innovative waste-to-energy projects across all major cities.",
          "**Water Conservation:** Promoting rainwater harvesting and greywater recycling in all urban households and public institutions, alongside revitalizing ancient stepwells and water bodies.",
        ],
      },
      {
        type: "paragraph",
        text: "Pilot projects are already underway in three major metropolitan areas – Bengaluru, Ahmedabad, and Pune – showcasing innovative urban farming techniques, smart grid technologies, and sustainable mobility solutions. Early results indicate promising outcomes in reducing carbon footprints, improving urban biodiversity, and enhancing the quality of life for residents. These pilot projects are serving as living laboratories to refine strategies before nationwide rollout.",
      },
      {
        type: "quote",
        text: '"This initiative represents a bold step towards a greener, healthier, and more prosperous India. It\'s a testament to our commitment to lead by example on the global stage, demonstrating that development and environmental protection can go hand-in-hand."',
        author:
          "Narendra Singh, Chief Urban Planner & Lead Architect of Green Cities 2047",
      },
      {
        type: "paragraph",
        text: 'The "Green Cities 2047" initiative is expected to attract significant international investment in green technologies and urban infrastructure, opening new avenues for job creation, fostering innovation, and driving sustainable economic growth. Analysts believe that if successful, this program could serve as a global model for developing nations grappling with the twin challenges of rapid urbanization and climate change, offering a scalable and replicable framework for ecological modernization.',
      },
      {
        type: "paragraph",
        text: "As India embarks on this transformative journey, the world watches with anticipation, hopeful that the vibrant colors of green and sustainable living will soon define its burgeoning urban landscapes, setting a new benchmark for environmentally conscious development.",
      },
    ],
  };

  // --- Dummy Related News Data (Replace with fetched data) ---
  const relatedNews = [
    {
      id: "2",
      title: "Technological Breakthroughs Powering India's Smart Cities Vision",
      category: "Technology",
      imageUrl:
        "https://images.pexels.com/photos/28884704/pexels-photo-28884704/free-photo-of-urban-electric-car-charging-station-in-glasgow.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "#",
    },
    {
      id: "3",
      title:
        "Monsoon Rains Bring Respite, New Challenges to Agricultural Sector",
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
        "Economic Outlook: India's GDP Growth Projections for Next Quarter",
      category: "Business",
      imageUrl:
        "https://images.pexels.com/photos/7947752/pexels-photo-7947752.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "#",
    },
  ];

  // --- Dummy Comments (Replace with fetched data and state management) ---
  const comments = [
    {
      id: 1,
      author: "Rajesh K.",
      date: "June 5, 2025",
      text: "This is a truly inspiring initiative. Hope to see widespread implementation soon!",
    },
    {
      id: 2,
      author: "Anjali S.",
      date: "June 6, 2025",
      text: "The focus on community engagement is key. Sustainable development needs public participation.",
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

  return (
    <div className="container mx-auto px-4 py-8 bg-primary-bg dark:bg-secondary-bg text-primary-text dark:text-secondary-text transition-colors duration-300">
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
        />
      </div>

      {/* Article Content */}
      {/* The 'prose' class from @tailwindcss/typography plugin helps style raw HTML content (p, h1, ul, etc.) */}
      <article className="max-w-4xl mx-auto py-4 prose lg:prose-xl prose-primary-text dark:prose-secondary-text">
        {renderContent(article.content)}
      </article>

      {/* Tags Section */}
      <section className="max-w-4xl mx-auto my-10">
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
      <section className="max-w-4xl mx-auto my-10 text-center border-t border-b border-primary-text/10 dark:border-secondary-text/10 py-6">
        <h3 className="text-2xl font-bold mb-4 text-primary-text dark:text-secondary-text">
          Share This Article:
        </h3>
        <div className="flex justify-center space-x-6">
          {/* Replace text with actual icons if you install a library like react-icons */}
          <a
            href="#"
            className="text-primary-text dark:text-secondary-text hover:text-primary-accent dark:hover:text-secondary-accent transition-colors duration-200 text-3xl"
            aria-label="Share on Facebook"
          >
            <RiFacebookFill className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-primary-text dark:text-secondary-text hover:text-primary-accent dark:hover:text-secondary-accent transition-colors duration-200 text-3xl"
            aria-label="Share on Twitter"
          >
            <RiTwitterXFill className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-primary-text dark:text-secondary-text hover:text-primary-accent dark:hover:text-secondary-accent transition-colors duration-200 text-3xl"
            aria-label="Share on LinkedIn"
          >
            <RiLinkedinBoxFill className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-primary-text dark:text-secondary-text hover:text-primary-accent dark:hover:text-secondary-accent transition-colors duration-200 text-3xl"
            aria-label="Share on WhatsApp"
          >
            <RiWhatsappFill className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* Related News Section */}
      <section className="max-w-4xl mx-auto my-10">
        <h2 className="text-3xl font-bold mb-6 text-primary-text dark:text-secondary-text border-b-2 border-primary-accent dark:border-secondary-accent pb-3">
          Related News
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {" "}
          {/* Increased to 4 columns on large screens */}
          {relatedNews.map((news) => (
            <div
              key={news.id}
              className="rounded-lg shadow-lg overflow-hidden bg-primary-bg-light dark:bg-secondary-bg-dark transition-colors duration-300 hover:shadow-xl hover:-translate-y-1 transform"
            >
              <img
                src={news.imageUrl}
                alt={news.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm font-semibold text-primary-accent dark:text-secondary-accent mb-1">
                  {news.category}
                </p>{" "}
                {/* Category moved up */}
                <h3 className="text-lg font-semibold mb-2 text-primary-text dark:text-secondary-text leading-tight">
                  {news.title}
                </h3>{" "}
                {/* Smaller title for card, tighter leading */}
                <a
                  href={news.link}
                  className="inline-block text-primary-accent dark:text-secondary-accent hover:underline font-medium text-sm"
                >
                  Read More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comments Section */}
      <section className="max-w-4xl mx-auto my-10">
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

export default Article2;
