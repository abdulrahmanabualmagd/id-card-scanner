import { Typography, Container, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { useStyles } from "./style";

export default function PortfolioComponent() {
    const classes = useStyles();

    return (
        <section className={classes.section}>
            <Container maxWidth="md">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Section 3 Title
                                </Typography>
                                <Typography>Description of Section 3.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Another Section 3 Title
                                </Typography>
                                <Typography>Description of Another Section 3.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}
