import axios from 'axios'
export const POST_SMURF_START = 'POST_SMURF'
export const POST_SMURF_SUCCESS = 'POST_SMURF'

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START'
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'


export const fetchSmurfs = ()=>{
    return dispatch=>{
        dispatch({type:FETCH_SMURFS_START})
        axios.get('http://localhost:3333/smurfs')
            .then(res=>{
                console.log('this',res)
                dispatch({type:FETCH_SMURFS_SUCCESS, payload:res.data})
            })
            .catch(err=>{console.log(err)})
    }
}
export const postSmurf = (inputObj)=>{
    return dispatch=>{
        dispatch({type:POST_SMURF_START})
        axios.post('http://localhost:3333/smurfs',inputObj)
            .then(res=>{
                console.log(res)
            })
    }

}