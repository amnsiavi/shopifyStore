import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@mui/material';
import {Link} from '@remix-run/react';
import AddToCart from './AddToCart';

export default function ProductCard({src, title, className, code, price}) {
  return (
    <Card sx={{maxWidth: 345}} className={`${className}`}>
      <CardMedia sx={{height: 140}} image={src} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>

        <div
          className="flex"
          style={{
            gap: '10px',
          }}
        >
          <h3>
            <strong>{code}</strong>
          </h3>{' '}
          <span>
            <strong>{price}</strong>
          </span>
        </div>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
