## Overview

Giggin is a simple web application that allows users to explore and manage a list of gigs. The application provides features such as displaying a list of gigs, navigation through pages, searching for specific gigs, editing gig details, and managing orders.

## How to Run

### Client

1. Make sure you have [Node.js](https://nodejs.org/) installed on your machine.
2. Open a terminal and navigate to the `client` directory of the project.
3. Run the following commands:

   ```bash
   npm install   # Install dependencies
   npm run dev   # Run the development server
   ```
The client will be accessible at http://localhost:3000.

### Server
1. Open a new terminal window.
2. Navigate to the server directory of the project.
3. Run the following commands:

 ```bash
   npm install  # Install dependencies
   npm start    # Start the server
 ```  

The server will be running at http://localhost:3003.

## Features
### Displaying the List of Gigs
Upon accessing the application, you will see a list of available gigs.
Each gig displays its image, title, price, and description.
Navigation
### Navigate
Navigate through pages of gigs using the navigation buttons.
### Searching for Gigs
Use the search bar to enter a query and filter gigs based on the title or description.
Click the search button to initiate the search.
### Editing Gig Details
Click the "Edit" button on a gig to open a modal for editing its title, description, and price.
### Displaying Orders
The "Add to Order" button allows you to add a gig to your order.
## Additional Details
The application fetches gig data from the server using API calls.
Client-side caching is implemented to improve performance and reduce server calls when navigating between pages.

