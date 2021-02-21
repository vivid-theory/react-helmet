/* eslint-disable no-unused-expressions */
/* eslint max-nested-callbacks: [1, 7] */
/* eslint-disable import/no-named-as-default */

import React from 'react'
import ReactDOM from 'react-dom'
import ReactServer from 'react-dom/server'
import { Helmet } from '../src/index'
import { requestAnimationFrame } from '../src/HelmetUtils'
import { expect } from 'chai'
import sinon from 'sinon'

const HELMET_ATTRIBUTE = 'data-react-helmet'

describe('Helmet', () => {
  let headElement

  const container = document.createElement('div')

  beforeEach(() => {
    headElement =
            headElement || document.head || document.querySelector('head')

    // resets DOM after each run
    headElement.innerHTML = ''
  })

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container)
  })

  describe('api', () => {
    describe('title', () => {
      it('updates page title', (done) => {
        ReactDOM.render(
                    <Helmet defaultTitle={'Fallback'} title={'Test Title'} />,
                    container
        )

        requestAnimationFrame(() => {
          expect(document.title).to.equal('Test Title')

          done()
        })
      })
    })
  })
})
