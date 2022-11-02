export function parseError(error: any): string {
  if (typeof error === 'string') {
    return error
  } else if (error.name === 'FirebaseError') {
    return `${error.message} ${error.code}`
  } else if (error instanceof Error) {
    return error.message
  } else if (error instanceof Object) {
    return JSON.stringify(error)
  } else {
    return error
  }
}
