
const resultForm = document.querySelector("#resultForm");
const message = document.querySelector(".message");

// validation
const name = document.getElementById('name')
const roll = document.getElementById('roll')
const cls = document.getElementById('cls')
const bng = document.getElementById('bangla')
const eng = document.getElementById('english')
const mth = document.getElementById('math')
const s = document.getElementById('science')
const ss = document.getElementById('social_science')
const rel = document.getElementById('religion')



resultForm.addEventListener('submit', function(e){
   e.preventDefault();
   
   const sName = document.querySelector('input[placeholder="Student Name"]');
   const sRoll = document.querySelector('input[placeholder="Student Roll"]')
   const sClass = document.querySelector('input[placeholder="Student Class"]')
   const sPhoto = document.querySelector('input[placeholder="Student Photo"]')
   const sGender = document.querySelector('input[name="gender"]:checked')
   const bangla = document.querySelector('input[placeholder="Bangla"]')
   const english = document.querySelector('input[placeholder="English"]')
   const math = document.querySelector('input[placeholder="Math"]')
   const science = document.querySelector('input[placeholder="Science"]')
   const social_science = document.querySelector('input[placeholder="Social Science"]')
   const religion = document.querySelector('input[placeholder="Religion"]')

   
    
    if(sName.value == '' || sRoll.value == '' || sClass == '' || sPhoto =='' || sGender == '' || bangla == '' || english == '' || math == '' || science == '' || social_science == '' || religion == ''){
      
      message.innerHTML = msg(`All Fields Required`)  
    }else if(sName.value == '' || !(/^[a-zA-Z]*$/).test(sName.value)){
      name.innerHTML=msg('invalid Name')
      sName.style.border="1px solid red"
    }else if(sRoll.value == '' || !(/^[0-9]{1,5}$/).test(sRoll.value)){
      roll.innerHTML = msg('invalid Roll')
      sRoll.style.border = "1px solid red"
    }else if(sClass.value == '' || !(/^[0-9a-zA-Z]{1,6}$/).test(sClass.value)){
      cls.innerHTML = msg('invalid class')
      sClass.style.border = "1px solid red"
    }else if(bangla.value == '' || !(/^[0-9]{1,3}$/).test(bangla.value)){
      bng.innerHTML = msg('invalid number')
      bangla.style.border = "1px solid red"
    }else if (english.value == '' || !(/^[0-9]{1,3}$/).test(english.value)) {
      eng.innerHTML = msg('invalid number')
      english.style.border = "1px solid red"
    } else if (math.value == '' || !(/^[0-9]{1,3}$/).test(math.value)) {
      mth.innerHTML = msg('invalid number')
      math.style.border = "1px solid red"
    } else if (science.value == '' || !(/^[0-9]{1,3}$/).test(science.value)) {
      s.innerHTML = msg('invalid number')
      science.style.border = "1px solid red"
    } else if (social_science.value == '' || !(/^[0-9]{1,3}$/).test(social_science.value)) {
      ss.innerHTML = msg('invalid number')
      social_science.style.border = "1px solid red"
    } else if (religion.value == '' || !(/^[0-9]{1,3}$/).test(religion.value)) {
      rel.innerHTML = msg('invalid number')
      religion.style.border = "1px solid red"
    }else{
       message.innerHTML = msg('Data stable', 'primary')
       name.innerHTML = ''
       roll.innerHTML = ''
       cls.innerHTML = ''
       bng.innerHTML = ''
       eng.innerHTML = ''
       mth.innerHTML = ''
       s.innerHTML = ''
       ss.innerHTML = ''
       rel.innerHTML = ''

       
      sName.style.border = "1px solid #ddd"
      sRoll.style.border = "1px solid #ddd"
      sClass.style.border = "1px solid #ddd"
      bangla.style.border = "1px solid #ddd"
      english.style.border = "1px solid #ddd"
      math.style.border = "1px solid #ddd"
      science.style.border = "1px solid #ddd"
      social_science.style.border = "1px solid #ddd"
      religion.style.border = "1px solid #ddd"
      

       document.querySelector('input[placeholder="Student Name"]').value='';
       document.querySelector('input[placeholder="Student Roll"]').value='';
       document.querySelector('input[placeholder="Student Class"]').value='';
       document.querySelector('input[placeholder="Student Photo"]').value='';
       document.querySelector('input[placeholder="Bangla"]').value='';
       document.querySelector('input[placeholder="English"]').value='';
       document.querySelector('input[placeholder="Math"]').value='';
       document.querySelector('input[placeholder="Science"]').value='';
       document.querySelector('input[placeholder="Social Science"]').value='';
       document.querySelector('input[placeholder="Religion"]').value='';
    }
     
    
    

    


   });