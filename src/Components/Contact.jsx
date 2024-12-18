import React from 'react'

const Contact = () => {


  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d5f831f8-2f0a-4c3c-bee3-a5c0e789386d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully",
        icon: "success"
      });
    }
  };



  return (






    <div>






<div className="lg:flex-1 bg-black text-white">
<div className="pt-10 pl-5 text-3xl font-bold pb-10 lg:text-4xl lg:ml-10">
  Contact
</div>
<div className="mx-4 lg:mx-16 border-2 shadow-slate-400 shadow-2xl h-fit p-5 pb-1 w-[500px]">
  <form onSubmit={onSubmit}>
    <label className="text-[22px]">
      Name:
      <div>
        <input
          className="bg-slate-500 outline-none mt-3 mb-3 w-full h-10 text-[18px] p-4 rounded-xl"
          type="text"
          min="3"
          max="25"
          placeholder="Enter Your Name Here"
          name="name"
          required
        />
      </div>
    </label>
    <label className="text-[22px]">
      Phone No:
      <div>
        <input
          className="bg-slate-500 mt-3 mb-3 w-full h-10 text-[18px] p-4 outline-none rounded-xl"
          type="number"
          placeholder="Enter Your Phone No. Here"
          name="phone"
        />
      </div>
    </label>
    <label className="text-[22px]">
      Email:
      <div>
        <input
          className="bg-slate-500 mt-3 mb-3 outline-none w-full h-10 text-[18px] p-4 rounded-xl"
          type="email"
          placeholder="Enter Your Email Here"
          name="email"
        />
      </div>
    </label>
    <label className="text-[22px]">
      Message:
      <div>
        <textarea
          className="bg-slate-500 outline-none mt-3 w-full h-20 text-[18px] p-4 rounded-xl"
          placeholder="Enter Your Message Here"
          name="message"
        ></textarea>
      </div>
    </label>
    <div className="px-4 py-10 lg:px-0">
      <button className="bg-blue-600 text-xl shadow-2xl shadow-sky-900 rounded-2xl w-full lg:w-auto lg:px-6 lg:py-2">
        Submit
      </button>
    </div>
  </form>
</div>
</div>

      
    </div>
  )
}

export default Contact


