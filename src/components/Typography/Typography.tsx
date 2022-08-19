import clsx from 'clsx';
import React from 'react';

type typeObject = {
    [key: string]: string;
};

const variantsMapping: typeObject = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    li: 'li',
    subheading1: 'h6',
    subheading2: 'h6',
    subheading3: 'h6',
    body1: 'p',
    body2: 'p',
};

const Typography = ({
    as = 'p',
    color,
    fontWeight,
    children,
    onClick,
    className,
    ...passProps
}: {
    as?: string;
    color?: string;
    fontWeight?: string;
    children: React.ReactNode;
    passProps?: any;
    onClick?: any;
    className?: string;
}) => {
    const classes = clsx('typography--base', className, {
        [`typography--variant-${as}`]: as,
        [`typography--color-${color}`]: color,
        [`typography--fontWeight-${fontWeight}`]: fontWeight,
    });
    const props: any = {
        onClick,
        ...passProps,
    };
    // console.log(variantsMapping[as]);
    const Component = Object.keys(variantsMapping).includes(as)
        ? variantsMapping[as]
        : 'p';
    return (
        <Component className={classes} {...props}>
            {children}
        </Component>
    );
};

export default Typography;
