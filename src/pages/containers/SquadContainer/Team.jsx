import React from 'react';
import "../../../assets/css/Team.css";

const Team = () => {
  return (
    <>
    <section className='Team_section'>
        <div className='team_container'>
        <form className='d-flex justify-content-around'>
 
  <div class="form-group col-3 p-3">
    <label for="exampleFormControlSelect1">Gender</label>
    <select class="form-select" aria-label="Default select example">
  <option selected>Select Gender</option>
  <option value="1">Male</option>
  <option value="2">Female</option>
  <option value="3">Third Gender</option>
</select>
  </div>

  <div class="form-group col-3 p-3">
    <label for="exampleFormControlSelect1">Physical Ability</label>
    <select class="form-select" aria-label="Default select example">
  <option selected>Select Physical Ability</option>
  <option value="1">Abled</option>
  <option value="2">Differently Abled</option>
  <option value="3">Specially Abled</option>
  <option>Veteran</option>
</select>
  </div>
  <div class="form-group col-3 p-3">
    <label for="exampleFormControlSelect1">Category</label>
    <select class="form-select" aria-label="Default select example">
  <option selected>Select Category</option>
  <option value="1">Football</option>
  <option value="2">Futsal</option>
</select>
  </div>
  <div class="form-group col-3 p-3">
    <label for="exampleFormControlSelect1">Age Group</label>
    <select class="form-select" aria-label="Default select example">
  <option selected>Select Age Group</option>
  <option value="1">Under 15</option>
  <option value="2">Under 17</option>
  <option value="3">Under 19</option>
  <option>Under 21</option>
  <option>Open</option>
</select>
  </div>
 

</form>
        </div>
    </section>
    </>
  )
}

export default Team