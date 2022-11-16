import "./Indicator.css"
import Img1 from "../../assets/img/fillhex.svg"
import Img2 from "../../assets/img/emptyhex.svg"
import { v4 as uuidv4 } from 'uuid';

function Indicator(props) {
    const data = props.level;
    const arr = []

    for (let i=0 ; i<data ; i++){
        arr.push("img1");
    }
    for (let i=0; i< (5-data); i++){
        arr.push("img2")
    }
  return (
    <div className='skillWarper'>
        <div className="skilltitle">{props.skill}</div>
        <div className="hexa">
            {arr.map((e) =>  {
                if(e === "img1"){
                    return <img key={uuidv4()} src={Img1} alt="" />
                }
                else{
                    return <img key={uuidv4()} src={Img2} alt="" />
                }
            } )}
        </div>
    </div>
  )
}

export default Indicator