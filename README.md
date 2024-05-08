# Camper Rental Service

This React application is designed to help users browse and book camper rentals through a user-friendly interface. The application consists of three main pages.

![Catalog Page](/src/assets/rent_a_camper.webp)


## Pages

1. **Home Page**: Provides a general overview of the company.    
2. **Catalog Page**: Displays a catalog of campers with various configurations. Users can filter the campers based on location, equipment, and type. 
3. **Favorites Page**: Shows listings that the user has added to their favorites. These can be managed directly from this page.

## Features

- **Favorites Management**: Users can add or remove campers from their favorites by clicking a heart-shaped button. The button's color changes to reflect its state (favorited or not), and this state persists even after the page is refreshed.
- **Detailed Camper Information**: Clicking on "Show More" opens a modal window with detailed information about the camper, including features and reviews.
- **Booking Form**: A modal window includes a form for booking the camper. It validates the input fields for the name, email, and booking date before submission.

## Technologies Used

- **React**: For building the user interface.
- **React Hook Form**: To handle form validation and submission.
- **Styled-Components**: For component-specific styling.
- **Redux Toolkit (RTK)**: For state management across the application.
- **Redux Persist**: To persist favorite state across page reloads.