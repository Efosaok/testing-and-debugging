import fizzbuzz from '../app/fizzbuzz';
import { expect } from 'chai';

describe('Test cases for fizzbuzz program', () => {
  it('should return fizz if number is a multiple of 3', () => {
    expect(fizzbuzz(3)).to.equal('fizz');
    expect(fizzbuzz(6)).to.equal('fizz');
    expect(fizzbuzz(9)).to.equal('fizz');
  });
  it('should return buzz if number is a multiple of 5', () => {
    expect(fizzbuzz(5)).to.equal('buzz');
    expect(fizzbuzz(10)).to.equal('buzz');
    expect(fizzbuzz(20)).to.equal('buzz');
  });
  it('should return fizzbuzz if number is a multiple of 3 and 5', () => {
    expect(fizzbuzz(15)).to.equal('fizzbuzz');
    expect(fizzbuzz(30)).to.equal('fizzbuzz');
    expect(fizzbuzz(45)).to.equal('fizzbuzz');
  });
  it('should return number if number is not a multiple of 3 or 5', () => {
    expect(fizzbuzz(1)).to.equal(1);
    expect(fizzbuzz(2)).to.equal(2);
    expect(fizzbuzz(4)).to.equal(4);
  });
  it('should return an error message for invalid parameters', () => {
    expect(fizzbuzz('a')).to.equal('invalid parameter passed');
    expect(fizzbuzz(null)).to.equal('invalid parameter passed');
    expect(fizzbuzz([])).to.equal('invalid parameter passed');
    expect(fizzbuzz({})).to.equal('invalid parameter passed');
  });
});