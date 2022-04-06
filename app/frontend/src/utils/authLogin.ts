export function verifyLogin(email: string, password: string): boolean {
  const re = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  if (re.test(email) && password.length > 5) {
    return false;
  }
  return true;
}
