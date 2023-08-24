const axios=require('axios')
const API_KEY='AIzaSyCMDgZjGv9O1kusS4JVoc--cTKwcH9-_bU'
const BASE_URL='https://www.googleapis.com/youtube/v3'
const youtubeModule= {
    getChannelById: async (channelId)=>{
        try {
            let url=BASE_URL+`/channels?key=${API_KEY}&part=snippet,contentDetails&id=${channelId}`
    
            const data= await axios.get(url);
         
            return data.data;
        } catch (error) {
            console.log(error)
        }
      
    },
    getSubsciptionDetails: async (channelId)=>{
        try {
            let url=BASE_URL+`/channels?key=${API_KEY}&part=statistics&channelId=${channelId}`
          console.log(url)
            const data= await axios.get(url);
            console.log(data.data)
            return data.data.items[0].statistics.subscriberCount;
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports=youtubeModule;