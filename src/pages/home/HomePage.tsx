import { DataViewV1, DataViewV2, FeatureFlagGuard } from '@/components';
import { Button } from '@/components/ui/button';
import { useFeatureFlagsContext } from '@/contexts';

export const HomePage = () => {
    const { config } = useFeatureFlagsContext();

    const refreshInterval = config.refreshInterval / 1000;

    const handleRemoveCachedFlags = () => {
        localStorage.removeItem(config.cacheKey);
        location.reload();
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between gap-6 p-6 bg-primary/5 rounded-lg">
                <p className="pl-1 max-w-screen-sm text-sm text-primary">
                    Feature flags are being updated every <i className="font-medium">{refreshInterval} seconds</i>{' '}
                    (configurable). Click the button to clear cached feature flags and restart demo.
                </p>
                <Button type="button" onClick={handleRemoveCachedFlags}>
                    Clear cached flags
                </Button>
            </div>
            <div className="p-6 border border-dashed rounded">
                <FeatureFlagGuard
                    featureName="DataVisualizationV2"
                    renderWhenEnabled={() => <DataViewV2 />}
                    renderWhenDisabled={() => <DataViewV1 />}
                />
            </div>
        </div>
    );
};
