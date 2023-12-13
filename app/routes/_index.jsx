import {defer} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';

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
    <>
      {nodes &&
        nodes.map((node) => {
          return (
            <div
              className="flex flex-col gap-12  p-6 border border-solid border-lime-400 items-center justify-center"
              key={node.id}
            >
              <h2>{node.title}</h2>
              {node.images.nodes[0] ? (
                <Image src={node.images.nodes[0].url} sizes="100vw" />
              ) : null}
              <h2>Description :</h2>
              <p>{node.description}</p>
            </div>
          );
        })}
    </>
  );
}

export const All_Products = `
query AllProducts{
    products(first:3){
     nodes{
      id
      description
      title
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
