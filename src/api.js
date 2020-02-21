import request from 'superagent';

export function getGuitars(guitarID){
    return request.get(`https://rocky-cove-46033.herokuapp.com/api/guitars${guitarID}`);
}

// import request from "superagent";
// export const GetShoes = (shoeId) => request.get(`https://rocky-basin-80195.herokuapp.com/api/shoes${ShoeId}`)