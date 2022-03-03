import styled from "styled-components";

export const TableStyle = styled.div`
  .styled-table {
    border-collapse: collapse;
    font-size: 15px;
    width: 90%;
    margin: 0 auto;
  }

  .styled-table thead tr {
    background-color: #333333;
    color: #ffffff;
  }

  .styled-table th,
  .styled-table td {
    padding: 12px 15px;
    text-align: center;
  }

  .styled-table tbody tr:nth-of-type(odd) {
    background-color: #ffffff;
  }

  .styled-table tbody tr:nth-of-type(even) {
    background-color: #f6f6f6;
  }

  .styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #333333;
  }

  .crud-icons {
    padding: 15px;
    width: 50px;
  }
  .delete-icon-span {
    cursor: pointer;
  }

  @media only screen and (max-width: 900px) {
    /* Force table to not be like tables anymore */
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    /* Hide table headers (but not display: none;, for accessibility) */
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr {
      border: 1px solid #ccc;
    }

    td {
      /* Behave  like a "row" */
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding-left: 50%;
    }

    td:before {
      /* Now like a table header */
      position: absolute;
      /* Top/left values mimic padding */
      top: 12px;
      left: -30px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
      font-weight: 700;
    }

    /*
	Label the data
	*/

    td:nth-of-type(1):before {
      content: "Name";
    }
    td:nth-of-type(2):before {
      content: "E-mail";
    }
    td:nth-of-type(3):before {
      content: "Contact";
    }
  }
`;
