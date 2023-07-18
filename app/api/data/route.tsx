import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        items: [
            {
                id: 1,
                name: 'Item 1',
            },
            {
                id: 2,
                name: 'Item 2',
            },
        ],
    });
}
