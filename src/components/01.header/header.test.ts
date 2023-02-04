import { Header } from './header';

describe('Given Header component', () => {
  test('should first', () => {
    document.body.innerHTML = '<slot></slot>';
    const element = new Header('slot');
    expect(element).toBeInstanceOf(Header);
  });
});
