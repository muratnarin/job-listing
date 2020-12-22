import axios from 'axios'
const MockAdapter = require('axios-mock-adapter')
const mock = new MockAdapter(axios)

const jobs = [
  {
    jobId: 1,
    positionName: 'Gerber Operatörü',
    companyName: 'Pide Ve Kebap',
    durationDay: 0,
    durationDayText: 'Taze çıktı!',
    imageUrl: 'https://picsum.photos/500/100?random=1',
    distance: '8,53 km yakınında',
    latitude: 41.050968170166023,
    longitude: 29.062856674194339,
    cityName: 'İstanbul',
    townName: 'Çengelköy Mahallesi'
  },
  {
    jobId: 2,
    positionName: 'Demo Job 2',
    companyName: 'Demo Company Name 2',
    durationDay: 0,
    durationDayText: 'Duration Day 2',
    imageUrl: 'https://picsum.photos/500/100?random=2',
    distance: '8,53 km yakınında',
    latitude: 41.050968170166023,
    longitude: 29.062856674194339,
    cityName: 'Ankara',
    townName: 'Demo Town Name 2'
  },
  {
    jobId: 3,
    positionName: 'Demo Job 3',
    companyName: 'Demo Company Name 3',
    durationDay: 0,
    durationDayText: 'Duration Day 3',
    imageUrl: 'https://picsum.photos/500/100?random=3',
    distance: '8,53 km yakınında',
    latitude: 41.050968170166023,
    longitude: 29.062856674194339,
    cityName: 'İzmir',
    townName: 'Demo Town Name 3'
  },
  {
    jobId: 4,
    positionName: 'Demo Job 4',
    companyName: 'Demo Company Name 4',
    durationDay: 0,
    durationDayText: 'Duration Day 4',
    imageUrl: 'https://picsum.photos/500/100?random=4',
    distance: '8,53 km yakınında',
    latitude: 41.050968170166023,
    longitude: 29.062856674194339,
    cityName: 'Bursa',
    townName: 'Demo Town Name 4'
  },
  {
    jobId: 5,
    positionName: 'Demo Job 5',
    companyName: 'Demo Company Name 5',
    durationDay: 0,
    durationDayText: 'Duration Day 5',
    imageUrl: 'https://picsum.photos/500/100?random=5',
    distance: '8,53 km yakınında',
    latitude: 41.050968170166023,
    longitude: 29.062856674194339,
    cityName: 'İstanbul',
    townName: 'Demo Town Name 5'
  },
  {
    jobId: 6,
    positionName: 'Demo Job 6',
    companyName: 'Demo Company Name 6',
    durationDay: 0,
    durationDayText: 'Duration Day 6',
    imageUrl: 'https://picsum.photos/500/100?random=6',
    distance: '8,53 km yakınında',
    latitude: 41.050968170166023,
    longitude: 29.062856674194339,
    cityName: 'Ankara',
    townName: 'Demo Town Name 6'
  }
]

