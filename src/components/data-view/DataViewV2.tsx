import tile1 from '@/assets/tile_1.jpg';
import tile2 from '@/assets/tile_2.jpg';
import tile3 from '@/assets/tile_3.jpg';
import { Thumbnail } from '@/components';
import { DataV2 } from '@/types/data';

export function DataViewV2() {
    const data: DataV2 = {
        title: 'Data (V2)',
        assets: [
            {
                description: 'Tile 1',
                imageUrl: tile1,
            },
            {
                description: 'Tile 2',
                imageUrl: tile2,
            },
            {
                description: 'Tile 3',
                imageUrl: tile3,
            },
        ],
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-sm text-muted-foreground max-w-prose">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde accusantium reiciendis voluptatem,
                    dolor harum quis commodi voluptatibus nulla at cupiditate? Deserunt magni vitae illo blanditiis id
                    eligendi mollitia nobis sint.
                </p>
            </div>
            <div className="flex gap-1">
                {data.assets.map((asset, index) => (
                    <div key={'asset-' + index} className="border rounded overflow-hidden select-none">
                        <Thumbnail imageUrl={asset.imageUrl} />
                        <div className="bg-primary text-white px-4 py-2 text-center">{asset.description}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
