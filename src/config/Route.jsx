import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"

function MyRoute() {
  return (
    <div>
      <Suspense>
        <Routes>
            <Route />

        </Routes>
      </Suspense>
    </div>
  )
}

export default MyRoute
