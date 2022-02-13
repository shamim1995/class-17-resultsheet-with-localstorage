let result = new Result();
const resultForm = document.querySelector("#resultForm");
const message = document.querySelector(".message");
const allStudentsData = document.querySelector(".allStudentsData");

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
    }else if (english.value == '' || !(/^[0-9]{1,3}$/).test(english.value)){
      eng.innerHTML = msg('invalid number');
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

      let results_arr = [];
      if (dataGet('results')) {
        results_arr = dataGet('results')
        
      }
      
      results_arr.push({
        name: sName.value,
        roll: sRoll.value,
        sClass: sClass.value,
        photo: sPhoto.value,
        gender: sGender.value,
        bangla: bangla.value,
        english: english.value,
        math: math.value,
        science: science.value,
        social_science: social_science.value,
        religion: religion.value
      });

       dataSend('results', results_arr)



       message.innerHTML = msg('Data stable', 'primary')
       document.querySelector('input[placeholder="Student Name"]').value = '';
       document.querySelector('input[placeholder="Student Roll"]').value = '';
       document.querySelector('input[placeholder="Student Class"]').value = '';
       document.querySelector('input[placeholder="Student Photo"]').value = '';
       document.querySelector('input[placeholder="Bangla"]').value = '';
       document.querySelector('input[placeholder="English"]').value = '';
       document.querySelector('input[placeholder="Math"]').value = '';
       document.querySelector('input[placeholder="Science"]').value = '';
       document.querySelector('input[placeholder="Social Science"]').value = '';
       document.querySelector('input[placeholder="Religion"]').value = '';

       sName.style.border = "1px solid #ddd"
       sRoll.style.border = "1px solid #ddd"
       sClass.style.border = "1px solid #ddd"
       bangla.style.border = "1px solid #ddd"
       english.style.border = "1px solid #ddd"
       math.style.border = "1px solid #ddd"
       science.style.border = "1px solid #ddd"
       social_science.style.border = "1px solid #ddd"
       religion.style.border = "1px solid #ddd"

       name.innerHTML = '';
       roll.innerHTML = '';
       cls.innerHTML = '';
       bng.innerHTML = '';
       eng.innerHTML = '';
       mth.innerHTML = '';
       s.innerHTML = '';
       ss.innerHTML = '';
       rel.innerHTML = '';

      

      all_student();

       
    };
     
    

   });

    all_student();
    
    function all_student () {

      let allData = dataGet('results') ? dataGet('results'): [];
       let sData = '';
      
      allData.map((students, index)=>{
        sData +=
        `
                        <tr>
                            <th>${index+1}</th>
                            <td>${students.name}</td>
                            <td>${students.roll}</td>
                            <td>${students.sClass}</td>
                            <td>${students.gender}</td>
                            <td> ${ result.finalCgpa ( students.bangla, students.english, students.math, students.science, students.social_science, students.religion ).resgread } </td>
                            <td>${ result.finalCgpa ( students.bangla, students.english, students.math, students.science, students.social_science, students.religion ).rescgpa }</td>
                            <td><img style ='width:50px; height: 50px; object-fit:cover;' src="${students.photo}" alt=""></td>
                            <td><button class="btn btn-info btn-sm text-white" data-bs-toggle="modal" data-bs-target="#studentsResult" onclick = 'getViewResult(${index})'> view </button>
                            <button onclick ='deleteStudentData(${index})' class="btn btn-danger btn-sm">Delete</button></td>

                        </tr>
        `
      });


      allStudentsData.innerHTML = sData;

    };

    function deleteStudentData(id){

     let conf = confirm('are you sure')
     if(conf==true){
        let result_storage = dataGet('results');
        result_storage.splice(id, 1);
        dataSend('results', result_storage);
        all_student();
     }else{
       false;
     }

    }

    // view result

    let students_results_view = document.querySelector('.students_results_view');

   
    function getViewResult(id){
      let result_storage = dataGet('results');
       
      students_results_view.innerHTML =
      `
      <img class="shadow" src="${result_storage[id].photo}"
                            alt="">
                            <br>
                            <h1>${result_storage[id].name}</h1>
                            <hr>
                            <table class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        
                                        
                                        <th>Subject</th>
                                        <th>Marks</th>
                                        <th>Gpa</th>
                                        <th>Grade</th>
                                        <th>Cgpa</th>
                                        <th>Result</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Bangla</td>
                                        <td>${result_storage[id].bangla}</td>
                                        <td> ${result.result (result_storage[id].bangla).gpacal} </td>
                                        <td> ${ result.result (result_storage[id].bangla).greadcal }</td>
                                        <td rowspan="6">${ result.finalCgpa ( result_storage[id].bangla, result_storage[id].english, result_storage[id].math, result_storage[id].science, result_storage[id].social_science, result_storage[id].religion ).rescgpa } </td>
                                        
                                        <td rowspan="6">${ result.finalCgpa ( result_storage[id].bangla, result_storage[id].english, result_storage[id].math, result_storage[id].science, result_storage[id].social_science, result_storage[id].religion ).resgread }</td>
                                    </tr>
                                    <tr>
                                        <td>English</td>
                                        <td>${result_storage[id].english}</td>
                                        <td> ${result.result (result_storage[id].english).gpacal} </td>
                                        <td> ${ result.result (result_storage[id].english).greadcal }</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>Math</td>
                                       <td>${result_storage[id].math}</td>
                                        <td> ${result.result (result_storage[id].math).gpacal} </td>
                                        <td> ${ result.result (result_storage[id].math).greadcal }</td>

                                    </tr>
                                    <tr>
                                        <td>Science</td>
                                       <td>${result_storage[id].science}</td>
                                        <td> ${result.result (result_storage[id].science).gpacal} </td>
                                        <td> ${ result.result (result_storage[id].science).greadcal }</td>

                                    </tr>
                                    <tr>
                                        <td>social_science</td>
                                        <td>${result_storage[id].social_science}</td>
                                        <td> ${result.result (result_storage[id].social_science).gpacal} </td>
                                        <td> ${ result.result (result_storage[id].social_science).greadcal }</td>

                                    </tr>
                                    <tr>
                                        <td>Religion</td>
                                        <td>${result_storage[id].religion}</td>
                                        <td> ${result.result (result_storage[id].religion).gpacal} </td>
                                        <td> ${ result.result (result_storage[id].reli).greadcal }</td>

                                    </tr>
                                    
                                </tbody>

                            </table>
      `

    }