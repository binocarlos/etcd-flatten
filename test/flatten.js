var flatten = require('../')

var tape     = require('tape')

var data = {
  key:'/shapes',
  dir:true,
  nodes:[{
    key:'/shapes/circle',
    dir:true,
    nodes:[{
      key:'/shapes/circle/red',
      value:'CIRCLE RED'
    },{
      key:'/shapes/circle/green',
      value:'CIRCLE GREEN'
    }]
  },{
    key:'/shapes/square',
    dir:true,
    nodes:[{
      key:'/shapes/square/red',
      value:'SQUARE RED'
    }]
  }]

}


tape('flatten the data', function (t) {

  var flat = flatten(data)

  t.deepEqual(flat, {
    '/shapes/circle/red':'CIRCLE RED',
    '/shapes/circle/green':'CIRCLE GREEN',
    '/shapes/square/red':'SQUARE RED'
  })

  t.end()
})


tape('return en empty object for empty input', function (t) {

  var flat = flatten()

  t.deepEqual(flat, {})

  t.end()
})
