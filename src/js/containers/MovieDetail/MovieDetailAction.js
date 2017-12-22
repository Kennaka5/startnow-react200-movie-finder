import axios from 'axios';

export const types = {
    MOVIE_DETAIL_INFO: 'MOVIE_DETAILS'
}

export function movieDetailQuery(movieID) {
    return {
    type: types.MOVIE_DETAIL_INFO,
    payload: axios.get('http://www.omdbapi.com/?apikey=8730e0e&i=' + movieID)
    .then((r) => { 
        console.log('ActionRequestDetail:', r.data)
        return r.data
    })
    .catch((err) => { 
        console.log(err)
        })}
}