import axios from 'axios';


export async function  getShops (){
    try{
        const response = await axios.get('https://localhost:44479/api/shop');
            console.log('response  ', response)
            return response.data;
        }catch(error) {
        return [];
    }
}
  

export async function  createOrder (model){
    try{
        const response = await axios.post('https://localhost:44479/api/order', model);
            console.log('response  ', response)
            return response.data;
    }catch(error) {
        return [];
    }
}