//This is leccture 6.9
const request=require('request')
//This is from lecture 6.13 we are using Es6 for shothand prperties and object destructuring this is same as below code only using some part of Es6

const geocode=(address,callback)=>
{
    const geocode_url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoidGlwdTEyMyIsImEiOiJjazc5YXNkdDMwbnAwM2xwZG0wZnN3OWRsIn0.ygwfDKzRMZv3C7v97mjl5w'
    request({url:geocode_url,json:true},(error,{body}={})=>////since we know that response is also object which have one prperties body
    {
      if(error)
      {
          callback('Unabale to connect to mapbox service',undefined)
      }
      else if(body.features.length==0)
      {
          callback('unable to find location.Try another search',undefined)
      }
      else
      {          
          callback(undefined,
            {
                latitude:body.features[0].center[1],
                longitude:body.features[0].center[0],
                location:body.features[0].place_name
            })
            
          
      }
    })

}
module.exports=geocode
//This is upto lecture 6.11
/*
const geocode=(address,callback)=>
{
    const geocode_url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoidGlwdTEyMyIsImEiOiJjazc5YXNkdDMwbnAwM2xwZG0wZnN3OWRsIn0.ygwfDKzRMZv3C7v97mjl5w'
    request({url:geocode_url,json:true},(error,response)=>
    {
      if(error)
      {
          callback('Unabale to connect to mapbox service',undefined)
      }
      else if(response.body.features.length==0)
      {
          callback('unable to find location.Try another search',undefined)
      }
      else
      {          
          callback(undefined,
            {
                latitude:response.body.features[0].center[1],
                longitude:response.body.features[0].center[0],
                location:response.body.features[0].place_name
            })
            
          
      }
    })
}*/
