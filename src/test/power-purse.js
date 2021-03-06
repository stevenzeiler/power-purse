var dbHelper   = require(__dirname+'/helpers/database');
var fs         = require('fs');
var assert     = require('assert');
var path       = require('path');
var PowerPurse = require(path.join(__dirname, '/../../'));

describe('Power Purse', function() {

  it('should be initialized with a db connection and key', function() {

    var purse = new PowerPurse({
      signingPublicKey: fs.readFileSync(__dirname+'/../../src/test/helpers/rsa-public.pem'),
      bookshelf : dbHelper.bookshelf,
      knex      : dbHelper.knex  
    });
  });

  it('should reject a PowerPurse without a bookshelf', function() {
    assert.throws(function() {
      var purse = new PowerPurse({
        signingPublicKey: '1234567',
        knex      : dbHelper.knex  
      });
    });
  });

  it('should reject a PowerPurse without a signing public key', function() {
    assert.throws(function() {
      var purse = new PowerPurse({
        bookshelf : dbHelper.bookshelf,
        knex      : dbHelper.knex  
      });
    });
  });

  it('should reject a PowerPurse without a knex db connection', function() {
    assert.throws(function() {
      var purse = new PowerPurse({
        signingPublicKey: '1234567',
        bookshelf : dbHelper.bookshelf
      });
    });
  });
});

