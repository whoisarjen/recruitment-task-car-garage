import { renderHook } from "@testing-library/react-hooks";
import { wait } from "@testing-library/user-event/dist/utils";
import useCars from "./useCars";

describe('Testing useCars', () => {
    it('Expect to bring empty array', () => {
        const { result } = renderHook(() => useCars())

        expect(result.current).toEqual([])
    })
    it('Expect to bring array of elements', async () => {
        // const { result, waitForNextUpdate } = renderHook(() => useCars())

        // await waitForNextUpdate();

        // console.log(result.current)
        // expect(result.current).toEqual([])
    })
})

export default {};