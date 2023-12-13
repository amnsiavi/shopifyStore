const data = [
  {
    id: 'gid://shopify/Product/8102849577188',
    description:
      'You can change the color of the bath bombs by chan…ath bombs that have unique or therapeutic scents.',
    title: 'The Green Blast',
  },
  {
    id: 'gid://shopify/Product/8102849642724',
    description:
      'Bath bombs are fun, colourful balls of dry ingredi…ls for $4 to 10 USD each, that’s a huge industry!',
    title: 'The Yellow Mello',
  },
  {
    id: 'gid://shopify/Product/8102849675492',
    description:
      'Entrepreneurs don’t need massive factories like th…the fixed costs of running a stall or storefront.',
    title: 'The Blue Berry',
  },
];

data.map((node, index) => {
  console.log(node.title);
});
