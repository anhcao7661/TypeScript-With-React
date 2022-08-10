import { useContext } from "react"
import { ThemeContext } from "./ThemeComtext"


export const Box = () => {

    const theme = useContext(ThemeContext)

    return <div>
        <div style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}>
            Theme Context 1
        </div >
        <div style={{ backgroundColor: theme.secondary.main, color: theme.secondary.text }}>
            Theme Context 2
        </div >

    </div>
}