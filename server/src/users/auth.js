// const models = require('../../models');
const config = require('../../../config');
// const crypto = require('crypto');
// const schedule = require('node-schedule');
// const request = require('request');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const qs = require('qs');
const {CloudEvent, HTTPReceiver} = require('cloudevents-sdk')

const receiver = new HTTPReceiver()

function test(req, res) {
  console.log("--test api--")

  const receivedEvent = receiver.accept(req.body, req.headers)
  console.log(receivedEvent.format())
  res.status(200).json({msg: 'test success'})
}


module.exports = {
  test,
}
