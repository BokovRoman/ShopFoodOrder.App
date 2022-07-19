import { useState, useEffect } from "react";
import styles from "./Form.module.css";
import 'react-toastify/dist/ReactToastify.css';



const Forma = ({isFormValid, setForm}) => {

  const [name, setName] = useState('');
  const [nameDirty, setnameDirty]=useState(false);
  const [nameError, setnameError] = useState('Name field is empty!');
  const [email, setEmail] = useState('');
  const [emailDirty, setemailDirty]=useState(false);
  const [emailError, setemailError] = useState('Email field is empty!');
  const [phone, setPhone] = useState('');
  const [phoneDirty, setphoneDirty]=useState(false);
  const [phoneError, setphoneError] = useState('Phone field is empty!');
  const [address, setAddress] = useState('');
  const [addressDirty, setaddressDirty]=useState(false);
  const [addressError, setaddressError]=useState('Address field is empty!');

  const [formData,setFormData] = useState({
    customerName: '',
    customerEmail:'',
    customerNumber: '',
    customerAddress:'',
  })


  useEffect(() => {
    if (nameError || emailError || phoneError || addressError) {
        isFormValid(false)
    }
    else {
      isFormValid(true)
    }
  }, [nameError,emailError,phoneError,addressError])

  const blurHandler = (e) => {
    // eslint-disable-next-line default-case
    switch (e.target.name) {
      case 'name':
        setnameDirty(true)
        break
      case 'email':
        setemailDirty(true)
        break
      case 'phone':
        setphoneDirty(true)
        break
      case 'address':
        setaddressDirty(true)
        break
    }
  }

  const nameHandler = (e) => {
    setName(e.target.value)
    const re = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setnameError('Incorrect Name format!')
    } else {
      setnameError('')
      setFormData({
        ...formData, customerName:e.target.value
      })
      setForm(formData);
    }
  }


  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setemailError('Incorrect Email input!')
    } else {
      setemailError('')
      setFormData({
        ...formData, customerEmail:e.target.value
      })
      setForm(formData);
    }
  }

  const phoneHandler = (e) => {
    setPhone(e.target.value)
    const re =/^(?:\+38)?(0\d{9})$/;
    if (!re.test(e.target.value)) {
      setphoneError('Incorrect phone format!')
    }  
   else {
      setphoneError('')
      setFormData({
        ...formData, customerNumber:e.target.value
      })
      setForm(formData);
    }
  }

   const addressHandler = (e) => {
    setAddress(e.target.value)
    const regex = /[,#-\/\s\!\@\$.....]/gi;
    if (!regex.test(e.target.value)) {
      setaddressError('Incorrect address format!')
    }  
   else {
      setaddressError('')
      setFormData({
        ...formData, customerAddress:e.target.value
      })
      setForm(formData);
    }
  }

  return(
    <form className={styles.Form}>
      <label>
        Name
        {(nameDirty && nameError) && <div className={styles.Notification}>{nameError}</div>}
        <input
          name="name"
          type="text"
          value={name}
          onBlur={e=>blurHandler(e)}
          onChange={e=>nameHandler(e)}
          placeholder="Please, enter your name.."
          />
      </label>
      <label>
        Email
        {(emailDirty && emailError) && <div className={styles.Notification}>{ emailError}</div>}
        <input
          name="email"
          type="text"
          value={email}
          onBlur={e=>blurHandler(e)}
          onChange={e=>emailHandler(e)}
          placeholder="example@google.com"
        />
      </label>
      <label>
        Phone number
        {(phoneDirty && phoneError) && <div className={styles.Notification}>{ phoneError}</div>}
        <input
          name="phone"
          type="tel"
          value={phone}
          onBlur={e=>blurHandler(e)}
          onChange={e=>phoneHandler(e)}
          placeholder="+380"
          />
      </label>
      <label>
        Address
        {(addressDirty && addressError) && <div className={styles.Notification}>{ addressError}</div>}
        <input
          name="address"
          type="text"
          value={address}
          onBlur={e=>blurHandler(e)}
          onChange={e=>addressHandler(e)}
          placeholder="Please, enter your address.."
          />
      </label>
      {/* <div className={styles.TotalPrice}>
          <p className={styles.Price}>
            Total price: {itemsTotalPrice}
          </p>
          <button className={styles.Submit} onClick={notifi('Thanks for your order! The form was sent')} disabled={!validForm} type="submit">Submit</button>
      </div> */}
    </form>
  )
}
  

export default Forma;
