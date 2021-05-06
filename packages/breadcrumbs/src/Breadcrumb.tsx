import React from 'react';
import BreadcrumbProps, { BreadcrumbSeparatorProps } from './Breadcrumb.types';

const BreadcrumbSeparator = React.forwardRef<HTMLLIElement, BreadcrumbSeparatorProps>(
  (props, ref) => {
  const {
    children,
    ...otherProps
  } = props;

  return (
    <li ref={ref} {...otherProps}>
      {children}
    </li>
  );
});

BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

function insertSeparators(
  items: React.ReactNode[], separator: React.ReactNode) {
  return items.reduce((acc, item, idx) => {
    // if (idx < items.length - 1) {
    //   acc = acc.concat(
    //     item,
    //     <BreadcrumbSeparator
    //       key={`separator-$index`}>
    //       {separator}
    //     </BreadcrumbSeparator>,
    //   );
    // } else {
    //   acc.push(item);
    // }

    return acc;
  }, []);
}

export const Breadcrumbs = React.forwardRef<HTMLElement, BreadcrumbProps>((props, ref) => {
  const {
    children,
    separator = "/",
    ...otherProps
  } = props;
  
  const validChildren = React.Children.toArray(children)
    .filter((child) => {
      return React.isValidElement(child);
    })
    .map((child, idx) => (
      <li key={`child-${idx}`}>
        {child}
      </li>
    ));

  return (
    <nav
      ref={ref}
      {...otherProps}
    >
      {insertSeparators(
        validChildren,
        separator
      )}
    </nav>
  );
});

Breadcrumbs.displayName = 'Breadcrumbs';