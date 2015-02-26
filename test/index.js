var should = require('chai').should(),
    dmLivereload = require('../index'),
    start = dmLivereload.start;

describe('Start', function() {
    it('should return String "start"', function() {
        start().should.equal('start');
    });
});
