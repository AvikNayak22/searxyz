# Searxyz
SearXYZ is a reliable tool for finding information quickly and efficiently. No complex interfaces or unnecessary features—just a straightforward search experience tailored for your needs.

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

 To run Searxyz locally on your machine, follow these step-by-step instructions:

1. Clone the repository to your local machine using the following git command:
   
   ```
   git clone https://github.com/AvikNayak22/searxyz.git
   ```
2. Navigate to the project directory:
   ```
   cd searxyz
   ```
3. Install the project dependencies using npm:
   ```
   npm install
   ```
4. Configure API Keys:
   - Obtain a Google Custom Search API key and a CX key by following the Google Custom Search JSON API documentation.

   - Update the environment configuration in your project, for example, by creating a `.env` file and adding the obtained keys:
     ```
     VITE_API_KEY=your_google_api_key
     VITE_CX_KEY=your_cx_key
     ```
5. Start the development server:
   ```
   npm run dev
   ```

## Author
- __Github:__ AvikNayak22
