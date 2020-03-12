
const request=require('request')


const geocode=(address,callback)=>
{
    const geocode_url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoidGlwdTEyMyIsImEiOiJjazc5YXNkdDMwbnAwM2xwZG0wZnN3OWRsIn0.ygwfDKzRMZv3C7v97mjl5w'
    request({url:geocode_url,json:true},(error,{body}={})=>
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
