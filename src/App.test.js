import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme'
import App from './App';
import Observation from './Components/Observation'

import ObsService from './Services/ObservationService'
jest.mock('./Services/ObservationService')


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<App />', () => {
  let app
  beforeAll(() => {
    app = mount(<App />)
  })

  it('renders all observations from backend', () => {
    app.update()
    // find each observation component individually
    const observationComponents = app.find('.Observation')
    expect(observationComponents.length).toEqual(ObsService.observations.length)
  })
})
