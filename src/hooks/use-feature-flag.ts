import { useFeatureFlagsContext } from '@/contexts';
import { FeatureFlagKey } from '@/types';
import { isNil } from '@/utils';

function useFeatureFlag(key: FeatureFlagKey) {
    const { featureFlags } = useFeatureFlagsContext();

    if (isNil(featureFlags)) {
        return false;
    }

    const value = featureFlags[key];

    if (isNil(value)) {
        throw new Error(`Feature flag "${key}" is not defined`);
    }

    return value;
}

export default useFeatureFlag;
