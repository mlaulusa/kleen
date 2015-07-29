module.exports = function(app, mongoose) {
  var clientSchema = new mongoose.Schema({
    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: [{
      work: {
        type: String
      },
      home: {
        type: String
      },
      mobile: {
        type: String
      }
    }],
    language: {
      type: String,
      default: 'en'
    },
    address_city: {
      type: String
    },
    address_state: {
      type: String
    },
    address_street: {
      type: String
    },
    address_zip: {
      type: String
    }
  });

  // creates all the rest api routes for me [GET, POST, PUT, DELETE]
  app.apiFactory(app, '/api', 'client', mongoose.model('client', clientSchema)).rest();
};
