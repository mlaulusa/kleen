module.exports = function(app, mongoose) {
  var workTicketSchema = new mongoose.Schema({
    author: {
      type: String,
      required: true
    },
    date_submitted: {
      type: Date,
      required: true,
      default: Date.now()
    },
    building: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    replies: [{
      author: {
        type: String
      },
      date_submitted: {
        type: String
      },
      message: {
        type: String
      }
    }]
  });

  // creates the api routes for me [GET, POST, PUT, DELETE]
  app.apiFactory(app, '/api', 'workTicket', mongoose.model('workTicket', workTicketSchema)).rest();

};
