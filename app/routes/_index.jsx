import {defer} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import ProductCard from 'material ui components/ProductCard';
import React from 'react';
import {Grid} from '@mui/material';

export async function loader({context}) {
  const {storefront} = context;
  const {products} = await storefront.query(All_Products);

  return defer({products});
}

export default function Index() {
  return (
    <div className="flex items-start justify-start p-6 border border-dotted border-lime-500  gap-12  ">
      <AllProducts />
    </div>
  );
}

export function AllProducts() {
  const {products} = useLoaderData();
  const {nodes} = products;

  console.log(JSON.stringify(nodes));
  return (
    <Grid container spacing={10} sx={{padding: '50px'}}>
      {nodes &&
        nodes.map((node) => {
          return (
            <Grid item key={node.id} xs={12} sm={6} md={4} lg={3}>
              {node.images.nodes[0] ? (
                // <Image src={node.images.nodes[0].url} sizes="100vw" />
                <ProductCard
                  src={node.images.nodes[0].url}
                  title={node.title}
                  className={
                    'transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer'
                  }
                  price={node.priceRange.maxVariantPrice.amount}
                  code={node.priceRange.maxVariantPrice.currencyCode}
                />
              ) : null}
            </Grid>
          );
        })}
    </Grid>
  );
}

export const All_Products = `
query AllProducts{
  products(first:3){
   nodes{
    id
    description
    title
    priceRange{
      maxVariantPrice{
        amount
        currencyCode
      }
    }
    images(first:1){
      nodes{
        altText
        height
        url
        width
      }
    }
  }
  }
}

`;
