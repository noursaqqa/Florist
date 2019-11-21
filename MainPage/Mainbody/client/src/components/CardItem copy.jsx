import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles({
  card: {
    maxWidth: 247.97,
  },
  media: {
    height: 247.97,
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://res.cloudinary.com/bloomnation/c_fill,d_vendor:global:catalog:product:image.png,f_auto,h_1008,q_auto,w_1008/v1574065222/vendor/4664/catalog/product/2/0/20191023095611_file_5db0cc7b6e710_5db0cd8d15286.jpeg"
          title="Orange Colored Sky"
        />
        <CardContent>
          <Typography variant="body2" color="#777777" font="Avenir" component="h5">
          Orange Colored Sky
          </Typography>          
        </CardContent>
      </CardActionArea>

      <Divider />

      <CardActions>
        <Button size="small" color="primary">
            Same Day Delivery
        </Button>
        <FavoriteBorderIcon />
      </CardActions>
    </Card>
  );
}








// //functional
// import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import FavoriteIcon from '@material-ui/icons/Favorite';


// const styles = {
//     card: {
//         height: 0,
//         padding: 0,

//     }
// };

// const useStyles = makeStyles(styles);


// const CardItem = (props) => {

//     const classes = useStyles();

//     return (
//         <div>
//             { props.card ? (
//                 <Card>
//                     <CardMedia className={classes.card} 
//                         image="https://res.cloudinary.com/bloomnation/c_fill,d_vendor:global:catalog:product:image.png,f_auto,h_1008,q_auto,w_1008/v1574065222/vendor/4664/catalog/product/2/0/20191023095611_file_5db0cc7b6e710_5db0cd8d15286.jpeg"
                        
//                     />
//                     <CardContent title= "Orange Colored Sky">
                        
//                     </CardContent>
//                 </Card>
//             ): null }
                
//         </div>
//     );
// };

// export default CardItem;