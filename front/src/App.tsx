import React from 'react';
import Axios from 'axios';
import { AppBar, Button, Container, CssBaseline, Fab, IconButton, List, ListItem, Paper, Snackbar, SnackbarProps, TextField, Toolbar, Typography } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close';
import * as Colors from '@material-ui/core/colors';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import { dark } from '@material-ui/core/styles/createPalette';
import { Palette } from '@material-ui/icons';
import { Console } from 'console';
import { Link } from 'react-router-dom';

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
    width:"100%",
  },
  paperTypoTitleSize:{
    padding:"1%",
  },
  paperTypoBodySize:{
    margin:"1%",
    marginTop:"1%",
    paddingBottom:"1%",
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  LinkSize:{
    width:"100%",
    textDecoration:"none",
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
}

function Header(props:HeaderProps){
  const classes = useStyles();

  return (
    <header>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => {
            props.handleClick();
            props.snackbarTextHandle("メニュー表示");
          }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            メモメモメ
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
}

interface PaperListItemProps{
  classes:{
    paperSize: string | undefined;
    paperTypoTitleSize: string | undefined;
    paperTypoBodySize: string | undefined;
    listItemSize: string | undefined;
    LinkSize:string | undefined;
  }
  handleClick:() => void;
}

function PaperListItem(props:PaperListItemProps){
  return(
    <ListItem className={props.classes.listItemSize}>
      <Link to="/editor" className={props.classes.LinkSize}>
        <Paper className={props.classes.paperSize} onClick={props.handleClick}>
          <Typography className={props.classes.paperTypoTitleSize} variant="h5" noWrap>
            見出し
          </Typography>
          <Typography className={props.classes.paperTypoBodySize} variant="body1" noWrap>
            内容:hogehogehogehogehogehogehogehogehogrhogrhogr
          </Typography>
        </Paper>
      </Link>
    </ListItem>
  );
}

interface CreatePaperItemsProps{
  classes:{
    paperSize: string | undefined;
    paperTypoTitleSize: string | undefined;
    paperTypoBodySize: string | undefined;
    listItemSize: string | undefined;
    LinkSize: string | undefined;
  }
  handleClick:() => void;
}

function CreatePaperItems(props:CreatePaperItemsProps){
  let itemList=[]
  for(let i=0;i<10;i++){
    itemList.push(PaperListItem({classes:props.classes,handleClick:props.handleClick}))
  }
  return(<>
    {itemList}
  </>
    );
}

interface BodyProps{
  handleClick:() => void;
  snackbarTextHandle:(snackbarText:string) => void;
}

function Body(props:BodyProps){
  const classes = useStyles();
  return(
    <div>
      <div className={classes.appBarSpacer} />
          <Container>
            <TextField label="検索" className={classes.SearchfieldSize}/>
            <List style={{maxHeight: '100%', overflow: 'auto'}}>
              <CreatePaperItems classes={classes} handleClick={() =>{props.handleClick();props.snackbarTextHandle("編集画面へ遷移")}}/>
            </List>
            <Link to="/editor">
              <Fab color="primary" aria-label="add" className={classes.fab}>
                <AddIcon />
              </Fab>
            </Link>
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
  constructor(props: AppState | Readonly<AppState>){
    super(props);
    this.state = {
      open:false,
      snackbarText:"",
      snackbarTextHandle:this.setSnackbarText,
    };
    this.handleClose = this.handleClose.bind(this);
    this.setSnackbarText = this.setSnackbarText.bind(this);
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
        }}/>
        <Body snackbarTextHandle={this.setSnackbarText} handleClick={()=>{this.setState({open:true})}}/>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
