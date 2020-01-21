const mongoose = require('mongoose');

module.exports = (dbUrl) => {
  return mongoose.connect(
    dbUrl,
    /**
     * Required parameters to avoid all kind of warning and deprecation
     */
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  );
};
