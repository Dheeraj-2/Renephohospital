
export const columns = [
  {
    name: "S.No.",
    width: "80px",
    wrap: true,
    selector: (row, index) => index + 1,
    style: {
      padding: "10px 10px 10px 20px",
    },
  },
  {
    name: "Client Name",
    width: "200px",
    wrap: true,
    selector: (row) => row.name || "N/A",
    style: {
      padding: "10px",
    },
  },
  {
    name: "Email",
    width:"300px",
    wrap: true,
    selector: (row) => row.email || "N/A",
    style:{
        padding:"10px"
    }
  } ,
  {
    name: "Address",
    width:"200px",
    wrap: true,
    selector: (row) => row.address || "N/A",
    style:{
        padding:"10px"
    }
  } ,
  {
    name: "Phone",
    width:"200px",
    wrap: true,
    selector: (row) => row.mobile || "N/A",
    style:{
        padding:"10px"
    }
  },
  {
    name: "Profile",
    width:"200px",
    wrap: true,
    selector: (row) => row.profile || "N/A",
    style:{
        padding:"10px"
    }
  }
];

export const allPatientsColumn = [
  {
    name:'S.No.',
    width:"80px",
    selector : ( (row , index) => index+1 ),
    style: {
      padding: "10px 10px 10px 20px",
    },
  },
  {
    name:'Patient ID',
    width:"150px",
    wrap:true,
    selector : ( (row , index) => row.patientID ),
    style: {
      padding: "10px 10px 10px 20px",
    },
  },
  {
    selector: (row) => {
      const date = new Date(row.date);
      const day = String(date.getDate()).padStart(2, "0"); 
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      
      return `${day}-${month}-${year}`; // Format: DD-MM-YYYY
    },
    name: "Date",
  },
  {
    name:'Name',
    width:"180px",
    wrap:true,
    selector : ( (row , index) => row.name),
    style: {
      padding: "10px 10px 10px 20px",
    },
  } ,
  {
    name:'Email',
    width:"250px",
    wrap:true,
    selector : ( (row , index) => row.email ),
    style: {
      padding: "10px 10px 10px 20px",
    },
  },
  {
    name:'Address',
    width:"300px",
    wrap:true,
    selector : ( (row , index) => row.address ),
    style: {
      padding: "10px 10px 10px 20px",
    },
  },
  {
    name:'Mobile',
    width:"150px",
    wrap:true,
    selector : ( (row , index) => row.mobile ),
    style: {
      padding: "10px 10px 10px 20px",
    },
  },
  {
    name:'Ward',
    width:"150px",
    wrap:true,
    selector : ( (row , index) => row.ward),
    style: {
      padding: "10px 10px 10px 20px",
    },
  },
 

]
