jest.mock('react-native-location-enabler');

export default {
  PRIORITIES: {
    HIGH_ACCURACY: 100,
    BALANCED_POWER_ACCURACY: 102,
    LOW_POWER: 104,
    NO_POWER: 105,
  },
  useLocationSettings: jest.fn(() => [Boolean, jest.fn()]),
  checkSettings: jest.fn(),
  requestResolutionSettings: jest.fn(),
  addListener: jest.fn(() => {
    return { remove: jest.fn() };
  }),
  once: jest.fn(() => {
    return { remove: jest.fn() };
  }),
};
