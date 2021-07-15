import {useState} from "react";

export default function Array(){
    const data = [
        { title: 'red', red: 255, green: 0, blue: 0,html: "#FF0000"},
        { title: 'green', red: 0, green: 255, blue: 0 ,html: "#0000FF"},
        { title: 'blue', red: 0, green: 0, blue: 255 ,html: "#00FF00"}]
    const [colors,setColors]= useState(data)
    const [newColor,setNewColor]=useState('')

    var rgbToHex = function (rgb) {
        var hex = Number(rgb).toString(16);
        if (hex.length < 2) {
            hex = "0" + hex;
        }
        return hex;
    };

    function addColor(){
        let red=Math.floor(Math.random() * 256)
        let green=Math.floor(Math.random() * 256)
        let blue=Math.floor(Math.random() * 256)
        setColors([...colors, {
            title: newColor,
            red: red,
            green: green,
            blue: blue,
            html: "#"+rgbToHex(red)+rgbToHex(green)+rgbToHex(blue)

        }])
    }


    return(
        <div>
            <h1>colors</h1>
            <ul>
                {colors.map((color,idx) =><li key={{idx}} color={color.html}>{color.title+" ("+color.red+","+color.green+","+color.blue+")"}</li>)}
            </ul>
            <input value={newColor} onChange={e=>setNewColor(e.target.value)}/>
            <br/>
            <button onClick={addColor}>add Color</button>
        </div>
    )
}