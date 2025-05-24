import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
  Image,
} from "@react-pdf/renderer";

import logo from "../assets/renepho.jpg";
import { PDFViewer } from '@react-pdf/renderer';

const formatHsnCode = (value) => {
  const parts = []; // Array to hold the formatted parts
  const chunkSize = 8; // Set chunk size to 4

  // Split the value into parts of 4 characters
  for (let i = 0; i < value.length; i += chunkSize) {
    parts.push(value.slice(i, i + chunkSize)); // Push each part to the array
  }

  // Return formatted text without any hyphen or additional characters
  return parts.map((part, index) => (
    <Text key={index}>
      {part}
      {index < parts.length - 1 && <Text>{"\n"}</Text>}{" "}
      {/* Add line break except for the last part */}
    </Text>
  ));
};

// Define styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFF",
    color: "#000",
    padding: 20,
  },

  flex: {
    flex: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  logo: {
    width: 170,
    height: 50,
    marginRight: 10,
    marginTop: -3,
  },
  companyDetail: {
    fontSize: 11,
    textAlign: "right",
  },
  companyDetailSmall: {
    fontSize: 10,
    textAlign: "right",
  },
  dateDetailSmall: {
    fontSize: 10,
    textAlign: "left",
  },
  boldHeading: {
    fontSize: 10,
    textAlign: "left",
    fontWeight: "bold",
    marginBottom: 6,
  },
  bodyFont: {
    fontSize: 10,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  footLine: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginBottom: 4,
  },
  heading: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  footer: {
    position: "absolute",
    bottom: 10,
    width: "100%",
    textAlign: "center",
    fontSize: 10,
  },
  section: {
    marginVertical: 10,
    marginLeft: 3,
  },
  summary: {
    marginLeft: "auto",
    width: "30%",
    marginTop: 10,
    marginRight: 3,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 2,
    borderTopWidth: 1,
    borderTopColor: "#000",
  },
  summaryLabel: {
    fontSize: 10,
    fontWeight: "bold",
  },
  summaryValue: {
    fontSize: 10,
  },
  amountInWords: {
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "right",
    marginTop: 10,
  },
  signatureCont: {
    marginTop: 10,
    marginRight: 3,
  },
  signatureImg: {
    width: 70,
    height: 70,
    marginLeft: "auto",
    marginTop: 5,
    marginBottom: 5,
  },
  font12: {
    fontSize: 11,
  },
  font11: {
    fontSize: 11,
  },
  font10: {
    fontSize: 10,
  },
  font9: {
    fontSize: 9,
  },
  test: {
    textAlign: "center", // 'center' should be in quotes
    fontSize: "8px", // Specify the unit for font size
    width: "100%",
    wordWrap: "break-word", // Corrected value for word-wrap
  },
  font8: {
    fontSize: 8,
  },
  paddingY4: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  paddingY3: {
    paddingTop: 3,
    paddingBottom: 3,
  },
  paddingY2: {
    paddingTop: 2,
    paddingBottom: 2,
  },
  paddingY1: {
    paddingTop: 1,
    paddingBottom: 1,
  },

  underline: {
    position: "absolute",
    bottom: -1, // Adjust this to move the underline up or down
    left: 0,
    right: 0,
    height: 1, // Thickness of the underline
    backgroundColor: "#000",
    width: "100%",
  },

  table: {
    display: "table",
    width: "100%",
    marginBottom: 20,
    borderWidth: 1, // Adds border around the entire table
    borderBottom: 0,
    borderColor: "#000",
  },

  tableHeader: {
    flexDirection: "row",
    color: "#000",
    textAlign: "left",
    padding: 2,
    borderBottomWidth: 1, // Adds bottom border for header row
    borderColor: "#000",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1, // Adds bottom border for each row
    borderColor: "#000",
  },
  tableCellHeader: {
    padding: 5,
    fontWeight: "bold",
    fontSize: 10,
    textAlign: "center",
    // borderTopWidth: 1, // Adds top border for header cells
    borderRightWidth: 1, // Adds right border for header cells

    borderColor: "#000",
    marginBottom: "-2px",
  },
  tableCell: {
    padding: 5,
    fontSize: 10,
    textAlign: "center",
    // borderLeftWidth: 1, // Adds right border for table cells
    // borderColor: "#000",
  },

});

