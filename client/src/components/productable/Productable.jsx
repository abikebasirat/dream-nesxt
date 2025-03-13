import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./productable.scss";
import { useParams } from "react-router-dom";
import { setUser } from "../../redux/state";
import { useSelector, useDispatch } from "react-redux";
import {useState,useEffect} from 'react'
import Loader from "../Loader";

export const rows = [
  {
    roomNumber: "DRBDM063",
    img: "/assets/carbattery.jpg",
    room: "A ROOM",
    name: "DRIVETEC",
    price: "$40.90",
    date: "27th September",
    // addtoCart: "Add to cart",
  },
  {
    roomNumber: "51Wy1UhvbZL",
    img: "/assets/engineoil.jpg",
    room: "SELF-CONTAINED",
    name: "Turbo",
    price: "$25.00",
    date: "5th February",
    // addtoCart: "Add to cart",
  },
  {
    roomNumber: "HJKDM063",
    img: "/assets/engineoil2.jpg",
    room: "FOUR BEDROOM FLAT",
    name: "Turbo",
    price: "$20.00",
    date: "1st June",
    // addtoCart: "Add to cart",
  },
  {
    roomNumber: "31CTWTB2",
    img: "/assets/engineoil.jpg",
    room: "THREE BEDROOM FLAT ",
    name: "Platinum",
    price: "$20.00",
    date: "21st August",
    // addtoCart: "Add to cart",
  },
  {
    roomNumber: "HRDDR3055",
    img: "/assets/wheel.jpg",
    room: "ONE ROOM",
    name: "Platinum",
    price: "$160.00",
    date: "16th February",
    // addtoCart: "Add to cart",
  },
  {
    roomNumber: "FGH543",
    img: "/assets/carbrush.jpg",
    room: "ONE BEDROOM FLAT",
    name: "Amazon",
    price: "$18.00",
    date: "20th March",
    // addtoCart: "Add to cart",
  },
  {
    roomNumber: "YABYBX3055",
    img: "/assets/carbattery.jpg",
    room: "TWO BEDROOM FLAT",
    name: "KENNY",
    price: "$137.00",
    date: "24th january ",
    // addtoCart: "Add to cart",
  },
];  
const Productable = () => {
const params = useParams()
const dispatch = useDispatch()
const [users,setUsers] = useState()
const [loader,setLoader] = useState(true)

const userId = useSelector((state) => state.userId)
const [id] = params
  const fetchUser  = async () => {
    
   const response =  await fetch(`http://localhost:3001/properties/:${id}`,
    {
      method: 'GET'
    }
   ) ;
   const data = await response.json()
   dispatch(setUser({userId:data}))
   setLoader(false)

  }
  // useEffect(()=> {
    // fetchUser
    
  // }),[userId]
  return (
    
    
    <div className="productable">
      <TableContainer component={Paper} className="tablecontainer">
      {loader ? (
      <Loader/>
    ) : (
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
         
              <TableCell className="tableCell">Room Number</TableCell>
              <TableCell className="tableCell">Room</TableCell>
              <TableCell className="tableCell">Name</TableCell>
              <TableCell className="tableCell">Price</TableCell>
              <TableCell className="tableCell">Date</TableCell>
              {/* <TableCell className="tableCell">Add to cart</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.roomNumber}>
                <TableCell className="tableCell">{row.roomNumber}</TableCell>
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                    {row.room}
                  </div>
                </TableCell>
                <TableCell className="tableCell">{row.name}</TableCell>
                <TableCell className="tableCell">{row.price}</TableCell>
                <TableCell className="tableCell">{row.date}</TableCell>
                <TableCell className="tableCell">
                  {/* <span> {row.addtoCart}</span> */}
                </TableCell>
                {/* <TableCell className="tableCell">
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
    )} 
      </TableContainer>
    </div>
  );
};

export default Productable;
