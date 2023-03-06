import React, { useEffect, useState } from 'react';

export const Loading = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000); // change 2000 to the time you want the animation to run for
    }, []);

    return (
        <div>
            {loading ? (
                <div className="loading">
                <div className="circle"></div>
                <img src="logo.png" alt="logo" className="logo" />
                </div>
            ) : (
                <div className="page">
                {/* your page content */}
                </div>
            )}
        </div>
    )
}