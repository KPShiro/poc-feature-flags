import { ProtectedRoute } from '@/components/ProtectedRoute';
import { FeatureFlagsProvider } from '@/contexts';
import { SignedInLayout } from '@/layouts';
import { GalleryPage, HomePage, NotFoundPage } from '@/pages';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: (
            <SignedInLayout>
                <Outlet />
            </SignedInLayout>
        ),
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'gallery',
                element: (
                    <ProtectedRoute featureFlagKey="Gallery">
                        <GalleryPage />
                    </ProtectedRoute>
                ),
            },
        ],
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <FeatureFlagsProvider config={{ refreshInterval: 5000 }}>
            <RouterProvider router={router} />
        </FeatureFlagsProvider>
    </React.StrictMode>
);
