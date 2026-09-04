// var YourNAme = "your name";
// var YourVillage ="Your Village";
// var ParentsName ="Mothers NAme";
// var PhoneNum = 01925878752;

// var MyInfo = { YourNAme: "eshan", YourVillage: "Natore", PhoneNum: 1925878752 }
// console.log(MyInfo)

// MyInfo.PhoneNum 
// console.log(MyInfo.YourNAme)
// var newPro = MyInfo["PhoneNum"]
// console.log(newPro)


function MyInfo(YourName, YourVillage, PhoneNum) {
    this.YourName = YourName;
    this.YourVillage = YourVillage;
    this.PhoneNum = PhoneNum;
    this.ShowMe = function () {
        console.log(this.YourName);
        console.log(this.YourVillage);
        console.log(this.PhoneNum);
    }
}

var NewObj = new MyInfo("Shanto", "Bhola", 1925878752);
var NewBal = new MyInfo("Shanto bhai", "Bhola lalmohan", 3108741925878752);
var NewSal = new MyInfo("Tamim", "Manikhganj", 546451925878752);
// console.log(NewObj.PhoneNum);
// console.log(NewBal.PhoneNum);
// console.log(NewSal.PhoneNum);

NewBal.ShowMe();
console.log("break");
NewObj.ShowMe();
console.log("break");
NewSal.ShowMe();