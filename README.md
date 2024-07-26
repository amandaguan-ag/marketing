# Great Front End Marketing Project

This project is part of the **Great Front End Marketing Project** track from [Great Front End](https://www.greatfrontend.com/projects/tracks/marketing). The objective is to learn how to build marketing pages, enabling you to launch your own SaaS in the future.

## Overview

This project focuses on building key components and pages typically found in marketing websites. These components include testimonial cards, blog cards, profile cards, and other UI elements essential for an effective marketing page.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/amandaguan-ag/marketing-project.git
   cd marketing-project
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Project

Start the development server:
```bash
npm run dev
# or
yarn dev
```

Open your browser and navigate to `http://localhost:3000` to see the home page with links to various components.

## Current Components

### Testimonial Card

The Testimonial Card component showcases user testimonials with a clean and modern design. It accepts dynamic content through props, making it reusable across various parts of the marketing site.

### Blog Card

The Blog Card component displays an article image, badge, title, description, and a "Read more" link. It is designed to be responsive and maintain a consistent layout across different devices.

### Profile Card

The Profile Card component showcases user profile information with a profile picture, name, title, description, and social media links. It is designed to be responsive and maintain a consistent layout across different devices.

## Completion Points

- **Design Fidelity**
   - The project closely follows the design specifications by using the specified text color, font size, font weight, spacing, and dimensions. Tailwind CSS utility classes were used to maintain consistency and accuracy in design.

- **Cross-Browser Compatibility**
   - The solution has been tested and verified to work on major browsers including Chrome, Firefox, and Safari. This ensures a consistent user experience across different platforms.

- **Handle Long Strings**
   - The UI components can accommodate extremely long strings by either wrapping to the next line or truncating the text with an ellipsis. This was achieved using Tailwind CSS classes like `overflow-hidden`, `text-ellipsis`, and `whitespace-nowrap` for handling text overflow gracefully.

- **Performance Optimization**
   - Image assets are optimized using the Next.js `Image` component, which serves images in the best format and size for the user's device. Code minification and tree-shaking are automatically handled by Next.js during the production build to ensure quick load times and a smooth, responsive user experience.

- **Accessibility and Semantics**
   - Best practices for web accessibility were followed by using semantic HTML elements such as `<section>`, `<header>`, and `<main>`. ARIA roles and proper `alt` tags were added to images to enhance accessibility for users relying on assistive technologies.

## Learn More

To learn more about the Great Front End Marketing Project track, visit [Great Front End](https://www.greatfrontend.com/projects/tracks/marketing).

## License

This project is licensed under the MIT License.