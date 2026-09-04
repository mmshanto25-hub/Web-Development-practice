class parent {
    assets1() {
        console.log("eta amar dadar assets")
    }
    assets2() {
        console.log("eta amar babar assets")
    }

}
class Ami extends parent {
    MyAssets() {
        super.assets1();
        super.assets2();
    }

}
// let MyAssets = new Ami();
// MyAssets.assets1();
// MyAssets.assets2();

let MyAssets = new Ami();
MyAssets.MyAssets()