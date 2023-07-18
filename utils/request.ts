import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export type TRequest = AxiosRequestConfig & {
    collection?: {
        method: AxiosRequestConfig['method'];
        url: AxiosRequestConfig['url'];
    };
}

export const apiUrl = (url: string) => `${process.env.APP_API_URL}/v${process.env.APP_API_VERSION}/${url}`;

const request = async ({
    collection,
    method,
    url,
    params,
    headers,
    ...props
}: TRequest): Promise<AxiosResponse> => {
    const response = await axios({
        method: method || collection?.method,
        url: url || collection?.url,
        params,
        headers,
        ...props,
    });

    return response;
};

export default request;
