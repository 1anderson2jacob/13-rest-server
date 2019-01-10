'use strict';
let sanitize = require('./sanitize');
let uuid = require('uuid');
const express = require('express');
const router = express.Router();

class Categories {

  constructor() {
    this.database = [];
  }

  get(id) {
    let response = id ? this.database.filter( record => record.id === id) : this.database;
    return Promise.resolve(response);
    
  }
  
  post(entry) {
    record.id = uuid();
    let record = sanitize(entry);
    if(record.id) {this.database.push(record); }
    return Promise.resolve(record);
  }

  put(_id, entry) {
    let record = sanitize(entry);
    for (let i = 0; i < entry.length; i++) {
      if(this.database[i].id === _id) {
        this.database[i] = record;
      }
    }
    return Promise.resolve(record);
  }

  delete(_id) {
    let delReturn;
    for (let i = 0; i < this.database.length; i++) {
      if(this.database[i].id === _id) {
        delReturn = this.database[i];
        this.database.splice(i,1);
      }
    }
    return Promise.resolve(delReturn);
  }
}

module.exports = Categories;
