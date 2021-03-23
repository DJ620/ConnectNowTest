import React from 'react';

function Filter() {
    const styles = {
        background: {
            backgroundColor: "#0e1a2b"
        }
    }
    return (
        <div style={styles.background} className="px-3">
            <h6 className="white pt-4 pb-5">Filter Results</h6>
            <p className="white">Name (contains)</p>
        </div>
    )
}

export default Filter;
