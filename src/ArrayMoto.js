import {useState} from "react";

function ArrayMoto(){
    const data = [
        { title: 'Toyota', version: 'mk', year: 1990},
        { title: 'Nissan',  version: 'Skyline', year: 1990},
        { title: 'Ford',  version: 'Mustang', year: 1969}]
    const [car,setCars]= useState(data)

    const cars2 = [
        {title: 'Porsche', version: 'GT3', year: 2010}]
    const [car2,setCars2]= useState(cars2)
    let la="<<"

    function laChange(){
        for (let i=0;i<data.length;i++){
            cars2.push(data[i])

            console.log(cars2[i])
            console.log(data[1])


        }
        data.pop();
        console.log(data[1])
    }

    return(
        <div>
            <h1>Car</h1>
            <ul>
                {car.map((car,idx) =><li key={{idx}} >{car.title+" ("+car.version+","+car.year+","+")"}</li>)}
            </ul>
            <br/>
            <button onClick={laChange}>{la}</button>
            {car2.map((car2,idx) =><li key={{idx}} >{car2.title+" ("+car2.version+","+car2.year+","+")"}</li>)}

        </div>
    )
}
export default ArrayMoto;