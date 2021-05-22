import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
  statistics__list: {
    width: '450px',
    margin: '0 auto',
    textAlign: 'left',
    backgroundColor: 'orchid',
    padding: '10px 10px',
    borderRadius: '10px',
  },
  statistics__list__item: {
    fontSize: '20px',
    fontWeight: 'bold',
    '&:not(:last-child)': {
      marginBottom: '5px',
    },
  },
});

export default useStyles;
