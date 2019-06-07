'use strict';

const QServer = require ('@nmq/q/server');

QServer.start();

const filesQueue = new QServer('filesQueue'); //namespace

filesQueue.monitorEvent('save'); //rooms
filesQueue.monitorEvent('error'); //rooms

const databaseQueue = new QServer('databaseQueue'); //namespace

databaseQueue.monitorEvent('create');
databaseQueue.monitorEvent('read');
databaseQueue.monitorEvent('update');
databaseQueue.monitorEvent('delete');
databaseQueue.monitorEvent('error');

console.log('Server is up');