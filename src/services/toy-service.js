import { storageService } from './storage-service.js'
import { utilService } from './util-service.js'

// const TOY_URL = '/api/toy/'

import axios from 'axios';
const TOY_URL = '//localhost:3030/api/toy/'

const KEY = 'toys_db'
_createToys()

export const toyService = {
  query,
  getById,
  remove,
  save,
  getEmptyToy,
}

function query() {
  return axios.get(TOY_URL)
    .then(res => res.data)

  // return storageService.query(KEY)
}

function getById(toyId) {
  return axios.get(TOY_URL + toyId)
    .then(res => res.data)
    .then(toy => {
      console.log(toy)
      if (!toy.reviews) {
        toy.reviews = [
          { txt: 'Best Toy in the world', rate: 5 },
          { txt: 'Worst Toy in the world', rate: 1 }
        ]
      }
      save(toy)
      return toy
    })
  // return storageService.get(KEY, toyId).then((toy) => {
  // }
  // })
}

function remove(toyId) {
  return axios.delete(TOY_URL + toyId)

  // return storageService.remove(KEY, toyId)
}

function save(toy) {
  if (toy._id) {
    console.log(toy._id)
    return axios.put(TOY_URL + toy._id, toy).then(res => res.data)
    // return storageService.put(toy_KEY, toy)
  } else {
    return axios.post(TOY_URL, toy).then(res => res.data)
    // return storageService.post(toy_KEY, toy)
  }
  // if (toy._id) return storageService.put(KEY, toy)
  // return storageService.post(KEY, toy)
}

function getEmptyToy() {
  return {
    _id,
    name: "Talking Doll",
    price: 123,
    type: "Funny",
    createdAt: 33321111111,
    inStock: true,
    reviews
  }
}

function _createToys() {
  let toys = utilService.loadFromStorage(KEY)
  if (!toys || !toys.length) {
    toys = [
      {
        "_id": 1,
        "name": "egestas massa",
        "price": 19,
        "type": "Adult",
        "createdAt": "1972-10-14T19:49:06.711Z",
        "inStock": true,
        "labels": ["Doll"],
      },
      {
        "_id": 2,
        "name": "vestibulum vestibulum",
        "price": 20,
        "type": "Funny",
        "createdAt": "1998-08-30T01:09:22.244Z",
        "inStock": false,
        "labels": ["Battery Powered"],

      },
      {
        "_id": 3,
        "name": "vel lacus",
        "price": 62,
        "type": "Educational",
        "createdAt": "1979-11-04T23:47:17.942Z",
        "inStock": true,
        "labels": ["Battery Powered", "Baby"],

      },
      {
        "_id": 4,
        "name": "vitae quis",
        "price": 57,
        "type": "Funny",
        "createdAt": "1977-04-02T11:38:09.588Z",
        "inStock": false,
        "labels": ["Doll", "Baby"],

      },
      {
        "_id": 5,
        "name": "magna convallis",
        "price": 78,
        "type": "Adult",
        "createdAt": "1998-07-27T22:40:11.268Z",
        "inStock": true,
        "labels": ["Battery Powered"],

      },
      {
        "_id": 6,
        "name": "pulvinar libero",
        "price": 76,
        "type": "Funny",
        "createdAt": "1997-01-22T05:42:08.090Z",
        "inStock": true,
        "labels": ["Battery Powered", "Baby"],

      },
      {
        "_id": 7,
        "name": "tincidunt orci",
        "price": 96,
        "type": "Adult",
        "createdAt": "1990-11-10T15:56:06.107Z",
        "inStock": false,
        "labels": ["Battery Powered", "Baby", "Doll"],

      },
      {
        "_id": 8,
        "name": "amet aliquam",
        "price": 56,
        "type": "Educational",
        "createdAt": "1970-09-15T17:39:04.801Z",
        "inStock": true,
        "labels": ["Battery Powered", "Baby", "Doll"],

      },
      {
        "_id": 9,
        "name": "at rutrum",
        "price": 51,
        "type": "Adult",
        "createdAt": "1991-09-16T13:50:49.224Z",
        "inStock": true,
        "labels": ["Battery Powered", "Doll"],

      },
      {
        "_id": 10,
        "name": "quis donec",
        "price": 9,
        "type": "Educational",
        "createdAt": "1995-11-06T16:22:04.306Z",
        "inStock": true,
        "labels": ["Battery Powered", "Baby"],

      },
      {
        "_id": 11,
        "name": "mattis quis",
        "price": 72,
        "type": "Funny",
        "createdAt": "1973-05-08T08:12:38.649Z",
        "inStock": true,
        "labels": ["Battery Powered"],

      },
      {
        "_id": 12,
        "name": "sagittis ante",
        "price": 60,
        "type": "Adult",
        "createdAt": "1982-08-21T17:39:03.373Z",
        "inStock": true,
        "labels": ["Battery Powered"],

      },
      {
        "_id": 13,
        "name": "orci consectetur",
        "price": 54,
        "type": "Educational",
        "createdAt": "1980-12-25T07:29:36.281Z",
        "inStock": true,
        "labels": ["Doll"],

      },
      {
        "_id": 14,
        "name": "odio tincidunt",
        "price": 1,
        "type": "Funny",
        "createdAt": "1979-12-30T08:22:05.349Z",
        "inStock": false,
        "labels": ["Doll"],

      },
      {
        "_id": 15,
        "name": "pharetra neque",
        "price": 99,
        "type": "Funny",
        "createdAt": "1991-06-01T20:10:08.749Z",
        "inStock": false,
        "labels": ["Baby"],

      },
      {
        "_id": 16,
        "name": "vel scelerisque",
        "price": 12,
        "type": "Educational",
        "createdAt": "1996-03-13T14:25:41.107Z",
        "inStock": true,
        "labels": ["Doll"],

      },
      {
        "_id": 17,
        "name": "pulvinar et",
        "price": 44,
        "type": "Funny",
        "createdAt": "1972-11-04T09:20:21.768Z",
        "inStock": false,
        "labels": ["Battery Powered", "Baby", "Doll"],

      },
      {
        "_id": 18,
        "name": "at placerat",
        "price": 77,
        "type": "Funny",
        "createdAt": "1984-07-14T11:05:39.761Z",
        "inStock": false,
        "labels": ["Baby", "Doll"],

      },
      {
        "_id": 19,
        "name": "rutrum adipiscing",
        "price": 25,
        "type": "Adult",
        "createdAt": "1984-09-06T15:11:09.177Z",
        "inStock": false,
        "labels": ["Battery Powered", "Doll"],

      },
      {
        "_id": 20,
        "name": "eros ac",
        "price": 13,
        "type": "Funny",
        "createdAt": "1977-06-05T14:00:44.047Z",
        "inStock": false,
        "labels": ["Battery Powered", "Baby", "Doll"],

      }
    ]
    utilService.saveToStorage(KEY, toys)
  }
  return toys
}
