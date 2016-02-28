//chengkai
// timer
 var MAX_TIME = null;   // number of seconds for each question
 var timer = null;      // holds ID of timer


//setimer------------------------------------------------------------
function timedCount(){
  clearInterval(timer);
  timer = setInterval(tick, 1000);   // timer tick 1x/sec
}

function myStopFunction(){
  clearTimeout(timer);
}
//-------------------------------------------------------------------
//radio button uncheck
function uncheck(){
$("myRadio1").checked = false;
$("myRadio2").checked = false;
$("myRadio3").checked = false;
$("myRadio4").checked = false;
}





/*
function post(){
    uncheck();
    x = Math.floor((Math.random() * 14));
    $("hide_form").show();
    $("guess").clear();// clear the blank
    $("guess").hide(); //  because the questio is not blank question
    $("check2").hide();// because the question is not blank question
    $("check1").show();
    if (x<10){
    q = earth[x].question ;
    a = earth[x].qanswer1 ;
    b = earth[x].qanswer2 ;
    c = earth[x].qanswer3 ;
    d = earth[x].qanswer4 ;
    return q; //+ "<br>"+ a +"<br>"+ b +"<br>"+ c +"<br>"+ d
    }
    else{
      $("hide_form").hide();
      $("guess").show();
      $("check2").show();//because the question is blank question so show it
      $("check1").hide();//because the question is not choice question
      r = x % 10;
      z = sat_earth[r].question ;
      e = sat_earth[r].answer;
      return z;
    }

}

*/


function post(){
    uncheck();
    x = Math.floor((Math.random() * 14));
    $("hide_form").show();
    $("guess").clear();// clear the blank
    $("guess").hide(); //  because the questio is not blank question
    $("check2").hide();// because the question is not blank question
    $("check1").show();
    if (x<10){
       if(getdat_random()==0){
         $("topic").innerHTML = "Math";
         q = math[x].question ;
         a = math[x].qanswer1 ;
         b = math[x].qanswer2 ;
         c = math[x].qanswer3 ;
         d = math[x].qanswer4 ;
        return q;

       }else if(getdat_random()==1){
         $("topic").innerHTML = "Physics";
         q = physics[x].question ;
         a = physics[x].qanswer1 ;
         b = physics[x].qanswer2 ;
         c = physics[x].qanswer3 ;
         d = physics[x].qanswer4 ;
        return q;
       }else if(getdat_random()==2){
         $("topic").innerHTML = "Business";
         q = business[x].question ;
         a = business[x].qanswer1 ;
         b = business[x].qanswer2 ;
         c = business[x].qanswer3 ;
         d = business[x].qanswer4 ;
        return q;
       }else if(getdat_random()==3){
         $("topic").innerHTML = "Chemistry";
         q = chemistry[x].question ;
         a = chemistry[x].qanswer1 ;
         b = chemistry[x].qanswer2 ;
         c = chemistry[x].qanswer3 ;
         d = chemistry[x].qanswer4 ;
        return q
       }else {
         $("topic").innerHTML = "Earth Sceince";
         q = earth[x].question ;
         a = earth[x].qanswer1 ;
         b = earth[x].qanswer2 ;
         c = earth[x].qanswer3 ;
         d = earth[x].qanswer4 ;
        return q
       }
    }
    else{
      $("hide_form").hide();
      $("guess").show();
      $("check2").show();//because the question is blank question so show it
      $("check1").hide();//because the question is not choice question
      r = x % 10;
      if(getdat_random()==0){
        $("topic").innerHTML = "Math";
        z = sat_math[r].question ;
        e = sat_math[r].answer;
       return z;

      }else if(getdat_random()==1){
         $("topic").innerHTML = "Physics";
        z = sat_physics[r].question ;
        e = sat_physics[r].answer;
       return z;

      }else if(getdat_random()==2){
        $("topic").innerHTML = "Business";
        z = sat_business[r].question ;
        e = sat_business[r].answer;
       return z;
      }else if(getdat_random()==3){
        $("topic").innerHTML = "Chemistry";
        z = sat_chemistry[r].question ;
        e = sat_chemistry[r].answer;
       return z;
      }else{
        $("topic").innerHTML = "Earth Sceince";
        z = sat_earth[r].question ;
        e = sat_earth[r].answer;
       return z;
      }

    }

}




