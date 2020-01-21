let i=0,num,first=1;

if(first==1){
    myFunction(2);
}

function newgame(){
    i=0;
    first=0;
    num = Math.random()*100;
    num = Math.floor(num)+1;
    document.getElementById("numb").disabled = false;
    document.getElementById("button").disabled = false;
    myFunction(0);
    console.log(num);
}

function myFunction(n){
    let text;
    let key = document.getElementById("numb").value;
    if( n==1 ){
        if( i>=0 && i<=9 ){
            if( key>=1 && key<=100){
                if( key < num ){
                    text = "Too Low";
                    i++;
                    document.getElementById("ans").innerHTML = text;
                }
                else if ( key > num ){
                    text = "Too High";
                    i++;
                    document.getElementById("ans").innerHTML = text;
                }
                else if ( key == num ){
                    text = "Your Number is Correct!!!";
                    document.getElementById("ans").innerHTML = "";
                    document.getElementById("ans1").innerHTML = text;
                    document.getElementById("numb").disabled = true;
                    document.getElementById("button").disabled = true;
                    main = 0;
                    console.log(main);
                }
                
                document.getElementById("preans").innerHTML = "Previous guesses : " + key;
                //document.getElementById("ans").innerHTML = text;
                document.getElementById("turn").innerHTML ="You have life : " + (10-i);
            }
            else{
                text = "Please guess between 1-100";
                document.getElementById("ans").innerHTML = text;
            }
        }
        if( i==10 ){
            document.getElementById("ans").innerHTML = "Game Over";
            document.getElementById("numb").disabled = true;
            document.getElementById("button").disabled = true;
            main = 0;
            console.log(main);
        }
    }
    else if( n == 0){
        text = "";
        key = "";
        document.getElementById("preans").innerHTML = "Previous guesses : " + key;
        document.getElementById("ans").innerHTML = text;
        document.getElementById("ans1").innerHTML = text;
        document.getElementById("turn").innerHTML ="You have life : " + (10-i);
    }
    else{
        document.getElementById("numb").disabled = true;
        document.getElementById("button").disabled = true;
    }
}