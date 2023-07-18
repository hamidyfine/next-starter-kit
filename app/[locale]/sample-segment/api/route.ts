import { NextRequest, NextResponse } from 'next/server';
// import request from '@/utils/request';
// import { sampleCollection } from '@/collections';

// Import mock data
// import { sampleData as mock_data } from '@/mock';

export const GET = async (req: NextRequest) => {
    // const sample_res = req.nextUrl.searchParams.get('is_mock') === 'true' ? mock_data : (await request({ collection: sampleCollection.list })).data.data;

    return NextResponse.json({
        // sample: sample_res,
    });
};
