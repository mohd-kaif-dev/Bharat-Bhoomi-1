import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      when: "beforeChildren", // Ensure card animates before its children
      staggerChildren: 0.1, // Stagger direct children of the card
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const errorVariants = {
  initial: { opacity: 0, y: -10, height: 0 },
  animate: { opacity: 1, y: 0, height: "auto", transition: { duration: 0.2 } },
  exit: { opacity: 0, y: -5, height: 0, transition: { duration: 0.15 } },
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [district, setDistrict] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const districts = [
    "Agra",
    "Aligarh",
    "Allahabad",
    "Ambedkar Nagar",
    "Amethi",
    "Amroha",
    "Auraiya",
    "Azamgarh",
    "Baghpat",
    "Bahraich",
    "Ballia",
    "Balrampur",
    "Banda",
    "Barabanki",
    "Bareilly",
    "Basti",
    "Bijnor",
    "Budaun",
    "Bulandshahr",
    "Chandauli",
    "Chitrakoot",
    "Deoria",
    "Etah",
    "Etawah",
    "Faizabad",
    "Farrukhabad",
    "Fatehpur",
    "Firozabad",
    "Gautam Buddha Nagar",
    "Ghaziabad",
    "Ghazipur",
    "Gonda",
    "Gorakhpur",
    "Hamirpur",
    "Hapur",
    "Hardoi",
    "Hathras",
    "Jalaun",
    "Jaunpur",
    "Jhansi",
    "Kannauj",
    "Kanpur Dehat",
    "Kanpur Nagar",
    "Kasganj",
    "Kaushambi",
    "Kushinagar",
    "Lakhimpur Kheri",
    "Lalitpur",
    "Lucknow",
    "Maharajganj",
    "Mahoba",
    "Mainpuri",
    "Mathura",
    "Mau",
    "Meerut",
    "Mirzapur",
    "Moradabad",
    "Muzaffarnagar",
    "Pilibhit",
    "Pratapgarh",
    "Rae Bareli",
    "Rampur",
    "Saharanpur",
    "Sambhal",
    "Sant Kabir Nagar",
    "Shahjahanpur",
    "Shamli",
    "Shravasti",
    "Siddharthnagar",
    "Sitapur",
    "Sonbhadra",
    "Sultanpur",
    "Unnao",
    "Varanasi",
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
    }

    if (!district) {
      newErrors.district = "District is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrors({});

    setTimeout(() => {
      setIsLoading(false);
      console.log("Login Attempt:", { email, password, district });
      alert("Login submitted (simulated)! Check console for details.");
    }, 2000);
  };

  // Base input classes - adjusted dark mode text for better contrast
  const baseInputClasses =
    "w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-800 dark:placeholder-gray-500 focus:outline-none focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:text-gray-100";
  const errorBorderClass = "border-red-500 dark:border-red-400";
  const normalBorderClass = "border-gray-300 dark:border-gray-600";

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center p-4 overflow-hidden">
      {" "}
      {/* Added overflow-hidden to prevent scrollbars during initial animation */}
      <motion.section
        className="max-w-md w-full bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-8" variants={itemVariants}>
          <div
            className="h-12 w-12 rounded-full mx-auto mb-3 bg-gray-300 dark:bg-gray-600" // Adjusted placeholder color slightly
            aria-label="Bharat Bhoomi Logo Placeholder"
          ></div>
          <div
            className={`
              text-2xl sm:text-3xl font-extrabold tracking-wider
              text-gray-800 dark:text-gray-100 
            `} // Assuming text-primary-text and text-secondary-text resolve to these or similar
          >
            Bharat{" "}
            <span className={`text-accent-color`}>
              {" "}
              {/* Assuming text-accent-color */}
              BHOOMI
            </span>
          </div>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            खबर आपके अंदाज़ में
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          noValidate
          // Variants for staggering will be applied to direct children via parent's staggerChildren
        >
          <motion.div className="mb-4" variants={itemVariants}>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              autoComplete="username"
              aria-label="Email Address"
              aria-describedby={errors.email ? "email-error" : undefined}
              aria-invalid={!!errors.email}
              className={`${baseInputClasses} ${
                errors.email ? errorBorderClass : normalBorderClass
              }`}
              required
            />
            <AnimatePresence>
              {errors.email && (
                <motion.p
                  id="email-error"
                  className="mt-1 text-xs text-red-600 dark:text-red-400"
                  variants={errorVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {errors.email}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div className="mb-4" variants={itemVariants}>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              autoComplete="current-password"
              aria-label="Password"
              aria-describedby={errors.password ? "password-error" : undefined}
              aria-invalid={!!errors.password}
              className={`${baseInputClasses} ${
                errors.password ? errorBorderClass : normalBorderClass
              }`}
              required
            />
            <AnimatePresence>
              {errors.password && (
                <motion.p
                  id="password-error"
                  className="mt-1 text-xs text-red-600 dark:text-red-400"
                  variants={errorVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {errors.password}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div className="mb-4" variants={itemVariants}>
            <label htmlFor="district" className="sr-only">
              District
            </label>
            <select
              id="district"
              name="district"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              aria-label="Select District"
              aria-describedby={errors.district ? "district-error" : undefined}
              aria-invalid={!!errors.district}
              className={`${baseInputClasses} ${
                errors.district ? errorBorderClass : normalBorderClass
              }`}
              required
            >
              <option value="" disabled>
                Select District
              </option>
              {districts.map((dist) => (
                <option key={dist} value={dist}>
                  {dist}
                </option>
              ))}
            </select>
            <AnimatePresence>
              {errors.district && (
                <motion.p
                  id="district-error"
                  className="mt-1 text-xs text-red-600 dark:text-red-400"
                  variants={errorVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {errors.district}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="text-right text-sm mb-6"
            variants={itemVariants}
          >
            <a
              href="#forgot" // Consider using Link from react-router-dom if it's an internal route
              className="font-medium text-blue-600 hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
            >
              Forgot Password?
            </a>
          </motion.div>

          <motion.button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center items-center px-4 py-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-150 bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </>
            ) : (
              "Login"
            )}
          </motion.button>
        </motion.form>

        <motion.p
          className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400"
          variants={itemVariants}
        >
          New Reporter?{" "}
          <Link
            to={"/v1/register"}
            className="font-medium text-blue-600 hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
          >
            Create Account
          </Link>
        </motion.p>
      </motion.section>
    </main>
  );
}

export default Login;
