const emp = [
  {
    id: 101,
    name: "Rahul Sharma",
    email: "rahul.sharma@gmail.com",
    address: "Pune, Maharashtra",
    contactNo: "9876543210",
    dob: "1998-05-14",
    joiningDate: "2023-01-10",
    department: "IT"
  },
  {
    id: 102,
    name: "Priya Patil",
    email: "priya.patil@gmail.com",
    address: "Mumbai, Maharashtra",
    contactNo: "9876501234",
    dob: "1997-08-22",
    joiningDate: "2022-11-15",
    department: "HR"
  },
  {
    id: 103,
    name: "Amit Joshi",
    email: "amit.joshi@gmail.com",
    address: "Nagpur, Maharashtra",
    contactNo: "9123456780",
    dob: "1996-12-05",
    joiningDate: "2021-07-01",
    department: "Finance"
  },
  {
    id: 104,
    name: "Sneha Kulkarni",
    email: "sneha.k@gmail.com",
    address: "Nashik, Maharashtra",
    contactNo: "9988776655",
    dob: "1999-03-18",
    joiningDate: "2024-02-20",
    department: "Marketing"
  },
  {
    id: 105,
    name: "Vikas More",
    email: "vikas.more@gmail.com",
    address: "Kolhapur, Maharashtra",
    contactNo: "9765432109",
    dob: "1995-10-30",
    joiningDate: "2020-09-12",
    department: "Sales"
  }
];

const getAllEmp = (req, res) => {
    try {
        res.status(200).send({
            employees: emp
        });
    } catch (error) {
        res.status(500).send({
            msg: "Server error"
        });
    }
};

const createEmp =(req,res)=>{
  try{
    const {name,email,address,contactNo,dob,joiningDate,department}
= req.body  

const newEmp ={
  id:Date.now(),
  name:name,
  email:email,
  address:address,
  contactNo:contactNo,
  dob:dob,
  joiningDate:joiningDate,
  department:department
}
emp.push(newEmp)
res.status(200).send({msg:"Emp Added Succesfully"})
    }
  
  catch(error) {
    res.status(500).send({msg:"Server Error"})
  }

  }


  // function deleteEmp(req,res) {
  //   const{ID} = req.params;
  //   try
  //     const index = emp.findindex((e)=> e.id ==id 
  //   }
    
  // }


module.exports = {
    getAllEmp,
    createEmp
};