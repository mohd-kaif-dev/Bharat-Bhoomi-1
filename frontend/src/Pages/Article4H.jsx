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
const Article4H = () => {
  // --- Dummy Article Data (Replace with fetched data in a real application) ---
  const article = {
    id: "1",
    title: "भारत अग्रसर: सतत शहरी विकास के एक नए युग का अनावरण",
    category: "पर्यावरण",
    author: "प्रिया शर्मा",
    date: "जून 5, 2025",
    imageUrl:
      "https://img.freepik.com/premium-photo/aerial-view-sustainable-cityscape-with-solar-panels-green-roofs_161754-16815.jpg?w=900",
    imageAlt:
      "सौर पैनलों और हरे-भरे स्थानों वाला आधुनिक शहर, सतत शहरी विकास का प्रतीक",
    tags: [
      "सतत विकास",
      "शहरी नियोजन",
      "भारत",
      "नवाचार",
      "हरित पहल",
      "भविष्य के शहर",
      "पर्यावरण",
    ],
    content: [
      {
        type: "paragraph",
        text: 'नई दिल्ली – आज एक ऐतिहासिक घोषणा में, भारत सरकार ने अपनी महत्वाकांक्षी "हरित शहर 2047" पहल की शुरुआत की, जो भविष्य की पीढ़ियों के लिए शहरी केंद्रों को टिकाऊ, लचीले और समावेशी स्थानों में बदलने के लिए डिज़ाइन किया गया एक व्यापक खाका है। यह अग्रणी कार्यक्रम पर्यावरण-अनुकूल बुनियादी ढांचे, नवीकरणीय ऊर्जा और समुदाय-केंद्रित नियोजन पर जोर देता है, जो पर्यावरणीय संरक्षण और उन्नत शहरीकरण की दिशा में भारत की यात्रा में एक महत्वपूर्ण क्षण को चिह्नित करता है।',
      },
      {
        type: "heading",
        text: "हरित शहर 2047 के पीछे का दृष्टिकोण",
      },
      {
        type: "paragraph",
        text: 'शहरी विकास और आवास मंत्रालय के नेतृत्व में इस पहल का लक्ष्य अत्याधुनिक हरित प्रौद्योगिकियों को पारंपरिक पारिस्थितिक ज्ञान के साथ एकीकृत करना है। शहरी विकास मंत्री, डॉ. अनिल गुप्ता ने एक प्रेस कॉन्फ्रेंस के दौरान कहा, "हमारा दृष्टिकोण स्पष्ट है: ऐसे शहर बनाना जो न केवल आर्थिक रूप से पनपें, बल्कि प्रकृति के साथ सामंजस्य बिठाकर भी रहें।" "हम एक ऐसे भविष्य के लिए प्रतिबद्ध हैं जहां स्वच्छ हवा, प्रचुर हरे-भरे स्थान और कुशल संसाधन प्रबंधन विलासिता नहीं, बल्कि प्रत्येक नागरिक के लिए मौलिक अधिकार हों।"',
      },
      {
        type: "image",
        src: "https://static.vecteezy.com/system/resources/previews/027/484/672/large_2x/sustainable-green-building-in-modern-city-green-architecture-eco-friendly-building-sustainable-residential-building-with-vertical-garden-reduce-co2-apartment-with-green-environment-generative-ai-photo.jpg", // Another placeholder image
        alt: "ऊर्ध्वाधर उद्यानों और सौर पैनलों के साथ पर्यावरण-अनुकूल वास्तुकला का कलाकार का प्रतिपादन",
        caption:
          "ऊर्ध्वाधर उद्यानों और एकीकृत सौर समाधानों के साथ प्रस्तावित पर्यावरण-अनुकूल शहरी वास्तुकला का चित्रण।",
      },
      {
        type: "paragraph",
        text: "हरित शहर 2047 के मुख्य स्तंभों में नगरपालिका कार्यों के लिए सौर और पवन ऊर्जा को व्यापक रूप से अपनाना, रीसाइक्लिंग और कचरे से ऊर्जा रूपांतरण पर जोर देने वाली मजबूत अपशिष्ट प्रबंधन प्रणालियां, और स्वच्छ ऊर्जा से संचालित व्यापक सार्वजनिक परिवहन नेटवर्क का विकास शामिल है। इसके अलावा, योजना में शहरी वानिकी, वर्षा जल संचयन और स्थानीय जल निकायों के जीर्णोद्धार के लिए महत्वपूर्ण संसाधन आवंटित किए गए हैं। व्यापक रणनीति में स्मार्ट ग्रिड प्रौद्योगिकियां, कुशल जल उपयोग प्रणालियां, और निर्माण के पर्यावरणीय पदचिह्न को कम करने के लिए हरित निर्माण सामग्री को बढ़ावा देना भी शामिल है।",
      },
      {
        type: "heading",
        text: "सामुदायिक सहभागिता: सफलता की आधारशिला",
      },
      {
        type: "paragraph",
        text: '“हरित शहर 2047” पहल का एक महत्वपूर्ण पहलू सामुदायिक भागीदारी पर इसका जोर है। सरकार राष्ट्रव्यापी जागरूकता अभियान शुरू करने और निवासियों के बीच स्वामित्व की भावना को बढ़ावा देने के लिए नागरिक मंच स्थापित करने की योजना बना रही है। डॉ. गुप्ता ने जोर देकर कहा, "टिकाऊ विकास केवल प्रौद्योगिकी के बारे में नहीं है; यह लोगों के बारे में है।" "हमारा मानना है कि हमारे समुदायों की सक्रिय भागीदारी इस विशाल प्रयास की सफलता के लिए वास्तविक उत्प्रेरक होगी। सार्वजनिक समर्थन और सक्रिय भागीदारी के बिना, यहां तक कि सबसे नवीन योजनाएं भी अपनी पूरी क्षमता तक पहुंचने के लिए संघर्ष करेंगी।"',
      },
      {
        type: "list",
        items: [
          "**बढ़ा हुआ हरित आवरण:** व्यापक वृक्षारोपण और पार्क विकास के माध्यम से 2040 तक शहरी हरित स्थानों में 30% की वृद्धि का लक्ष्य।",
          "**नवीकरणीय ऊर्जा एकीकरण:** सभी नए सार्वजनिक और वाणिज्यिक भवनों पर सौर पैनलों को अनिवार्य करना और आवासीय संपत्तियों के लिए रूफटॉप सौर को बढ़ावा देना।",
          "**स्मार्ट अपशिष्ट प्रबंधन:** सभी प्रमुख शहरों में अलग-अलग कचरा संग्रह, उन्नत रीसाइक्लिंग सुविधाओं और अभिनव कचरे से ऊर्जा परियोजनाओं को लागू करना।",
          "**जल संरक्षण:** सभी शहरी घरों और सार्वजनिक संस्थानों में वर्षा जल संचयन और ग्रेवाटर रीसाइक्लिंग को बढ़ावा देना, साथ ही प्राचीन बावड़ियों और जल निकायों को पुनर्जीवित करना।",
        ],
      },
      {
        type: "paragraph",
        text: "तीन प्रमुख महानगरीय क्षेत्रों – बेंगलुरु, अहमदाबाद और पुणे – में पायलट परियोजनाएं पहले से ही चल रही हैं, जिनमें अभिनव शहरी कृषि तकनीकें, स्मार्ट ग्रिड प्रौद्योगिकियां और टिकाऊ गतिशीलता समाधान प्रदर्शित किए जा रहे हैं। शुरुआती परिणाम कार्बन पदचिह्न को कम करने, शहरी जैव विविधता में सुधार करने और निवासियों के जीवन की गुणवत्ता बढ़ाने में promising परिणाम दर्शाते हैं। ये पायलट परियोजनाएं राष्ट्रव्यापी विस्तार से पहले रणनीतियों को परिष्कृत करने के लिए जीवित प्रयोगशालाओं के रूप में कार्य कर रही हैं।",
      },
      {
        type: "quote",
        text: '"यह पहल एक हरित, स्वस्थ और अधिक समृद्ध भारत की दिशा में एक साहसिक कदम का प्रतिनिधित्व करती है। यह वैश्विक मंच पर उदाहरण पेश करके नेतृत्व करने की हमारी प्रतिबद्धता का प्रमाण है, यह दर्शाता है कि विकास और पर्यावरण संरक्षण साथ-साथ चल सकते हैं।"',
        author:
          "नरेंद्र सिंह, मुख्य शहरी योजनाकार और हरित शहर 2047 के प्रमुख वास्तुकार",
      },
      {
        type: "paragraph",
        text: "“हरित शहर 2047” पहल से हरित प्रौद्योगिकियों और शहरी बुनियादी ढांचे में महत्वपूर्ण अंतरराष्ट्रीय निवेश आकर्षित होने की उम्मीद है, जिससे रोजगार सृजन के नए रास्ते खुलेंगे, नवाचार को बढ़ावा मिलेगा और सतत आर्थिक विकास को गति मिलेगी। विश्लेषकों का मानना है कि यदि सफल रहा, तो यह कार्यक्रम तेजी से शहरीकरण और जलवायु परिवर्तन की दोहरी चुनौतियों से जूझ रहे विकासशील देशों के लिए एक वैश्विक मॉडल के रूप में काम कर सकता है, जो पारिस्थितिक आधुनिकीकरण के लिए एक स्केलेबल और दोहराने योग्य ढांचा पेश करेगा।",
      },
      {
        type: "paragraph",
        text: "जैसे ही भारत इस परिवर्तनकारी यात्रा पर निकलता है, दुनिया प्रत्याशा के साथ देख रही है, इस उम्मीद में कि हरे और टिकाऊ जीवन के जीवंत रंग जल्द ही इसके बढ़ते शहरी परिदृश्य को परिभाषित करेंगे, जो पर्यावरणीय रूप से जागरूक विकास के लिए एक नया मानदंड स्थापित करेगा।",
      },
    ],
  };

  // --- Dummy Related News Data (Replace with fetched data) ---
  const relatedNews = [
    {
      id: "2",
      title:
        "भारत के स्मार्ट शहरों के दृष्टिकोण को सशक्त बनाने वाली तकनीकी सफलताएं",
      category: "प्रौद्योगिकी",
      imageUrl:
        "https://images.pexels.com/photos/28884704/pexels-photo-28884704/free-photo-of-urban-electric-car-charging-station-in-glasgow.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "#",
    },
    {
      id: "3",
      title: "मॉनसून की बारिश ने दी राहत, कृषि क्षेत्र को नई चुनौतियां",
      category: "कृषि",
      imageUrl:
        "https://images.pexels.com/photos/14431103/pexels-photo-14431103.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "#",
    },
    {
      id: "4",
      title:
        "सांस्कृतिक त्योहारों ने इस मौसम में राज्यों में स्थानीय पर्यटन को बढ़ावा दिया",
      category: "संस्कृति",
      imageUrl:
        "https://images.pexels.com/photos/6713242/pexels-photo-6713242.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "#",
    },
    {
      id: "5",
      title: "आर्थिक दृष्टिकोण: अगली तिमाही के लिए भारत के जीडीपी विकास अनुमान",
      category: "व्यवसाय",
      imageUrl:
        "https://images.pexels.com/photos/7947752/pexels-photo-7947752.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "#",
    },
  ];

  // --- Dummy Trending News Data ---
  const trendingNews = [
    {
      id: "t1",
      title: "वैश्विक सेमीकंडक्टर की कमी से टेक उद्योग प्रभावित",
      link: "#",
    },
    { id: "t2", title: "विकेंद्रीकृत वित्त का उदय: अवसर और जोखिम", link: "#" },
    {
      id: "t3",
      title: "तटीय पारिस्थितिकी तंत्र पर जलवायु परिवर्तन का प्रभाव",
      link: "#",
    },
    {
      id: "t4",
      title: "कार्य का भविष्य: हाइब्रिड मॉडल और दूरस्थ सहयोग",
      link: "#",
    },
  ];

  // --- Dummy Categories Data ---
  const categories = [
    "प्रौद्योगिकी",
    "व्यवसाय",
    "पर्यावरण",
    "संस्कृति",
    "राजनीति",
    "खेल",
    "स्वास्थ्य",
    "शिक्षा",
  ];

  // --- Dummy Comments (Replace with fetched data and state management) ---
  const comments = [
    {
      id: 1,
      author: "राजेश के.",
      date: "जून 5, 2025",
      text: "यह वास्तव में एक प्रेरणादायक पहल है। उम्मीद है कि जल्द ही इसका व्यापक कार्यान्वयन देखने को मिलेगा!",
    },
    {
      id: 2,
      author: "अंजलि एस.",
      date: "जून 6, 2025",
      text: "सामुदायिक सहभागिता पर ध्यान केंद्रित करना महत्वपूर्ण है। सतत विकास को सार्वजनिक भागीदारी की आवश्यकता है।",
    },
    {
      id: 3,
      author: "विक्रम एम.",
      date: "जून 6, 2025",
      text: "महान लेख, भारत भूमि! बहुत ज्ञानवर्धक। इस परियोजना के लिए फंडिंग तंत्र क्या हैं?",
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
    // Main container for the entire page, setting background, text color, font, and padding.
    // Uses flexbox for main content layout, transitioning colors smoothly.
    <div className="min-h-screen bg-primary-bg dark:bg-secondary-bg text-primary-text dark:text-secondary-text font-devanagari p-2 lg:p-4 transition-colors duration-300">
      {/* Main content area: Article + Sidebar */}
      <div className="w-full flex flex-col md:flex-row gap-2 lg:gap-8">
        {/* Left Section: Main Article Content (3/4 width on medium screens and up) */}
        <div className="w-full md:w-3/4">
          <article className="bg-primary-bg-light dark:bg-secondary-bg-dark rounded-lg shadow-xl p-2 lg:p-4 transition-colors duration-300">
            {/* Article Header */}
            <header className="mb-8 text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-primary-accent dark:text-secondary-text">
                {article.title}
              </h1>
              <p className="text-lg md:text-xl text-primary-text/80 dark:text-secondary-text/80 mb-2">
                द्वारा{" "}
                <span className="font-semibold text-primary-accent dark:text-secondary-text">
                  {article.author}
                </span>{" "}
                <span className="font-semibold text-accent-color">
                  {article.category}
                </span>{" "}
                में
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
                    "https://placehold.co/1200x675/CCCCCC/000000?text=मुख्य+छवि+नहीं+मिली";
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
                टैग्स:
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
                इस लेख को साझा करें:
              </h3>
              <div className="flex justify-center space-x-6">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    window.location.href
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-text dark:text-secondary-text hover:text-blue-600 transition-colors duration-200 text-3xl"
                  aria-label="फेसबुक पर साझा करें"
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
                  aria-label="ट्विटर पर साझा करें"
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
                  aria-label="लिंक्डइन पर साझा करें"
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
                  aria-label="व्हाट्सएप पर साझा करें"
                >
                  <RiWhatsappFill className="w-8 h-8" />
                </a>
              </div>
            </section>
          </article>
        </div>

        {/* Right Section: Sidebar (1/4 width on medium screens and up) */}
        <aside className="w-full md:w-1/4 space-y-8">
          {/* Related News Section */}
          <section className="bg-primary-bg-light dark:bg-secondary-bg-dark rounded-lg shadow-lg p-2 transition-colors duration-300">
            <h2 className="text-2xl font-bold mb-4 text-primary-text dark:text-secondary-text border-b border-primary-text/10 dark:border-secondary-text/10 pb-3 flex items-center">
              <RiLayoutGridFill className="inline-block w-6 h-6 mr-2 text-accent-color" />
              संबंधित समाचार
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
                          "https://placehold.co/80x64/CCCCCC/000000?text=समाचार";
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
              <RiFireFill className="inline-block w-6 h-6 mr-2 text-red-500" />
              ट्रेंडिंग समाचार
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
              श्रेणियाँ
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
              हमारे न्यूज़लेटर की सदस्यता लें
            </h2>
            <p className="mb-4 text-sm opacity-90">
              सीधे अपने इनबॉक्स में नवीनतम सुर्खियां प्राप्त करें!
            </p>
            <input
              type="email"
              placeholder="आपका ईमेल"
              className="w-full p-3 rounded-md mb-3 bg-white bg-opacity-90 text-primary-text placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="w-full bg-white text-primary-accent dark:text-secondary-accent py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
              सदस्यता लें
            </button>
          </section>

          {/* Advertising Placeholder */}
          <section className="bg-primary-bg-light dark:bg-secondary-bg-dark rounded-lg shadow-lg p-6 text-center transition-colors duration-300">
            <h3 className="text-xl font-bold mb-3 text-primary-text dark:text-secondary-text">
              विज्ञापन
            </h3>
            <div className="bg-gray-200 dark:bg-gray-700 h-48 flex items-center justify-center rounded-md text-gray-500 dark:text-gray-400">
              <p>आपका विज्ञापन यहां</p>
            </div>
          </section>
        </aside>
      </div>
      {/* Full-width Comments Section - Moved outside the flex container */}
      <section className="container mx-auto my-10 max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-primary-text dark:text-secondary-text border-b-2 border-primary-accent dark:border-secondary-accent pb-3">
          टिप्पणियाँ ({comments.length})
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
              एक टिप्पणी छोड़ें
            </h4>
            <input
              type="text"
              placeholder="आपका नाम"
              className="w-full p-3 mb-4 rounded-md border border-primary-text/30 dark:border-secondary-text/30 bg-transparent text-primary-text dark:text-secondary-text placeholder-primary-text/50 dark:placeholder-secondary-text/50 focus:outline-none focus:ring-2 focus:ring-primary-accent dark:focus:ring-secondary-accent"
            />
            <textarea
              placeholder="आपकी टिप्पणी"
              rows="5"
              className="w-full p-3 mb-4 rounded-md border border-primary-text/30 dark:border-secondary-text/30 bg-transparent text-primary-text dark:text-secondary-text placeholder-primary-text/50 dark:placeholder-secondary-text/50 focus:outline-none focus:ring-2 focus:ring-primary-accent dark:focus:ring-secondary-accent"
            ></textarea>
            <button className="bg-primary-accent dark:bg-secondary-accent text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-hover dark:hover:bg-secondary-hover transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-accent dark:focus:ring-secondary-accent focus:ring-offset-2">
              टिप्पणी पोस्ट करें
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Article4H;
