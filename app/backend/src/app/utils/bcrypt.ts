import bcrypt = require('bcryptjs')

export const decryptPass = async (password: string, hash: string): Promise<boolean> => {
  const compare = await bcrypt.compare(password, hash)
  return compare
}

export const encrypt = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)
  return hash
}
