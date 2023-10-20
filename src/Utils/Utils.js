import Cookies from "js-cookie"
import data from '../data.json'

const setCookie = (Cookie) => {
    const name = data.Cookie_Name
    Cookies.set(name,Cookie);
}

export {setCookie}