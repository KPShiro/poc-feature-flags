import useFeatureFlag from '@/hooks/use-feature-flag';
import { FeatureFlagKey } from '@/types';

type FeatureFlagGuardProps = {
    featureName: FeatureFlagKey;
    renderWhenEnabled: () => JSX.Element;
    renderWhenDisabled?: () => JSX.Element;
};

export const FeatureFlagGuard = ({ featureName, renderWhenEnabled, renderWhenDisabled }: FeatureFlagGuardProps) => {
    const featureEnabled = useFeatureFlag(featureName);

    if (featureEnabled) {
        return renderWhenEnabled();
    }

    return renderWhenDisabled?.();
};
