import { useState } from "react"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import Box from "@material-ui/core/Box"
import CardActionArea from "@material-ui/core/CardActionArea"
import Typography from "@material-ui/core/Typography"
import React from "react"

export const ServicesCard = ({ imgSrc, title }) => {
    const [showBackSide, setShowBackSide] = useState(false)
    return (
        <Card style={{ maxWidth: "440px", minWidth: "220px", borderRadius: "5px" }}>
            {!showBackSide && <CardActionArea
            >
                <CardMedia
                    component="img"
                    image={imgSrc}
                    title={title}
                />
            </CardActionArea>
            }
            <Box>
                <Typography align="center" variant="subtitle1"> {title} </Typography>
            </Box>
        </Card>
    )
}