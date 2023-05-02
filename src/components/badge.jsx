import { Typography, styled, ClickAwayListener, Box } from '@mui/material';
import styles from '../styles/badge.module.css'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';


const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#fff',
        color: '#242424',
        maxWidth: 140,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
        borderRadius: "20px"

    },
}));

const Badge = ({ top, right, flagImage }) => {
    return (

        // <div className={styles.badge} style={{ top: top, right: right }}>
        //     <img src={flagImage} className={styles.img} />
        // </div >
        <div>
            <HtmlTooltip
                title={
                    <Box sx={{ fontFamily: "unset", padding: 0 }}>
                        <img src={flagImage} className={styles.img} />
                        <span>کشور فلان</span>
                        <p>
                            یمیگو پلی است بین متقاضیان مهاجرت و آژانس‌های مهاجرتی. ما در یک پلتفرم واحد با استفاده از موتور قوانین مهاجرتی خود به متقاضیان مهاجرت کمک می‌کنیم
                        </p>
                    </Box>
                }


            >
                <div className="position-absolute blob red" style={{ top: top, right: right }}></div>

            </HtmlTooltip>
        </div>



    );
}

export default Badge;