import React from 'react'
import { shallow } from 'enzyme'
import Observation from './Observation'

describe.only('<Observation />', () => {
    it('renders Observations content', () => {

        const observation = {
            birdname: 'Parrot',
            birdrarity: 'Rare',
            date: 'Sat Feb 09 2019 20:05:54 GMT+0200 (Eastern European Standard Time)',
            notes: 'This is for test',
            id: 1
        }

        const observationComponent = shallow(<Observation observation={observation}/>)
        const namePara = observationComponent.find('.display-4')
        expect(namePara.text()).toContain(observation.birdname)

        const rarityPara = observationComponent.find('.birdRarity')
        expect(rarityPara.text()).toContain(observation.birdrarity)

        const timePara = observationComponent.find('.obsTimestamp')
        expect(timePara.text()).toContain("February 9th 2019, 20:05 ") // Moment format
        
        const notesPara = observationComponent.find('.obsNotes')
        expect(notesPara.text()).toContain(observation.notes)
    })
})
