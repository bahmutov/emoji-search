/// <reference types="cypress" />
import React from 'react'
import {mount} from 'cypress-react-unit-test'
import App from './App'

describe('Emoji App', () => {
  it('works', () => {
    mount(<App />)
    cy.get('.component-search-input input').type('clap')
    cy.get('.component-emoji-results .component-emoji-result-row').should('have.length.gt', 1)
  })
})
