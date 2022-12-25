import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardHeader, Container, Grid, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Create from './Create';


Home.propTypes = {

};

function Home(props) {
    return (
        <Container>
            <Typography variant='h3' align='center'>
                App to mange customer


                <Create />



                <Grid container p={5} spacing={5} >

                    <Grid item xs={4}>
                        <Card>
                            <CardHeader>

                            </CardHeader>
                            <CardContent sx={{
                                color: 'red',
                                background: "yellow",
                                "&:hover": {
                                    color: "blue"
                                },
                                border: "1px solid blue"

                            }}>
                                noi dung content
                                <Avatar

                                    sx={{ bgcolor: "red" }}
                                >
                                    LTV
                                </Avatar>
                            </CardContent>
                        </Card>
                    </Grid>


                    <Grid item xs={4}>
                        <Card>
                            <CardHeader>
                                noi dung dau
                            </CardHeader>
                            <CardContent>
                                noi dung content
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <Card>
                            <CardHeader>
                                noi dung dau
                            </CardHeader>
                            <CardContent>
                                noi dung content
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>




            </Typography>

            <Typography color="red" align='center' variant='h1' >Noi dung box</Typography>

            <Box bgcolor="yellow" sx={{
                flexGrow: 1,


            }}>


                <Grid container
                    direction="row"

                    justifyContent="flex-start"

                    rowSpacing={2}
                    columnSpacing={2}


                >
                    <Grid
                        lg={4} xs={6}

                        item >
                        <Box sx={{

                            height: "400px",
                            backgroundColor: "red",

                        }}>item</Box>

                    </Grid>

                    <Grid
                        lg={4}
                        xs={6}
                        item>
                        <Box sx={{

                            height: "400px",
                            backgroundColor: "red",

                        }}>item</Box>
                    </Grid>
                    <Grid
                        lg={4}
                        xs={6}
                        item >
                        <Box sx={{

                            height: "400px",
                            backgroundColor: "red",

                        }}>item</Box>
                    </Grid>
                    <Grid
                        lg={4}
                        xs={6}
                        item >
                        <Box sx={{

                            height: "400px",
                            backgroundColor: "red",

                        }}>item</Box>
                    </Grid>
                </Grid>











            </Box>
        </Container >
    );
}

export default Home;