import React from 'react';
import { Link } from 'react-router-dom';

function Community({ name, id }) {
    return (
        <div style={{ border: '1px solid black', padding: '20px', margin: '10px' }}>
            <h2>{name}</h2>
            <Link to={`/community/${id}`}>Enter Community</Link>
        </div>
    );
}

export default Community;