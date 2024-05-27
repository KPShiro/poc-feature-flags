/* eslint-disable react-refresh/only-export-components */
import { FeatureFlagKey } from '@/types';
import { isNil } from '@/utils';
import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'sonner';

type FeatureFlags = Record<FeatureFlagKey, boolean>;

type FeatureFlagsConfig = {
    cacheKey: string;
    refreshInterval: number;
};

type FeatureFlagsContextProps = {
    featureFlags: FeatureFlags;
    config: FeatureFlagsConfig;
};

type FeatureFlagsProviderProps = PropsWithChildren & {
    config?: Partial<FeatureFlagsConfig>;
};

export const FeatureFlagsContext = createContext<FeatureFlagsContextProps | undefined>(undefined);

export const useFeatureFlagsContext = () => {
    const context = useContext(FeatureFlagsContext);

    if (isNil(context)) {
        throw new Error('useFeatureFlag must be used within a FeatureFlagsProvider!');
    }

    return context;
};

export const DefaultFeatureFlagsProviderConfig: FeatureFlagsConfig = {
    cacheKey: 'featureFlags',
    refreshInterval: 10000,
};

const DefaultFeatureFlags: FeatureFlags = {
    DataVisualizationV2: false,
    Gallery: false,
};

export const FeatureFlagsProvider = ({ config: _config, children }: FeatureFlagsProviderProps) => {
    const [config] = useState<FeatureFlagsConfig>({
        ...DefaultFeatureFlagsProviderConfig,
        ..._config,
    });

    const [featureFlags, setFeatureFlags] = useState<FeatureFlags>(() => {
        const cachedFeatureFlags = localStorage.getItem(config.cacheKey);

        if (isNil(cachedFeatureFlags)) {
            return DefaultFeatureFlags;
        }

        return JSON.parse(cachedFeatureFlags);
    });

    // Mocked response from backend that updates feature flags
    useEffect(() => {
        const timeoutIDs: NodeJS.Timeout[] = [];

        const updateFeatureFlags = () => {
            setFeatureFlags((prevFlags) => {
                const updatedFlags = {
                    ...prevFlags,
                    DataVisualizationV2: true,
                    Gallery: true,
                };

                localStorage.setItem(config.cacheKey, JSON.stringify(updatedFlags));
                toast('Feature flags has been updated successfully!', {
                    duration: 3000,
                });

                return updatedFlags;
            });

            timeoutIDs.push(setTimeout(updateFeatureFlags, config.refreshInterval));
        };

        timeoutIDs.push(setTimeout(updateFeatureFlags, config.refreshInterval));

        return () => {
            timeoutIDs.forEach((timeout) => clearTimeout(timeout));
        };
    }, [config]);

    return <FeatureFlagsContext.Provider value={{ featureFlags, config }}>{children}</FeatureFlagsContext.Provider>;
};
