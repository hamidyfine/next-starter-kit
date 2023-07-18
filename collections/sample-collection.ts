import { apiUrl } from '@/utils/request';

export const sampleCollection = {
    list: {
        method: 'GET',
        url: apiUrl('sample'),
    },
    single: {
        method: 'GET',
        url: '/api/sample/:id',
    },
    example: {
        method: 'GET',
        url: '/api/sample/example',
        params: {
            id: '',
            name: '',
        },
    },
};

export type TSampleCollection = typeof sampleCollection;
