import request from 'superagent';

export function getGuitars(guitarID){
    return request.get(`https://rocky-cove-46033.herokuapp.com/api/guitars${guitarID}`);
}