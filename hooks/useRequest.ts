import { useMutation } from '@tanstack/react-query';

const useRequest = (args: any) => {
    const { mutate, isLoading, error, data } = useMutation(args);

    return {
        mutate,
        isLoading,
        error,
        data,
    };
};

export default useRequest;
