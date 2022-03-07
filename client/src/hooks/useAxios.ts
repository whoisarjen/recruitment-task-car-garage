import axios from "axios";

const useAxios = () => {

    const get = async ({ url }: { url: string }) => {
        return await axios.get(`${process.env.REACT_APP_SERVER_URL}${url}`, { withCredentials: true });
    }

    const post = async ({ url, object }: { url: string, object: object }) => {
        return await axios.post(`${process.env.REACT_APP_SERVER_URL}${url}`, object, { withCredentials: true });
    }

    const deleteAxios = async ({ url }: { url: string }) => {
        return await axios.delete(`${process.env.REACT_APP_SERVER_URL}${url}`, { withCredentials: true });
    }

    return { get, post, deleteAxios }
}

export default useAxios;