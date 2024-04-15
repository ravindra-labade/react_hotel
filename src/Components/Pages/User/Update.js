import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
    
    const navi = useNavigate();

    const {userId} = useParams();

    const {register, handleSubmit} = useForm({defaultValues: async()=>(await axios.get(`http://localhost:5000/users/${userId}`)).data})

    function saveData(data){
        axios.put(`http://localhost:5000/users/${userId}`, data)
        navi('/show')
    }
  return (
    <>
        <div className='container w-50'>
            <center><h2><u>HOTEL UPDATION INFORMATOION</u></h2></center>
            <form  onSubmit={ handleSubmit(saveData)} className='mt-5'>

                <label htmlFor='s'><b>ENTER SR.NO:</b></label>
                <input type='number' id='s' className='form-control' {...register('sr_no')}/>
                <br /> <br />

                <label htmlFor='n'><b>ENTER HOTEL NAME:</b></label>
                <input type='text' id='n ' className='form-control' {...register('hotel')}/>
                <br /> <br />

                <label htmlFor='a'><b>ENTER ADDRESS:</b></label>
                <input type='text' id='a' className='form-control' {...register('address')}/>
                <br /> <br />

                <label htmlFor='t'><b>ENTER TABLE NO:</b></label>
                <input type='number' id='t' className='form-control' {...register('table')} />
                <br /> <br />

                <input type='submit' value="UPDATE Hotel"  className='btn btn-outline-success col-6'/>
                <input type='reset' value="RESET" className='btn btn-outline-warning col-6' />
            </form>
        </div>    
    </>
  )
}

export default Update