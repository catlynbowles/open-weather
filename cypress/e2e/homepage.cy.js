describe('empty spec', () => {
  beforeEach(() => {
    const key = Cypress.env('api_key')
    console.log(key)
    cy.intercept('GET', `https://api.openweathermap.org/geo/1.0/direct?q=Honolulu,Hawaii,US&limit=1&appid=${key}`, { fixture: "hawaii" })
    cy.intercept('GET', `https://api.openweathermap.org/geo/1.0/direct?q=New%20York,New%20York,US&limit=1&appid=${key}`, { fixture: "newYork" })
    cy.intercept('GET', `https://api.openweathermap.org/geo/1.0/direct?q=Houston,Texas,US&limit=1&appid=${key}`, { fixture: "houston" })
    cy.intercept('GET', `https://api.openweathermap.org/geo/1.0/direct?q=Las%20Vegas,Nevada,US&limit=1&appid=${key}`, { fixture: "lasVegas" })
    cy.intercept('GET', `https://api.openweathermap.org/geo/1.0/direct?q=Miami,Florida,US&limit=1&appid=${key}`, { fixture: "miami" })
    cy.intercept('GET', `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=21.304547&lon=-157.855676&appid=${key}`, { fixture: "hawaiiWeather" })
    cy.intercept('GET', `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=40.7127281&lon=-74.0060152&appid=${key}`, { fixture: "newYorkWeather" })
    cy.intercept('GET', `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=36.1672559&lon=-115.148516&appid=${key}`, { fixture: "lasVegasWeather" })
    cy.intercept('GET', `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=29.7589382&lon=-95.3676974&appid=${key}`, { fixture: "houstonWeather" })
    cy.intercept('GET', `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=25.7741728&lon=-80.19362&appid=${key}`, { fixture: "miamiWeather" })

    // cy.intercept('GET', `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=21.304547&lon=-157.855676&appid=fb105774118349bb868f2a8136fc3844`, { fixture: "localWeather" })
    cy.visit('http://localhost:3000/')
  })
  it('passes', () => {
    cy.wait(3000)
    cy.get('.weather-card')
  })
})