import React,{useEffect} from 'react'
import { useForm} from 'react-hook-form'
import { createDirector, getDirector, updateDirector, deleteDirector } from '../config/api'
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import HeaderApp from '../components/HeaderApp';
import Footer from '../components/Footer';

const DirectorFormPage = () => {

  const navigate = useNavigate()
  const params = useParams()
  const {register, handleSubmit,setValue} = useForm()

  const handleDelete = () => {

    toast.warning(
      <div>
        <p className='mb-2'>¿Are you sure to delete?</p>
        <button className='border-2 mr-2 bg-alter rounded-lg text-white px-5 py-1'
          onClick={() => {
            toast.dismiss();
            performAction();
          }}
        >
        Accept
        </button>
        <button className='border-2 bg-alter rounded-lg text-white px-5 py-1'
          onClick={() => {
            toast.dismiss();
          }}
        >
        Cancel
        </button>
      </div>
    );
  };

  const performAction = async () => {
    try {
    const idstring = params.id; 
    const idlong = parseInt(idstring, 10);
    await deleteDirector(idlong)
    navigate('/directors')
    } catch(error) {
     throw error
    }
  };


  useEffect(()=>{

    async function loadDirector(){
      if (params.id){
        const idstring = params.id; 
        const idlong = parseInt(idstring, 10); 
        getDirector(idlong)
        .then((data) => {
        setValue('name',data.name),
        setValue('id',data.id)});
      }
    }
    loadDirector()
    
  },[])

  const onSubmit = handleSubmit(async data => {
    if(params.id){
        const idstring = params.id; 
        const idlong = parseInt(idstring, 10);
        await updateDirector(idlong,data)
        toast.success('Director updated succesfully',{
            position: "top-center",
            autoClose: 1000,
        })
    }else{
        await createDirector(data)
        toast.success('Director has been created succesfully',{
            position: "top-center",
            autoClose: 1000,
        })
    }
    navigate('/directors')
  })

  return (
    <><HeaderApp headerTitle={'ReadDirector'}></HeaderApp>
    <div className='h-screen w-screen bg-third flex justify-center'>
      <div className={`w-3/5 flex flex-col items-center bg-primary mt-20 rounded-lg ${params.id ? 'h-4/5' : 'h-3/5'}`}>
        <h1 className='py-10 font-bold text-white text-xl'>
          {params.id ? 'The Director' : 'New Director'}
        </h1>
        <form className='bg-third w-3/5 flex flex-col items-center rounded-lg' onSubmit={onSubmit}>
          <label htmlFor='name' className='px-5 py-5 font-semibold'>Name:</label>
          <input type="text" className='w-4/5 mb-10 text-right rounded-md border-alter border-2 hover:border-2 hover:border-alter' {...register('name', { required: true })} />
          {params.id &&
            <label htmlFor='id' className='px-5 py-1 font-semibold'>Id:</label>}
          {params.id &&
            <input type="text" className='w-4/5 mb-10 text-right rounded-md border-2 border-alter' {...register('id', { required: true })} disabled={true} />}
          <button className={`py-2 px-10 bg-alter text-white rounded-lg hover:bg-third hover:text-alter hover:border-2 hover:border-alter font-semibold ${params.id ? 'my-2' : 'my-5'}`}>
            {params.id ? 'Update' : 'Create'}
          </button>
        </form>
        {params.id &&
          <button className='py-2 px-10 my-2 bg-second text-white hover:bg-white hover:text-black rounded-lg font-semibold border border-black'
            onClick={handleDelete}>DELETE</button>}
      </div>
    </div>
    <Footer></Footer>
    </>
    
  )
}

export default DirectorFormPage