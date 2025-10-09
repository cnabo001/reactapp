import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import App from '../App';
import StoreItemForm from '../compoments/storeItemForm';
import StoreItemContainer from '../compoments/storeItemsContainer';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: 'add', element: <StoreItemForm key='add'/> },
            {path: 'edit/:id', element: <StoreItemForm key='edit'/> },
            {path: '*', element: <StoreItemContainer /> }
        ]
    }
];

export const router = createBrowserRouter(routes)