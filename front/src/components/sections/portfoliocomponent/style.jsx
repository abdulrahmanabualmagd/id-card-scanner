import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    section: {
        padding: theme.spacing(8, 0),
        backgroundColor: "#fff",
        minHeight:'50vh'
    },
    card: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
    },
    cardMedia: {
        width: 160,
        flexShrink: 0,
    },
    cardContent: {
        flexGrow: 1,
    },
}));