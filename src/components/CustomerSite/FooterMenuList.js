import React from "react"
import Box from "@material-ui/core/Box"
import { GridItem } from "./elements"
export const FooterMenuList = ({ item, style }) => {
    return (
        <>
            <Box>
                <GridItem style={style}> {item}</GridItem>
            </Box>
        </>
    )


}