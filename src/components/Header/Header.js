import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <NavLink>
            <Link to={'/topics'}>Topics</Link>
            <Link to={'/statistics'}>Statistics</Link>
            <Link to={'/blog'}>Blog</Link>
        </NavLink>
    );
};

export default Header;