const jobList = [
  {
    jobId: 1,
    positionName: 'Gerber Operatörü',
    companyName: 'Pide Ve Kebap',
    durationDay: 0,
    durationDayText: 'Taze çıktı!',
    imageUrl: 'https://picsum.photos/300/500?random=1',
    distance: '8,53 km yakınında',
    latitude: 41.050968170166023,
    longitude: 29.062856674194339,
    cityName: 'İstanbul',
    townName: 'Çengelköy Mahallesi',
    countryCode: 'TR',
    countryName: 'Turkey',
    address: 'Saray Mahallesi Site Yolu Sokak No:7 34768 Ümraniye/İstanbul Turkey',
    postalCode: 34768,
    hasLatitude: true,
    hasLongitude: true,
    description: 'syovsvyosvyoyvsoby',
    status: 1,
    contactPhone: {
      countryCallingCode: '+90',
      areaCode: '879',
      number: '9797979'
    }
  },
  {
    jobId: 2,
    positionName: 'Demo Job 2',
    companyName: 'Demo Company Name 2',
    durationDay: 0,
    durationDayText: 'Duration Day 2',
    imageUrl: 'https://picsum.photos/300/500?random=2',
    distance: '8,53 km yakınında',
    latitude: 41.050968170166023,
    longitude: 29.062856674194339,
    cityName: 'Demo City Name 2',
    townName: 'Demo Town Name 2',
    address: 'Saray Mahallesi Site Yolu Sokak No:7 34768 Ümraniye/İstanbul Turkey',
    postalCode: 34768,
    hasLatitude: true,
    hasLongitude: true,
    description: 'syovsvyosvyoyvsoby',
    status: 1,
    contactPhone: {
      countryCallingCode: '+90',
      areaCode: '879',
      number: '9797979'
    }
  },
  {
    jobId: 3,
    positionName: 'Demo Job 3',
    companyName: 'Demo Company Name 3',
    durationDay: 0,
    durationDayText: 'Duration Day 3',
    imageUrl: 'https://picsum.photos/300/500?random=3',
    distance: '8,53 km yakınında',
    latitude: 41.050968170166023,
    longitude: 29.062856674194339,
    cityName: 'Demo City Name 3',
    townName: 'Demo Town Name 3',
    address: 'Saray Mahallesi Site Yolu Sokak No:7 34768 Ümraniye/İstanbul Turkey',
    postalCode: 34768,
    hasLatitude: true,
    hasLongitude: true,
    description: 'syovsvyosvyoyvsoby',
    status: 1,
    contactPhone: {
      countryCallingCode: '+90',
      areaCode: '879',
      number: '9797979'
    }
  },
  {
    jobId: 4,
    positionName: 'Demo Job 4',
    companyName: 'Demo Company Name 4',
    durationDay: 0,
    durationDayText: 'Duration Day 4',
    imageUrl: 'https://picsum.photos/300/500?random=4',
    distance: '8,53 km yakınında',
    latitude: 41.050968170166023,
    longitude: 29.062856674194339,
    cityName: 'Demo City Name 4',
    townName: 'Demo Town Name 4',
    address: 'Saray Mahallesi Site Yolu Sokak No:7 34768 Ümraniye/İstanbul Turkey',
    postalCode: 34768,
    hasLatitude: true,
    hasLongitude: true,
    description: 'syovsvyosvyoyvsoby',
    status: 1,
    contactPhone: {
      countryCallingCode: '+90',
      areaCode: '879',
      number: '9797979'
    }
  },
  {
    jobId: 5,
    positionName: 'Demo Job 5',
    companyName: 'Demo Company Name 5',
    durationDay: 0,
    durationDayText: 'Duration Day 5',
    imageUrl: 'https://picsum.photos/300/500?random=5',
    distance: '8,53 km yakınında',
    latitude: 41.050968170166023,
    longitude: 29.062856674194339,
    cityName: 'Demo City Name 5',
    townName: 'Demo Town Name 5',
    address: 'Saray Mahallesi Site Yolu Sokak No:7 34768 Ümraniye/İstanbul Turkey',
    postalCode: 34768,
    hasLatitude: true,
    hasLongitude: true,
    description: 'syovsvyosvyoyvsoby',
    status: 1,
    contactPhone: {
      countryCallingCode: '+90',
      areaCode: '879',
      number: '9797979'
    }
  },
  {
    jobId: 6,
    positionName: 'Demo Job 6',
    companyName: 'Demo Company Name 6',
    durationDay: 0,
    durationDayText: 'Duration Day 6',
    imageUrl: 'https://picsum.photos/300/500?random=6',
    distance: '8,53 km yakınında',
    latitude: 41.050968170166023,
    longitude: 29.062856674194339,
    cityName: 'Demo City Name 6',
    townName: 'Demo Town Name 6',
    address: 'Saray Mahallesi Site Yolu Sokak No:7 34768 Ümraniye/İstanbul Turkey',
    postalCode: 34768,
    hasLatitude: true,
    hasLongitude: true,
    description: 'syovsvyosvyoyvsoby',
    status: 1,
    contactPhone: {
      countryCallingCode: '+90',
      areaCode: '879',
      number: '9797979'
    }
  }
]

mock.onGet('/jobList').reply(200, {
  items: jobs,
  total: 6
})

const jobUri = '/job'

const url = new RegExp(`${jobUri}/*`)

mock.onGet(url).reply((request) => {
  const jobId = parseInt(request.url.substring(request.url.lastIndexOf('/') + 1))

  // eslint-disable-next-line eqeqeq
  const job = jobList.filter(v => v.jobId === jobId)[0]

  return job ? [200, JSON.parse(JSON.stringify(job))] : [505]
})
