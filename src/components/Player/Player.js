import React from 'react';

const Player = ({ player, playerAddHandler }) => {
    const { name, position, salary, country, img } = player;
    const playerDiv = {
        color: "white",
        border: "5px solid black",
        backgroundColor: "tomato",
        borderRadius: "10px",
        marginTop: '20px'
    }
    return (
        <div style={playerDiv} className="row">
            <div className="col-md-6">
                <div className="m-2 d-flex justify-content-center" style={{overflow: 'hidden'}}>
                    <img className="image-style" src={img} alt="" />
                </div>
            </div>
            <div className="col-md-6  d-flex align-items-center">
                <div className="m-2 ">
                <h4>Name: {name}</h4>
                <h6>Country: {country}</h6>
                <h5>Salary: {salary} Million</h5>
                <h6>position: {position}</h6>
                <button onClick={()=> playerAddHandler(player)} className="btn btn-success">Add player</button>
                </div>
            </div>
        </div>
    );
};

export default Player;