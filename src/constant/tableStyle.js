export const tableStyle = {
  headRow: {
    style: {
      background: "linear-gradient(to right, #29A6E0, #2E3494)",
      color: "#ffffff",
      fontWeight: "bold",
      fontSize: "14px",
      borderRadius: "5px",
      minHeight: "41px",
    },
  },
  rows: {
    style: {
      borderBottomStyle: "solid",
      borderBottomWidth: "1px",
      cursor: "pointer",
      "&:not(:last-of-type)": {
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
        borderBottomColor: "#29A6E0",
      },
    },
  },
};
