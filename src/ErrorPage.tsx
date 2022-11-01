import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  console.log(error)

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{getErrorMessage(error)}</i>
      </p>
    </div>
  )
}

function getErrorMessage(error: unknown) {
  if (typeof error === 'string') {
    return error
  }

  if (isErrorResponse(error)) {
    return error.statusText
  }

  if (error instanceof Error) {
    return error.message
  }

  return 'An unknown error has occurred'
}

type ErrorResponse = {
  statusText: string
}
function isErrorResponse(error: unknown): error is ErrorResponse {
  return typeof error === 'object' && error !== null && error.hasOwnProperty('statusText')
}
