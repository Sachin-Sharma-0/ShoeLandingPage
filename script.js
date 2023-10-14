document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM is ready!');
  // Hero Section Animation
  const heroContent = document.querySelector('.hero-content');
  gsap.from(heroContent, { opacity: 0, y: 50, duration: 1, delay: 0.5 });

  // Featured Products Animation
  const featuredProducts = document.querySelector('.featured-products');
  gsap.from(featuredProducts, { opacity: 0, y: 50, duration: 1, delay: 1 });

  // Key Features Section Animation
  const keyFeatures = document.querySelector('.key-features');
  gsap.from(keyFeatures, { opacity: 0, y: 50, duration: 1, delay: 1.5 });

  // Testimonials Section Animation
  const testimonials = document.querySelector('.testimonials');
  gsap.from(testimonials, { opacity: 0, y: 50, duration: 1, delay: 2 });

  // Call-to-Action Animation
  const ctaSection = document.querySelector('.cta');
  gsap.from(ctaSection, { opacity: 0, y: 50, duration: 1, delay: 2.5 });

  // Footer Animation
  const footer = document.querySelector('footer');
  gsap.from(footer, { opacity: 0, y: 50, duration: 1, delay: 3 });

  // Example: Add a click event to the "Shop Now" button with animation
  const shopNowButton = document.querySelector('.cta-button');

  if (shopNowButton) {
      shopNowButton.addEventListener('click', function () {
          gsap.to('.cta-button', { scale: 0.9, ease: 'power2.inOut', yoyo: true, repeat: 1 });
          // Add your other actions or navigation logic here
      });
  }
});
