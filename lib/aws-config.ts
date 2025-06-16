import { Amplify } from 'aws-amplify';
import { cognitoUserPoolsTokenProvider } from '@aws-amplify/auth/cognito';

export const configureAmplify = () => {
    if (typeof window === 'undefined') return;

    Amplify.configure({
        Auth: {
            Cognito: {
                userPoolId: process.env.NEXT_PUBLIC_AWS_USER_POOL_ID!,
                userPoolClientId: process.env.NEXT_PUBLIC_AWS_USER_POOL_CLIENT_ID!,
            }
        }
    });

    const storage = {
        setItem: async (key: string, value: string): Promise<void> => {
            window.localStorage.setItem(key, value);
        },
        getItem: async (key: string): Promise<string | null> => {
            return window.localStorage.getItem(key);
        },
        removeItem: async (key: string): Promise<void> => {
            window.localStorage.removeItem(key);
        },
        clear: async (): Promise<void> => {
            window.localStorage.clear();
        }
    };

    cognitoUserPoolsTokenProvider.setKeyValueStorage(storage);
};
