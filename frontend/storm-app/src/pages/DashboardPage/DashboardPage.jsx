import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function DashboardPage() {
    return (
        <>
            <h1 className="text-danger">Hello</h1>
            <ul className="d-flex flex-row text-success list-unstyled">
                <li className="me-3">Dashboard</li>
                <li className="me-3">Profile</li>
                <li className="me-3">Settings</li>
                <li className="me-3">hiiii</li>
                <li className="me-3">asdfasd</li>
                <li>Logout</li>
            </ul>
        </>
    );
}

export default DashboardPage;
