import React from 'react';
import { track } from '@amplitude/analytics-browser';

track('Page View', { url: '/detail' });

const Detail = () => {
    return <h1>Detail Page</h1>
};

export default Detail;
