$(document).ready(function(){
    /** 
n1=1;
n2=1;
n3=1;
n4=1;
n5=1;

first=false;
second=false;
third=false;
fourth=true;
fifth=true;
*/

//$('div').css('background', 'red');
//$('div.container').css('background', 'red');

//$('button').click( function(){
   // $('div.container').css('background', 'red');
//})

/** 
//line1
$('button.firstminus').click ( function(){
    if(n1>0){
    n1--;
    $('span.table1count1').text(n1);
    }
})

$('button.firstplus').click ( function(){
    n1++;
    $('span.table1count1').text(n1);
})

$('button.kupleno1').click ( function(){
    $('span.orange-label4').text(n1);
    $('span.mini-label4').css('display','inline');
})

$('button.hrest1').click ( function(){
    n1=0;
    $('span.mini-label4').css('visibility','hidden');
    $('div.line1').css('display','none');
    first=true;
})



//line2
$('button.secondminus').click ( function(){
    if(n2>0){
    n2--;
    $('span.table1count2').text(n2);
    }
})

$('button.secondplus').click ( function(){
    n2++;
    $('span.table1count2').text(n2);
})

$('button.kupleno2').click ( function(){
    $('span.orange-label5').text(n2);
    $('span.mini-label5').css('display','inline');
})

$('button.hrest2').click ( function(){
    n1=0;
    $('span.mini-label5').css('visibility','hidden');
    $('div.line12').css('display','none');
    second=true;
})


//line3
$('button.thirdminus').click ( function(){
    if(n3>0){
    n3--;
    $('span.table1count3').text(n3);
    }
})

$('button.thirdplus').click ( function(){
    n3++;
    $('span.table1count3').text(n3);
})

$('button.kupleno3').click ( function(){
    $('span.orange-label6').text(n3);
    $('span.mini-label6').css('display','inline');
})

$('button.hrest3').click ( function(){
    n3=0;
    $('span.mini-label6').css('visibility','hidden');
    $('div.line13').css('display','none');
    third=true;
})

//line4
$('button.fourthminus').click ( function(){
    if(n4>0){
    n4--;
    $('span.table1count4').text(n4);
    }
})

$('button.fourthplus').click ( function(){
    n4++;
    $('span.table1count4').text(n4);
})

$('button.kupleno4').click ( function(){
   // $('span.title7').text(Огірочки);
    $('span.orange-label7').text(n4);
    $('span.mini-label7').css('display','inline');
})

$('button.hrest4').click ( function(){
    n4=0;
    $('span.mini-label7').css('visibility','hidden');
    $('div.line14').css('display','none');
    fourth=true;
})


//line5
$('button.fifthminus').click ( function(){
    if(n5>0){
    n5--;
    $('span.table1count5').text(n5);
    }
})

$('button.fifthplus').click ( function(){
    n5++;
    $('span.table1count5').text(n5);
})

$('button.kupleno5').click ( function(){
   // $('span.title7').text(Огірочки);
    $('span.orange-label8').text(n5);
    $('span.mini-label8').css('display','inline');
})

$('button.hrest5').click ( function(){
    n5=0;
    $('span.mini-label8').css('visibility','hidden');
    $('div.line15').css('display','none');
    fifth=true;
})





//creation of new lines 14 and 15
$('button.buttonadd').click (function(){
done=false;
    if(first && !done){
        $('span.titlebought1').text('Помідори');
        $('div.line1').css('display','block');
        first=false;
        done=true;

        
    }
    
    if(second && !done){
        $('span.titlebought2').text('Печиво');
        $('div.line12').css('display','block');
        second=false;
        done=true;
    }
    if(third && !done){
        $('span.titlebought3').text('Сир');
        $('div.line13').css('display','block');
        third=false;
        done=true;
    }
    if(fourth && !done){
       $('span.titlebought4').text('Огірочки');
        $('div.line14').css('display','block');
        fourth=false;
        done=true;
    }
    
    if(fifth && !done){
        $('span.titlebought5').text('Огірочк2');
        $('div.line15').css('display','block');
        done=true;
    }

})

//changing of that lines

*/

counter_added=0;

$('button.plus').click ( function(){
   counter= $(this).parent('.middle-wrapper').children('.amount');
   current_amount=parseInt(counter.text());
   current_amount++;
   counter.text(current_amount);
})

$('button.minus').click ( function(){
    counter= $(this).parent('.middle-wrapper').children('.amount');
    current_amount=parseInt(counter.text());
    if(current_amount!=1)current_amount--;
    counter.text(current_amount);
 })
//!!ERROR
 $('button.bought').click ( function(){
    counter= $(this).parent('.right').parent('.line').children('.left');
    name=counter.text();//what we buy?

    counter= $(this).parent('.right').parent('.line').children('.middle').children('.middle-wrapper').children('.amount');
    number=parseInt(counter.text());//how much we buy?

    titles=$('.table2').children('.line').children('.mini-label').children('.title');
    //title="element";
    //titles.forEach( function(value) {
        //if(value.text().indexOf(name)>=0) title=value;
   // })

    //$("span":contains(+name)).css('visibility','hidden');
   
    //titles.get(0).css('visibility','hidden');

 })
 //END OF ERROR

 $('button.cancel').click( function(){
    to_delete= $(this).parent('.right').parent();
    to_delete.remove();
 })
//new error
 $('button.add').click( function(){

    
   // $(this).text(  ( $('input').val() )  );

    if(counter_added===0){$('.line1').children('.left').text($('input').val());$('.line1').css('display','inline-flex'); }
    if(counter_added===1){$('.line2').children('.left').text($('input').val());$('.line2').css('display','inline-flex'); }
    if(counter_added===2){$('.line3').children('.left').text($('input').val());$('.line3').css('display','inline-flex'); }
    if(counter_added===3){$('.line4').children('.left').text($('input').val());$('.line4').css('display','inline-flex'); }
    if(counter_added===4){$('.line5').children('.left').text($('input').val());$('.line5').css('display','inline-flex'); }
    if(counter_added===5){$('.line6').children('.left').text($('input').val());$('.line6').css('display','inline-flex'); }
    if(counter_added===6){$('.line7').children('.left').text($('input').val());$('.line7').css('display','inline-flex'); }

    counter_added++;

    /*
    var item	=	$($('.line1').html() );
    var left=$($('.left1').html() );
    var middle=$($('.middle1').html() );
    var right = $($('.middle1').html() );

    var middlewrapper = $($('.middle-wrapper1').html() );
    var minus = $($('.minus1').html() );
    var amount = $($('.amount1').html() );
    var plus = $($('.plus1').html() );

    var right = $($('.right1').html() );
    var bought = $($('.bought1').html() );
    var cancel = $($('.cancel1').html() );


    right.append(bought);
    right.append(cancel);

    middlewrapper.append(minus);
    middlewrapper.append(amount);
    middlewrapper.append(plus);
    middle.append(middlewrapper);

    item.append(left);
    item.append(middle);
    item.append(right);

    $('.table1').append(item);

*/


    
    


   
    
 
    
    //$('.table1').addClass('.line');


    //var new_line=document.createElement()
     //var line=$('.line');
     //table1.append(line);
     //$(this).css('visibility','hidden');
 })


 



})