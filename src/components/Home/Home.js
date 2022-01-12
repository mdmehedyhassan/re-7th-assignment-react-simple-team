import React from 'react';
import Player from '../Player/Player';
import PlayingXI from '../PlayingXI/PlayingXI';

const Home = () => {
    return (
        <div className="row">
            <div className="col-md-8">
                <Player></Player>
            </div>
            <div className="col-md-4">
                <PlayingXI></PlayingXI>
            </div>
        </div>
    );
};

export default Home;