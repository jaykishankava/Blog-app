Project Overview
You are building a Post Management application using React.
Users can perform CRUD operations: create, view, edit, and delete posts.
The UI is being designed with Tailwind CSS for a responsive and attractive appearance.
Posts contain title, content
The application uses React Router for navigation between different pages (e.g., viewing all posts, creating a post, editing a post).
Features and Functionalities
Create Post:

Users can add a new post with title, content
The form has validation to ensure required fields are filled before submission.
React Toastify is used to show success or error notifications when a post is created.
View All Posts:

Posts are displayed in a card layout with increased width and height for better presentation.
Each post shows the title, content preview, and image.
Edit and Delete buttons are provided for each card.
View Post Detail:

Clicking on a post card navigates to a detail page displaying the full post information including the title, and content.
Edit Post:

Users can click the Edit button on any post card.
The form is pre-filled with the existing post data to facilitate easy editing.
Updates to a post are saved and reflected in the list of posts.
Delete Post:

Posts can be deleted using a Delete button.
A success message is shown using React Toastify after deletion.
Local Storage Persistence:

The posts are stored in local storage so that they persist even after refreshing the page.
Both the title and content are saved in local storage.
User-Friendly UI:

The UI is built using Tailwind CSS to provide a clean and modern look.
The header and footer have an attractive color combination, and the footer is sticky at the bottom of the page.
Routing:

React Router is used for navigating between the main pages:
Home (view all posts)
Create a new post
Edit an existing post
View post details