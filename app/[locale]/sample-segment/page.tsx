'use client';

import useFetch from '@/hooks/useFetch';
import { NextPage } from 'next';

const SampleSegment: NextPage = () => {
    const { data, is_loading, error } = useFetch({
        key: 'sample-segment',
    });

    if (is_loading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;

    return <div>SampleSegmentPage</div>;
};

export default SampleSegment;
