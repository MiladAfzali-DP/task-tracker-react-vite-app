import {FC} from "react";
import {Box, Breadcrumbs, Typography} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {useLocation} from "react-router-dom";

export const BreadCrumbs: FC = () => {
    const locationPath = useLocation()?.pathname;

    const locationsArray = locationPath=== '/' ? ['Home'] : locationPath.split('/')
    const breadcrumbs = [
        <Typography key="0" color="text.primary">
            Task Management
        </Typography>,
        locationsArray.map((path ,i) => path && path.length <=10 && <Typography style={{textTransform: 'capitalize'}} key={i + 1} color="inherit">
            {path}
        </Typography>,)
    ];

    return <Box pt={3} pb={2}><Breadcrumbs
        separator={<NavigateNextIcon color="primary"/>}
        aria-label="breadcrumb"
    >
        {breadcrumbs}
    </Breadcrumbs></Box>
}