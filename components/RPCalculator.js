import styles from './RPCalculator.module.css'
import Grid from '@mui/material/Grid'

export default function RPCalculator() {
    return (
        <form
        className={styles.form}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="rp-calculator"
        method="POST"
        action="/success"
      ></form>
    )
}