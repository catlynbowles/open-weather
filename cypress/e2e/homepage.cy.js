describe('Homepage', () => {
  beforeEach(() => {
    const key = Cypress.env('api_key')
    cy.intercept('GET', `https://api.openweathermap.org/geo/1.0/direct?q=Honolulu,Hawaii,US&limit=1&appid=${key}`, { fixture: "hawaii" })
    cy.intercept('GET', `https://api.openweathermap.org/geo/1.0/direct?q=New%20York,New%20York,US&limit=1&appid=${key}`, { fixture: "newYork" })
    cy.intercept('GET', `https://api.openweathermap.org/geo/1.0/direct?q=Portland,Oregon,US&limit=1&appid=${key}`, { fixture: "portland" })
    cy.intercept('GET', `https://api.openweathermap.org/geo/1.0/direct?q=Las%20Vegas,Nevada,US&limit=1&appid=${key}`, { fixture: "lasVegas" })
    cy.intercept('GET', `https://api.openweathermap.org/geo/1.0/direct?q=Anchorage,Alaska,US&limit=1&appid=${key}`, { fixture: "anchorage" })
    cy.intercept('GET', `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=21.304547&lon=-157.855676&appid=${key}`, { fixture: "hawaiiWeather" })
    cy.intercept('GET', `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=40.7127281&lon=-74.0060152&appid=${key}`, { fixture: "newYorkWeather" })
    cy.intercept('GET', `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=36.1672559&lon=-115.148516&appid=${key}`, { fixture: "lasVegasWeather" })
    cy.intercept('GET', `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=45.5203&lon=-122.6742&appid=${key}`, { fixture: "portlandWeather" })
    cy.intercept('GET', `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=61.2163&lon=-149.8949&appid=${key}`, { fixture: "anchorageWeather" })
    cy.visit('http://localhost:3000/')
  })

  it('Should have a display of weather cards, with a city name, temperature, picture and details button', () => {
    cy.wait(3000)
    cy.get('.weather-card').should('have.length', 5)
    cy.get('img').should('have.length', 5)
    cy.get('button').should('have.length', 5)

    cy.get('.city-name').first().should('contain.text', 'Honolulu,  Hawaii')
    cy.get('.temp').first().should('contain.text', '69.48 °F')
    cy.get('.card-bottom').first().should('contain.text', 'Details')
  })

  it('Should allow a user to click on a details button to view a modal, which has weather details about the selected city', () => {
    cy.get('.card-bottom').first().should('contain.text', 'Details').click()

    cy.get('.modal-header')
      .children()
      .should('contain', 'Honolulu')

    cy.get('h3')
      .should('contain', 'Moderate Rain')
      .and('contain', 'Additional Factors')
      .and('contain', 'Today\'s Temperatures')

    cy.get('p')
      .should('contain', 'Sunrise & Sunset')
      .and('contain', 'Cloud Coverage')
      .and('contain', 'Wind')
  })

  it('Should allow a user to exit out of the modal', () => {
    cy.get('.card-bottom').first().should('contain.text', 'Details').click()

    cy.get('.close').click()
    cy.get('.weather-card').should('be.visible')
  })

  it('Should be able to communicate to the user when the city data cannot be fetched', () => {
    const key = Cypress.env('api_key')
    cy.intercept('GET', `https://api.openweathermap.org/geo/1.0/direct?q=Honolulu,Hawaii,US&limit=1&appid=${key}`, {
        statusCode: 400,
      })
      cy.get('.error').should('contain.text', `Oops, there's been an error! Try again later.`)
  });

  it('Should be able to communicate to the user when the local weather data cannot be fetched', () => {
    const key = Cypress.env('api_key')
    cy.intercept('GET', `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=21.304547&lon=-157.855676&appid=${key}`, {
        statusCode: 400,
      })
      cy.get('.error').should('contain.text', `Oops, there's been an error! Try again later.`)
  });

  it('Should be able to communicate to the user when there is a server error', () => {
    const key = Cypress.env('api_key')
    cy.intercept('GET', `https://api.openweathermap.org/geo/1.0/direct?q=Honolulu,Hawaii,US&limit=1&appid=${key}`, {
        statusCode: 500,
      })
      cy.get('.error').should('contain.text', `Oops, there's been an error! Try again later.`)
  });
})