import React, { Dispatch, SetStateAction, useState } from 'react';
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
import MemoData from './MemoData';
import Session from './Session';
import ResponseJsonInterface from './ResponseJsonInterface'

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
  handleClick:(memo:MemoData) => void;
  memo:MemoData;
}

function PaperListItem(props:PaperListItemProps){
  return(
    <ListItem className={props.classes.listItemSize}>
      
        <Paper className={props.classes.paperSize} onClick={() => {
          props.handleClick(props.memo);
          }}>
          <Typography className={props.classes.paperTypoTitleSize} variant="h5" noWrap>
            {props.memo.title}
          </Typography>
          <Typography className={props.classes.paperTypoBodySize} variant="body1" noWrap>
            {props.memo.body}
          </Typography>
        </Paper>
      
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
  handleClick:(memo:MemoData) => void;
  memoData:MemoData[];
}

function CreatePaperItems(props:CreatePaperItemsProps){
  let itemList: JSX.Element[]=[];
  props.memoData.forEach((memo:MemoData) => {
    itemList.push(PaperListItem({classes:props.classes,handleClick:(memo:MemoData) => {props.handleClick(memo)},memo:memo}))
  })
  return(<>
    {itemList}
  </>
    );
}

interface BodyProps{
  handleClick:(memo:MemoData,editMode:"insert"|"update") => void;
  memoData:MemoData[];
  setMemoData:(memos:MemoData[]) => void;
}

function Body(props:BodyProps){
  const classes = useStyles();
  const [textFieldValue,setTextFieldValue] = useState("");
  const [memoData2,setMemoData2] = useState(props.memoData);
  return(
    <div>
      <div className={classes.appBarSpacer} />
          <Container>
            <TextField label="検索" value={textFieldValue} className={classes.SearchfieldSize} onChange={(event) => {
              setTextFieldValue(event.target.value);
              setMemoData2(memoFilter(props.memoData,event.target.value));
            }}/>
            <List style={{maxHeight: '100%', overflow: 'auto'}}>
              <CreatePaperItems classes={classes} memoData={textFieldValue !== "" ? memoData2 : props.memoData} handleClick={(memo:MemoData) =>{
                props.handleClick(memo,"update")
                }}/>
            </List>
            <Fab color="primary" aria-label="add" className={classes.fab} onClick={()=>{
              props.handleClick(new MemoData(),"insert");
              }}>
              <AddIcon />
            </Fab>
          </Container>
    </div>
  );
}

function memoFilter(memos:MemoData[],keyword:string) : MemoData[]{
  let retList:MemoData[] = [];
    memos.forEach(memo => {
      if(memo.title.indexOf(keyword) !== -1){
        if(retList.indexOf(memo) === -1) retList.push(memo)
      }
    });
  return retList;
}

interface IHistoryState{
  memoData:MemoData;
  editMode:"insert"|"update";
  session:Session;
}

interface IHistory{
  pathname:string;
  state:IHistoryState;
}

interface IAppProps{
  history:IHistory[];
}

function App(props:IAppProps){
  const [open,setOpen] = useState(false);
  const [snackbarText,setSnackbarText] = useState("");
  const [jsonData,setJsonData] = useState<MemoData[]>([]);
  const [session,setSession] = useState(new Session(""));
  const tsession = localStorage.getItem("uid");
  if (tsession != null){
    session.setUid(tsession);
  }
  fetch("http://iwabuchi.ddns.net:8080/?uid=" + session.getUid(),{
    method:'get',
  })
  .then(response => response.json())
  .then((data:ResponseJsonInterface) => {
    setJsonData(data.memos);
    setSession(new Session(data.uid));
    localStorage.setItem("uid",session.getUid());
  })
  .catch((error) => {
    console.error('Error: ', error);
  });
  return (
    <MuiThemeProvider theme={theme}>
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={
          (event: React.SyntheticEvent | React.MouseEvent,reason?: string) => {
            handleClose(event,setOpen,reason);
          }}
        message={snackbarText}
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={
              (event: React.SyntheticEvent | React.MouseEvent,reason?: string) => {
                handleClose(event,setOpen,reason);
              }
            }>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
      <CssBaseline />
      <Header snackbarTextHandle={setSnackbarText} handleClick={() => {
        setOpen(true);
      }}/>
      <Body memoData={jsonData} handleClick={(memo:MemoData,editMode:"insert"|"update")=>{
        console.log(memo);
        props.history.push({
          pathname:"/editor",
          state:{
            memoData : memo,
            editMode : editMode,
            session : session,
          }
        });
      }}
      setMemoData={(memos:MemoData[]) => {
        setJsonData(memos.concat());
      }}
      />
    </div>
  </MuiThemeProvider>
  );
}

function handleClose(event: React.SyntheticEvent | React.MouseEvent,setOpen:Dispatch<SetStateAction<boolean>>,reason?: string){
  if (reason === 'clickaway') {
    return;
  }
  setOpen(false);
};

export default App;