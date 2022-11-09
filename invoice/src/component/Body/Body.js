import React from "react";
import classes from "./Body.css";

function Body() {
  return (
    <div>
      <h1>Invoice Table</h1>

      <button className="download">Download</button>

      <table id="customers">
        <tr>
          <th>Date</th>
          <th>Invoice No</th>
          <th>Name </th>
          <th>Address</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>QTY</th>
          <th>Product</th>
          <th>Product Price/COD</th>
          <th>Advance</th>
          <th>Update</th>
          <th>Delivery Charge+COD</th>
          <th>Delivery Company</th>
          <th>Remarks</th>
          <th>1st followup</th>
          <th>2nd followup</th>
          <th>3rd followup</th>
          <th>bKash Cost</th>
          <th>Others (VAT, TAX, etc.)</th>
          <th>Deposit to Accounts</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>10/03/2022</td>
          <td>1</td>
          <td>আবু ইউসুফ</td>
          <td>কুমিল্লা টাওয়ার হাসপাতাল, কান্দিরপাড়, কুমিল্লা সদর, কুমিল্লা।</td>
          <td> </td>
          <td>1822885698</td>
          <td>1</td>
          <td>Lenevo Headphone (HE05X)</td>
          <td>499</td>
          <td> </td>
          <td>Delivered</td>
          <td>150</td>
          <td>RedX</td>
          <td>
            Chat with customer via what's app and fb messanger then confirm the
            order.
          </td>
          <td>Talk with Customer and confirmed it</td>
          <td> </td>
          <td> </td>
          <td>10</td>
          <td>5</td>
          <td>334</td>
          <button>Update</button>
          <button>Delete</button>
        </tr>
        <tr>
          <td>Berglunds snabbköp</td>
          <td>Christina Berglund</td>
          <td>Sweden</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
      </table>
    </div>
  );
}
export default Body;
