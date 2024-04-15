import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Add() {
        const {register, handleSubmit } = useForm()

        const navi = useNavigate()

        function saveData(data) {
            axios.post('http://localhost:5000/users', data)
            // alert('Hotel Added')
            navi('/show')
        }
  return (
    <>
        <div className='container w-50'>
            <center><h2><u>HOTEL INFORMATOION</u></h2></center>
            <form  onSubmit={ handleSubmit(saveData)}className='mt-5'>

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

                <input type='submit' value="ADD Hotel"  className='btn btn-outline-success col-6'/>
                <input type='reset' value="RESET" className='btn btn-outline-warning col-6' />
            </form>
        </div>    
    </>
  )
}

export default Add