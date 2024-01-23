import React from 'react'
import { ProjectsList } from './ProjectsList'

describe('<ProjectsList />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ProjectsList />)
  })
})