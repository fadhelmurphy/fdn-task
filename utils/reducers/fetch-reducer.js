export default function fetchReducer(state,action){
    const {type, result} = action;

    switch(type){
        case "FETCH_INIT":
            return {
                code: null,
                data: null,
                message:null,
                isLoading:true
            }
        case "FETCH_SUCCESS":
            const resultData = result
            const data = [resultData.data]
            return {
                code: 200,
                data,
                message:"Berhasil mendapatkan data",
                isLoading:false,
                isError: false
            }
        case "FETCH_ERROR":
            return {
                ...state,
                code: 400,
                data: [],
                message: "Gagal mendapatkan data",
                isLoading: false,
                isError: true 
            }
        case "NETWORK_FAILURE":
            return {
                ...state,
                code: 500,
                data: [],
                message: "Sepertinya ada masalah dengan koneksi jaringan anda",
                isLoading: false,
                isError: true 
            }
        case "UNAUTHORIZED" : 
            return {
                ...state,
                code: 401,
                data: [],
                message: "Anda harus login",
                isLoading: false,
                isError: true 
            }
        default:
            throw new Error()
    }
}