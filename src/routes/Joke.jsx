import React, {useEffect, useState} from 'react';
import facade from "../apiFacade.js";
import {dadJokeURL} from "../settings.js";

const Joke = ({user}) => {


    const [dataFromServer, setDataFromServer] = useState("")
    const [joke, setJoke] = useState("")
    let data ="";

    useEffect( () => {
        if(user.username === ''){ setDataFromServer('Please login to see date from server');

            return;
        }
        fetch(dadJokeURL)
            .then(response => response.json())
            .then(data =>setJoke(data.joke)

            ).catch(err => {
                console.error(err)
        });
        const url = user.roles.split(',').includes('user') ? '/info/user' : '/info/admin';
        facade.fetchData(url).then(res => {

            console.log(res);
            setDataFromServer(res.msg)});
    },[user]);

    return (
        <div>
            {dataFromServer}
            <h1>{joke}</h1>
        </div>
    );
};

export default Joke;