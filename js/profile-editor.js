document.getElementById('editButton').addEventListener("input",function(event) {
  var input = event.target;
  var reader = new FileReader();
  reader.onload = function(){
        var dataURL = reader.result;
        var output = document.getElementById('img');
        output.src = dataURL;
        output.style.borderRadius = "50%";
      };
      reader.readAsDataURL(input.files[0]);
  });

  class studentData
  {
    constructor (fn,mn,ln,tn,bd,ad,qn,em)
    {
      this.FirstNAme = fn;
      this.MiddleNAme = mn;
      this.LastNAme = ln;
      this.TrackNAme = tn;
      this.Birthdate = bd;
      this.Address = ad;
      this.Qualification = qn;
      this.Email = em;
    }
  }

  var stdata;

document.getElementById('editedForm').addEventListener("click",function(event){
  event.preventDefault();
  var check = false;
  check = checkAllElements ();
  if (check == true)
  {
    var firstName = document.getElementById('firstName').value;
    var middleName = document.getElementById('middleName').value;
    var lastName = document.getElementById('lastName').value;
    var trackName = document.getElementById('trackName').value;
    var birthdate = document.getElementById('brithdateName').value;
    var address = document.getElementById('addressName').value;
    var qualification = document.getElementById('qualificationName').value;
    var email = document.getElementById('emailName').value;
    studentdata = new studentData (firstName,middleName,lastName,trackName,birthdate,address,qualification,email);
    stdata = studentdata;
    console.log(studentdata);
    document.getElementById('hello').textContent = studentdata.FirstNAme + " " + studentdata.MiddleNAme + " " + studentdata.LastNAme;
    document.getElementById('fullName').textContent = studentdata.FirstNAme + " " + studentdata.MiddleNAme + " " + studentdata.LastNAme;
    document.getElementById('track').textContent = studentdata.TrackNAme;
    document.getElementById('birthDate').textContent = studentdata.Birthdate;
    document.getElementById('Address').textContent = studentdata.Address;
    document.getElementById('qualification').textContent = "Bachelor of"+studentdata.Qualification;
    document.getElementById('email').textContent = studentdata.Email;
    document.getElementById('mainInfo').style.display = "block";
    document.getElementById('inputInfo').style.display = "none";
  }
})

function checkAllElements ()
{
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var trackName = document.getElementById('trackName').value;
  var birthdate = document.getElementById('brithdateName').value;
  var address = document.getElementById('addressName').value;
  var qualification = document.getElementById('qualificationName').value;
  var email = document.getElementById('emailName').value;
  if (firstName == "" || lastName == "" || trackName == "" || birthdate == "" || address == "" || qualification == "" || email == "")
  {
    document.getElementById('error').style.display = "block";
    if (firstName == "")
    {
      document.getElementById('1').textContent = "Enter The First Name";
    }else
    {
      document.getElementById('1').textContent = "";
    }
    if (lastName == "")
    {
      document.getElementById('2').textContent = "Enter The Last Name";
    }else
    {
      document.getElementById('2').textContent = "";
    }
    if (trackName == "")
    {
      document.getElementById('3').textContent = "Enter The Track Name";
    }else
    {
      document.getElementById('3').textContent = "";
    }
    if (birthdate == "")
    {
      document.getElementById('4').textContent = "Enter The BirthDate";
    }else
    {
      document.getElementById('4').textContent = "";
    }
    if (address == "")
    {
      document.getElementById('5').textContent = "Enter The Address";
    }else
    {
      document.getElementById('5').textContent = "";
    }
    if (qualification == "")
    {
      document.getElementById('6').textContent = "Enter The Qualification";
    }else
    {
      document.getElementById('6').textContent = "";
    }
    if (email == "")
    {
      document.getElementById('7').textContent = "Enter The Email Address";
    }else
    {
      document.getElementById('7').textContent = "";
    }
  }else
  {
    document.getElementById('error').style.display = "none";
    return true;
  }
}


  var checkID = false;
document.getElementById('studentId').addEventListener("click",function(){
  if (checkID === false)
  {
    document.getElementById('mainInfo').style.display = "none";
    document.getElementById('inputInfo').style.display = "block";
    checkID = true;
  }else
  {
    document.getElementById('mainInfo').style.display = "block";
    document.getElementById('inputInfo').style.display = "none";
    checkID = false;
  }
  

})