import { useSearchParams } from "react-router-dom"


const Filter = () => {
  const [searchParams, setSearchParams] =useSearchParams();
 
 
 //Arama  işlemini yapan fonksiyon
  const handleSubmit = (e) => { 
    // Sayfa yenilemesini engelle
    e.preventDefault()
// inputtaki değere eriş
    const text = e.target[0].value
// Url e geçilecek parametre ve değerleri ayarla
    searchParams.set("search",text)

    // Url e bir arama parametresi geç
    
     setSearchParams(searchParams)
  }
     // ! Sıralama işlemini yapan fonksiyon

  const handleChange = (e) => {
   
   // Select alanındaki değere eriş
    const text = e.target.value;

      // Erişilen bu değer ile url'e parametre geç
    searchParams.set("sort", text);

    // url'i güncelle
    setSearchParams(searchParams);
  };
  
 
  return (
<div className="d-flex justify-content-between align-items-center my-4 gap-3">
    {/* Select Alanı */}
  <div>
        <select onChange = {handleChange}className="form-select">
            <option value="">Sırala</option>
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
        </select>
  </div>

  <form onSubmit ={handleSubmit} className=" d-flex gap-2">
    <input type="text" className=" form-control" 
    placeholder="Kitap ismi giriniz..."
    />
    <button type= "submit" className="btn btn-primary">Ara</button>
  </form>


</div>


  )
}



export default Filter