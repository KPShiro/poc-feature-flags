import { Navbar } from '@/components';
import { Toaster } from '@/components/ui/sonner';
import { ComponentPropsWithoutRef } from 'react';

type DefaultLayoutProps = ComponentPropsWithoutRef<'div'>;

export function SignedInLayout({ children }: DefaultLayoutProps) {
    return (
        <div className="relative flex flex-col min-h-screen">
            <Navbar className="sticky top-0 z-10" />
            <div className="flex-1 page-container py-10">{children}</div>
            <Toaster />
        </div>
    );
}
