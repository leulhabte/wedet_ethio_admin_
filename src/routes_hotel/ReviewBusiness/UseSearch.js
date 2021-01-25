import { useEffect } from 'react';
import axios from 'axios';

const UseQuery = (query) => {
    useEffect(() => {
        let cancel;
        axios({
            url: `restaurant/search?text=${query}`,
            method: "GET",
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            console.log(res.data.data)
        }).catch(e=>{
            if (axios.isCancel(e)) return;
        })
        return ()=> cancel();
    }, [query])
    return null
}

export default UseQuery;