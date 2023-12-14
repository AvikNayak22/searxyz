# Searxyz
Searxyz is a React-based website designed to offer users a personalized search experience with the help of Custom Search JSON API.

## Features
- Perform text and image searches.
- Display search results in an organized and user-friendly manner.
- Navigate through search results with pagination.
- Access detailed information by clicking on search items.
- Toggle between different search types (e.g., web search and image search).

## Demo Video
[video (3).webm](https://github.com/AvikNayak22/searxyz/assets/110925067/2ce3a670-1b2b-44a7-a0e7-88add36f4ca1)


## Technologies Used
- **React:** Front-end JavaScript library for building user interfaces.
- **React-router-dom:** For handling routing and navigation.
- **Axios:** For making HTTP requests to the Google Custom Search API.
- **Tailwind CSS:** Styling and layout of the application.

## Getting Started

To run this project locally, follow these steps:

1. Clone this repository to your local machine: `git clone https://github.com/AvikNayak22/searxyz.git`
2. Install the project's dependencies:
   ```
   cd searxyz
   npm install
   ```
3. Configure API Keys: Obtain a Google Custom Search API key and a CX key. Update the `VITE_API_KEY` and `VITE_CX_KEY` in your project's environment configuration (e.g., a .env file). You can obtain these credentials by following the [Google Custom Search JSON API documentation](https://developers.google.com/custom-search/docs/tutorial/creatingcse).
4. Start the development server: `npm run dev`
5. Open your web browser and navigate to `http://localhost:5173` to access the Searxyz application.

## Author
- __Github:__ AvikNayak22
