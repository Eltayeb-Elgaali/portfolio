import {Repo} from './repo.js'

'use strict';

import { logger } from "../lib/logger.js";

export const getReposHandler = (event) => {
    debugger;
    event.preventDefault();
    fetch('https://api.github.com/users/eltayeb-elgaali/repos')
    .then((res) => {
        res.json()
        .then((repos) => {
            logger.push({
                repositories:repos
            })
            repos.map(repo =>{
                const repoObject = new Repo(repo)
                const view = repoObject.render();
                document.querySelector('#repo').appendChild(view);
            


            })
            
        
        });
    })
    .catch(err => console.error(err));
}