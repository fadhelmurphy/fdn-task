import {useRouter} from 'next/router';
import {useState,useEffect, useReducer} from 'react';
import Cookie from 'js-cookie'
import { customAxios } from 'utils/axios';


export default function useLogin(){
    const router = useRouter();
    const [options, setOptions] = useState(() => null)
    const [state,dispatch] = useReducer(loginReducer, {
        code:null,
        data:null,
        message:null,
        isLoading: true,
        isError: false,
    })

    useEffect(() => {
        let didCancel = true;
        if(options !== null || !options){
            (async function() {
                dispatch({type: "LOGIN_INIT"})
                try {
                    const response = await customAxios.post(options.params, {...options.data})
                    if(didCancel){
                        const token = response?.data?.data?.token  ?? false
                        const expToken = new Date().getTime() + 10
                        dispatch({type: "success", response, token})
                        Cookie.set('token', token,{expires: expToken})
                    }
                } catch (error) {
                    if(error.response){
                        dispatch({
                            type: 'error',
                            result: error.response
                        })
                    }
                }
            })()
        }

        return () => {didCancel = false}
    }, [options])

    function login(params, data){
        const options = {
            params,
            data
        }
        setOptions(options)
    }

    return [state,login]
}

function loginReducer(state,action){
    const {type, result, token} = action;

    switch(type){
        case "LOGIN_INIT":
            return {
                code: null,
                data: null,
                message: null,
                isLoading: true,
                isError : false
            }
        case "success":
            return {
                ...state,
                code: 200,
                data: result?.data,
                message: result?.message,
                token,
                isLoading: false,
                isError : false
            }
        case "error":
            return {
                ...state,
                code: result?.status,
                data: result?.data,
                message: result?.data?.message,
                token,
                isLoading: false,
                isError : true
            }
            default:
                throw new Error();
    }
}