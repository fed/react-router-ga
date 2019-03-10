// @flow
import { create } from "react-test-renderer";
import React from "react";
import Analytics from "../";
import { MemoryRouter } from "react-router";
import { Route } from 'react-router-dom'

describe("ReactRouterGA", () => {
  beforeAll(() => {
    document.body.innerHTML = `<script src='//hello.js' />`
  })

  class Page extends React.Component {
    render () {
      return (<div>Hello</div>)
    }
  }

  it("render", () => {
    const tree = create(
      <MemoryRouter>
        <Analytics id="UA-111111111-1" debug>
          <Route component={Page} />
        </Analytics>
      </MemoryRouter>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
