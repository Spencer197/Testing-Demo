const lib = require('../lib');

describe('absolute', () => {
    it('Should return a positive number if input is positve.', () => {
        const result = lib.absolute(1);
        expect(result).toBe(1);
      });
      
      it('Should return a positive number if input is negative.', () => {
          const result = lib.absolute(-1);
          expect(result).toBe(1);
        });
      
        it('Should return 0 if input is 0.', () => {
          const result = lib.absolute(0);
          expect(result).toBe(0);
        });
});


describe('greet', () => {
  it('should return the greeting message', () => {
    const result = lib.greet('Spencer');
    expect(result).toMatch(/Spencer/);//If the name is correct, the /Regex/ pattern won't be broken.
    expect(result).toContain('Spencer');
  });
});

describe('getCurrencies', () => {
  it('should return supported currencies', () => {
    const result = lib.getCurrencies();
    //Possible method:
    expect(result).toContain('USD');
    expect(result).toContain('AUD');
    expect(result).toContain('EUR');
    //Ideal method:
    expect(result).toEqual(expect.arrayContaining(['EUR', 'USD', 'AUD']))
  });
});

describe('getProduct', () => {
  it('should get the product with the given ID', () => {
    const result = lib.getProduct(1);
    expect(result).toEqual({ id: 1, price: 10 });//toEqual tests for object equality to that in memory only.
    //These are less specific and so, prefered methods:
    expect(result).toMatchObject({ id: 1, price: 10 });//toMatchObject only looks for listed properties.
    expect(result).toHaveProperty('id', 1, 'price', 10);//toHaveProperty only looks for listed properties.
  });
});