function choice_a(){
     //a = math[x].qanswer1 ;
return a + "<br>"
;}
function choice_b(){
     //b = math[x].qanswer2 ;
return b + "<br>"
;}
function choice_c(){
     //c = math[x].qanswer3 ;
return c + "<br>"
;}
function choice_d(){
     //d = math[x].qanswer4 ;
return d + "<br>"
;}

// increase the score
function increment(id, amount) {
  var number = parseInt($(id).innerHTML) + (amount || 1);
  $(id).innerHTML = number;
  return number;
}

// Chooses two new random numbers for the next quiz problem.
function nextproblem(){
  //uncheck();
  $("time").innerHTML = 15;
  $("demo").innerHTML = post();
  $("rad1").innerHTML = choice_a();
  $("rad2").innerHTML = choice_b();
  $("rad3").innerHTML = choice_c();
  $("rad4").innerHTML = choice_d();
  timedCount();
}

// Called by timer when time has elapsed (user ran out of time)
function tick() {
  var seconds = increment("time", -1);
  if (seconds <= 0) {   // time up!
    $("time").innerHTML = 15;
    //increment("total");
    check();
  }
}


//first button to check blank question
function check(){
var x= $(myRadio1).checked;
var y= $(myRadio2).checked;
var z= $(myRadio3).checked;
var w= $(myRadio4).checked;
if (y == true && x == false && z == false && w == false){
    increment("total");
    increment("correct");
    nextproblem();

}

else{
    increment("total");
    increment("incorrect");
    nextproblem();
  }
}
// second button to check blank question
function check2(){
  if($F("guess") == e){
      increment("total");
      increment("correct");
      nextproblem();
  }
  else{
      increment("total");
      increment("incorrect");
      nextproblem();
    }
  }


  //different subject
  function math1(){
     q = math[x].question ;
     a = math[x].qanswer1 ;
     b = math[x].qanswer2 ;
     c = math[x].qanswer3 ;
     d = math[x].qanswer4 ;
    return q

  }

  function sat_math1(){
     z = sat_math[r].question ;
     e = sat_math[r].answer;
    return z
  }

  function physics1(){
     q = physics[x].question ;
     a = physics[x].qanswer1 ;
     b = physics[x].qanswer2 ;
     c = physics[x].qanswer3 ;
     d = physics[x].qanswer4 ;
    return q
  }

  function sat_physics1(){
     z = sat_physics[r].question ;
     e = sat_physics[r].answer;
    return z
  }

  function business1(){
     q = business[x].question ;
     a = business[x].qanswer1 ;
     b = business[x].qanswer2 ;
     c = business[x].qanswer3 ;
     d = business[x].qanswer4 ;
    return q
  }

  function sat_business1(){
     z = sat_business[r].question ;
     e = sat_business[r].answer;
    return z
  }

  function chemistry1(){
     q = chemistry[x].question ;
     a = chemistry[x].qanswer1 ;
     b = chemistry[x].qanswer2 ;
     c = chemistry[x].qanswer3 ;
     d = chemistry[x].qanswer4 ;
    return q
  }

  function sat_chemistry1(){
     z = sat_chemistry[r].question ;
     e = sat_chemistry[r].answer;
    return z
  }

  function earth1(){
     q = earth[x].question ;
     a = earth[x].qanswer1 ;
     b = earth[x].qanswer2 ;
     c = earth[x].qanswer3 ;
     d = earth[x].qanswer4 ;
    return q
  }

  function sat_earth1(){
     z = sat_earth[r].question ;
     e = sat_earth[r].answer;
    return z
  }

// getdatefunction

function getdat_random() {
    var d = new Date();
    var n = d.getDate();
    //document.getElementById("demo").innerHTML = n;
    random_subj = n % 5 ;
    return random_subj;
}


// switch function
