import reduxify from '../utilities/reduxify';
import * as actions from '../actions/index';
import React, {Component} from 'react';
import ReactDOM, {findDOMNode} from 'react-dom';
import {StyleSheet, css} from 'aphrodite';
import _ from 'lodash';
import palette from '../constants/palette';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import ShareIcon from 'material-ui/svg-icons/social/share';
import facebookIconSVG from '../../img/facebookIcon.svg';
import twitterIconSVG from '../../img/twitterIcon.svg';
import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/SvgIcon';

// import popout from '../../img/popout.svg';

// import HeroPieChart from '../charts/HeroPieChart';


const headline = {
  EN: "CAN YOU HEAR US?",
  IS: "HEYRIRÐU Í OKKUR?"
};

const subheadline = {
  EN: 'In 2012, by a 2/3ds vote, the Icelandic people told its parliament to enact a constitution "based on" ' +
  'a constitution a citizen council had drafted. Four years later, they have done nothing. Help us show the politicians who they work for.',
  IS: 'Árið 2012, með 2 / 3DS atkvæði, íslenska þjóðin sagði þinginu til þess að enact stjórnarskrá "sem byggist á" stjórnarskrá borgari ráðið hafði samið. Fjórum árum síðar, hafa þeir ekki gert neitt. Hjálpið okkur að sýna stjórnmálamenn sem þeir vinna fyrir.'
};

const TwitterIcon = (props) => (<img {...props} src={twitterIconSVG} />);
const FacebookIcon = (props) => (<img {...props} src={facebookIconSVG} />);

const styles = StyleSheet.create({
  heroStyle: {
    backgroundColor: palette.heroBackground,
    width: '100%',
    paddingBottom: '100px',
  },

  wrapper: {
    overflow: 'hidden',
    padding: '1vw',
  },
  leftContainer: {
    float: 'left',
    marginRight: '1vw',
    width: '40vw',
    textAlign: 'left',
    '@media (max-width: 800px)': {
      float: 'none',
      marginRight: '0',
      textAlign: 'center',
      width: 'auto',
      border: '0',
    }
  },
  rightContainer: {
    backgroundColor: 'white',
    overflow: 'hidden',
    float: 'right',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '50vw',
    marginTop: '6vh',
    textAlign: 'center',
    '@media (max-width:800px)': {
      float:'none',
      border: '0',
      width: "100%",

    }
  },
  headlineStyle: {
    color: 'white',
    fontFamily: "Roboto Condensed",
    fontWeight: '900',
    fontSize: '15vh',
    margin: '2vh 0',
    padding: '1vh 2vw',
    '@media (max-width: 800px)': {
      fontSize: '7vh'
    }
  },
  subheadline: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: '20px',
    padding: '3vw',
  },
  videoWrapper : {
    justifyContent: 'center',

    '@media (max-width: 800px)': {
      position: 'relative',
      // paddingBottom: '56.25%',
      /* 16:9 */

      paddingTop: '1vh',
    },
  },
  videoWrapperIframe : {
    width: 'calc(100% - 2vw)',
    height: 'calc(48vw * (9 / 16))',
    '@media (max-width: 800px)': {
      width: 'calc(100% - 2vw)',
      top: '0',
      left: '0',
      height: 'calc(96vw * (9 / 16) )',
    },
  },

});

class Hero extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (<div>
      <Paper className={css(styles.heroStyle)} zDepth={1} >
        <div className={css(styles.wrapper)}>
          <div ref="leftContainer" className={css(styles.headlineStyle, styles.leftContainer)}>
              {headline[this.props.language]}
          </div>
          <Paper ref="rightContainer" className={css(styles.rightContainer)}>
            <div ref="donateLang" style={{padding: '2vh'}}>
              <RaisedButton
                backgroundColor={palette.iceFlagRed}
                style={{margin: 'auto', width: '100%', height: '7vh'}}
                labelStyle={{fontWeight: '900',  lineHeight: '7vh', fontSize: "4vh", fontFamily: "Roboto Condensed", color: palette.white }}
                label="Donate"
                />

            </div>
            <div ref="video" className={css(styles.videoWrapper)}>
              <iframe className={css(styles.videoWrapperIframe)} src="https://player.vimeo.com/video/7416225?byline=0&portrait=0" width="640" height="360" allowFullScreen></iframe>
            </div>
            <div style={{ display:'flex', justifyContent: 'center', alignItems: 'center'}}>
            <span style={{marginRight: '10px'}}>{this.props.language === 'IS' ? "DEILA": "SHARE"}</span>
            <IconButton>
              <TwitterIcon width="24px" height="24px"/>
            </IconButton>
            <IconButton>
              <FacebookIcon width="24px" height="24px"/>
            </IconButton>

            </div>
          </Paper>
        </div>
        <div className={css(styles.subheadline)}>
          {subheadline[this.props.language]}
        </div>
      </Paper>
    </div>
    );
  }
}

export default reduxify(actions, ['language'], Hero);