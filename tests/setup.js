// Mock fetch for frontend tests
global.fetch = jest.fn();

// Mock DOM elements that might not exist in test environment
Object.defineProperty(window, 'location', {
  value: {
    href: 'http://localhost:8080'
  }
});