// Create the PDF document

const stylesNitin = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between", // Pushes content to the right
    alignItems: "center",
    padding: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  detailsContainer: {
    textAlign: "right", // Aligns text to the right
  },
  details: {
    fontSize: 11,

  },
  logo: {
    width: 50, // Adjust logo size
    height: 50,
  },
  text: {
    marginTop: 30,
    fontSize: 11, // Text size
  },
  table: {
    display: 'flex',
    flexDirection: 'column',
    margin: 7,
    border: '1px solid black',
    marginTop: '20px',
    marginLeft: 20,
    marginRight: 20,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    // borderBottom: '1px solid black', // Border between rows
  },
  cell: {
    fontSize: 12,
    textAlign: 'center', // Center text in cells
    padding: 5,
  },
  cellName: {
    fontSize: 12,
    textAlign: 'center', // Center text in cells
    padding: 20,
  },
  header: {
    fontWeight: 'bold',
    borderBottom: '1px solid black',
  },
  descriptionCell: {
    width: '80%', // 80% width for Description column
    // borderRight: '2px solid black',
  },
  amountCell: {
    width: '20%', // 20% width for Amount by column
  },
});


// Component to download the PDF
const BillPDF = ({
  invoiceNO,
  amount,
  description,
  status,
  receivedFrom,
  textAmount,
  date,
  time,
  patientName,
  ipNumber
}) => {
  return (
    // <PDFViewer style={{width:"100%",height:"100%"}}>
    <Document>

      <Page size="A4" style={styles.page}>

        <View style={styles.header}>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "70%",
              position: "relative",
            }}
          >
            <Image src={logo} style={styles.logo} />
          </View>
          <View
            style={{
              width: "30%",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <View style={{ position: "relative", top: 10 }}>
              <Text
                style={{
                  fontSize: 11,
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >

                Receipt No :- {invoiceNO}{"\n"}
                Date :- {date}{"\n"}
                Time :- {time}{"\n"}
              </Text>
            </View>
          </View>
        </View>

        <View style={{ width: "100%", flexDirection: "column", alignItems: "flex-start" }}>
          <Text style={{ fontSize: 11, lineHeight: 1.5 }}>
            B B Braun Avitum Dialysis Centre
          </Text>
          <Text style={{ fontSize: 11, lineHeight: 1.5 }}>
            SHARING EXPERTISE DISTRICT HOSPITAL-BUXAR
          </Text>
          <Text style={{ fontSize: 11, lineHeight: 1.5 }}>
            DISTRICT HOSPITAL CAMPUS, JAIL ROAD, BUXAR
          </Text>
          <Text style={{ fontSize: 11, lineHeight: 1.5 }}>
            BIHAR 802101
          </Text>
        </View>

        <View style={{ marginTop: "10px", marginBottom: "5px" }}>
          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              display: "flex",
              fontWeight: "700",
            }}
          >
            Cash Receipt
          </Text>
        </View>

        <View style={styles.line} />

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "90%",
            margin: "0 auto",
            marginTop: "30px",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "25%" }}>
            <Text
              style={{
                width: "100%",
                fontSize: 11,
                textAlign: "right",
                paddingRight: "10px",
                marginBottom: "2px",
              }}
            >

              Received from Mr/Mrs :
            </Text>
          </View>
          <View
            style={{
              width: "75%",
              borderBottomWidth: 1,
              borderColor: "#000",
            }}
          >
            <Text
              style={{
                width: "100%",
                fontSize: 11,
                textAlign: "left",
                marginBottom: "2px",
              }}
            >
              {receivedFrom}
            </Text>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "90%",
            margin: "0 auto",
            marginTop: "80px",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "25%" }}>
            <Text
              style={{
                width: "100%",
                fontSize: 11,
                textAlign: "right",
                paddingRight: "10px",
                marginBottom: "2px",
              }}
            >
              Receipt To :
            </Text>
          </View>
          <View
            style={{
              width: "75%",
              borderBottomWidth: 1,
              borderColor: "#000",
            }}
          >
            <Text
              style={{
                width: "100%",
                fontSize: 11,
                textAlign: "left",
                marginBottom: "2px",
              }}
            >
              {patientName}
            </Text>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "90%",
            margin: "0 auto",
            marginTop: "20px",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "25%" }}>
            <Text
              style={{
                width: "100%",
                fontSize: 11,
                textAlign: "right",
                paddingRight: "10px",
                marginBottom: "2px",
              }}
            >
              Amount Received Rs. :
            </Text>
          </View>
          <View
            style={{
              width: "75%",
              borderBottomWidth: 1,
              borderColor: "#000",
            }}
          >
            <Text
              style={{
                width: "100%",
                fontSize: 11,
                textAlign: "left",
                marginBottom: "2px",
              }}
            >
              {amount} /-
            </Text>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "90%",
            margin: "0 auto",
            marginTop: "5px",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "25%" }}>
            <Text
              style={{
                width: "100%",
                fontSize: 11,
                textAlign: "left",
                marginBottom: "2px",
              }}
            >
            </Text>
          </View>
          <View style={{ width: "75%" }}>
            <Text
              style={{
                width: "100%",
                fontSize: 11,
                textAlign: "left",
                marginBottom: "10px",
              }}
            >
              Rupees {textAmount}
            </Text>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "90%",
            margin: "0 auto",
            marginTop: "50px",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "65%" }}>
            <Text
              style={{
                width: "100%",
                fontSize: 11,
                textAlign: "left",
                marginBottom: "10px",
              }}
            ></Text>
          </View>
          <View style={{ width: "35%" }}>
            <Text
              style={{
                width: "100%",
                fontSize: 11,
                textAlign: "right",
                marginBottom: "10px",
              }}
            >
              BY RENEPHO MEDICAL PVT. LTD
            </Text>
          </View>
        </View>
      </Page>

      <Page size="A4" style={stylesNitin.page}>

        {/* Header Code  */}
        <View style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: "100%",
          position: "relative",
          paddingLeft: 30,
        }}
        >
          {/* Logo Section */}
          <Image
            src={logo}
            style={{
              width: "30%",
              marginBottom: 20,
              marginTop: 20,
            }}
          />
          {/* Text Section */}
          <View style={{ lineHeight: 1 }}
          >
            <Text style={[stylesNitin.details]}>B B Braun Avitum Dialysis Centre</Text>
            <Text style={[stylesNitin.details]}>SHARING EXPERTISE DISTRICT HOSPITAL-BUXAR</Text>
            <Text style={[stylesNitin.details]}>DISTRICT HOSPITAL CAMPUS, JAIL ROAD, BUXAR</Text>
            <Text style={[stylesNitin.details]}>BIHAR 802101</Text>
            <Text style={[stylesNitin.details]}>PH NO: [Phone Number]</Text>
          </View>
        </View>

        <View style={{ alignItems: "center", marginTop: 8, marginBottom: "-30px" }}>
          <Text>Invoice</Text>
          <View style={{ width: "50%", height: 1, backgroundColor: 'black', marginTop: 4 }} />
        </View>

        {/* Center Text Invoice No */}
        <View style={{
          width: "100%",
          alignItems: 'flex-end',  // Aligns the text to the right side
          marginTop: 60,
          paddingRight: 20,
          fontSize: 11,
          paddingLeft: 30,
          flexDirection: 'column',  // Ensures the text is stacked vertically
          // backgroundColor: '#f0f0f0',
          // justifyContent: "flex-start",
          // alignItems: "flex-start",
        }}>
          <Text style={{ lineHeight: 1 }}>Invoice No: {invoiceNO}</Text>
          <Text style={{ lineHeight: 1 }}>Ip/No: {ipNumber}</Text>
          <Text style={{ lineHeight: 1 }}>Date: {date}</Text>
        </View>


        {/* Description Amount by */}
        <View style={stylesNitin.table}>
          {/* <View style={[stylesNitin.row, stylesNitin.header]}>
            <Text style={[stylesNitin.cell, stylesNitin.descriptionCell]}>Description</Text>
            <Text style={[stylesNitin.cell, stylesNitin.amountCell]}>Amount by</Text>
          </View> */}

          {[...Array(1)].map((_, index) => (
            <View style={stylesNitin.row} key={index}>
              <View style={[stylesNitin.descriptionCell, { marginTop: "3px" }]} >
                <View style={{ display: 'flex', flexDirection: 'column', paddingVertical: 5 }}>
                  <View style={{ display: 'flex', flexDirection: 'row', alignItems: "center", paddingVertical: 5 }}>
                    <Text style={{ marginRight: 5, marginLeft: "10px", fontSize: 12 }}>Name :</Text>
                    <Text style={{ marginRight: 5, marginLeft: "10px", fontSize: 12 }}>Mr. {patientName}</Text>
                  </View>
                  <View style={{ display: 'flex', flexDirection: 'row', alignItems: "center", paddingVertical: 5 }}>
                    <Text style={{ marginRight: 7, marginLeft: "15px", fontSize: 12 }}>Date:</Text>
                    <Text style={{ marginRight: 7, marginLeft: "9px", fontSize: 12 }}>{date}</Text>
                  </View>
                </View>

                <View style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: "space-between",
                  borderColor: "black",
                  borderTopWidth: 1,
                  borderRightWidth: 1,
                  paddingBottom: 3,
                }}>
                  {/* <Text style={{ fontSize: 12, marginLeft: 20, marginTop: 10, }}>Date</Text> */}
                  <Text style={{ fontSize: 12, marginLeft: 20, marginTop: 10, }}>Item</Text>
                  <Text style={{ fontSize: 12, marginLeft: 20, marginTop: 10, marginRight: 5, }}>Qty</Text>
                </View>

                <View style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: "space-between",
                  borderColor: "black",
                  borderTopWidth: 1,
                  borderRightWidth: 1,
                  paddingBottom: 1,
                }}>
                  {/* <Text style={{ fontSize: 12, marginLeft: 20, marginTop: 12 }}>{date}</Text> */}
                  <Text style={{ fontSize: 12, marginLeft: 20, marginTop: 12 }}>Hemodialysis</Text>
                  <Text style={{ fontSize: 12, marginLeft: 20, marginTop: 12, marginRight: 5, }}>1.00</Text>
                </View>

                <View style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: "flex-end",
                  borderTopWidth: 1,
                  borderRightWidth: 1,
                  borderColor: "black",
                }}>
                  <Text style={{
                    fontSize: 12,
                    marginLeft: 20,
                    marginTop: 12,
                    fontWeight: "blod",
                    marginRight: 5
                  }}
                  >Amount Paid</Text>
                </View>

                <View style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: "flex-end",
                  borderTopWidth: 1,
                  borderRightWidth: 1,
                  borderColor: "black"
                }}>
                  <Text style={{
                    fontSize: 12,
                    marginLeft: 20,
                    marginTop: 12,
                    fontWeight: "bold",
                    marginRight: 5
                  }}
                  >Total Dues</Text>
                </View>
              </View>
              <View style={{ display: 'flex', flexDirection: 'column', marginTop: "2px" }}>
                <View style={{
                  borderTopWidth: 1,
                  borderTopColor: "black",
                  borderBottomWidth: 1,
                  borderBottomColor: "black",
                  width: 115,
                  marginTop: 57,
                  paddingBottom: 0,
                }}>
                  <Text style={{ fontSize: 13, marginTop: 9, marginLeft: 2, height: "16.8px" }}>Patient</Text>
                </View>
                <View style={{
                  borderBottomWidth: 1,
                  borderBottomColor: "black",
                  width: 115,
                  paddingBottom: 0
                }}>
                  <Text style={{ fontSize: 11, marginTop: 9, marginLeft: 2, height: "16.8px" }}>{amount}</Text>
                </View>
                <View style={{
                  borderBottomWidth: 1,
                  borderBottomColor: "black",
                  width: 115,
                  paddingBottom: 0
                }}>
                  <Text style={{ fontSize: 11, marginTop: 9, marginLeft: 2, height: "16.8px" }}>{amount} </Text>
                </View>
                <View style={{
                  width: 115,
                  paddingBottom: 0
                }}>
                  <Text style={{ fontSize: 11, marginTop: 9, marginLeft: 2, height: "16.8px", }}>0</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
    // </PDFViewer>
  );
}

export default BillPDF;
