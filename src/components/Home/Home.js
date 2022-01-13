import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import PlayingXI from '../PlayingXI/PlayingXI';
import fakeData from '../../fakeData/fakeData.json'
import Header from '../Header/Header';

const Home = () => {
    const [getData, setGetData] = useState([]);

    useEffect(() => {
        setGetData(fakeData)
    }, []);

    let newArray = [];
    if (localStorage.getItem('players')) {
        newArray = JSON.parse(localStorage.getItem('players'));
    }
    const [getPlayer, setGetPlayer] = useState(newArray);

    const playerAddHandler = (player) => {
        const newArrayId = newArray.find(pl => pl.id === player.id);
        if (newArrayId) {
            alert('Sorry You already add this players')
        }
        else {
            localStorage.setItem('players', JSON.stringify([...newArray, player]))
            setGetPlayer([...newArray, player])
        }
    }
    return (
        <div className="row">
            <Header></Header>
            <div className="col-md-8">
                {
                    getData.map(player => <Player playerAddHandler={playerAddHandler} key={player.id} player={player}></Player>)
                }
            </div>
            <div className="col-md-4">
                <h1 className="text-center bg-dark mt-3 mb-3 p-3 text-light">playing Xi</h1>
                <div className="d-flex justify-content-between bg-warning p-2">
                    <div><p>Name</p></div>
                    <div><p>Position</p></div>
                    <div><p>Salary</p></div>
                </div>
                {
                    getPlayer.map(player => <PlayingXI key={player.id} getPlayer={player}></PlayingXI>)
                }
                <div className="d-flex justify-content-between bg-success text-light p-2">
                    <div><p>Total Budgets</p></div>
                    <div>
                        <p>
                            {
                                getPlayer.reduce((total, player) => total + player.salary, 0)
                            } Million
                        </p>
                    </div>
                </div>
                <button onClick={()=> window.location.reload() || localStorage.setItem('players', JSON.stringify([]))} className="btn btn-success mt-5">Make new team</button>
            </div>
        </div>
    );
};

export default Home;