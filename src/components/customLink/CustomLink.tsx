import {Link, useMatch} from  'react-router-dom';
import {FC} from 'react';

export type CustomLinkProps = {
    children: React.ReactNode,
    to: string,
}

export const CustomLink: FC<CustomLinkProps> = ({children, to}) => {
    const match = useMatch(to);
    return (
        <Link to={to}
        style ={{color: match ? "rgba(0, 0, 0, .8)": "rgba(0, 0, 0, .3)", textDecoration: "none"}}
        >
            {children}
        </Link>
    )
}