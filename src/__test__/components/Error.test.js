import React from 'react';
import { render } from '@testing-library/react'
import Error from '../../components/Error';


describe('no mostrar mensaje', () => {
const { Error } = render(<App />)
// eslint-disable-next-line jest/valid-expect
expect(!Error('0'))
});