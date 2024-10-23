import {
  SavedQueriesList,
  FilterLiveSearch,
  FilterList,
  FilterListItem
} from "react-admin";
import { Card, CardContent } from "@mui/material";
import MailIcon from "@mui/icons-material/MailOutline";
import CategoryIcon from "@mui/icons-material/LocalOffer";

export const PostFilterSidebar = () => (
  <Card sx={{ order: -1, mr: 2, mt: 9, width: 200 }}>
    <CardContent>
      <SavedQueriesList />
      <FilterList label="Category" icon={<CategoryIcon />}>
        <FilterListItem label="Tests" value={{ category: "tests" }} />
        <FilterListItem label="News" value={{ category: "news" }} />
        <FilterListItem label="Deals" value={{ category: "deals" }} />
        <FilterListItem label="Tutorials" value={{ category: "tutorials" }} />
      </FilterList>
    </CardContent>
  </Card>
);
