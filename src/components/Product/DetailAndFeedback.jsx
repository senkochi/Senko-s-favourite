import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Overall from "./Overall";
import Feedbacks from "./Feedbacks";

const DetailAndFeedback = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="my-5">
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs"
          sx={{
            "& .MuiTab-root": {
              color: "gray", // màu chữ thường
            },
            "& .Mui-selected": {
              color: "black", // màu chữ tab đang chọn
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "gray", // màu gạch chân
            },
          }}
        >
          <Tab label="Product Information" color="" />
          <Tab label="Ratings" />
        </Tabs>
        <Box sx={{ p: 2 }}>
          {value === 0 && (
            <Box>
              <Typography component="div" sx={{ mt: 1 }}>
                <table className="w-full table-detail">
                  <tbody>
                  <tr>
                    <th>Manufacturer</th>
                    <td>Mytheos</td>
                  </tr>
                  <tr>
                    <th>Release date</th>
                    <td>10/2020</td>
                  </tr>
                  <tr>
                    <th>Size</th>
                    <td>Approx. H195mm</td>
                  </tr>
                  <tr>
                    <th>Material</th>
                    <td>ABS, PVC</td>
                  </tr>
                  <tr>
                    <th>Copyright</th>
                    <td>
                      2019 リムコロ/KADOKAWA/世話やきキツネの仙狐さん製作委員会
                    </td>
                  </tr>
                  </tbody>
                </table>
              </Typography>
            </Box>
          )}
          {value === 1 && (
  <Box sx={{ mt: 1}}>
    <Feedbacks />
  </Box>
)}
        </Box>
      </Box>
    </div>
  );
};

export default DetailAndFeedback;
