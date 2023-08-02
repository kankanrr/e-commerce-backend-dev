const { Tag } = require("../models");

const tagData = [
  {
    tag_name: "underground rap",
  },
  {
    tag_name: "hip hop",
  },
  {
    tag_name: "blue",
  },
  {
    tag_name: "red",
  },
  {
    tag_name: "white",
  },
  {
    tag_name: "software",
  },
  {
    tag_name: "pop culture",
  },
  {
    tag_name: "toy",
  },
  {
    tag_name: "collectible",
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
