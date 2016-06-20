describe("Fizzbuzz", function() {
  var fizzbuzz;

  beforeEach(function(){
    fizzBuzz= new FizzBuzz();
  });

  describe('it fizzes multiples of 3', function() {
   it("fizzes at 3", function() {
     expect(fizzBuzz.play(3)).toEqual('Fizz');
    });

   it("fizzes at 6", function() {
     expect(fizzBuzz.play(6)).toEqual('Fizz');
   });

   it("fizzes at 9", function() {
     expect(fizzBuzz.play(9)).toEqual('Fizz');
   });

  });

  describe('it buzzes multiples of 5', function() {
   it("buzzes at 5", function() {
     expect(fizzBuzz.play(5)).toEqual('Buzz');
    });

   it("buzzes at 10", function() {
     expect(fizzBuzz.play(10)).toEqual('Buzz');
   });

   it("buzzes at 20", function() {
     expect(fizzBuzz.play(20)).toEqual('Buzz');
   });

  });

  describe('it fizzbuzzes multiples of 3 and 5', function() {
   it("fizzbuzzes at 15", function() {
     expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
    });

   it("fizzbuzzes at 30", function() {
     expect(fizzBuzz.play(30)).toEqual('FizzBuzz');
   });

   it("fizzbuzzes at 60", function() {
     expect(fizzBuzz.play(60)).toEqual('FizzBuzz');
   });

  });

});
