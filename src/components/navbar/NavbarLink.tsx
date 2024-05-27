import { cn } from '@/utils';
import { ComponentPropsWithRef } from 'react';
import { NavLink } from 'react-router-dom';

type NavbarLinkProps = ComponentPropsWithRef<'a'> & {
    href: string;
    newFeature?: boolean;
};

export function NavbarLink({ href, newFeature, children, className, ...otherProps }: NavbarLinkProps) {
    return (
        <NavLink
            to={href}
            className={cn('flex items-center gap-2 h-16 px-4 select-none hover:bg-white/15', className)}
            {...otherProps}
        >
            <span className="font-semibold">{children}</span>{' '}
            {newFeature && <span className="font-bold uppercase text-xs bg-white/30 px-2 py-1 rounded">New</span>}
        </NavLink>
    );
}
