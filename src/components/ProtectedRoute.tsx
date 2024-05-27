import useFeatureFlag from '@/hooks/use-feature-flag';
import { FeatureFlagKey } from '@/types';
import { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type ProtectedRouteProps = PropsWithChildren & {
    featureFlagKey: FeatureFlagKey;
};

export const ProtectedRoute = ({ featureFlagKey, children }: ProtectedRouteProps) => {
    const featureFlagValue = useFeatureFlag(featureFlagKey);
    const navigate = useNavigate();

    useEffect(() => {
        if (featureFlagValue) {
            return;
        }

        navigate('/', {
            replace: true,
        });
    }, [featureFlagValue, navigate]);

    if (featureFlagValue) {
        return children;
    }
};
