import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './NotFound.scss';

function NotFound () {
    return (
        <div className="center">
            <div className="error">
                <div className="number">4</div>
                <div className="illustration">
                    <div className="circle" />
                    <div className="clip">
                        <div className="paper">
                            <div className="face">
                                <div className="eyes">
                                    <div className="eye eye-left" />
                                    <div className="eye eye-right" />
                                </div>
                                <div className="rosyCheeks rosyCheeks-left" />
                                <div className="rosyCheeks rosyCheeks-right" />
                                <div className="mouth" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="number">4</div>
            </div>

            <div className="text">Oops. The page you're looking for doesn't exist. You can click the button below to go back to the homepage</div>
            <Button variant="contained" color="primary">
                <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
                    Back Home
                </Link>
            </Button>
        </div>
    );
}

export default NotFound;
