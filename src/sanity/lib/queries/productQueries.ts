// src/sanity/lib/queries/productQueries.ts

const commonProductFields = `
  _id,
  title,
  "slug": slug.current,
  productId,
  size,
  availableColors[] {
    colorName,
    colorCode,
    colorImage {
      asset->{
        _id,
        url
      },
      alt
    }
  },
  otherImages[] {
    asset->{
      _id,
      url
    },
    alt
  },
  description,
  tags
`;

export const getAllProductsQuery = `*[_type == "product"]{
  ${commonProductFields}
}`;
