// Index of all included models
module.exports = function(app, mongoose){
  require('./workTicket')(app, mongoose);
  require('./client')(app, mongoose);
};
