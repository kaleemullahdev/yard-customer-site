import React from "react"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import { FooterHeader } from "./elements"
import { FooterMenuList } from "./FooterMenuList"
import Box from "@material-ui/core/Box"
import { StyledButton } from "./components"
const Footer = () => {
    return (
        <div style={{
            backgroundColor: "#20232c", height: "auto",
            display: "flex",
            flexDirection: "column",
            paddingBottom: "20px"
        }}>
            <Container>
                <Box paddingTop="50px">
                    <Grid container
                        direction="row"
                        justify="center"
                        spacing={1}
                    >
                        <Grid item xs={12} sm={2} style={{ textAlign: "center" }}>
                            <FooterHeader>Services</FooterHeader>
                            {['Year Round Maintenance', 'Lawn Moving', 'Weed Control', 'Fall Cleanup', 'Spring Cleanup', 'Snow Removal', 'Property Managers'].map((item, key) => {
                                return <FooterMenuList key={key} item={item} />
                            })
                            }
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ textAlign: "center" }}
                        >
                            <FooterHeader>Company</FooterHeader>
                            {['Blog', 'Lawn Moving', 'HelpCenter', 'Customer Referral', 'Become a Provider', 'Careers'].map((item, key) => {
                                return < FooterMenuList key={key} item={item} />
                            })
                            }
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ textAlign: "center" }}>
                            <FooterHeader>{" "}</FooterHeader>
                            {['Terms of Use', 'Privacy Policy', 'Surcharges and Cancellation Policy', 'Independent Contractor'].map((item, key) => {
                                return < FooterMenuList key={key} item={item} />
                            })
                            }
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ textAlign: "center" }}>
                            <FooterHeader>Social</FooterHeader>
                            {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((item, key) => {
                                return < FooterMenuList key={key} item={item} />
                            })
                            }
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ textAlign: "center" }}>
                            <FooterHeader>{" "}</FooterHeader>
                            {['Call 1-855-688-8277 and get a free estimate',
                                <StyledButton style={{ marginTop: "20px", backgroundColor: '#fff', padding: "12px 40px 12px 40px" }}>
                                    GET A PRICE
                                </StyledButton>].map((item, key) => {
                                    return < FooterMenuList key={key} style={{ fontSize: "18px" }} key={key} item={item} />
                                })
                            }
                        </Grid>
                    </Grid>

                </Box>
            </Container>
        </div >
    )
}
export default Footer