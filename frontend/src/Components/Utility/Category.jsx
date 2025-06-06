import React, { useRef, useEffect } from "react";

const Category = ({ categories }) => {
  const containerRef = useRef(null); // Ref for the main container (overflow-hidden)
  const ulRef = useRef(null); // Ref for the <ul> element that will be transformed
  const startXRef = useRef(0); // Stores the initial touch X position for the current drag
  const initialTranslateXRef = useRef(0); // Stores the translateX when touch starts
  const isDraggingRef = useRef(false); // Flag to track if a drag is active

  // Function to apply translation and ensure it stays within bounds
  const applyTranslateX = (element, x, containerWidth, contentWidth) => {
    const maxTranslateX = 0; // The furthest right the content can be (no left overflow)
    const minTranslateX = -(contentWidth - containerWidth); // The furthest left the content can be

    let clampedX = x;

    // If content is smaller than container, no scrolling is needed, reset position
    if (contentWidth <= containerWidth) {
      clampedX = 0;
    } else {
      // Clamp the newX value strictly within the min and max bounds
      clampedX = Math.min(maxTranslateX, Math.max(minTranslateX, x));
    }

    element.style.transform = `translateX(${clampedX}px)`;
  };

  useEffect(() => {
    const container = containerRef.current;
    const ulElement = ulRef.current;

    if (!container || !ulElement) return;

    const handleTouchStart = (e) => {
      isDraggingRef.current = true; // Set dragging flag to true
      startXRef.current = e.touches[0].clientX; // Capture initial touch X

      // Read the current translateX directly from the element's style
      // This is a simpler way to get current transform, assuming it's only translateX
      const currentTransform = ulElement.style.transform;
      initialTranslateXRef.current =
        parseFloat(
          currentTransform.replace("translateX(", "").replace("px)", "")
        ) || 0;

      // Temporarily disable CSS transitions during drag for immediate visual feedback
      ulElement.style.transition = "none";
    };

    const handleTouchMove = (e) => {
      // Only proceed if dragging is active
      if (!isDraggingRef.current) return;
      e.preventDefault(); // Prevent native scrolling to ensure custom swipe handles it

      const currentClientX = e.touches[0].clientX;
      const dx = currentClientX - startXRef.current; // Calculate horizontal distance moved from start of touch

      let newX = initialTranslateXRef.current + dx; // Calculate the proposed new X translation

      const containerWidth = container.clientWidth;
      const contentWidth = ulElement.scrollWidth;

      // Apply translation, clamping to bounds
      applyTranslateX(ulElement, newX, containerWidth, contentWidth);
    };

    const handleTouchEnd = () => {
      isDraggingRef.current = false; // Reset dragging flag

      const containerWidth = container.clientWidth;
      const contentWidth = ulElement.scrollWidth;
      const currentX =
        parseFloat(
          ulElement.style.transform
            .replace("translateX(", "")
            .replace("px)", "")
        ) || 0;

      // Re-enable CSS transitions for a smooth snap back to bounds if needed
      ulElement.style.transition = "transform 0.3s ease-out"; // Adjusted transition duration for a noticeable snap

      // Ensure it snaps to a valid position (applyTranslateX handles clamping)
      applyTranslateX(ulElement, currentX, containerWidth, contentWidth);
    };

    // Add event listeners to the container
    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    }); // Use passive: false to allow e.preventDefault()
    container.addEventListener("touchend", handleTouchEnd);
    container.addEventListener("touchcancel", handleTouchEnd); // Handle touch cancellation as well

    // Cleanup function: Remove event listeners when the component unmounts or effect re-runs
    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      container.removeEventListener("touchcancel", handleTouchEnd);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div ref={containerRef} className="container mx-auto overflow-hidden">
      <ul
        ref={ulRef} // Attach the ulRef to the <ul> element
        // Initial style. The `transform` will be dynamically updated by JavaScript.
        style={{
          transform: `translateX(0px)`,
          transition: "transform 0.3s ease-out",
        }} // Default transition for release
        className="flex flex-nowrap justify-start md:justify-center gap-x-6 gap-y-2 text-lg font-medium"
      >
        {categories.map((category) => (
          // Add flex-shrink-0 to list items to prevent them from shrinking
          // and ensure proper width calculation for scrolling.
          <li key={category} className="flex-shrink-0">
            <a
              href="#"
              className={`
                block px-3 py-1 rounded-md transition-all duration-300
                text-primary-text dark:text-secondary-text
                hover:bg-zinc-400 hover:text-primary-accent
                dark:hover:bg-zinc-700 dark:hover:text-secondary-text
                bg-zinc-300 dark:bg-zinc-800
              `}
            >
              {category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
