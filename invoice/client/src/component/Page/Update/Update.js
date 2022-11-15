import Axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Update.css";

const Update = () => {
  const [searchId, setSearchId] = useState();
  const [searchResult, setSearchResult] = useState([""]);

  const [date, setDate] = useState("");
  const [invoice, setInvoice] = useState(0);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState(0);
  const [qty, setQty] = useState(0);
  const [product, setProduct] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [advance, setAdvance] = useState(0);
  const [update, setUpdate] = useState("");
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [deliveryCompany, setDeliveryCompany] = useState("");
  const [remark, setRemark] = useState("");
  const [first_followup, setFirst_followup] = useState("");
  const [second_followup, setSecond_followupId] = useState("");
  const [third_followup, setThird_followup] = useState("");
  const [bkashCost, setBkashCost] = useState(0);
  const [other, setOther] = useState(0);
  const [depositToAccount, setDepositToAccount] = useState(0);

  // Update
  const UpdateInvoice = () => {
    Axios.post("http://localhost:3001/create", {
      // send it to backend from frontend.
      date: date,
      invoice: invoice,
      name: name,
      address: address,
      email: email,
      mobile: mobile,
      qty: qty,
      product: product,
      productPrice: productPrice,
      advance: advance,
      update: update,
      deliveryCharge: deliveryCharge,
      deliveryCompany: deliveryCompany,
      remark: remark,
      first_followup: first_followup,
      second_followup: second_followup,
      third_followup: third_followup,
      bkashCost: bkashCost,
      other: other,
      depositToAccount: depositToAccount,
    }).then(() => {
      console.log("success");
    });
  };

  // Search
  const searchInvoice = () => {
    Axios.get(`http://localhost:3001/search/${searchId}`).then((Response) => {
      setSearchResult(Response.data);
      // console.log(Response.data[0].name);
    });
  };

  // console.log(typeof searchResult);
  console.log(searchResult);
  console.log(searchResult[0].productPrice);

  return (
    <div>
      <div className="search">
        <label>Search with ID</label>
        <input
          type="number"
          placeholder="ID"
          onChange={(event) => setSearchId(event.target.value)}
        />
        <button type="submit" className="searchBtn" onClick={searchInvoice}>
          {" "}
          Search
        </button>
      </div>
      <div className="field">
        <label>ID</label>
        <input
          type="number"
          placeholder="ID"
          value={searchResult[0].id}
          onChange={(event) => setId(event.target.value)}
        />
      </div>
      <div className="field">
        <label>Date</label>
        <input
          type="text"
          placeholder="2022-10-27"
          value={searchResult[0].date}
          onChange={(event) => setDate(event.target.value)}
        />
      </div>
      <div className="field">
        <label>Invoice No</label>
        <input
          type="number"
          placeholder="6"
          value={searchResult[0].invoice_no}
          onChange={(event) => setInvoice(event.target.value)}
        />
      </div>
      <div className="field">
        <label>Name</label>
        <input
          type="text"
          placeholder="Arafat"
          value={searchResult[0].name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="field">
        <label>Address</label>
        <input
          type="text"
          placeholder="Gulshan-1, Dhaka"
          value={searchResult[0].address}
          onChange={(event) => setAddress(event.target.value)}
        />
      </div>
      <div className="field">
        <label>Email</label>
        <input
          type="email"
          placeholder="abc@gmail.com"
          value={searchResult[0].email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="field">
        <label>Mobile</label>
        <input
          type="number"
          placeholder="01777766332"
          value={searchResult[0].mobile}
          onChange={(event) => setMobile(event.target.value)}
        />
      </div>
      <div className="field">
        <label>QTY</label>
        <input
          type="number"
          placeholder="3"
          value={searchResult[0].qty}
          onChange={(event) => setQty(event.target.value)}
        />
      </div>
      <div className="field">
        <label>Product</label>
        <input
          type="text"
          placeholder="Head phone"
          value={searchResult[0].product}
          onChange={(event) => setProduct(event.target.value)}
        />
      </div>
      <div className="field">
        <label>Product Price</label>
        <input
          type="number"
          placeholder="1020"
          value={searchResult[0].product_price}
          onChange={(event) => setProductPrice(event.target.value)}
        />
      </div>
      <div className="field">
        <label>Advance</label>
        <input
          type="number"
          placeholder="500"
          value={searchResult[0].advance}
          onChange={(event) => setAdvance(event.target.value)}
        />
      </div>
      <div className="field">
        <label>Update</label>
        <input
          type="text"
          placeholder="Delivered"
          value={searchResult[0].update}
          onChange={(event) => setUpdate(event.target.value)}
        />
      </div>
      <div className="field">
        <label>Delivery Charge</label>
        <input
          type="number"
          placeholder="100"
          value={searchResult[0].delivery_charge}
          onChange={(event) => setDeliveryCharge(event.target.value)}
        />
      </div>
      <div className="field">
        <label>Delivery Company</label>
        <input
          type="text"
          placeholder="RedX"
          value={searchResult[0].delivery_company}
          onChange={(event) => setDeliveryCompany(event.target.value)}
        />
      </div>
      <div className="field">
        <label>Remarks</label>
        <input
          type="text"
          placeholder="Nothing"
          value={searchResult[0].remarks}
          onChange={(event) => setRemark(event.target.value)}
        />
      </div>

      <div className="field">
        <label>1st Followup</label>
        <input
          type="text"
          placeholder="Processing"
          value={searchResult[0].first_followup}
          onChange={(event) => setFirst_followup(event.target.value)}
        />
      </div>

      <div className="field">
        <label>2st Followup</label>
        <input
          type="text"
          placeholder="N/A"
          value={searchResult[0].second_followup}
          onChange={(event) => setSecond_followupId(event.target.value)}
        />
      </div>

      <div className="field">
        <label>3st Followup</label>
        <input
          type="text"
          placeholder="N/A"
          value={searchResult[0].third_followup}
          onChange={(event) => setThird_followup(event.target.value)}
        />
      </div>
      <div className="field">
        <label>bKash Cost</label>
        <input
          type="number"
          placeholder="20"
          value={searchResult[0].bkash_cost}
          onChange={(event) => setBkashCost(event.target.value)}
        />
      </div>
      <div className="field">
        <label>Others (VAT, TAX, etc.)</label>
        <input
          type="number"
          placeholder="10"
          value={searchResult[0].others_vat_tax}
          onChange={(event) => setOther(event.target.value)}
        />
      </div>
      <div className="field">
        <label>Deposit to Accounts</label>
        <input
          type="number"
          placeholder="800"
          value={searchResult[0].deposit_to_accounts}
          onChange={(event) => setDepositToAccount(event.target.value)}
        />
      </div>

      <button type="submit" onClick={UpdateInvoice}>
        Update Invoice
      </button>
    </div>
  );
};
export default Update;
