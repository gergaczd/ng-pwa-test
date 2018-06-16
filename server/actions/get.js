'use strict';

module.exports = async (context) => {
  context.body = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Ng PWA test</title>
    </head>
    <body>
      This should work...
    </body>
    </html>`;
};
