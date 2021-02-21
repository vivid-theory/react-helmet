/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-expressions */
/* eslint max-nested-callbacks: [1, 7] */
import { assert, expect, use } from 'chai'
import { requestAnimationFrame } from '../src/HelmetUtils'
import React from 'react'
import ReactDOM from 'react-dom'
import { Helmet } from '../src/index'
import { HTML_TAG_MAP } from '../src/HelmetConstants'
import sinon, { SinonSpy } from 'sinon'
import ReactServer from 'react-dom/server'

// $FIXME: Refactor is complete when this is removed
type $FIXME = any;

let HELMET_ATTRIBUTE = 'data-react-helmet'

declare global {
    interface Window {
        __spy__: SinonSpy;
    }
}

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        test?: string;
    }

    interface HtmlHTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        amp?: boolean;
    }
}

describe('Helmet - Declarative API', () => {
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
          <Helmet defaultTitle={'Fallback'}>
            <title>Test Title</title>
          </Helmet>,
          container
        )

        requestAnimationFrame(() => {
          try {
            expect(document.title).equal('Test Title')

            done()
          } catch (e) {
            done(e)
          }
        })
      })

      it('updates page title and allows children containing expressions', (done) => {
        const someValue = 'Some Great Title'

        ReactDOM.render(
          <Helmet>
            <title>Title: {someValue}</title>
          </Helmet>,
          container
        )

        requestAnimationFrame(() => {
          try {
            expect(document.title).equal('Title: Some Great Title')

            done()
          } catch (e) {
            done(e)
          }
        })
      })
    })
  })
})
