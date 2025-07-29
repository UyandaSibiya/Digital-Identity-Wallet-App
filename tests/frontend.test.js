/**
 * @jest-environment jsdom
 */

// Mock the frontend functions
function isValidEmail(email) { 
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); 
}

function $(id) { 
  return document.getElementById(id); 
}

function show(el) { 
  if (el) el.style.display = ''; 
}

function hide(el) { 
  if (el) el.style.display = 'none'; 
}

describe('Frontend Utility Functions', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="test-element" style="display: none;"></div>
      <div class="error-message" style="display: block;"></div>
      <div class="error-message" style="display: block;"></div>
    `;
  });

  describe('isValidEmail', () => {
    test('should validate correct email addresses', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('user.name@domain.co.uk')).toBe(true);
      expect(isValidEmail('test+tag@example.org')).toBe(true);
    });

    test('should reject invalid email addresses', () => {
      expect(isValidEmail('invalid-email')).toBe(false);
      expect(isValidEmail('test@')).toBe(false);
      expect(isValidEmail('@example.com')).toBe(false);
      expect(isValidEmail('')).toBe(false);
    });
  });

  describe('DOM utility functions', () => {
    test('$ should return element by id', () => {
      const element = $('test-element');
      expect(element).toBeTruthy();
      expect(element.id).toBe('test-element');
    });

    test('show should make element visible', () => {
      const element = $('test-element');
      show(element);
      expect(element.style.display).toBe('');
    });

    test('hide should make element invisible', () => {
      const element = $('test-element');
      hide(element);
      expect(element.style.display).toBe('none');
    });
  });
});