import React from 'react';
import "./Filter.css";

function Filter() {
    const styles = {
        background: {
            backgroundColor: "#0e1a2b",
            fontSize: "13px"
        },
        arrow: {
            height: "30px",
            width: "30px",
            color: "#ffffff",
            backgroundColor: "#5692e8",
            border: "none",
            marginTop: "-10px"
        }
    }
    return (
        <div style={styles.background} className="px-3">
            <h6 className="white pt-4 pb-4">Filter Results</h6>
            <p className="white">Name (contains)</p>
            <input type="text" placeholder="Text string" className="mb-4 input"/>
            <p className="white">Minimum Score</p>
            <input type="number" placeholder="1 - 10" min="1" max="10" className="mb-4 input"/>
            <p className="white">Order By</p>
            <div className="row">
                <div className="col-2">
                    <button style={styles.arrow}><span class="fas fa-arrow-up"/></button>
                </div>
                <div className="col-10">
                    <select className="select pt-1">
                        <option value="Release Date" className="option">Release Date</option>
                        <option value="Score" className="option">Score</option>
                        <option value="Name" className="option">Name</option>
                    </select>
                </div>
            </div>
            <div className="row d-flex justify-content-end">
                <button className="mr-3 mt-2 mb-4 clear">Clear</button>
            </div>
        </div>
    )
}

export default Filter;
