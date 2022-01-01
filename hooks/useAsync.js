import {useState,useEffect, useReducer} from 'react';


// User Library
import {fetchReducer} from 'utils/reducers'
import { customAxios } from 'utils/axios';
import useLogin from './useLogin'

// custom axios dengan menambahkan Authorization


const usePost = () => {
    const [state,dispatch] = useReducer(fetchReducer, {
        code:null,
        data:null,
        message:null,
        isLoading: true,
        isError: false,
    })

    const [options,setOptions] = useState(null)

    useEffect(() => {
        let didCancel = true;
        if(options !== null || !options){
            (async function() {
                try {
                    const response = await customAxios.post(options.params, {...options.data})
                    if(didCancel){
                        dispatch({
                            type: "FETCH_SUCCESS",
                            result: response
                        })
                    }
                } catch (error) {
                    if(error){
                        dispatch({
                            type: 'FETCH_ERROR',
                            result: error.response
                        })
                    }else if(error.response){
                        console.log(error.response)
                    } else {
                        console.log("Error", error.message)
                    }
                }
            })()
        }

        return () => {didCancel = false}
    }, [options])

    function postData(params,data){
        const options = {
            params,
            data
        }
        setOptions(options)
    }

    return [state,postData]
}


const useGet = () => {
    const [state,dispatch] = useReducer(fetchReducer, {
        code:null,
        data:null,
        message:null,
        isLoading: true,
        isError: false,
    })

    const [options,setOptions] = useState(() => null)

    useEffect(() => {
        let didCancel = true;
        if(options != null){
            (async function() {
                try {
                    const response = await customAxios.get(options)
                    if(didCancel){
                        dispatch({
                            type: "FETCH_SUCCESS",
                            result: response
                        })
                    }
                } catch (error) {
                    if(error){
                        dispatch({
                            type: 'FETCH_ERROR',
                            result: error.response
                        })
                    }else if(error.response){
                        console.log(error.response)
                    } else {
                        console.log("Error", error.message)
                    }
                }
            })()
        }

        return () => {didCancel = false}
    }, [options])

    function getData(params){
        setOptions(params)
    }

    return [state, getData]
}


export {usePost, useGet, useLogin}