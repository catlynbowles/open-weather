# Live Weather Tracker

https://github.com/catlynbowles/open-weather/assets/98493391/74c471cb-eb32-47ad-8e7d-d0291324ac74

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

<img width="1433" alt="Screen Shot 2023-08-03 at 5 41 17 PM" src="https://github.com/catlynbowles/open-weather/assets/98493391/ab6fa3f6-6b66-4491-9ff2-f90fd70821d3">

### Planning 
- Wireframe was created using [Figma](https://www.figma.com/file/aNJ701xPL8oHbxtqygAHis/Weather-Planning?node-id=0%3A1)
- Data structure / mapping through [Excalidraw](https://excalidraw.com/#json=kwZkCbzC9Y_QqIFM1KWb2,ulkXkLwSg47VcLfi48EvZw)
- Organization through [GitHub Projects](https://github.com/users/catlynbowles/projects/2)

### Features
- Upon page load, allows user to select a state.
- When state is selected, a list of cities from that state can be selected.
- When both a city and state are selected, the user can click "Find Weather Results!" which will add that city's weather card to their display. 
- Upon clicking the 'Details' on a weather card, a modal pops up displaying additional weather details, such as pressure, visibility, humidity, and the weather conditions.
- Additional statistics have been added to account for sunrise and sunset times, cloud coverage, wind, high and low temperatures, and 'feels like' temp.
- Elements are tabbable.
- Site was designed with a mobile-first approach and is fully responsive for any device. 
- A loading component upon Homepage load.
- Error handling displays for data or server errors. 
- Cypress testing to ensure predictable behavior patterns of the app. 
- API key located in an env file for security. 

<p align='center'><img width="845" align='center' alt="Screen Shot 2022-10-10 at 4 40 07 PM" src="https://user-images.githubusercontent.com/98493391/194962728-39990f3f-bff8-4fbf-83d6-28e8d3732876.png">
</p>

<p align='center'><img width="640" alt="Screen Shot 2022-10-10 at 4 41 23 PM" src="https://user-images.githubusercontent.com/98493391/194962841-f53cb2f5-95da-4de8-869a-a48999c9aab3.png"></p>

### Reflections 
- As it was my first time working with modals, it was both smoother and more complicated than expected. Due to the language used on the project specifications, I decided I wanted my modal to be a true overlay of the Homepage component. I created a new view to hold the modal, and using resources online learned how to toggle the modal between true/ false and style it the way I imagined. However, using the modal threw off the tab indexes I had in place. While a user may tab to click on the 'Details' button to view the modal, when the modal appears, the index of the tab remains on the 'Details' button and does not move to the top of the modal. 
- Although it took some toggling to figure out how I was going to work with the API, I felt there was a lot of supportive documentation. I decided to fetch cities from longitude/ latitude as I felt it would be the most precise and dynamic way to get local weather information. Initally I wanted to create an app to display current and historic temperatures of the US cities I'd chosen, but failed to see the historic data was for a paid option. Otherwise, this API is full of fun information and I enjoyed using it once I worked through the initial setup. 

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
