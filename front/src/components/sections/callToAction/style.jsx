import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    section: {
        padding: theme.spacing(8, 0),
        backgroundColor: "#f0f0f0",
        minHeight:'50vh'
    },
    button: {
        marginTop: theme.spacing(2),
    },
}));
