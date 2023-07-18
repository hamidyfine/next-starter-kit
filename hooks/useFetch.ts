'use client';

import { useQuery } from '@tanstack/react-query';
import request, { TRequest } from '@/utils/request';

type TUseFetchArgs = {
    is_mock?: boolean;
    params?: object;
    headers?: object;
    key: string;
    transformer?: (data: any) => any;
    url?: string;
};

const useFetch = (args: TUseFetchArgs) => {
    const request_config: TRequest = {
        method: 'GET',
        url: args.url ? args.url : `${args.key}/api`,
        params: {
            is_mock: args.is_mock || false,
            ...args.params,
        },
        headers: args.headers || {},
    };

    const { data, isLoading, refetch, error } = useQuery({
        queryKey: [args.key],
        queryFn: async () => await request(request_config),
        select: (data) => {
            if (args.transformer) {
                return args.transformer(data);
            }

            return data;
        },
    });

    return {
        data: data?.data,
        error,
        is_loading: isLoading,
        refetch,
        response: data,
        status: data?.status,
    };
};

export default useFetch;
