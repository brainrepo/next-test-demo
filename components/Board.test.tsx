import React from 'react';
import {render} from '@testing-library/react';
import Board from './Board';


describe('<Board />', () => {
    it('renders without crashing', () => {
        render(<Board hits={12} points={22} />);
    })
    it('it have to show hits', () => {
        const { getByText } = render(<Board hits={12} points={22} />);
        getByText(/Hits: 12/) //It support full regex
    })
    it('it have to show points using regex', () => {
        const hits:Number=12, points:Number=22;
        const { getByText } = render(<Board hits={hits} points={points} />);
        getByText(new RegExp(`Points: ${points}`, 'i'))
        getByText(new RegExp(`Hits: ${hits}`, 'i'))
    })
    it('it this component is dumb', () => {
        const { getByText } = render(<Board hits={-2} points={1000} />);
        getByText(/Points: 1000/)
        getByText(/Hits: -2/)
    })
})