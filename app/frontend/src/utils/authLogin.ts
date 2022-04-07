export function verifyLogin(email: string, password: string): boolean {
  const re = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  if (re.test(email) && password.length > 5) {
    return false;
  }
  return true;
}

export function verifyRegister(email: string, password: string, name: string): boolean {
  const re = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  if (re.test(email) && password.length > 5 && name.length > 4) {
    return false;
  }
  return true;
}

export function verifyChange(email: string, name: string): boolean {
  const re = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  if (re.test(email) && name.length > 4) {
    return false;
  }
  return true;
}
