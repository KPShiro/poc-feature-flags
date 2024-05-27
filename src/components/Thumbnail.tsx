export function Thumbnail({ imageUrl }: { imageUrl: string }) {
    return (
        <div className="flex items-center justify-center size-40 bg-neutral-100 overflow-hidden">
            <img src={imageUrl} alt="image" className="max-w-full" />
        </div>
    );
}
