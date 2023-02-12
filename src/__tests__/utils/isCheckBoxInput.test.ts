import isCheckBoxInput from '../../core/utils/isCheckBoxInput';

describe('isCheckBoxInput', () => {
  it('should return true when type is checkbox', () => {
    expect(isCheckBoxInput({ name: 'test', type: 'checkbox' })).toBeTruthy();
  });
});
