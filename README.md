# Climate Tracker

![weather1](https://user-images.githubusercontent.com/98493391/194935819-8c6bf535-6dde-4db0-aaf7-6ee778ab2919.gif)

## Table of Contents
- Introduction
- Planning
- Features
- Reflections
- Future Features
- Technologies
- Contributors

### Introduction
This is an application to display the most up-to-date weather statistics for a selection of 5 citites. It uses regularly updated local weather information from the [Open Weather API](https://openweathermap.org/current). The application was created using React and tested in Cypress. 

<img width="1429" alt="Screen Shot 2022-10-10 at 12 46 53 PM" src="https://user-images.githubusercontent.com/98493391/194933468-65f72a78-59d1-4687-b8d7-eda406b0110c.png">

<img width="1432" alt="Screen Shot 2022-10-10 at 12 47 04 PM" src="https://user-images.githubusercontent.com/98493391/194933504-8e26e760-80d4-4995-a217-1e6b99aa689b.png">

<p align="center"><img width="400" align='center' alt="Screen Shot 2022-10-10 at 12 47 34 PM" src="https://user-images.githubusercontent.com/98493391/194933546-ce40eadd-d7f3-4071-83e1-ef1ab71bebf0.png"><img width="596" align='center' alt="Screen Shot 2022-10-10 at 12 47 34 PM" src="https://user-images.githubusercontent.com/98493391/194935867-8bb31ee6-648c-4918-93c6-78cbd5c9794c.png"></p>


### Planning 
- Wireframe was created using [Figma](https://www.figma.com/file/aNJ701xPL8oHbxtqygAHis/Weather-Planning?node-id=0%3A1)
- Data structure / mapping through [Excalidraw](https://excalidraw.com/#json=kwZkCbzC9Y_QqIFM1KWb2,ulkXkLwSg47VcLfi48EvZw)
- Organization through [GitHub Projects](https://github.com/users/catlynbowles/projects/2)

### Features
- Upon page load, displays 5 cities with city name, temperature, icon, and a 'Details' button.
- Upon clicking the 'Details' button, a modal pops up displaying additional weather details, such as pressure, visibility, humidity, and the weather conditions.
- Additional statistics have been added to account for sunrise and sunset times, cloud coverage, wind, high and low temperatures, and 'feels like' temp.
- Elements are tabbable.
- Site was designed with a mobile-first approach and is fully responsive for any device. 
- A loading component upon Homepage load.
- Error handling displays for data or server errors. 
- Cypress testing to ensure predictable behavior patterns of the app. 
- API key located in an env file for security. 

### Reflections 
- As it was my first time working with modals, it was both smoother and more complicated than expected. Due to the language used on the project specifications, I decided I wanted my modal to be a true overlay of the Homepage component. I created a new view to hold the modal, and using resources online learned how to toggle the modal between true/ false and style it the way I imagined. However, using the modal threw off the tab indexes I had in place. While a user may tab to click on the 'Details' button to view the modal, when the modal appears, the index of the tab remains on the 'Details' button and does not move to the top of the modal. 
Although it took some toggling to figure out how I was going to work with the API, I felt there was a lot of supportive documentation. I decided to fetch cities from longitude/ latitude as I felt it would be the most precise and dynamic way to get local weather information. Initally I wanted to create an app to display current and historic temperatures of the US cities I'd chosen, but failed to see the historic data was for a paid option. Otherwise, this API is full of fun information and I enjoyed using it once I worked through the initial setup. 

### Future Features
- A user can search for a city by name through a search bar. 
- A real-time photograph is shown of the current city.

### Technologies
- React
- SASS
- OpenWeather API
- Postman
- Cypress
- CodeSandbox
- GitHub

### Contributors
- [Catlyn Bowles](https://www.linkedin.com/in/catlyn-bowles/)
