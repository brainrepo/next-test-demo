import React from 'react';
import {render} from '@testing-library/react';
import Board from './Board';


describe('<Board />', () => {
    it('renders without crashing', () => {
        render(<Board hits={12} points={22} />);
    })
    it('it have to show hits', () => {
        const { getByText } = render(<Board hits={12} points={22} />);
        getByText(/Hits: 12/)
    })
    it('it have to show points', () => {
        const { getByText } = render(<Board hits={12} points={22} />);
        getByText(/Points: 22/)
    })
})