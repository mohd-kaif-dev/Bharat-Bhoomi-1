import {
  RiFacebookFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
  RiWhatsappFill,
} from "@remixicon/react";
import { useEffect } from "react";

const Article3 = () => {
  // --- Dummy Article Data (Replace with fetched data in a real application) ---
  const article = {
    id: "1",
    title: "भारत अग्रसर: सतत शहरी विकास के एक नए युग का अनावरण",
    category: "पर्यावरण", // Environment
    author: "प्रिया शर्मा",
    date: "जून 5, 2025",
    imageUrl:
      "https://img.freepik.com/premium-photo/aerial-view-sustainable-cityscape-with-solar-panels-green-roofs_161754-16815.jpg?w=900",
    imageAlt:
      "सौर पैनलों और हरे-भरे स्थानों वाला आधुनिक शहर, सतत शहरी विकास का प्रतीक",
    tags: [
      "सतत विकास", // Sustainable Development
      "शहरी नियोजन", // Urban Planning
      "भारत", // India
      "नवाचार", // Innovation
      "हरित पहल", // Green Initiatives
      "भविष्य के शहर", // Future Cities
      "पर्यावरण", // Environment
    ],
    content: [
      {
        type: "paragraph",
        text: 'नई दिल्ली – आज एक ऐतिहासिक घोषणा में, भारत सरकार ने अपनी महत्वाकांक्षी "हरित शहर 2047" पहल की शुरुआत की, जो भविष्य की पीढ़ियों के लिए शहरी केंद्रों को टिकाऊ, लचीले और समावेशी स्थानों में बदलने के लिए डिज़ाइन किया गया एक व्यापक खाका है। यह अग्रणी कार्यक्रम पर्यावरण-अनुकूल बुनियादी ढांचे, नवीकरणीय ऊर्जा और समुदाय-केंद्रित नियोजन पर जोर देता है, जो पर्यावरणीयM संरक्षण और उन्नत शहरीकरण की दिशा में भारत की यात्रा में एक महत्वपूर्ण क्षण को चिह्नित करता है।',
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
      category: "प्रौद्योगिकी", // Technology
      imageUrl:
        "https://images.pexels.com/photos/28884704/pexels-photo-28884704/free-photo-of-urban-electric-car-charging-station-in-glasgow.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "#",
    },
    {
      id: "3",
      title: "मॉनसून की बारिश ने दी राहत, कृषि क्षेत्र को नई चुनौतियां",
      category: "कृषि", // Agriculture
      imageUrl:
        "https://images.pexels.com/photos/14431103/pexels-photo-14431103.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "#",
    },
    {
      id: "4",
      title:
        "सांस्कृतिक त्योहारों ने इस मौसम में राज्यों में स्थानीय पर्यटन को बढ़ावा दिया",
      category: "संस्कृति", // Culture
      imageUrl:
        "https://images.pexels.com/photos/6713242/pexels-photo-6713242.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "#",
    },
    {
      id: "5",
      title: "आर्थिक दृष्टिकोण: अगली तिमाही के लिए भारत के जीडीपी विकास अनुमान",
      category: "व्यवसाय", // Business
      imageUrl:
        "https://images.pexels.com/photos/7947752/pexels-photo-7947752.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "#",
    },
  ];

  // --- Dummy Comments (Replace with fetched data and state management) ---
  const comments = [
    {
      id: 1,
      author: "राजेश के.", // Rajesh K.
      date: "जून 5, 2025",
      text: "यह वास्तव में एक प्रेरणादायक पहल है। उम्मीद है कि जल्द ही इसका व्यापक कार्यान्वयन देखने को मिलेगा!",
    },
    {
      id: 2,
      author: "अंजलि एस.", // Anjali S.
      date: "जून 6, 2025",
      text: "सामुदायिक सहभागिता पर ध्यान केंद्रित करना महत्वपूर्ण है। सतत विकास को सार्वजनिक भागीदारी की आवश्यकता है।",
    },
    {
      id: 3,
      author: "विक्रम एम.", // Vikram M.
      date: "जून 6, 2025",
      text: "महान लेख, भारत भूमि! बहुतB ज्ञानवर्धक। इस परियोजना के लिए फंडिंग तंत्र क्या हैं?",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="container mx-auto p-4 bg-primary-bg dark:bg-secondary-bg text-primary-text dark:text-secondary-text transition-colors duration-300">
      {/* Article Header */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-primary-accent dark:text-secondary-text">
          {article.title}
        </h1>
        <p className="text-lg md:text-xl text-primary-text/80 dark:text-secondary-text/80 mb-2">
          द्वारा {/* By */}
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
        />
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto py-4 prose lg:prose-xl prose-primary-text dark:prose-secondary-text">
        {renderContent(article.content)}
      </article>

      {/* Tags Section */}
      <section className="max-w-4xl mx-auto my-10">
        <h3 className="text-2xl font-bold mb-4 text-primary-text dark:text-secondary-text">
          टैग्स: {/* Tags: */}
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
          इस लेख को साझा करें: {/* Share This Article: */}
        </h3>
        <div className="flex justify-center space-x-6">
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
          संबंधित समाचार {/* Related News */}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {" "}
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
                <h3 className="text-lg font-semibold mb-2 text-primary-text dark:text-secondary-text leading-tight">
                  {news.title}
                </h3>{" "}
                <a
                  href={news.link}
                  className="inline-block text-primary-accent dark:text-secondary-accent hover:underline font-medium text-sm"
                >
                  और पढ़ें &rarr; {/* Read More */}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comments Section */}
      <section className="max-w-4xl mx-auto my-10">
        <h2 className="text-3xl font-bold mb-6 text-primary-text dark:text-secondary-text border-b-2 border-primary-accent dark:border-secondary-accent pb-3">
          टिप्पणियाँ ({comments.length}) {/* Comments */}
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
              एक टिप्पणी छोड़ें {/* Leave a Comment */}
            </h4>
            <input
              type="text"
              placeholder="आपका नाम" // Your Name
              className="w-full p-3 mb-4 rounded-md border border-primary-text/30 dark:border-secondary-text/30 bg-transparent text-primary-text dark:text-secondary-text placeholder-primary-text/50 dark:placeholder-secondary-text/50 focus:outline-none focus:ring-2 focus:ring-primary-accent dark:focus:ring-secondary-accent"
            />
            <textarea
              placeholder="आपकी टिप्पणी" // Your Comment
              rows="5"
              className="w-full p-3 mb-4 rounded-md border border-primary-text/30 dark:border-secondary-text/30 bg-transparent text-primary-text dark:text-secondary-text placeholder-primary-text/50 dark:placeholder-secondary-text/50 focus:outline-none focus:ring-2 focus:ring-primary-accent dark:focus:ring-secondary-accent"
            ></textarea>
            <button className="bg-primary-accent dark:bg-secondary-accent text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-hover dark:hover:bg-secondary-hover transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-accent dark:focus:ring-secondary-accent focus:ring-offset-2">
              टिप्पणी पोस्ट करें {/* Post Comment */}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Article3;
