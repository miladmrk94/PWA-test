import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import styles from '../styles/sidler.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { store } from './../store';
import { sliderValue } from '../features/sliderValueSlice';




export default function InputSlider({ className }) {

    const data = useSelector((state) => state.mySlider.value)
    const dispatch = useDispatch()

    console.log("DATA", data);
    console.log("DATAzzz", store.getState());

    const handleChange = (event) => {
        dispatch(sliderValue(event.target.value))

    };



    return (
        <Box sx={{ width: "100%" }} className={className} >
            <Typography className='fs-2 mb-2' fontFamily="cursive" >
                {data}
            </Typography>
            <Box sx={{
                maxWidth: 500,
                marginX: "auto",
                padding: "12px 25px 5px 25px",
                borderRadius: "30px"
            }} alignItems="center" className={styles.blurBox}>

                <Slider
                    defaultValue={0}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    color="primary"
                    onChange={handleChange}
                />

            </Box>

        </Box>
    );
}