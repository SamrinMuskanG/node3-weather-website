const request=require('request')

const forecast=(latitude,longitude,callback)=>{


 const url='http://api.weatherstack.com/current?access_key=91c09f6f25e183f8327d9e870474f418&query='+ latitude + ','+ longitude +'&units=f'
 //const url='http://api.weatherstack.com/current?access_key=91c09f6f25e183f8327d9e870474f418&query=37.8267,-122.4233&units=f'


//json in lower case is a boolean property
request({url,json:true},(error,{body}={})=>{
    
   //console.log(response.body.current)
if(error){
  callback('unable to connect to weather service',undefined)
}else if(body.error){
  callback('unable to find location',undefined)
}else{
   
   callback(undefined,body.current.weather_descriptions+'. it is currently '+ body.current.temperature+' degrees  of temperature '+' at time:'+response.body.current.observation_time+' in here')
    
   
}

})
}

module.exports=forecast