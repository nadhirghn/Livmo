// Breadcrumb.js

import React from 'react';
import { Link, useLocation, matchPath } from 'react-router-dom';
import { routes } from './routes';

const Breadcrumb = () => {
  const location = useLocation();

  const getBreadcrumbs = () => {
    const breadcrumbs = [];

    // Find the current route
    const match = routes.find(route => matchPath(location.pathname, route));

    if (match) {
      // Add the breadcrumb for the current route
      breadcrumbs.push({ name: match.breadcrumb, path: match.path });

      // Recursively add any parent breadcrumbs
      if (match.routes) {
        location.pathname.split('/').reduce((url, pathSegment) => {
          if (!pathSegment) return url;

          const currentPath = `${url}/${pathSegment}`;
          const route = match.routes.find(route =>
            matchPath(currentPath, route)
          );

          if (route) {
            breadcrumbs.push({ name: route.breadcrumb(currentPath), path: currentPath });
          }

          return currentPath;
        }, '');
      }
    }

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <nav>
      <ol>
        {breadcrumbs.map(breadcrumb => (
          <li key={breadcrumb.path}>
            <Link to={breadcrumb.path}>{breadcrumb.name}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

