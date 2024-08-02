import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    section: {
        padding: theme.spacing(8, 0),
        backgroundColor: "#fff",
        minHeight:'50vh'
    },
    testimonialCard: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
    },
}));