import React from 'react';

const SideBar = ({  }) => {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h2>PokeApi</h2>
            </div>
            <ul className="sidebar-links">
                <li>
                    <a href="/pokemon/gliscor">
                        <span id="pokemon"> </span> Mi pokemon favorito
                    </a>
                </li>
            </ul>
        </aside>
    );
}

export default SideBar;
