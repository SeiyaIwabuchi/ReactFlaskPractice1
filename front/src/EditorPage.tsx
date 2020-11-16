import React, { useState } from 'react';
import { AppBar, Button, Container, CssBaseline, Fab, IconButton, Input, List, ListItem, Paper, Snackbar, SnackbarProps, TextField, Toolbar, Typography } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close';
import * as Colors from '@material-ui/core/colors';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { dark } from '@material-ui/core/styles/createPalette';
import { Palette } from '@material-ui/icons';
import { Console } from 'console';
import { Link } from 'react-router-dom';
import MemoData from './MemoData'

const fontFamily = [
  "Noto Sans JP",
  "Lato",
  "游ゴシック Medium",
  "游ゴシック体",
  "Yu Gothic Medium",
  "YuGothic",
  "ヒラギノ角ゴ ProN",
  "Hiragino Kaku Gothic ProN",
  "メイリオ",
  "Meiryo",
  "ＭＳ Ｐゴシック",
  "MS PGothic",
  "sans-serif",
].join(",");

const theme = createMuiTheme({
  typography: {
    fontFamily: fontFamily,
  },
  palette: {
    primary:Colors.grey,
    type:"dark",
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height:"100%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    
  },
  appBarSpacer: theme.mixins.toolbar,
  SearchfieldSize:{
    width: "100%",
    marginTop:"2%",
  },
  listItemSize:{
    padding:0,
    paddingTop:5,
  },
  paperSize:{
    margin:"1%",
    marginTop:"5%",
    width:"100%",
    height:"auto",
    padding:"1%",
  },
  paperTypoTitleSize:{
    margin:"1%",
    
  },
  paperTypoBodySize:{
    margin:"1%",
    marginTop:"-1%",
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function SimpleSnackbar() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClick}>Open simple snackbar</Button>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}

interface HeaderProps{
  handleClick:()=>void;
  snackbarTextHandle:(snackbarText:string) => void;
  memoData:MemoData;
  editMode:"insert"|"update";
}

function Header(props:HeaderProps){
  const classes = useStyles();

  return (
    <header>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <Link to="/" style={{textDecoration:"none"}}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => {
              props.handleClick();
              props.snackbarTextHandle("メニュー表示");
              if(props.memoData.title !== "" && props.memoData.body !== ""){
                fetch("http://iwabuchi.ddns.net:8080/" + (props.editMode === "update"?"update":""),{
                  method:"POST",
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({id:props.memoData.id,title:props.memoData.title,body:props.memoData.body}),
                })
                .then(response => response.json())
                .catch((error) => {console.log(error)});
              }
            }}>
              <ArrowBackIcon color="action" />
            </IconButton>
          </Link>
          <Typography variant="h6" className={classes.title}>
            メモメモメ
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
}

interface BodyProps{
  handleClick:() => void;
  snackbarTextHandle:(snackbarText:string) => void;
  handleUpdateMemo:(title:string,body:string) => void;
  memo:MemoData;
}

function Body(props:BodyProps){
  const classes = useStyles();
  const [titleText,setTitleText] = useState(props.memo.title);
  const [bodyText,setBodyText] = useState(props.memo.body);
  return(
    <div>
      <div className={classes.appBarSpacer} />
          <Container>
          <Paper className={classes.paperSize}>
          <TextField
            label="Title" 
            style={{
              margin:"1%",
              width:"98%",
            }}
            value={titleText}
            onChange={(event)=>{
              setTitleText(event.target.value);
              props.handleUpdateMemo(event.target.value,bodyText);
            }}
          />
          <br/>
          <TextField
            label="Body"
            multiline
            variant="outlined"
            style={{
              marginTop:"2%",
              marginBottom:"2%",
              width:"100%",
            }}
            value={bodyText}
            onChange={(event)=>{
              setBodyText(event.target.value);
              props.handleUpdateMemo(titleText,event.target.value);
            }}
          />
          </Paper>
          </Container>
    </div>
  );
}

interface AppState{
  open:boolean;
  snackbarText:string;
  snackbarTextHandle:(snackbarText:string) => void;
}

class App extends React.Component<any,AppState>{
  memodata:MemoData;
  editMode:"insert"|"update";
  constructor(props: AppState | Readonly<AppState>){
    super(props);
    this.state = {
      open:false,
      snackbarText:"",
      snackbarTextHandle:this.setSnackbarText,
    };
    this.handleClose = this.handleClose.bind(this);
    this.setSnackbarText = this.setSnackbarText.bind(this);
    this.handleUpdateMemo = this.handleUpdateMemo.bind(this);
    this.memodata = this.props.location.state.memoData;
    this.editMode = this.props.location.state.editMode;
  }
  setSnackbarText(text:string){
    this.setState({
      snackbarText:text,
    });
  }
  handleClose(event: React.SyntheticEvent | React.MouseEvent, reason?: string){
    if (reason === 'clickaway') {
      return;
    }
    this.setState({
      open:false,
    }
    );
  };
  handleUpdateMemo(title:string,body:string){
    this.memodata.title = title;
    this.memodata.body = body;
  }

  render(){
    return (
      <MuiThemeProvider theme={theme}>
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          message={this.state.snackbarText}
          action={
            <React.Fragment>
              <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleClose}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
        <CssBaseline />
        <Header snackbarTextHandle={this.setSnackbarText} handleClick={() => {
          this.setState({
            open:true,
          });
        }}
        memoData={this.memodata}
        editMode={this.editMode}
        />
        <Body snackbarTextHandle={this.setSnackbarText} handleClick={()=>{this.setState({open:true})}} handleUpdateMemo={this.handleUpdateMemo} memo={this.memodata}/>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
