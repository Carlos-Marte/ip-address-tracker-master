const responseWithData = {
  ip: '8.8.8.8',
  location: {
    country: 'US',
    region: 'California',
    city: 'Mountain View',
    lat: 37.38605,
    lng: -122.08385,
    postalCode: '94035',
    timezone: '-07:00',
    geonameId: 5375480
  },
  domains: [
    'profit-usa.com',
    '0754cy.com',
    'aaliyah.clothing',
    'adliransana.online',
    'avidchina.com.cn'
  ],
  as: {
    asn: 15169,
    name: 'GOOGLE',
    route: '8.8.8.0/24',
    domain: 'https://about.google/intl/en/',
    type: 'Content'
  },
  isp: 'Google LLC'
};

const responseWithoutData = {
  code: 422,
  messages: 'Input correct IPv4 or IPv6 address.'
};

export { responseWithData, responseWithoutData };
