import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import PlayingXI from '../PlayingXI/PlayingXI';
import fakeData from '../../fakeData/fakeData.json'

const Home = () => {
    const [getData, setGetData] = useState([]);

    useEffect(() => {
        setGetData(fakeData)
    },[]);

    let newArray = [];
    if(localStorage.getItem('players')){
        newArray = JSON.parse(localStorage.getItem('players'));
    }
    const [getPlayer, setGetPlayer] = useState(newArray);

    const playerAddHandler = (player) => {
        const newArrayId = newArray.find(pl => pl.id === player.id);
        if(newArrayId) {
            alert('Sorry You already add this players')
        }
        else{
            localStorage.setItem('players', JSON.stringify([...newArray, player]))
            setGetPlayer([...newArray, player])
        }
    }
    return (
        <div className="row">
            <div className="col-md-8">
                {
                    getData.map(player => <Player playerAddHandler={playerAddHandler} key={player.id} player={player}></Player>)
                }
            </div>
            <div className="col-md-4">
                {
                    <PlayingXI getPlayer={getPlayer}></PlayingXI>
                }
            </div>
        </div>
    );
};

export default Home;