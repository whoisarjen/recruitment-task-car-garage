import { renderHook } from "@testing-library/react-hooks";
import { wait } from "@testing-library/user-event/dist/utils";
import useCars from "./useCars";
import useAxios from './useAxios'

it.todo('')

// jest.mock('./useAxios', () => () => {
//     return {
//         get: () => {
//             return {
//                 data: [{}, {}]
//             }
//         }
//     }
// })

// describe('Testing useCars', () => {
    
//     // It's working bc we are not awaiting so we get the default value = []
//     it('Expect to bring empty array', () => {
//         const { result } = renderHook(() => useCars())

//         expect(result.current).toEqual([])
//     })

//     it('Expect to bring array of elements', async () => {

//         const { result, waitForNextUpdate } = renderHook(() => useCars())

//         wait(5000)
//         await waitForNextUpdate()

//         expect(result.current).toEqual([{}, {}])
//     })
// })

export default {};