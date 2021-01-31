Link to live app: https://petful-client-template.jpol95.vercel.app/ <br />
Link to server repo: https://github.com/jpol95/petful-server

Welcome to petful! This is a website where you can step in line to adopt a cat, dog, or both. The client was built with ReactJS, HTML, CSS, and Javascript and is hosted on vercel. On the backend, Node and Express are used to manage the queue of both users and pets. The purpose of this app is to practice implementing a queue data structure to simulate a live pet adoption process. The app is implemented via a queue built by a singly-linked list, so the multiple datastructures were mastered in the development of this assignment. The user may join the queue and see other 'fake' adoptees in queue as well.

On the introductory page, the user is able to read the mission statement of the adoption clinic, read how the process of adoption works, and choose to start the process. All links and sections to the website, including the adoptions page, can be accessed via the navbar on the top. 

On the adoption page, the user is able to only see the pets up for adoption at the current time. Once the user enters their name to begin the adoption process, they will see a graphic representing themselves in line. Their icon is green, while the other icons are in black. Once the user works there way to the front of the line, they will see a display of buttons to adopt either the cat, the dog, or both. Once the user clicks adopt, they are shown the pets they have chosen. One cat and/or one dog per user is allowed. 

Technology used to develop my app: 
+ Front-End Technology
  + React
  + JavaScript ES6
  + HTML5
  + CSS3
+ Back-End Technology
  + Express.js
  + Node.js
  + morgan
  + dotenv
  + helmet
  + cors
