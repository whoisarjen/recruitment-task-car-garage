import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "../redux/store"

export const setupComponent = (Component: any) => {
    return render(
        <Provider store={store}>
            {Component}
        </Provider>
    )
}