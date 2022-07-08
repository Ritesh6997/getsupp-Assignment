import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { PopupContext } from './Context/PopUpContext';
export default function UserCard({ value }) {
  const { handleDetail } = useContext(PopupContext);
  return (
    <div onClick={() => {
      handleDetail(value);
    }}>
      {value && (
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            padding:"1% 2%"
          }}
        >
          <Box
            sx={{
              width: "65%",
              display: "flex",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                textAlign: "left",
              }}
              image={value.image}
              alt="Live from space album cover"
            />
            <CardContent>
              <Typography component="div" variant="h7">
                {value.name}
              </Typography>
            </CardContent>
          </Box>
          <Box
            sx={{
              display: "flex",
              textAlign: "right",
              columnGap: "2%",
              width: "35%",
              alignItems: "center",
            }}
          >
            {value.status === "Alive" ? (
              <span
                style={{
                  width: "5px",
                  height: "5px",
                  border: "1px solid green",
                  backgroundColor: "green",
                  borderRadius: "50%",
                }}
              ></span>
            ) : (
              <span
                style={{
                  width: "5px",
                  height: "5px",
                  border: "1px solid #bcbbbb",
                  backgroundColor: "#dbd9d9",
                  borderRadius: "50%",
                }}
              ></span>
            )}
            <Typography component="div" variant="h7">
              {value.status}
              {" - "}
              {value.species}
            </Typography>
          </Box>
        </Card>
      )}
    </div>
  );
}
