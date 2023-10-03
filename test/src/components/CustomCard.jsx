import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { ArticlesData } from "../utils/Data";
   
 export const CustomCard = () => {
    return (
    <>
        {ArticlesData.map((item) => (
<Card>
  <Typography>{item.title}</Typography>
  <Typography>{item.description}</Typography>
  <Typography>{item.author}</Typography>
</Card>
        ))}
      </>
    );
  }