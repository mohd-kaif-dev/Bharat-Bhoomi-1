import { Link } from "react-router-dom";
import BreakingNewsMarquee from "../Components/Utility/BreakingNewsMarquee";
import Category from "../Components/Utility/Category";

const Home = () => {
  const articles = [
    {
      id: 1,
      category: "Politics",
      title: "Election Results: A New Era Begins",
      description:
        "The latest election results have brought a significant shift in the political landscape.",
      imageUrl:
        "https://tse3.mm.bing.net/th/id/OIP.8P31y5ji9cdMsdPlFEymBAHaEK?rs=1&pid=ImgDetMain",
      date: "June 1, 2025",
      articleLink: "article5E",
    },
    {
      id: 2,
      category: "Business",
      title: "Stock Market Soars: Investors Rejoice",
      description:
        "A promising economic report has led to a surge in stock market activity.",
      imageUrl:
        "https://images.pexels.com/photos/186464/pexels-photo-186464.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "May 30, 2025",
      articleLink: "article2E",
    },
    {
      id: 3,
      category: "Health",
      title: "New Health Guidelines Released",
      description:
        "Health officials have released new guidelines for a healthier lifestyle.",
      imageUrl:
        "https://images.pexels.com/photos/6084304/pexels-photo-6084304.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "May 29, 2025",
      articleLink: "news",
    },
    {
      id: 4,
      category: "Travel",
      title: "Top Travel Destinations for 2025",
      description:
        "Explore the most sought-after travel destinations for the upcoming year.",
      imageUrl:
        "https://images.pexels.com/photos/7263503/pexels-photo-7263503.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "May 28, 2025",
      articleLink: "article5E",
    },
    {
      id: 5,
      category: "Sports",
      title: "World Cup Fever: Teams Prepare for Battle",
      description:
        "Teams from around the globe gear up for the highly anticipated World Cup.",
      imageUrl:
        "https://th.bing.com/th/id/OIP.SICdzUkLAeCLx1uUV93mhQHaEK?w=286&h=180&c=7&r=0&o=5&pid=1.7",
      date: "May 27, 2025",
      articleLink: "article5E",
    },
    {
      id: 6,
      category: "Education",
      title: "Innovative Education Techniques on the Rise",
      description:
        "New teaching methods are transforming the education landscape.",
      imageUrl:
        "https://tse4.mm.bing.net/th/id/OIP.RAXJittKNPHHuWRQW-NA5gHaEL?rs=1&pid=ImgDetMain",
      date: "May 26, 2025",
      articleLink: "article5E",
    },
  ];

  const hindiArticles = [
    {
      id: 1,
      category: "राजनीति", // Politics
      title: "चुनाव परिणाम: एक नए युग की शुरुआत",
      description:
        "हाल के चुनाव परिणामों ने राजनीतिक परिदृश्य में एक महत्वपूर्ण बदलाव लाया है।",
      imageUrl:
        "https://tse3.mm.bing.net/th/id/OIP.8P31y5ji9cdMsdPlFEymBAHaEK?rs=1&pid=ImgDetMain",
      date: "जून 1, 2025",
      articleLink: "article4H",
    },
    {
      id: 2,
      category: "विज्ञान", // Science
      title: "अंतरिक्ष में भारत का नया कीर्तिमान",
      description:
        "भारतीय वैज्ञानिकों ने अंतरिक्ष अनुसंधान में एक और महत्वपूर्ण उपलब्धि हासिल की है।",
      imageUrl:
        "https://images.pexels.com/photos/186464/pexels-photo-186464.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "मई 30, 2025",
      articleLink: "article3H",
    },
    {
      id: 3,
      category: "स्वास्थ्य", // Health
      title: "स्वास्थ्य के लिए नए दिशा-निर्देश जारी",
      description:
        "स्वास्थ्य अधिकारियों ने स्वस्थ जीवनशैली के लिए नए दिशानिर्देश जारी किए हैं।",
      imageUrl:
        "https://images.pexels.com/photos/6084304/pexels-photo-6084304.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "मई 29, 2025",
      articleLink: "article4H",
    },
    {
      id: 4,
      category: "यात्रा", // Travel
      title: "2025 के लिए शीर्ष पर्यटन स्थल",
      description:
        "आगामी वर्ष के लिए सबसे अधिक मांग वाले पर्यटन स्थलों का अन्वेषण करें।",
      imageUrl:
        "https://images.pexels.com/photos/7263503/pexels-photo-7263503.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "मई 28, 2025",
      articleLink: "article3",
    },
    {
      id: 5,
      category: "खेल", // Sports
      title: "विश्व कप का बुखार: टीमें युद्ध के लिए तैयार",
      description:
        "दुनिया भर की टीमें बहुप्रतीक्षित विश्व कप के लिए कमर कस रही हैं।",
      imageUrl:
        "https://th.bing.com/th/id/OIP.SICdzUkLAeCLx1uUV93mhQHaEK?w=286&h=180&c=7&r=0&o=5&pid=1.7",
      date: "मई 27, 2025",
      articleLink: "article4H",
    },
    {
      id: 6,
      category: "शिक्षा", // Education
      title: "शिक्षा में नवाचार तकनीकों का उदय",
      description: "नई शिक्षण विधियाँ शिक्षा परिदृश्य को बदल रही हैं।",
      imageUrl:
        "https://tse4.mm.bing.net/th/id/OIP.RAXJittKNPHHuWRQW-NA5gHaEL?rs=1&pid=ImgDetMain",
      date: "मई 26, 2025",
      articleLink: "article4H",
    },
    {
      id: 7,
      category: "पर्यावरण", // Environment
      title: "जलवायु परिवर्तन: वैश्विक चुनौतियाँ और समाधान",
      description:
        "बढ़ते जलवायु परिवर्तन और उसके प्रभावों से निपटने के लिए वैश्विक प्रयास।",
      imageUrl:
        "https://images.pexels.com/photos/11082531/pexels-photo-11082531.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "मई 25, 2025",
      articleLink: "article4H",
    },
    {
      id: 8,
      category: "मनोरंजन", // Entertainment
      title: "बॉलीवुड की नई फिल्म ने तोड़े रिकॉर्ड",
      description:
        "हाल ही में रिलीज़ हुई फिल्म ने बॉक्स ऑफिस पर धमाल मचा दिया है।",
      imageUrl:
        "https://tse2.mm.bing.net/th/id/OIP._HVF0Y5dHb-ARFmN1zjbNQHaEK?rs=1&pid=ImgDetMain",
      date: "मई 24, 2025",
      articleLink: "article4H",
    },
    {
      id: 9,
      category: "अर्थव्यवस्था", // Economy
      title: "भारतीय अर्थव्यवस्था में तेज़ी: नए निवेश के अवसर",
      description:
        "सरकार की नीतियों के कारण भारतीय अर्थव्यवस्था में नई जान आई है।",
      imageUrl:
        "https://tse4.mm.bing.net/th/id/OIP.lO7QIUMd4dBBOYXIVr9I2wHaEK?rs=1&pid=ImgDetMain",
      date: "मई 23, 2025",
      articleLink: "article4H",
    },
    {
      id: 10,
      category: "टेक्नोलॉजी", // Technology
      title: "आर्टिफिशियल इंटेलिजेंस का बढ़ता प्रभाव",
      description:
        "आर्टिफिशियल इंटेलिजेंस (AI) हमारे जीवन को कैसे बदल रहा है, जानिए।",
      imageUrl:
        "https://tse3.mm.bing.net/th/id/OIP.4r2XMo_CK93SFCqP03Uw_gHaEK?rs=1&pid=ImgDetMain",
      date: "मई 22, 2025",
      articleLink: "article4H",
    },
  ];

  const categories = [
    "Politics",
    "Business",
    "Health",
    "Travel",
    "Sports",
    "Education",
    "Entertainment",
    "Lifestyle",
  ];

  return (
    <>
      <nav
        className={`
          w-full px-4 py-3 border-b transition-colors duration-300
          bg-primary-bg text-primary-text dark:bg-secondary-bg dark:text-secondary-text
          border-gray-200 dark:border-gray-700
          shadow-sm
        `}
      >
        <Category categories={categories} />
        <BreakingNewsMarquee />
      </nav>

      {/* Main Content Section */}
      <section
        className={`
          p-4 min-h-[calc(100vh-120px)] 
          bg-primary-bg text-primary-text
          dark:bg-secondary-bg dark:text-secondary-text
          transition-colors duration-300
        `}
      >
        <div className="container mx-auto">
          {/* Trending News Section */}
          <div className="mb-12">
            <h2
              className={`
                text-2xl md:text-3xl font-bold mb-6 pb-2 border-b-2
                text-primary-text dark:text-secondary-text
                border-primary-accent dark:border-secondary-accent
                transition-colors duration-300
              `}
            >
              Trending News
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link to={article.articleLink} key={article.id}>
                  <div
                    className={`
                    rounded-lg shadow-md overflow-hidden transform transition duration-300
                    bg-primary-bg dark:bg-secondary-accent
                    hover:scale-[1.01] hover:shadow-xl 
                    border border-gray-200 dark:border-gray-700
                  `}
                  >
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <span
                        className={`
                        text-sm font-semibold uppercase mb-2 block
                        text-red-500 // Keeping red for category accent as it's common in news UIs
                      `}
                      >
                        {article.category}
                      </span>
                      <h3
                        className={`
                        text-xl font-bold mt-2 mb-3 leading-tight
                        text-primary-text dark:text-secondary-text
                        transition-colors duration-300
                      `}
                      >
                        {article.title}
                      </h3>
                      <p
                        className={`
                        text-base line-clamp-3 // Ensures consistent description height
                        text-gray-600 dark:text-gray-400 // Adjusted for better readability in both themes
                        transition-colors duration-300
                      `}
                      >
                        {article.description}
                      </p>
                      <div
                        className={`
                        flex justify-between items-center mt-4 text-sm
                        text-gray-500 dark:text-gray-500 // Consistent grey for dates
                        transition-colors duration-300
                      `}
                      >
                        <span>{article.date}</span>
                        <span
                          className={`
                          font-semibold transition-colors duration-300
                          text-blue-600 hover:text-blue-700
                          dark:text-blue-400 dark:hover:text-blue-500
                        `}
                        >
                          Read More &rarr;
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Top Stories Section */}
          <div className="mb-12">
            <h2
              className={`
                text-3xl font-bold mb-6 pb-2 border-b-2
                text-primary-text dark:text-secondary-text
                border-primary-accent dark:border-secondary-accent
                transition-colors duration-300
              `}
            >
              Top Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.slice(0, 3).map((article) => (
                <Link to={"article5E"} key={article.id}>
                  <div
                    className={`
                    p-6 rounded-lg shadow-md transition duration-300
                    bg-primary-bg dark:bg-secondary-accent
                    hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600
                    border border-gray-200 dark:border-gray-700 
                  `}
                  >
                    <h3
                      className={`
                      text-xl font-bold mb-3 leading-tight
                      text-primary-text dark:text-secondary-text
                      transition-colors duration-300
                    `}
                    >
                      {article.title}
                    </h3>
                    <p
                      className={`
                      text-base line-clamp-3
                      text-gray-600 dark:text-gray-400
                      transition-colors duration-300
                    `}
                    >
                      {article.description}
                    </p>
                    <div
                      className={`
                      flex justify-between items-center mt-4 text-sm
                      text-gray-500 dark:text-gray-500
                      transition-colors duration-300
                    `}
                    >
                      <span>{article.date}</span>
                      <span
                        className={`
                        font-semibold transition-colors duration-300
                        text-blue-600 hover:text-blue-700
                        dark:text-blue-400 dark:hover:text-blue-500
                      `}
                      >
                        Read More &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Uttar Pradesh Section */}
          <div className="mb-12">
            <h2
              className={`
                text-3xl font-bold mb-6 pb-2 border-b-2
                text-primary-text dark:text-secondary-text
                border-primary-accent dark:border-secondary-accent
                transition-colors duration-300
              `}
            >
              Uttar Pradesh
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* This is a static card, consider making it dynamic in the future */}
              <div
                className={`
                  p-6 rounded-lg shadow-md transition duration-300
                  bg-primary-bg dark:bg-secondary-accent 
                  hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600 
                  border border-gray-200 dark:border-gray-700 
                `}
              >
                <h3
                  className={`
                    text-xl font-bold mb-3
                    text-primary-text dark:text-secondary-text
                    transition-colors duration-300
                  `}
                >
                  New Education Policy Announced
                </h3>
                <p
                  className={`
                    text-base line-clamp-3
                    text-gray-600 dark:text-gray-400
                    transition-colors duration-300
                  `}
                >
                  The Uttar Pradesh government has announced a new education
                  policy aimed at improving the quality of education in the
                  state.
                </p>
                <div
                  className={`
                    flex justify-between items-center mt-4 text-sm
                    text-gray-500 dark:text-gray-500
                    transition-colors duration-300
                  `}
                >
                  <span>May 28, 2025</span>
                  <a
                    href="#"
                    className={`
                      font-semibold transition-colors duration-300
                      text-blue-600 hover:text-blue-700
                      dark:text-blue-400 dark:hover:text-blue-500
                    `}
                  >
                    Read More &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Trending News Section */}
          <div className="mb-12">
            <h2
              className={`
                text-3xl font-bold mb-6 pb-2 border-b-2
                text-primary-text dark:text-secondary-text
                border-primary-accent dark:border-secondary-accent
                transition-colors duration-300
              `}
            >
              Hindi News
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hindiArticles.map((article) => (
                <Link to={article.articleLink} key={article.id}>
                  <div
                    className={`
                    rounded-lg shadow-md overflow-hidden transform transition duration-300
                    bg-primary-bg dark:bg-secondary-accent
                    hover:scale-[1.01] hover:shadow-xl 
                    border border-gray-200 dark:border-gray-700
                  `}
                  >
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <span
                        className={`
                        text-sm font-semibold uppercase mb-2 block
                        text-red-500 // Keeping red for category accent as it's common in news UIs
                      `}
                      >
                        {article.category}
                      </span>
                      <h3
                        className={`
                        text-xl font-bold mt-2 mb-3 leading-tight
                        text-primary-text dark:text-secondary-text
                        transition-colors duration-300
                      `}
                      >
                        {article.title}
                      </h3>
                      <p
                        className={`
                        text-base line-clamp-3 // Ensures consistent description height
                        text-gray-600 dark:text-gray-400 // Adjusted for better readability in both themes
                        transition-colors duration-300
                      `}
                      >
                        {article.description}
                      </p>
                      <div
                        className={`
                        flex justify-between items-center mt-4 text-sm
                        text-gray-500 dark:text-gray-500 // Consistent grey for dates
                        transition-colors duration-300
                      `}
                      >
                        <span>{article.date}</span>
                        <span
                          className={`
                          font-semibold transition-colors duration-300
                          text-blue-600 hover:text-blue-700 // Standard blue for links
                          dark:text-blue-400 dark:hover:text-blue-500
                        `}
                        >
                          Read More &rarr;
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
