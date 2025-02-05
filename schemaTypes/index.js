import { name } from "react";

export const schemaTypes = [
  {
    // defines the schema type "book"
    name: "Jewelry",
    type: "document",
    fields: [
      {
        title: "Item Name",
        name: "itemName",
        type: "string",
      },
      {
        title: "Description",
        name: "description",
        type: "text",
      },
      {
        title: "Price",
        name: "price",
        type: "number",
      },
      {
        name: "imageGallery",
        type: "array",
        title: "Gallery",
        of: [{ type: "image" }],
      },
    ],
  },
];
