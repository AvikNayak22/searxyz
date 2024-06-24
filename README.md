## SearXYZ

Searxyz is a web application built upon the React.js JavaScript library. It leverages Google's Custom Search API to curate search results based on user-specified keywords or phrases. 
 See the live demo [here.](https://searxyz.netlify.app)

## Features
- **Search:** Enter search queries and retrieve search results.
- **Pagination:** Navigate through multiple pages of search results.
- **Image Search:** Toggle between text and image search modes.

## Technologies Used
- **React:** Front-end JavaScript library for building user interfaces.
- **React Router:** For handling routing and navigation.
- **Axios:** For making HTTP requests to the Google Custom Search API.
- **Tailwind CSS:** Styling and layout of the application.

## Getting Started
1. Clone the repository to your local machine:
   ```
   git clone https://github.com/AvikNayak22/searxyz.git
   ```
2. Navigate to the project directory:
   ```
   cd searxyz
   ```
7. Install dependencies:
   ```
   npm install
   ```
9. Add your Google Custom Search API key and CX (Custom Search Engine ID) to the `.env` file:
    
   ```
   VITE_API_KEY=your_api_key_here
   VITE_CX_KEY=your_cx_key_here
    ```
   - You can obtain these credentials by following the [Google Custom Search JSON API documentation](https://developers.google.com/custom-search/docs/tutorial/creatingcse).
   - Replace `your_api_key_here` and `your_cx_key_here` with your actual API key and CX ID.
11. Start the development server:
     ```
    npm run dev
     ```

## Contributors
  - Avik Nayak (@AvikNayak22)
