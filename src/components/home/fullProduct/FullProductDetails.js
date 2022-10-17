import React, { useContext } from "react";
import DescriptionContext from "../../../store/card-context";
import ImageSide from "./ImageSide";
import TotalInfo from "./TotalInfo";
import Header from "./Header";
import Card from "@mui/material/Card";
import style from "./FullProductDetails.module.css";
const AllDetails = [
  {
    id: 1,
    images: [
      { id: 1, image: "/assets/images/F1.png" },
      { id: 2, image: "/assets/images/F1.1.png" },
      { id: 3, image: "/assets/images/F1.2.png" },
      { id: 4, image: "/assets/images/F1.3.png" },
    ],
    totalInfo: {
      title: "The Sideswept Dhoti + Bottom Line Grey (Silk)",
      price: "SGD 139.90 ",
      rating: "4.8",
      description:
        "Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere from South Asia to the Horn of Africa and southern Arabian pen… ",
      otherInfo: {
        employment: "54 jobs",
        partnership: "Randall Armstrong",
        collab: "Augusta Mendoza",
      },
    },
  },
  {
    id: 2,
    images: [
      { id: 1, image: "/assets/images/F1.png" },
      { id: 2, image: "/assets/images/F2.png" },
      { id: 3, image: "/assets/images/F1.2.png" },
      { id: 4, image: "/assets/images/F1.3.png" },
    ],
    totalInfo: {
      title: "The Sideswept Dhoti + Bottom Line Grey (Silk)",
      price: "SGD 139.90 ",
      rating: "2.8",
      description:
        "Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere from South Asia to the Horn of Africa and southern Arabian pen… ",
      otherInfo: {
        employment: "54 jobs",
        partnership: "Randall Armstrong",
        collab: "Augusta Mendoza",
      },
    },
  },
  {
    id: 3,
    images: [
      { id: 1, image: "/assets/images/F1.png" },
      { id: 2, image: "/assets/images/F3.png" },
      { id: 3, image: "/assets/images/F1.2.png" },
      { id: 4, image: "/assets/images/F1.3.png" },
    ],
    totalInfo: {
      title: "The Sideswept Dhoti + Bottom Line Grey (Silk)",
      price: "SGD 139.90 ",
      rating: "4",
      description:
        "Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere from South Asia to the Horn of Africa and southern Arabian pen… ",
      otherInfo: {
        employment: "54 jobs",
        partnership: "Randall Armstrong",
        collab: "Augusta Mendoza",
      },
    },
  },
  {
    id: 4,
    images: [
      { id: 1, image: "/assets/images/F1.png" },
      { id: 2, image: "/assets/images/F4.png" },
      { id: 3, image: "/assets/images/F1.2.png" },
      { id: 4, image: "/assets/images/F1.3.png" },
    ],
    totalInfo: {
      title: "The Sideswept Dhoti + Bottom Line Grey (Silk)",
      price: "SGD 139.90 ",
      rating: "4.8",
      description:
        "Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere from South Asia to the Horn of Africa and southern Arabian pen… ",
      otherInfo: {
        employment: "54 jobs",
        partnership: "Randall Armstrong",
        collab: "Augusta Mendoza",
      },
    },
  },
  {
    id: 5,
    images: [
      { id: 1, image: "/assets/images/F1.png" },
      { id: 2, image: "/assets/images/F5.png" },
      { id: 3, image: "/assets/images/F1.2.png" },
      { id: 4, image: "/assets/images/F1.3.png" },
    ],
    totalInfo: {
      title: "The Sideswept Dhoti + Bottom Line Grey (Silk)",
      price: "SGD 139.90 ",
      rating: "4.2",
      description:
        "Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere from South Asia to the Horn of Africa and southern Arabian pen… ",
      otherInfo: {
        employment: "54 jobs",
        partnership: "Randall Armstrong",
        collab: "Augusta Mendoza",
      },
    },
  },
  {
    id: 6,
    images: [
      { id: 1, image: "/assets/images/F6.png" },
      { id: 2, image: "/assets/images/F3.png" },
      { id: 3, image: "/assets/images/F1.2.png" },
      { id: 4, image: "/assets/images/F1.3.png" },
    ],
    totalInfo: {
      title: "The Sideswept Dhoti + Bottom Line Grey (Silk)",
      price: "SGD 139.90 ",
      rating: "3.1",
      description:
        "Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere from South Asia to the Horn of Africa and southern Arabian pen… ",
      otherInfo: {
        employment: "54 jobs",
        partnership: "Randall Armstrong",
        collab: "Augusta Mendoza",
      },
    },
  },
  {
    id: 7,
    images: [
      { id: 1, image: "/assets/images/F1.png" },
      { id: 2, image: "/assets/images/F7.png" },
      { id: 3, image: "/assets/images/F1.2.png" },
      { id: 4, image: "/assets/images/F1.3.png" },
    ],
    totalInfo: {
      title: "The Sideswept Dhoti + Bottom Line Grey (Silk)",
      price: "SGD 139.90 ",
      rating: "1.5",
      description:
        "Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere from South Asia to the Horn of Africa and southern Arabian pen… ",
      otherInfo: {
        employment: "54 jobs",
        partnership: "Randall Armstrong",
        collab: "Augusta Mendoza",
      },
    },
  },
  {
    id: 8,
    images: [
      { id: 1, image: "/assets/images/F1.png" },
      { id: 2, image: "/assets/images/F8.png" },
      { id: 3, image: "/assets/images/F1.2.png" },
      { id: 4, image: "/assets/images/F1.3.png" },
    ],
    totalInfo: {
      title: "The Sideswept Dhoti + Bottom Line Grey (Silk)",
      price: "SGD 139.90 ",
      rating: "5",
      description:
        "Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere from South Asia to the Horn of Africa and southern Arabian pen… ",
      otherInfo: {
        employment: "54 jobs",
        partnership: "Randall Armstrong",
        collab: "Augusta Mendoza",
      },
    },
  },
];

const FullProductDetails = () => {
  const cardCtx = useContext(DescriptionContext);
  return (
    <Card className={style.fullProduct}>
      <Header />
      <article>
        <ImageSide images={AllDetails[cardCtx.idCard - 1].images} />
        <TotalInfo Info={AllDetails[cardCtx.idCard - 1].totalInfo} />
      </article>
      <button className={style.button}>View Full product Details</button>
    </Card>
  );
};

export default FullProductDetails;
