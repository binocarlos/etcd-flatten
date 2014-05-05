etcd-flatten
============

![Build status](https://api.travis-ci.org/binocarlos/etcd-flatten.png)

Flatten the results of a recursive etcd query into a flat object with keys and values

## installation

```
$ npm install etcd-flatten
```

## usage

Imagine we have some deeply nested keys in etcd:

```
$ etcdctl ls --recursive
```

```
/shapes
/shapes/circle
/shapes/circle/red
/shapes/circle/green
/shapes/square
/shapes/square/red
```js

We can do a recursive query and get a tree like structure with node.nodes = []

etcd-flatten will take the results of an etcd recursive query and return a flat object with no directories included.

```js
var etcdjs = require('etcdjs')
var flatten = require('etcd-flatten')

var etcd = etcdjs('127.0.0.1:4001')

etcd.get('/shapes', {
	recursive:true
}, function(err, results){

	if(!err && results.node){
		var leafs = flatten(results.node)
		console.dir(leafs)	
	}
	
})

/*
{
	'/shapes/circle/red':'CIRCLE RED',
	'/shapes/circle/green':'CIRCLE GREEN',
	'/shapes/square/red':'SQUARE RED'
}
	
*/
```

## api

### `var flatObject = flatten(etcdResults)`

Pass the top-level node from an etcd query.

A flat object containing all leafs by their path is returned.


## license

MIT
