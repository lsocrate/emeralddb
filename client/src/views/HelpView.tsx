import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  })
)

export function HelpView(): JSX.Element {
  const classes = useStyles()
  return (
    <>
      <Typography variant="h4" align="center">
        Frequently Asked Questions
      </Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="login-problems">
          <Typography className={classes.heading}>
            <b>Why does nothing happen when I click on the Log In button?</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography component={'div'}>
                The Log In button uses a popup window, which might be blocked by your browser or ad
                blocker. Please make sure that you allow EmeraldDB to open popups.
              </Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="registering-problems">
          <Typography className={classes.heading}>
            <b>When I try to sign up, I get an error message. Why?</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography component={'div'}>
                This usually happens when there already is an account for the e-mail address you try
                to sign up with. Please try the "Forgot password?" link in the log in mask to reset
                your password. If the problem persists, please send an e-mail to
                emeralddb[at]emeraldlegacy[dot]org or send a Discord DM to WorkerBee#3527.
              </Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="jigoku-export">
          <Typography className={classes.heading}>
            <b>How do I export my deck to Jigoku?</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography component={'div'}>
                To export your deck to Jigoku, save it and select it in the "Builder" section. Use
                one of the two highlighted buttons to get a permalink to your deck list.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <img style={{ width: '75%' }} src="./static/images/ExportLinks.png" />
            </Grid>
            <Grid item xs={12}>
              <Typography component={'div'}>
                Once you are on Jigoku, create a new deck and use the "Import Deck". Paste your
                permalink in the text field and click on "Import". This should fill the name,
                format, the card list as well as primary and splash clans. Don't forget to save your
                deck!
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <img style={{ width: '75%' }} src="./static/images/ImportJigoku.png" />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="jigoku-export">
          <Typography className={classes.heading}>
            <b>How do I import my deck from FiveRingsDB?</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography component={'div'}>
                To import an existing deck from FiveRingsDB, click on the "Create Deck" button in
                the Builder section. Click on the "Import from FiveRingsDB" Button and paste the
                permalink to your deck in the text field. Import the deck and don't forget to save
                your deck in the deckbuilder view afterwards.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <img style={{ width: '30%' }} src="./static/images/Import5RDBAndBB.png" />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="jigoku-export">
          <Typography className={classes.heading}>
            <b>How do I import my deck from BushiBuilder?</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography component={'div'}>
                To import an existing deck from BushiBuilder, click on the "Create Deck" button in
                the Builder section. Click on the "Import from BushiBuilder" Button. In the pop up
                that opens, select the format of the deck you want to import and paste the contents
                of the "Jigoku Export" from BushiBuilder in the text field.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <img style={{ width: '30%' }} src="./static/images/Import5RDBAndBB.png" />
            </Grid>
            <Grid item xs={12}>
              <Typography component={'div'}>
                Complete the import by clicking on the "Import Deck" button and don't forget to save
                your deck in the deckbuilder view afterwards.
              </Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="formats">
          <Typography className={classes.heading}>
            <b>Which formats does EmeraldDB and Jigoku support?</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography component={'div'}>
                EmeraldDB supports deckbuilding for the following formats:
                <ul>
                  <li>Emerald Legacy format</li>
                  <li>Jade Edict format</li>
                  <li>Fantasy Flight Games' Stronghold format</li>
                  <li>Fantasy Flight Games' Skirmish format</li>
                  <li>Fantasy Flight Games' Enlightenment format</li>
                </ul>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography component={'div'}>
                Of these formats, Jigoku supports:
                <ul>
                  <li>Emerald Legacy format</li>
                  <li>Jade Edict format</li>
                  <li>Fantasy Flight Games' Stronghold format</li>
                  <li>Fantasy Flight Games' Skirmish format</li>
                </ul>
              </Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="feedback">
          <Typography className={classes.heading}>
            <b>I have feedback/I have found a bug, where do I post it?</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'div'}>
            We're glad to hear back from you. If you have any feedback or criticism, please send an
            e-mail to emeralddb[at]emeraldlegacy[dot]org or send a Discord DM to WorkerBee#3527.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="collaborate">
          <Typography className={classes.heading}>
            <b>How can I help maintaining and developing EmeraldDB?</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'div'}>
            We're always happy to find people willing to help out in some form or capacity. If you
            are a web developer and have at least some basic experience with TypeScript, React and
            Node, send an e-mail to emeralddb[at]emeraldlegacy[dot]org or send a Discord DM to
            WorkerBee#3527. We'll find a way to get you involved.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  )
}
