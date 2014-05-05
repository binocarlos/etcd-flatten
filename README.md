etcd-flatten
============

[![Travis](http://img.shields.io/travis/binocarlos/etcd-flatten.svg?style=flat)](https://travis-ci.org/binocarlos/etcd-flatten)

Flatten the results of a recursive etcd query into a flat object with keys and values

## installation

```
$ npm install etcd-flatten
```

## usage

Imagine we have some deeply nested keys in etcd:

```bash
$ etcdctl ls --recursive
```

```
/shapes
/shapes/circle
/shapes/circle/red
/shapes/circle/green
/shapes/square
/shapes/square/red
```

We can do a recursive query and get a tree like structure

etcd-flatten will take this tree structure and return a flat object with paths mapped to values and no directories included

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
