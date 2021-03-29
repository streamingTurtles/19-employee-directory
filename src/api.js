import axios from "axios";
const url = 'https://randomuser.me/api/?results=10';

// 
export default {
    ApiSearch: function () {
        return axios.get(url)

    }
}

// NOTES:
// Employee data content from generic source link
// https://randomuser.me/

// FYI - for review
// https://www.digitalocean.com/community/tutorials/react-axios-react