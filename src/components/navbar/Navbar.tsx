import { NavbarLink } from '@/components';
import useFeatureFlag from '@/hooks/use-feature-flag';
import { cn } from '@/utils';
import { ComponentPropsWithoutRef } from 'react';
import { Link } from 'react-router-dom';

type NavbarProps = ComponentPropsWithoutRef<'div'>;
type NavbarLink = {
    path: string;
    label: string;
    newFeature?: boolean;
};

export function Navbar({ className }: NavbarProps) {
    const galleryEnabled = useFeatureFlag('Gallery');

    const links: NavbarLink[] = [
        {
            path: '/',
            label: 'Home',
        },
    ];

    if (galleryEnabled) {
        links.push({
            path: '/gallery',
            label: 'Assets gallery',
            newFeature: true,
        });
    }

    const navbarLinks = links.map((link, index) => (
        <NavbarLink key={`link-${index}`} href={link.path} newFeature={link.newFeature}>
            {link.label}
        </NavbarLink>
    ));

    return (
        <div className={cn('bg-primary text-primary-foreground shadow', className)}>
            <div className="flex items-center justify-between page-container">
                <Link to="/" className="font-bold">
                    FeatureFlags Inc.
                </Link>
                <div className="flex">{navbarLinks}</div>
            </div>
        </div>
    );
}
