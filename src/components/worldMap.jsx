import worldMap from '../assets/worldMap.svg'
import Badge from './badge';
import fr from '../assets/fr.png'
import ge from '../assets/ge.png'
import pa from '../assets/pa.png'
import tr from '../assets/tr.png'
import sp from '../assets/sp.png'
import { useSelector } from 'react-redux';


const countries = [
    { name: "fr", top: "25%", right: "49%", investment: 10, image: fr },
    { name: "sp", top: "30%", right: "51%", investment: 30, image: sp },
    { name: "ge", top: "25%", right: "43%", investment: 20, image: ge },
    { name: "pa", top: "33%", right: "53%", investment: 60, image: pa },
    { name: "tr", top: "33%", right: "36%", investment: 90, image: tr },
]


const WorldMap = () => {
    const sliderValue = useSelector(state => state.mySlider.value)

    return (
        <div className='position-relative imgback'  >
            <img src={worldMap} className='img-fluid logo' />
            {
                countries.map((i) => {
                    if (i.investment <= sliderValue) {
                        return <Badge key={i.name} flagImage={i.image} top={i.top} right={i.right} />
                    }
                })
            }
        </div>
    );
}

export default WorldMap;