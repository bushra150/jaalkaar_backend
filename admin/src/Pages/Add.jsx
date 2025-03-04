import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({token}) => {

  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Women");
  const [subCategory, setSubCategory] = useState("Tussar Silk");
  const [bestseller, setBestseller] = useState(false);
  const [fabric, setFabric] = useState("");
  const [material, setMaterial] = useState("");
  const [note, setNote] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData()

      formData.append("name", name)
      formData.append("description", description)
      formData.append("details", details)
      formData.append("price", price)
      formData.append("category", category)
      formData.append("subCategory", subCategory)
      formData.append("bestseller", bestseller)
      formData.append("fabric", fabric)
      formData.append("material", material)
      formData.append("note", note)

      image1 && formData.append("image1", image1)
      image2 && formData.append("image2", image2)
      image3 && formData.append("image3", image3)
      image4 && formData.append("image4", image4)

      const response = await axios.post(backendUrl + "/api/product/add", formData, {headers:{token}})

      if (response.data.success) {
        toast.success(response.data.message)
        setName('')
        setDescription('')
        setDetails('')
        setPrice('')
        setFabric('')
        setNote('')
        setMaterial('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
      }
      else{
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
      <div>
        <p className='mb-2'>Upload Image</p>
        <div className='flex gap-2'>
          <label htmlFor="image1">
            <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="Upload" />
            <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id="image1" hidden/>
          </label>
          <label htmlFor="image2">
            <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
            <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id="image2" hidden/>
          </label>
          <label htmlFor="image3">
            <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
            <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id="image3" hidden/>
          </label>
          <label htmlFor="image4">
            <img className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
            <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id="image4" hidden/>
          </label>
        </div>
      </div>
      <div className='w-full'>
        <p className='mb-2'>Product Name</p>
        <input className='w-full max-w-[500px] px-3 py-2' type='text' name='name' placeholder='Type here' required onChange={(e)=>setName(e.target.value)} value={name}/>
      </div>
      <div className='w-full'>
        <p className='mb-2'>Product Description</p>
        <textarea className='w-full max-w-[500px] px-3 py-2' name='description' placeholder='Write content here' required onChange={(e)=>setDescription(e.target.value)} value={description}/>
      </div>
      <div className='w-full'>
        <p className='mb-2'>Product Details</p>
        <textarea className='w-full max-w-[500px] px-3 py-2' name='details' placeholder='Additional details' onChange={(e)=>setDetails(e.target.value)} value={details}/>
      </div>
      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-2'>Product Category</p>
          <select className='w-full px-3 py-2' name='category' onChange={(e)=>setCategory(e.target.value)}>
            <option value='Women'>Women</option>
          </select>
        </div>
        <div>
          <p className='mb-2'>Sub Category</p>
          <select className='w-full px-3 py-2' name='subCategory' onChange={(e)=>setSubCategory(e.target.value)}>
            <option value='Tussar Saree'>Tussar Saree</option>
            <option value='Cotton Saree'>Cotton Saree</option>
            <option value='Stole'>Stole</option>
            <option value='Dupatta'>Dupatta</option>
          </select>
        </div>
        <div>
          <p className='mb-2'>Product Price</p>
          <input className='w-full px-3 py-2 sm:w-[120px]' type='number' name='price' placeholder='Enter price' required onChange={(e)=>setPrice(e.target.value)} value={price}/>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-2'>Fabric</p>
          <input className='w-full px-3 py-2' type='text' name='fabric' placeholder='Fabric type' onChange={(e)=>setFabric(e.target.value)} value={fabric}/>
        </div>
        <div>
          <p className='mb-2'>Material</p>
          <input className='w-full px-3 py-2' type='text' name='material' placeholder='Material information' onChange={(e)=>setMaterial(e.target.value)} value={material}/>
        </div>
        <div>
          <p className='mb-2'>Note</p>
          <input className='w-full px-3 py-2' type='text' name='note' placeholder='Additional notes' onChange={(e)=>setNote(e.target.value)} value={note}/>
        </div>
      </div>
      <div className='flex gap-2 mt-2'>
        <input type='checkbox' id='bestseller' name='bestseller' onChange={(e)=>setBestseller(e.target.checked)} checked={bestseller} />
        <label className='cursor-pointer' htmlFor='bestseller'>Add to bestseller</label>
      </div>
      <button type='submit' className='w-28 py-3 mt-4 bg-black text-white'>ADD</button>
    </form>
  );
};

export default Add;
