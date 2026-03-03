/**
 * Comprehensive unit tests for calculator functions
 * Tests cover basic operations and edge cases
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot, calculate } = require('../calculator');

describe('Calculator Functions', () => {
  // ============================================
  // Addition Tests
  // ============================================
  describe('Addition (+)', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add positive and negative numbers', () => {
      expect(add(10, -4)).toBe(6);
    });

    test('should add two negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test('should add zero to a number', () => {
      expect(add(5, 0)).toBe(5);
    });

    test('should add decimal numbers', () => {
      expect(add(2.5, 3.5)).toBe(6);
    });

    test('should handle large numbers', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });
  });

  // ============================================
  // Subtraction Tests
  // ============================================
  describe('Subtraction (-)', () => {
    test('should subtract two positive numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract and result in negative', () => {
      expect(subtract(5, 10)).toBe(-5);
    });

    test('should subtract negative from positive', () => {
      expect(subtract(10, -5)).toBe(15);
    });

    test('should subtract positive from negative', () => {
      expect(subtract(-5, 3)).toBe(-8);
    });

    test('should subtract zero from a number', () => {
      expect(subtract(5, 0)).toBe(5);
    });

    test('should subtract decimal numbers', () => {
      expect(subtract(10.5, 3.2)).toBeCloseTo(7.3);
    });

    test('should handle subtraction resulting in zero', () => {
      expect(subtract(5, 5)).toBe(0);
    });
  });

  // ============================================
  // Multiplication Tests
  // ============================================
  describe('Multiplication (*)', () => {
    test('should multiply two positive numbers', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply positive by negative', () => {
      expect(multiply(5, -3)).toBe(-15);
    });

    test('should multiply two negative numbers', () => {
      expect(multiply(-4, -5)).toBe(20);
    });

    test('should multiply by zero', () => {
      expect(multiply(100, 0)).toBe(0);
    });

    test('should multiply by one', () => {
      expect(multiply(42, 1)).toBe(42);
    });

    test('should multiply decimal numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    test('should multiply to result in decimal', () => {
      expect(multiply(3.5, 2.5)).toBe(8.75);
    });

    test('should handle large multiplication', () => {
      expect(multiply(1000, 1000)).toBe(1000000);
    });
  });

  // ============================================
  // Division Tests
  // ============================================
  describe('Division (/)', () => {
    test('should divide two positive numbers evenly', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide positive by negative', () => {
      expect(divide(20, -5)).toBe(-4);
    });

    test('should divide two negative numbers', () => {
      expect(divide(-20, -5)).toBe(4);
    });

    test('should divide and result in decimal', () => {
      expect(divide(10, 3)).toBeCloseTo(3.333, 2);
    });

    test('should divide by one', () => {
      expect(divide(42, 1)).toBe(42);
    });

    test('should divide decimal numbers', () => {
      expect(divide(10.5, 2.5)).toBeCloseTo(4.2);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });

    test('should throw error when dividing negative by zero', () => {
      expect(() => divide(-5, 0)).toThrow('Cannot divide by zero');
    });

    test('should divide zero by a number', () => {
      expect(divide(0, 5)).toBe(0);
    });

    test('should handle small numbers in division', () => {
      expect(divide(0.5, 0.5)).toBe(1);
    });
  });

  // ============================================
  // Calculate Function Tests
  // ============================================
  describe('Calculate Function', () => {
    test('should calculate addition', () => {
      expect(calculate(2, '+', 3)).toBe(5);
    });

    test('should calculate subtraction', () => {
      expect(calculate(10, '-', 4)).toBe(6);
    });

    test('should calculate multiplication', () => {
      expect(calculate(45, '*', 2)).toBe(90);
    });

    test('should calculate division', () => {
      expect(calculate(20, '/', 5)).toBe(4);
    });

    test('should calculate modulo', () => {
      expect(calculate(10, '%', 3)).toBe(1);
    });

    test('should calculate power', () => {
      expect(calculate(2, '**', 3)).toBe(8);
    });

    test('should calculate square root', () => {
      expect(calculate(16, 'sqrt')).toBe(4);
    });

    test('should throw error for unknown operation', () => {
      expect(() => calculate(5, '^', 2)).toThrow('Unknown operation: ^');
    });

    test('should throw error when dividing by zero', () => {
      expect(() => calculate(10, '/', 0)).toThrow('Cannot divide by zero');
    });

    test('should handle chained operations', () => {
      const result1 = calculate(2, '+', 3);
      const result2 = calculate(result1, '*', 2);
      expect(result2).toBe(10);
    });
  });

  // ============================================
  // Edge Cases and Special Scenarios
  // ============================================
  describe('Edge Cases', () => {
    test('should handle very small numbers', () => {
      expect(add(0.0001, 0.0002)).toBeCloseTo(0.0003);
    });

    test('should handle negative zero', () => {
      expect(add(-0, 5)).toBe(5);
    });

    test('should handle mixed integer and decimal operations', () => {
      expect(multiply(5, 2.5)).toBe(12.5);
    });

    test('should maintain precision in calculations', () => {
      const result = divide(1, 3);
      expect(result).toBeCloseTo(0.333, 2);
    });

    test('should handle commutative property of addition', () => {
      expect(add(7, 3)).toBe(add(3, 7));
    });

    test('should handle commutative property of multiplication', () => {
      expect(multiply(6, 4)).toBe(multiply(4, 6));
    });

    test('should not be commutative for subtraction', () => {
      expect(subtract(10, 4)).not.toBe(subtract(4, 10));
    });

    test('should not be commutative for division', () => {
      expect(divide(20, 4)).not.toBe(divide(4, 20));
    });
  });

  // ============================================
  // Modulo Tests
  // ============================================
  describe('Modulo (%)', () => {
    test('should calculate modulo for positive numbers', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('should calculate modulo with zero remainder', () => {
      expect(modulo(10, 5)).toBe(0);
    });

    test('should calculate modulo with negative dividend', () => {
      expect(modulo(-10, 3)).toBe(-1);
    });

    test('should calculate modulo with negative divisor', () => {
      expect(modulo(10, -3)).toBe(1);
    });

    test('should calculate modulo with both negative', () => {
      expect(modulo(-10, -3)).toBe(-1);
    });

    test('should calculate modulo with decimal numbers', () => {
      expect(modulo(10.5, 3)).toBeCloseTo(1.5);
    });

    test('should throw error when modulo by zero', () => {
      expect(() => modulo(10, 0)).toThrow('Cannot divide by zero');
    });

    test('should handle modulo where dividend is smaller', () => {
      expect(modulo(3, 10)).toBe(3);
    });
  });

  // ============================================
  // Power/Exponentiation Tests
  // ============================================
  describe('Power (exponentiation)', () => {
    test('should calculate positive base and positive exponent', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should calculate base to power of zero', () => {
      expect(power(5, 0)).toBe(1);
    });

    test('should calculate base to power of one', () => {
      expect(power(5, 1)).toBe(5);
    });

    test('should calculate with negative exponent', () => {
      expect(power(2, -2)).toBe(0.25);
    });

    test('should calculate with decimal exponent', () => {
      expect(power(4, 0.5)).toBe(2);
    });

    test('should calculate negative base with even exponent', () => {
      expect(power(-2, 2)).toBe(4);
    });

    test('should calculate negative base with odd exponent', () => {
      expect(power(-2, 3)).toBe(-8);
    });

    test('should calculate large exponents', () => {
      expect(power(2, 10)).toBe(1024);
    });

    test('should handle zero base', () => {
      expect(power(0, 5)).toBe(0);
    });

    test('should handle very small decimal bases', () => {
      expect(power(0.5, 2)).toBe(0.25);
    });
  });

  // ============================================
  // Square Root Tests
  // ============================================
  describe('Square Root (√)', () => {
    test('should calculate square root of positive numbers', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('should calculate square root of perfect squares', () => {
      expect(squareRoot(25)).toBe(5);
      expect(squareRoot(100)).toBe(10);
    });

    test('should calculate square root of non-perfect squares', () => {
      expect(squareRoot(2)).toBeCloseTo(1.414, 3);
    });

    test('should calculate square root of decimals', () => {
      expect(squareRoot(0.25)).toBe(0.5);
    });

    test('should calculate square root of zero', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('should calculate square root of one', () => {
      expect(squareRoot(1)).toBe(1);
    });

    test('should throw error for negative numbers', () => {
      expect(() => squareRoot(-4)).toThrow('Cannot calculate square root of a negative number');
    });

    test('should throw error for very small negative numbers', () => {
      expect(() => squareRoot(-0.001)).toThrow('Cannot calculate square root of a negative number');
    });

    test('should handle large numbers', () => {
      expect(squareRoot(1000000)).toBe(1000);
    });
  });
});
