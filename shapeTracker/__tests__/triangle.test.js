import Triangle from './../src/triangle.js';

describe('Triangle', () => {
  let triangle;

  beforeEach(() => {
    triangle = new Triangle(2, 4, 5);
  });

  afterEach(() => {
    triangle = null;
  });

  test('should correctly create a triangle object with three lengths', () => {
    expect(triangle.side1).toEqual(2);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).toEqual(5);
  });

  test('should return "not a triangle" when any side is greater than the sum of the other two', () => {
    triangle = new Triangle(2, 3, 7);
    expect(triangle.checkType()).toBe("not a triangle");
  });

  test('should return "not a triangle" when any side is 0', () => {
    triangle = new Triangle(0, 3, 5);
    expect(triangle.checkType()).toBe("not a triangle");
  });

  test('should return "not a triangle" when any side is negative', () => {
    triangle = new Triangle(-1, 3, 5);
    expect(triangle.checkType()).toBe("not a triangle");
  });

  test('should correctly determine whether three lengths make a scalene triangle', () => {
    triangle = new Triangle(4, 5, 7);
    expect(triangle.checkType()).toEqual("scalene triangle");
  });

  test('should correctly determine whether three lengths make an isosceles triangle', () => {
    triangle = new Triangle(5, 5, 7);
    expect(triangle.checkType()).toEqual("isosceles triangle");
  });

  test('should correctly determine whether three lengths make an equilateral triangle', () => {
    triangle = new Triangle(5, 5, 5);
    expect(triangle.checkType()).toEqual("equilateral triangle");
  });

  test('should say if a triangle is big', () => {
    const triangle = new Triangle(3,4,5);
    expect(triangle.isBigTriangle()).toEqual('big');
  });

  test('should say if a triangle is big', () => {
    const triangle = new Triangle(3,4,5);
    expect(triangle.isBigTriangle()).toEqual('big');
  });
});
