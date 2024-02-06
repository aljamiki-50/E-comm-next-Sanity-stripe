export default {
  // the name it  s the argument we pass for the type when making a query and the vision section
  name: "product",
  type: "document",
  // The title is the name appears at the studio folder
  title: "Product",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name Of Product",
    },
    {
      name: "images",
      // we passed a type is array because we would embed many images for each products 3 and more
      type: "array",
      title: "Product Of Images",
      // and the of field here we telling sanity what kind of an arra
      //   y we using as we afore declared and here we explicty saying its images type array
      of: [{ type: "image" }],
    },
    {
      name: "description",
      type: "text",
      title: "Description of Product",
    },
    {
      name: "slug",
      type: "slug",
      title: "Product Slug",
      // again we bascily declaring the slug would be genrated from the name  we denoting for the name fields here
      options: {
        source: "name",
      },
    },

    {
      name: "price",
      type: "number",
      title: "Price",
    },
    {
      name: "category",
      title: "Product Category",
      // The type reference denotes we referencing to a certain type
      type: "reference",
      // to refering to category as in this field will be added
      to: [
        {
          type: "category",
        },
      ],
    },
    {
      name: "price_id",
      type: "Stripe Price ID",
      type: "string",
    },
  ],
};
