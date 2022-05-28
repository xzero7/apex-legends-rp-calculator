import styles from './RPCalculator.module.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode = '#1A2027',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#fff',
}));


export default function RPCalculator() {
    return (
        <form
            className={styles.form}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            name="rp-calculator"
            method="POST"
            action="/success"
        >
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} columns={6}>
                    <Grid item xs={6}>
                        <Item>
                        <label htmlFor="playerRank">Current Rank</label>
                        <select id="playerRank" name="playerRank">
                            <option value="rookie">Rookie</option>
                            <option value="bronze">Bronze</option>
                            <option value="silver">Silver</option>
                            <option value="gold">Gold</option>
                            <option value="platinum">Platinum</option>
                            <option value="diamond">Diamond</option>
                            <option value="master">Master / Predator</option>
                        </select> 
                        <label htmlFor="division">Division</label>
                        <select id="division" name="division">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                        <label htmlFor="placement">Placement</label>
                        <select id="placement" name="placement">
                            <option value="20">20th</option>
                            <option value="19">19th</option>
                            <option value="18">18th</option>
                            <option value="17">17th</option>
                            <option value="16">16th</option>
                            <option value="15">15th</option>
                            <option value="14">14th</option>
                            <option value="13">13th</option>
                            <option value="12">12th</option>
                            <option value="11">11th</option>
                            <option value="10">10th</option>
                            <option value="9">9th</option>
                            <option value="8">8th</option>
                            <option value="7">7th</option>
                            <option value="6">6th</option>
                            <option value="5">5th</option>
                            <option value="4">4th</option>
                            <option value="3">3rd</option>
                            <option value="2">2nd</option>
                            <option value="1">1st</option>
                        </select> 
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>Individual KP</Item>
                        <Item>
                            <label htmlFor="individualRookie">Rookie</label>
                            <input id="individualRookie" className={styles['form-field']} type="number" defaultValue="0" name="individualRookie" />
                        </Item>
                        <Item>
                            <label htmlFor="individualBronze">Bronze</label>
                            <input id="individualBronze" className={styles['form-field']} type="number" defaultValue="0" name="individualBronze" />
                        </Item>
                        <Item>
                            <label htmlFor="individualSilver">Silver</label>
                            <input id="individualSilver" className={styles['form-field']} type="number" defaultValue="0" name="individualSilver" />
                        </Item>
                        <Item>
                            <label htmlFor="individualGold">Gold</label>
                            <input id="individualGold" className={styles['form-field']} type="number" defaultValue="0" name="individualGold" />
                        </Item>
                        <Item>
                            <label htmlFor="individualPlatinum">Platinum</label>
                            <input id="individualPlatinum" className={styles['form-field']} type="number" defaultValue="0" name="individualPlatinum" />
                        </Item>
                        <Item>
                            <label htmlFor="individualDiamond">Diamond</label>
                            <input id="individualDiamond" className={styles['form-field']} type="number" defaultValue="0" name="individualDiamond" />
                        </Item>
                        <Item>
                            <label htmlFor="individualMaster">Master / Apex Predator</label>
                            <input id="individualMaster" className={styles['form-field']} type="number" defaultValue="0" name="individualMaster" />
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>Team KP</Item>
                        <Item>
                            <label htmlFor="teamRookie">Rookie</label>
                            <input id="teamRookie" className={styles['form-field']} type="number" defaultValue="0" name="teamRookie" />
                        </Item>
                        <Item>
                            <label htmlFor="teamBronze">Bronze</label>
                            <input id="teamBronze" className={styles['form-field']} type="number" defaultValue="0" name="teamBronze" />
                        </Item>
                        <Item>
                            <label htmlFor="teamSilver">Silver</label>
                            <input id="teamSilver" className={styles['form-field']} type="number" defaultValue="0" name="teamSilver" />
                        </Item>
                        <Item>
                            <label htmlFor="teamGold">Gold</label>
                            <input id="teamGold" className={styles['form-field']} type="number" defaultValue="0" name="teamGold" />
                        </Item>
                        <Item>
                            <label htmlFor="teamPlatinum">Platinum</label>
                            <input id="teamPlatinum" className={styles['form-field']} type="number" defaultValue="0" name="teamPlatinum" />
                        </Item>
                        <Item>
                            <label htmlFor="teamDiamond">Diamond</label>
                            <input id="teamDiamond" className={styles['form-field']} type="number" defaultValue="0" name="teamDiamond" />
                        </Item>
                        <Item>
                            <label htmlFor="teamMaster">Master / Apex Predator</label>
                            <input id="teamMaster" className={styles['form-field']} type="number" defaultValue="0" name="teamMaster" />
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <button className={styles.button} type="submit">Submit</button>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </form>
    )
}