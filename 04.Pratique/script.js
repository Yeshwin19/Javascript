'use-strict;'

 $('#navbarDropdownMenuLink').click(function () {
    $('#navbarDropdownMenu').toggle();

    $('.dropdown-item').click( function () {
        $('#navbarDropdownMenu').toggle();
    });
});

function BMIcalc () {
    var Weight = document.getElementById ("js-bmi-weight").value();
    Weight = parseFloat (Weight);
    var Height = document.getElementById ("js-bmi-height").value();
    Height = parseFloat (Height);
    var BMI = Weight / (Height/100 * Height/100)
    }


 function BMIcalc(){
	document.getElementById("div3").innerHTML = "Your BMI is: " + BMI
}


 //DATE D'AUJOURD'HUI
 const date = document.getElementById("js-current-year");
 const date2 = new Date ();
 date.innerHTML=date2.getFullYear();




 
 //Alert quand le bouton Send message est cliqué

function success(){
	document.getElementById("div1").innerHTML = "Your message has been sent sucessfully!"
}


//images bloc-2

const bmiFacts = [
  {
    title: 'Future weight of children can be anticipated by BMI',
    description: 'Scientists in a new study have concluded that future weight can be forecasted by looking at children’s BMI. ',
    img: 'http://lorempixel.com/200/200/cats'
  },
  {
    title: 'Losing BMI weight lowers the risk of diabetes',
    description: 'New research established the fact that lowering BMI by almost five units dramatically lowers risk of diabetes, in spite of the initial weight of a person.',
    img: 'http://lorempixel.com/200/200/sports'
  },
  {
    title: 'Pre-pregnancy BMI is closely related to excess weight gain during pregnancy',
    description: 'Excessive weight gain during pregnancy affects the health of a mother and her baby, pre-pregnancy BMI and ethnicity might signal a likelihood for obesity later in life for young mothers.',
    img: 'http://lorempixel.com/200/200/fashion'
  },
  {
    title: 'Coronary heart disease is proportionate to Body Mass Index (BMI)',
    description: 'According to a research from the Million Women Study, Coronary heart disease (CHD) increases with age and also with an increase in body mass index (BMI).',
    img: 'http://lorempixel.com/200/200/food'
  },
];