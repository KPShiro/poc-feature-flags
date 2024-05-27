import tile1 from '@/assets/tile_1.jpg';
import { Thumbnail } from '@/components';
import { DataV1 } from '@/types/data';

export function DataViewV1() {
    const data: DataV1 = {
        title: 'Data (V1)',
        thumbnailUrl: tile1,
    };

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-xl font-bold">{data.title}</h1>
            <Thumbnail imageUrl={data.thumbnailUrl} />
        </div>
    );
}
