import { Asset } from '@/types/asset';

export type DataV1 = {
    title: string;
    thumbnailUrl: string;
};

export type DataV2 = {
    title: string;
    assets: Asset[];
};
