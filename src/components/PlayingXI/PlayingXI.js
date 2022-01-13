import React from 'react';

const PlayingXI = (props) => {
    const { name, salary, position } = props.getPlayer;

    return (
        <div className="d-flex justify-content-between bg-danger p-2 border border-dark border-3 mt-1 mb-1 text-light ">
            <div><p>{name}</p></div>
            <div><p className='text-warning'>{position}</p></div>
            <div><p>{salary} Million</p></div>
        </div>
    );
};

export default PlayingXI;