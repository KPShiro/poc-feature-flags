import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
    return (
        <div className="flex flex-col gap-6 items-center justify-center min-h-screen">
            <div className="flex flex-col gap-2 text-center">
                <h1 className="text-xl font-bold">404 - Page not found</h1>
                <p className="max-w-prose text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ad saepe accusantium, maxime impedit
                    nesciunt non possimus inventore?
                </p>
            </div>
            <Link to="/">
                <Button type="button" variant="outline" className="w-fit">
                    Go back to home
                </Button>
            </Link>
        </div>
    );
};
