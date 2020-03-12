console.log('client side javascript is loaded') 

const weatherform=document.querySelector('form')
const search=document.querySelector('input')
const message1=document.querySelector('#message-1')

const message2=document.querySelector('#message-2')

weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=search.value
    message1.textContent='loading...'
    message2.textContent=''
        fetch('http://localhost:3000/weather?address='+location).then((response)=>{  
            response.json().then((data)=>{
                if(data.error)
                message1.textContent=data.error
                //console.log(data.error)
                else{
                   message1.textContent=data.location
                    message2.textContent=data.forecastdata
                     /*console.log('location',data.location)
                     console.log('forecast',data.forecastdata)
                     console.log('address',data.address)*/
                }
            })
        })
    
})


//it is similar as above here we destructuring data 
/*
fetch('http://localhost:3000/weather?address=!').then((response)=>{  
    response.json().then((error,{location,forecastdata,address}={})=>{
        if(error)
        console.log(error)
        else{
             console.log('location',location)
             console.log('forecast',forecastdata)
             console.log('address',address)
        }
    })
})*/