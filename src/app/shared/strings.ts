export const getAfterChar = (string: string, char: string) => string.slice(string.indexOf(char) + 1)
export const getBeforeChar = (string: string, char: string) => string.slice(0, string.indexOf(char))
