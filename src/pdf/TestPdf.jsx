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

// Define styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFF",
    color: "#000",
    padding: 20,
    border: 1,
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
  //   table: {
  //     display: "table",
  //     width: "100%",
  //     // borderStyle: "solid",
  //     // borderColor: "#000",
  //     // borderWidth: 1,
  //     borderTopStyle: "solid",
  //     borderTopColor: "#000",
  //     borderTopWidth: 1,
  //     marginBottom: 20,
  //     // marginTop: 20,
  //   },
  //   tableHeader: {
  //     flexDirection: "row",
  //     backgroundColor: "#008c38",
  //     color: "#fff",
  //     fontWeight: "bold",
  //     textAlign: "left",
  //     borderBottomWidth: 1,
  //     borderBottomColor: "#000",
  //     padding: 2,
  //   },
  //   tableRow: {
  //     flexDirection: "row",
  //     borderBottomWidth: 1,
  //     borderBottomColor: "#000",
  //   },
  //   tableCell: {
  //     flex: 1,
  //     padding: 2,
  //     textAlign: "left",
  //     fontSize: 10,
  //   },
  //   tableCellHeader: {
  //     flex: 1,
  //     padding: 2,
  //     textAlign: "left",
  //     fontWeight: "bold",
  //     fontSize: 10,
  //   },
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
  mainCont: {
    border: 1,
    padding: 5,
    paddingTop: 0,
  },
});

