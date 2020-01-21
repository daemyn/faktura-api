const fs = require('fs');
const express = require('express');

const router = express.Router();

/**
 * Automatically import all routes and default prefix them with the filename
 */

fs.readdirSync(__dirname)
  .forEach((file) => {
    const filename = file.replace('.js', '');
    if (filename !== 'index') {
      // eslint-disable-next-line
      router.use(`/${filename}`, require(`./${filename}`));
    }
  });

module.exports = router;
