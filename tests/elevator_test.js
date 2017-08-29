require('babel-core/register')({
  ignore: /node_modules\/(?!ProjectB)/
});
const assert = require('chai').assert;
const { Elevator, Person } = require('../elevator')

describe('Elevator', function() {
  const elevator = new Elevator();

  beforeEach(function() {
    elevator.reset();
  });

  it('should be a function', () => {
    assert.isFunction(Elevator);
  });

  it('should instantiate an elevator', () => {
    assert.isObject(elevator);
  });

  it('should have a staringFloor set to 0 as default', () => {
    assert.equal(elevator.startingFloor, 0);
  });

  it('should start with no currentFloor selected', () => {
    assert.equal(elevator.currentFloor, null);
  });

  it('should have an array of floor requests', () => {
    assert.typeOf(elevator.floorRequests, 'array');
  });

  it('should start with no floors requested', () => {
    assert.deepEqual(elevator.floorRequests, []);
  });

  it('should have an array of passengers', () => {
    assert.typeOf(elevator.passengerNumber, 'array');
  });

  it('should start with no passengers', () => {
    assert.deepEqual(elevator.passengerNumber, []);
  });



  it.skip('should bring a rider to a floor above their current floor', () => {
    let mockUser = { name: "Brittany", currentFloor: 2, dropOffFloor: 5 };
    elevator.goToFloor(mockUser);

    assert.equal(elevator.currentFloor, 5);
  });


  it.skip('should bring a rider to a floor below their current floor', () => {
    let mockUser = { name: "Brittany", currentFloor: 8, dropOffFloor: 3 };
    elevator.goToFloor(mockUser);

    assert.equal(elevator.currentFloor, 3);
  });

});


describe('Person', function() {
  let person = new Person();

  it('should be a function', () => {
    assert.isFunction(Person);
  });

  it('should instantiate an person', () => {
    assert.isObject(person);
  });



  it('should start with no current floor selected', () => {
    assert.equal(person.currentFloor, null);
  });

  it('should start with no dropoff floor selected', () => {
    assert.equal(person.dropOffFloor, null);
  });

});
