//lecture 6.10
const request=require('request')
const chalk=require('chalk')
//This is from lecture 6.13 we are using Es6 for shothand prperties and object destructuring this is same as below code only using some part of Es6
const forecast=(x1,x2,callback)=>
{
    const co_ord_url='https://api.darksky.net/forecast/dc5278a8dec6d6bab3d179302082f06c/'+x1+','+x2+'?units=si'
   
    request({url:co_ord_url,json:true},(error,{body})=>//since we know that response is also object which have one prperties body
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
callback(undefined,body.daily.data[0].summary+' It is currently '+body.currently.temperature+' degrees out. There is a '+body.currently.precipProbability+'% chance of rain.')
}
    })

}
module.exports=forecast



//This is upto lecture 6.11
/*const forecast=(x1,x2,callback)=>
{
    const co_ord_url='https://api.darksky.net/forecast/dc5278a8dec6d6bab3d179302082f06c/'+x1+','+x2+'?units=si'
   
    request({url:co_ord_url,json:true},(error,response)=>
    {
        if(error)
{

    callback('Unable to connect to weather service',undefined)
}
else if(response.body.error)
{
 callback('unable to find location',undefined)co
}
else
{
callback(undefined,response.body.daily.data[0].summary+' It is currently '+chalk.green.inverse(response.body.currently.temperature)+' degrees out. There is a'+chalk.green.inverse(response.body.currently.precipProbability)+'% chance of rain.')
}
    })


}*/
