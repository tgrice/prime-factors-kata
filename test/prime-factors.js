var expect = require("chai").expect;
var primes = require("../app/prime-factors");

describe("Prime Pactors", function() {
  it("returns the passed number", function() {
    expect(new primes().getPrime(3)).to.equal(3)
  });

});
