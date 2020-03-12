const path=require('path')
const express=require('express')
const hbs=require('hbs')
const geocode1=require('./utils/geocode')
const forecast1=require('./utils/forecast')
const chalk=require('chalk')
//console.log(__dirname)
//console.log(path.join(__dirname,'../public'))
const app=express()
//Define path for Express config
const public_directoy=path.join(__dirname,'../public')
const views_dir=path.join(__dirname,'../template/views')
const partial_dir=path.join(__dirname,'../template/partial')
//Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',views_dir)
hbs.registerPartials(partial_dir)
//Setup static derctory to serve
app.use(express.static(public_directoy))
    app.get('',(req,res)=>
    {
        res.render('index',{
               title:'Weather',
               name:'Vishvajeet'
        })
    })
    app.get('/about',(req,res)=>
    {
        res.render('about',{
            title:'About',
            name:'Vishvajeet'
        })
    })
    app.get('/help',(req,res)=>
    {
         res.render('help',{
             title:'Help',
             help:'For any help contact to :629147....',
             name:'vishvajeet'
         })
    })
    
    app.get('/weather',(req,res)=>
    {
        const address=req.query.address
        if(!address)
        {
             res.send({
                error:'no address provided'
            })
        }
        else{
            geocode1(address,(error,{latitude,longitude,location}={})=>
            {
                if(error)
                {
                    res.send({
                        error:error
                    })
                }
                else
                {
                   
                    forecast1(latitude,longitude,(error,forecastdata)=>
                    {
                        if(error)
                        {
                            res.send({
                                error:error
                            })
                        }
                        else
                        {
                            
                            res.send({
                                location:location,
                                forecastdata:forecastdata,
                                address:address
                            })
                        }
                    })
                }
            })
        }
        
     //   This is upto lecture 8.3
       // res.send({location:'West Bengal',weather:'cloudy',address:req.query.address})
      // res.send([{location:'West Bengal',weather:'cloudy',address},{location:'UttarPradesh',weather:'sunny'}]) sending array of object
    })
    app.get('/product',(req,res)=>
    {
        if(!req.query.search)
        {
          return  res.send({
                error:'No search found'
            })
        }
        console.log(req.query.search)
        res.send({
            product:[]
        })
    })
    app.get('/help/*',(req,res)=>
    {
        res.render('error',{
            title:'404',
            error_v:'help article not found',
            name:'vishvajeet'
        })
       
    })
    app.get('*',(req,res)=>
    {
         res.render('error',{
             title:'404',
             error_v:'Page not Found',
             name:'vishvajeet'
         })
    })
app.listen(3000,()=>
{
    console.log('server is up on port 3000')
})
//This is upto lecture 7.3 wher we are trying to parse json and html file in our code
/*
app.get('',(req,res)=>
    {
          res.send('<h1>HOME</h1>')
    })
    app.get('/help',(req,res)=>
    {
          res.send([{
              name:'Vishvajeet',
              age:21
          },
          {
              name:'Tipu',
              age:20
          }
        ])
    })
    app.get('/about',(req,res)=>
    {
        res.send('<h1>About</h1>')
    })*/