'use client';

import { useEffect, useState } from 'react';
import { configureAmplify } from '@/lib/aws-config';

export function AmplifyConfig() {
    const [isConfigured, setIsConfigured] = useState(false);

    useEffect(() => {
        if (!isConfigured && typeof window !== 'undefined') {
            try {
                configureAmplify();
                setIsConfigured(true);
            } catch (error) {
                console.error('Error configuring Amplify:', error);
            }
        }
    }, [isConfigured]);

    return null;
}