// Create the PDF document
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.mainCont}>
        <View style={styles.header}>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "70%",
              position: "relative",
              marginTop: "10px",
            }}
          >
            <Image src={logo} style={styles.logo} />
          </View>
          <View
            style={{
              width: "36%",
              display: "flex",
              justifyContent: "flex-start",
              paddingBottom: 3,
              paddingLeft: 4,
              // border: 1,
              // borderColor: "#000",
              // borderTop: 0,
              // borderRight: 0,
            }}
          >
            <View style={{ position: "relative", top: 10 }}>
              <Text
                style={{
                  fontSize: 11,
                  textAlign: "right",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                GSTIN : 07AAXCS5699B1
                {"\n"}
                PAN No. : AAXCS5699B1{"\n"}
                TAN No. : AAXCS5699B1
                {"\n"}
              </Text>
            </View>
          </View>
        </View>

        <View style={{}}>
          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              display: "flex",
              fontWeight: "900",
              paddingVertical: "4px",
              borderTop: 1,
              borderBottom: 1,
            }}
          >
            Performa Invoice
          </Text>
        </View>

        {/* Supplier row */}
        <View style={{ display: "flex", flexDirection: "row", border: 1, borderTop: 0 }}>
          <View style={{ width: "50%", borderRight: 1, padding: "2px" }}>
            <Text style={{ fontSize: "12px" }}>Supplier :</Text>
            <Text style={{ fontSize: "11px" }}>
              SANSCRITI ELECTRIC INDIA PRIVATE LIMITED Plot No. 111/11, Basant
              Vihar, Street No. 14 Basant Vihar, Karnal - 132001 {"\n"}
              E-mail:- varun@gmail.com {"\n"}
              Contact No : 8860442230
            </Text>
          </View>
          <View style={{ width: "50%" }}>
            <View style={{ display: 'flex', flexDirection: 'row', borderBottom: 1 }}>
              <View style={{ width: "50%" }}>
                <Text style={{ fontSize: "11px", padding: '2px', paddingHorizontal: '2px' }}>P.I. No.</Text>
              </View>
              <View style={{ width: "50%", borderLeft: 1 }}>
                <Text style={{ fontSize: "11px", padding: '2px', paddingHorizontal: '2px' }}>Dated</Text>
              </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', borderBottom: 1 }}>
              <View style={{ width: "50%" }}>
                <Text style={{ fontSize: "10px", padding: '2px', paddingHorizontal: '2px' }}>SEIPL/DEL/PI/23-24</Text>
              </View>
              <View style={{ width: "50%", borderLeft: 1 }}>
                <Text style={{ fontSize: "10px", padding: '2px', paddingHorizontal: '2px' }}></Text>
              </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', borderBottom: 1 }}>
              <View style={{ width: "50%" }}>
                <Text style={{ fontSize: "11px", padding: '2px', paddingHorizontal: '2px' }}>Buyer's Order No.</Text>
              </View>
              <View style={{ width: "50%", borderLeft: 1 }}>
                <Text style={{ fontSize: "11px", padding: '2px', paddingHorizontal: '2px' }}>Mode/Terms of Payment</Text>
              </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', borderBottom: 1 }}>
              <View style={{ width: "50%" }}>
                <Text style={{ fontSize: "10px", padding: '2px', paddingHorizontal: '2px' }}></Text>
              </View>
              <View style={{ width: "50%", borderLeft: 1 }}>
                <Text style={{ fontSize: "10px", padding: '2px', paddingHorizontal: '2px' }}>NEFT/Advance</Text>
              </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', borderBottom: 1 }}>
              <View style={{ width: "50%" }}>
                <Text style={{ fontSize: "11px", padding: '2px', paddingHorizontal: '2px' }}>Supplier's Ref</Text>
              </View>
              <View style={{ width: "50%", borderLeft: 1 }}>
                <Text style={{ fontSize: "11px", padding: '2px', paddingHorizontal: '2px' }}>Vehicle No.</Text>
              </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', borderBottom: 1 }}>
              <View style={{ width: "50%" }}>
                <Text style={{ fontSize: "10px", padding: '2px', paddingHorizontal: '2px' }}>Test</Text>
              </View>
              <View style={{ width: "50%", borderLeft: 1 }}>
                <Text style={{ fontSize: "10px", padding: '2px', paddingHorizontal: '2px' }}>Test</Text>
              </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <View style={{ width: "50%" }}>
                <Text style={{ fontSize: "11px", padding: '2px', paddingHorizontal: '2px' }}>Reverse Charge </Text>
              </View>
              <View style={{ width: "50%", borderLeft: 1 }}>
                <Text style={{ fontSize: "10px", padding: '2px', paddingHorizontal: '2px' }}>Yes/No</Text>
              </View>
            </View>
          </View>
        </View>


        {/* Buyer row*/}
        <View style={{ display: "flex", flexDirection: "row", border: 1, borderTop: 0 }}>
          <View style={{ width: "50%", borderRight: 1, padding: "2px" }}>
            <Text style={{ fontSize: "12px" }}>Buyer (Invoiced to):</Text>
            {/* name row */}
            <View >
              <Text style={{ width: '50%', fontSize: '11px' }}>Name :</Text>
            </View>
            <View >
              <Text style={{ width: '50%', fontSize: '11px' }}>Address :</Text>
            </View>
            <View >
              <Text style={{ width: '50%', fontSize: '11px' }}>GSTIN :</Text>
            </View>
            <View >
              <Text style={{ width: '50%', fontSize: '11px' }}>PAN :</Text>
            </View>
            <View >
              <Text style={{ width: '50%', fontSize: '11px' }}>Contact No. :</Text>
            </View>
            <View >
              <Text style={{ width: '50%', fontSize: '11px' }}>Email ID :</Text>
            </View>

          </View>
          <View style={{ width: "50%", padding: "2px" }}>
            <Text style={{ fontSize: "12px" }}>Buyer (Shipped to):</Text>
            {/* name row */}
            <View >
              <Text style={{ width: '50%', fontSize: '11px' }}>Name :</Text>
            </View>
            <View >
              <Text style={{ width: '50%', fontSize: '11px' }}>Address :</Text>
            </View>
            <View >
              <Text style={{ width: '50%', fontSize: '11px' }}>GSTIN :</Text>
            </View>
            <View >
              <Text style={{ width: '50%', fontSize: '11px' }}>PAN :</Text>
            </View>
            <View >
              <Text style={{ width: '50%', fontSize: '11px' }}>Contact No. :</Text>
            </View>
            <View >
              <Text style={{ width: '50%', fontSize: '11px' }}>Email ID :</Text>
            </View>

          </View>
        </View>

        <View
          style={{
            minHeight: "300px",
            border: 1,
            borderTop: 0,
            borderColor: "#000",
          }}
        >

          {/* table header row  */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <Text
              style={{
                width: "35px",
                fontSize: "11px",
                borderRight: 1,
                textAlign: "center",
                borderLeft: 0,
                borderBottom: 1,
                paddingTop: "3px",
                paddingBottom: "3px",
              }}
            >
              S.No.
            </Text>
            <Text
              style={{
                width: "144.6px",
                fontSize: "11px",
                borderRight: 1,
                textAlign: "center",
                borderBottom: 1,
                padding: '3px',
              }}
            >
              Description of {"\n"}Goods/Services
            </Text>
            <Text
              style={{
                width: "60px",
                fontSize: "11px",
                borderRight: 1,
                textAlign: "center",
                borderBottom: 1,
                paddingTop: "3px",
                paddingBottom: "3px",
              }}
            >
              HSN/SAC Code
            </Text>
            <Text
              style={{
                width: "30px",
                fontSize: "11px",
                borderRight: 1,
                textAlign: "center",
                borderBottom: 1,
                paddingTop: "3px",
                paddingBottom: "3px",
              }}
            >
              Qty.
            </Text>
            <Text
              style={{
                width: "60px",
                fontSize: "11px",
                textAlign: "center",
                paddingHorizontal: "2px",
                borderBottom: 1,
                borderRight: 1,
                paddingTop: "3px",
                paddingBottom: "3px",
              }}
            >
              List Price
            </Text>
            <Text
              style={{
                width: "50px",
                fontSize: "11px",
                borderRight: 1,
                textAlign: "center",
                paddingHorizontal: "2px",
                borderBottom: 1,
                paddingTop: "3px",
                paddingBottom: "3px",
              }}
            >
              Disc %
            </Text>
            <Text
              style={{
                width: "60px",
                fontSize: "11px",
                borderRight: 1,
                textAlign: "center",
                paddingHorizontal: "2px",
                borderBottom: 1,
                paddingTop: "3px",
                paddingBottom: "3px",
              }}
            >
              Net Rate
            </Text>
            <Text
              style={{
                width: "100px",
                fontSize: "11px",
                borderRight: 0,
                textAlign: "center",
                paddingHorizontal: "2px",
                borderBottom: 1,
                padding: "3px",
              }}
            >
              Total Amount(INR)
            </Text>
          </View>

          {/* dummy space in table  */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <Text
              style={{
                width: "35px",
                fontSize: "11px",
                borderRight: 1,
                textAlign: "center",
                borderLeft: 0,
                borderBottom: 1,
                paddingTop: "3px",
                paddingBottom: "3px",
                minHeight: '270px'
              }}
            >

            </Text>
            <Text
              style={{
                width: "144.6px",
                fontSize: "11px",
                borderRight: 1,
                textAlign: "center",
                borderBottom: 1,
                padding: '3px',
                minHeight: '270px'
              }}
            >

            </Text>
            <Text
              style={{
                width: "60px",
                fontSize: "11px",
                borderRight: 1,
                textAlign: "center",
                borderBottom: 1,
                paddingTop: "3px",
                paddingBottom: "3px",
                minHeight: '270px'
              }}
            >

            </Text>
            <Text
              style={{
                width: "30px",
                fontSize: "11px",
                borderRight: 1,
                textAlign: "center",
                borderBottom: 1,
                paddingTop: "3px",
                paddingBottom: "3px",
                minHeight: '270px'
              }}
            >

            </Text>
            <Text
              style={{
                width: "60px",
                fontSize: "11px",
                textAlign: "center",
                paddingHorizontal: "2px",
                borderBottom: 1,
                borderRight: 1,
                paddingTop: "3px",
                paddingBottom: "3px",
                minHeight: '270px'
              }}
            >

            </Text>
            <Text
              style={{
                width: "50px",
                fontSize: "11px",
                borderRight: 1,
                textAlign: "center",
                paddingHorizontal: "2px",
                borderBottom: 1,
                paddingTop: "3px",
                paddingBottom: "3px",
                minHeight: '270px'
              }}
            >

            </Text>
            <Text
              style={{
                width: "60px",
                fontSize: "11px",
                borderRight: 1,
                textAlign: "center",
                paddingHorizontal: "2px",
                borderBottom: 1,
                paddingTop: "3px",
                paddingBottom: "3px",
                minHeight: '270px'
              }}
            >

            </Text>
            <Text
              style={{
                width: "100px",
                fontSize: "11px",
                borderRight: 0,
                textAlign: "center",
                paddingHorizontal: "2px",
                borderBottom: 1,
                padding: "3px",
                minHeight: '270px'
              }}
            >
            </Text>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Text
            style={{
              width: "379.6px",
              fontSize: "11px",
              borderRight: 1,
              textAlign: "right",
              borderLeft: 0,
              borderBottom: 1,
              paddingTop: "3px",
              paddingBottom: "3px",
              paddingRight: "3px"
            }}
          >
            Total Amount (Before GST)
          </Text>
          <Text
            style={{
              width: "60px",
              fontSize: "11px",
              borderRight: 1,
              textAlign: "left",
              paddingHorizontal: "2px",
              borderBottom: 1,
              paddingTop: "3px",
              paddingBottom: "3px",
            }}
          >
            0
          </Text>
          <Text
            style={{
              width: "100px",
              fontSize: "11px",
              borderRight: 0,
              textAlign: "right",
              paddingHorizontal: "2px",
              borderBottom: 1,
              padding: "3px",
            }}
          >
            0.00
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Text
            style={{
              width: "379.6px",
              fontSize: "11px",
              borderRight: 1,
              textAlign: "right",
              borderLeft: 0,
              borderBottom: 1,
              paddingTop: "3px",
              paddingBottom: "3px",
              paddingRight: "3px"
            }}
          >
            Add: CGST
          </Text>
          <Text
            style={{
              width: "60px",
              fontSize: "11px",
              borderRight: 1,
              textAlign: "left",
              paddingHorizontal: "2px",
              borderBottom: 1,
              paddingTop: "3px",
              paddingBottom: "3px",
            }}
          >
            0
          </Text>
          <Text
            style={{
              width: "100px",
              fontSize: "11px",
              borderRight: 0,
              textAlign: "right",
              paddingHorizontal: "2px",
              borderBottom: 1,
              padding: "3px",
            }}
          >
            0.00
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Text
            style={{
              width: "379.6px",
              fontSize: "11px",
              borderRight: 1,
              textAlign: "right",
              borderLeft: 0,
              borderBottom: 1,
              paddingTop: "3px",
              paddingBottom: "3px",
              paddingRight: "3px"
            }}
          >
            Add: SGST
          </Text>
          <Text
            style={{
              width: "60px",
              fontSize: "11px",
              borderRight: 1,
              textAlign: "left",
              paddingHorizontal: "2px",
              borderBottom: 1,
              paddingTop: "3px",
              paddingBottom: "3px",
            }}
          >
            0
          </Text>
          <Text
            style={{
              width: "100px",
              fontSize: "11px",
              borderRight: 0,
              textAlign: "right",
              paddingHorizontal: "2px",
              borderBottom: 1,
              padding: "3px",
            }}
          >
            0.00
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Text
            style={{
              width: "379.6px",
              fontSize: "11px",
              borderRight: 1,
              textAlign: "right",
              borderLeft: 0,
              borderBottom: 1,
              paddingTop: "3px",
              paddingBottom: "3px",
              paddingRight: "3px"
            }}
          >
            Add: IGST
          </Text>
          <Text
            style={{
              width: "60px",
              fontSize: "11px",
              borderRight: 1,
              textAlign: "left",
              paddingHorizontal: "2px",
              borderBottom: 1,
              paddingTop: "3px",
              paddingBottom: "3px",
            }}
          >
            0
          </Text>
          <Text
            style={{
              width: "100px",
              fontSize: "11px",
              borderRight: 0,
              textAlign: "right",
              paddingHorizontal: "2px",
              borderBottom: 1,
              padding: "3px",
            }}
          >
            0.00
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Text
            style={{
              width: "379.6px",
              fontSize: "11px",
              borderRight: 1,
              textAlign: "right",
              borderLeft: 0,
              borderBottom: 1,
              paddingTop: "3px",
              paddingBottom: "3px",
              paddingRight: "3px"
            }}
          >
            Total Tax (GST)
          </Text>
          <Text
            style={{
              width: "60px",
              fontSize: "11px",
              borderRight: 1,
              textAlign: "left",
              paddingHorizontal: "2px",
              borderBottom: 1,
              paddingTop: "3px",
              paddingBottom: "3px",
            }}
          >
            0
          </Text>
          <Text
            style={{
              width: "100px",
              fontSize: "11px",
              borderRight: 0,
              textAlign: "right",
              paddingHorizontal: "2px",
              borderBottom: 1,
              padding: "3px",
            }}
          >
            0.00
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Text
            style={{
              width: "439.6px",
              fontSize: "11px",
              borderRight: 1,
              textAlign: "right",
              borderLeft: 0,
              borderBottom: 1,
              paddingTop: "3px",
              paddingBottom: "3px",
              paddingRight: "3px"
            }}
          >
            Net Amount after GST (Round off)
          </Text>

          <Text
            style={{
              width: "100px",
              fontSize: "11px",
              borderRight: 0,
              textAlign: "right",
              paddingHorizontal: "2px",
              borderBottom: 1,
              padding: "3px",
            }}
          >
            0.00
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Text
            style={{
              width: "439.6px",
              fontSize: "11px",
              borderRight: 1,
              textAlign: "right",
              borderLeft: 0,
              borderBottom: 0,
              paddingTop: "3px",
              paddingBottom: "3px",
              paddingRight: "3px"
            }}
          >
            GST Payable on Reverse Charge
          </Text>

          <Text
            style={{
              width: "100px",
              fontSize: "11px",
              borderRight: 0,
              textAlign: "right",
              paddingHorizontal: "2px",
              borderBottom: 0,
              padding: "3px",
            }}
          >
            0.00
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Text
            style={{
              width: "100%",
              fontSize: "11px",
              borderRight: 0,
              textAlign: "left",
              borderLeft: 0,
              borderTop: 1,
              borderBottom: 0,
              padding: '3px',
            }}
          >
            Total Amount (In Words) -
          </Text>

        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Text
            style={{
              width: "100%",
              fontSize: "11px",
              borderTop: 1,
              textAlign: "left",
              borderLeft: 0,
              borderBottom: 0,
              padding: "3px",
            }}
          >
            Our Banker : {"\n"}
            ICICI Bank Limited , SCO 255-256 , Sector-12 , City Center, Karnal-132001 {"\n"}
            A/C No: 017305005669 , IFSC Code - ICIC0000173
          </Text>

        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            marginTop: '5px'
          }}
        >
          <Text
            style={{
              width: "100%",
              fontSize: "11px",
              borderTop: 0,
              textAlign: "left",
              borderLeft: 0,
              borderBottom: 1,
              padding: "3px",
            }}
          >E. & O.E.</Text>

        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            gap: '20px'
          }}
        >
          <View style={{ width: "50%", padding: '3px' }}>
            <Text style={{ fontSize: '12px' }}>Declaration:</Text>
            <Text style={{ fontSize: '9px' }}>1. Interest will be charged @24% Per Annum if the bill is not paid on presentation</Text>
            <Text style={{ fontSize: '9px' }}>2. Warranty shall be as per our standard terms of principal company.</Text>
            <Text style={{ fontSize: '9px' }}>3. This DOCUMENT/INVOICE is electronically  authorised no need of any  physical signature.</Text>
          </View>
          <View style={{ width: "50%", padding: '3px' }}>
            <Text style={{ fontSize: '9px', textAlign: 'center', marginBottom: '2px' }}>Certified that the particulars given above are true and correct.</Text>
            <Text style={{ fontSize: '11px', textAlign: 'center' }}>SANSCRITI ELECTRIC INDIA PRIVATE LIMITED</Text>
            <Text style={{ fontSize: '9px', textAlign: 'center', marginTop: '40px' }}>Authorised Signatory</Text>

          </View>

        </View>

        <View style={{ padding: '3px', paddingHorizontal: '10px', width: "100%", borderTop: 1, }}>
          <Text style={{ fontSize: '9px', textAlign: 'center' }}>
            Deals in LV & HT Switchgears, Drives, PLC spares of Schneider, Siemens, ABB, L&T, Areva,Alstom, Kirloskar, CG, C&S, GE, & Eaton (Moeller, Cutler Hammer, Westinghouse) Retrofitting of LT & HT Switchgear, Bus Bar Modification, soft-starter, motor feeder, APFC Panel, Intelligent motor feeder, PCC Panel, MCC Panel, etc.
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);

// Component to download the PDF
const TestPdf = () => (
  <div>
    {/* <h1>Generate and Download PDF</h1> */}
    <PDFDownloadLink document={<MyDocument />} fileName="basic_document.pdf">
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : "Test PDF"
      }
    </PDFDownloadLink>
  </div>
);

export default TestPdf;
