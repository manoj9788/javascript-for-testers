before('Root Before', () => {
    // runs once before all the describes
    console.log('Root Before...')
})

describe('Login', () => {
  describe('User with valid login', () => {
    before(function() {
      // runs once before the first test in this block
      console.log('Before');
    });

    after(function() {
      // runs once after the last test in this block
      console.log('After');
    });

    beforeEach(function() {
      // runs before each test in this block
      console.log('Before Each');
    });

    afterEach(function() {
      // runs after each
      console.log('After Each');
    });

    it('Should be able to see the detail screen', function() {});

    it('Should be able to search from detail screen', function() {});
  });

  describe('User with invalid login', () => {
    it('Should not be able to see the detail screen', function() {});

    it('Should not be able to search from detail screen', function() {});
  });
});

describe('Logout', () => {
  describe('User with valid login', () => {
    it('Should be able logout for application', function() {});
  });
});
