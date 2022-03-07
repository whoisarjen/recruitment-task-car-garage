import { CarProps } from "../../interfaces/car.interface";

export const removeCarFromArrayByID = ({ array, id }: { array: Array<CarProps>, id: number}) => {
    const copy = JSON.parse(JSON.stringify(array))
    for(let i=0; i<copy.length; i++){
        if(copy[i].list_cars_vehicles_id == id){
            copy.splice(i, 1)
            break;
        }
    }
    return copy;
}