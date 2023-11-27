const lib = require('../lib');
const db = require('../db');
const mail = require('../mail');

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

describe('registerUser', () => {
  it('should throw if username is falsy', () => {
    const args = [null, undefined, NaN, '', 0, false];//Array includes all arguments we want to pass to registerUser method.
    args.forEach(a => {
      expect(() => { lib.registerUser(a) }).toThrow();
    });
  });

  it('should return a valid user object if valid username is passed', () => { 
    const result = lib.registerUser('Spencer');
    expect(result).toMatchObject({ username: 'Spencer' })
    expect(result.id).toBeGreaterThan(0);
  });
});

describe('applyDiscount', () => {
  it('should apply 10% discount if customer has more than ten points', () => {
    db.getCustomerSync = function(customerId) {//Mocking the db.getCustomerSync function
      console.log('Fake reading customer...');
      return { id: customerId, points: 20 };
    }

    const order = { customerId: 1, totalPrice: 10 };
    lib.applyDiscount(order);
    expect(order.totalPrice).toBe(9);
  });
});

describe('notifyCustomer', () => {
  it('should send an email to the customer', () => {
    db.getCustomerSync = function(customerId) {
      return { email: 'a'};
    }

    let mailSent = false;
    mail.send = function(email, message) {
      mailSent = true;
    }

    lib.notifyCustomer( { customerId: 1 });

    expect(mailSent).toBe(true);
  });
});

 

