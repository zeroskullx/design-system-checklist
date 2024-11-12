export const encode = (str: string) => {
  return typeof window !== 'undefined'
    ? btoa(str)
    : Buffer.from(str, 'utf-8').toString('base64')
}

export const decode = (str: string) => {
  const _str = decodeURIComponent(str)
  return typeof window !== 'undefined'
    ? atob(_str)
    : Buffer.from(_str, 'base64').toString('utf-8')
}
