import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
    //Form
    firstLast: {
        marginBottom: 10
    },

    //Header
    title: {
        fontSize: 24,
        fontWeight: 600,
        marginLeft: 20,
    },
    description: {
        fontSize: 18,
        fontWeight: 520,
        marginLeft: 20,
    },
    accountIcon: {
        fontSize: 'large'
    },
    headerItems: {
        [theme.breakpoints.down('lg')]:{
            padding: 6
        },
        [theme.breakpoints.down('xs')]:{
            padding: 6
        },
    },
    first: {
        marginLeft: 30,
        marginTop: 20,
        [theme.breakpoints.down('xs')]:{
            marginLeft: 10,
        },
    },
    second: {
        
        [theme.breakpoints.down('lg')]:{
            marginTop: 20,
            marginLeft: -20,
        },
        [theme.breakpoints.down('xs')]:{
            marginTop: 20,
            marginLeft: 0,
        },
    },

    //formDialog
    maintitle: {
        fontSize: 22,
        fontWeight: 600, 
    },
    subtitle: {
      fontSize: 16,
      color: '#808080',
      marginTop: 6, 
    },
    icon: {
      marginRight: 5,
      marginBottom: 1,
      fontSize: 'medium'
    },
    header: {
      display: 'flex',
      marginTop: 20,
      marginLeft: 20,
      justifyItems: 'flex-start',
      width: '500px',
      [theme.breakpoints.down('xs')]: {
        width: 'auto',
        marginLeft: 0,
        
      }
    }
}));

export default useStyles;