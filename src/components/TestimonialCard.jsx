import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import { PropTypes } from "prop-types";

const TestimonialCard = ({
  rating,
  description,
  title,
  subtitle,
  avatar,
  sx,
}) => {
  return (
    <Card sx={sx}>
      <CardContent sx={{ p: 0 }}>
        {rating}
        <Typography variant="body2" maxWidth={"20ch"} minHeight={"12ch"}>
          {description}
        </Typography>
      </CardContent>
      <CardHeader
        avatar={avatar}
        title={title}
        titleTypographyProps={{
          variant: "button",
          component: "h3",
          textTransform: "none",
        }}
        subheader={subtitle}
        subheaderTypographyProps={{ variant: "subtitle1" }}
        sx={{ p: 0 }}
      />
    </Card>
  );
};

TestimonialCard.propTypes = {
  rating: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  avatar: PropTypes.node.isRequired,
  sx: PropTypes.object,
};

export default TestimonialCard;
