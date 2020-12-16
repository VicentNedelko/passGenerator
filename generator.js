function generate() {

    let password = "";
    let length = document.getElementById("length").value;
    let lowercase = document.getElementById("lowercase").checked;
    let uppercase = document.getElementById("uppercase").checked;
    let symbol = document.getElementById("symbols").checked;
    let number = document.getElementById("numbers").checked;

    if(!lowercase && !uppercase && !symbol && !number)
    {
        return;
    }

    function GetFuncNumber()
    {
        return getRandomInt(1, 4);
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
      }
}