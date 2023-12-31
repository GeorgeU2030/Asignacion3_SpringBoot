import React,{useEffect} from 'react'
import { useForm} from 'react-hook-form'
import { createFilm, deleteFilm, getFilm,updateFilm } from '../config/api'
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import HeaderApp from '../components/HeaderApp';
import Footer from '../components/Footer';

const FilmFormPage = () => {

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
    await deleteFilm(idlong)
    navigate('/films')
    } catch(error) {
     throw error
    }
  };


  useEffect(()=>{

    async function loadFilm(){
      if (params.id){
        const idstring = params.id; 
        const idlong = parseInt(idstring, 10); 
        getFilm(idlong)
        .then((data) => {
        setValue('name',data.name),
        setValue('genre',data.genre),
        setValue('director',data.director),
        setValue('launchDate',data.launchDate),
        setValue('id',data.id)});
      }
    }
    loadFilm()
    
  },[])

  const onSubmit = handleSubmit(async data => {
    if(params.id){
        const idstring = params.id; 
        const idlong = parseInt(idstring, 10);
        await updateFilm(idlong,data)
        toast.success('Film updated succesfully',{
            position: "top-center",
            autoClose: 1000,
        })
      }else{
        await createFilm(data)
        toast.success('Film has been created succesfully',{
            position: "top-center",
            autoClose: 1000,
        })
    }
    navigate('/films')
  })
    return (
      <>
        <HeaderApp headerTitle={"ReadFilm"}></HeaderApp>
        <div className='h-screen w-screen bg-third flex justify-center'>
            <div className={`w-3/5 flex flex-col items-center bg-primary mt-20 rounded-lg ${params.id ? 'h-4/5' : 'h-4/5'}`}>
                <h1 className='py-10 font-bold text-white text-xl'>
                {params.id ? 'The Film' : 'New Film'}
                </h1>
                <form className='bg-third  flex flex-col items-center rounded-lg' onSubmit={onSubmit}>
                <div className='grid grid-cols-2 '>
                <label htmlFor='name' className='px-5 py-5 font-semibold'>Name:</label>
                <input type="text" className='w-4/5 mt-5 mb-5 text-right rounded-md border-alter border-2 hover:border-2 hover:border-alter' {...register('name',{required:true})}/>
                <label htmlFor='genre' className='px-5 py-5 font-semibold'>Genre:</label>
                <input type="text" className='w-4/5 mt-5 mb-5  text-right rounded-md border-alter border-2 hover:border-2 hover:border-alter' {...register('genre',{required:true})}/>
                <label htmlFor='director' className='px-5 py-5 font-semibold'>Director:</label>
                <input type="text" className='w-4/5 mt-5 mb-5  text-right rounded-md border-alter border-2 hover:border-2 hover:border-alter' {...register('director',{required:true})}/>
                <label htmlFor='launchDate' className='px-5 py-5 font-semibold'>Launch date:</label>
                <input type="date" className='w-4/5 mt-5 mb-5  text-right rounded-md border-alter border-2 hover:border-2 hover:border-alter' {...register('launchDate',{required:true})}/>
                {params.id && 
                <label htmlFor='id' className='px-5 py-1 font-semibold'>Id:</label>}
                {params.id &&
                <input type="text" className='w-4/5 mt-5 mb-5  text-right rounded-md border-2 border-alter' {...register('id',{required:true})} disabled={true}/>}
                </div>
                <button className={`py-2 px-10 bg-alter text-white rounded-lg hover:bg-third hover:text-alter hover:border-2 hover:border-alter font-semibold ${params.id ? 'my-2' : 'my-5'}`}>
                {params.id ? 'Update' : 'Create'}
                </button>
                </form>
                {params.id &&
                <button className='py-2 px-10 my-2 bg-second hover:bg-alter text-white rounded-lg font-semibold border border-white'
                onClick={handleDelete}>DELETE</button>
                }
            </div>
        </div>
        <Footer></Footer>
        </>
      )
}

export default FilmFormPage