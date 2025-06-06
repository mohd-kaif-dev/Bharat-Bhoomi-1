import React from "react";

const TrendingNews = ({ articles }) => {
  return (
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
  );
};

export default TrendingNews;
