const request=require('request')
const chalk=require('chalk')
const forecast=(x1,x2,callback)=>
{
    const co_ord_url='https://api.darksky.net/forecast/dc5278a8dec6d6bab3d179302082f06c/'+x1+','+x2+'?units=si'
   
    request({url:co_ord_url,json:true},(error,{body})=>
    {
        if(error)
{

    callback('Unable to connect to weather service',undefined)
}
else if(body.error)
{
 callback('unable to find location',undefined)
}
else
{
callback(undefined,body.daily.data[0].summary+' It is currently '+body.currently.temperature+' degree out. There is High '+body.daily.data[0].temperatureHigh+' degree and Low is '+body.daily.data[0].temperatureLow+
 ' degree. There is a '+body.currently.precipProbability+'% chance of rain.')
}
    })

}
module.exports=forecast