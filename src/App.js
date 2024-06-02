import React from "react"
import { useState } from "react"

function App() {

	const [formData, setFormData] = useState({})
    // console.log(formData)


    function changeHandler(event){

        const {name,value,type,checked} = event.target

        setFormData(prev => {
            return{
                ...prev,
                [name] : type === 'checkbox' ? checked : value
            }
        })
    }

	function submitHandler(event){
		event.preventDefault();

		console.log("Printing form data")
		console.log(formData)
	}

	return(

        <div className="flex flex-col justify-center p-10 border w-[75vw] mx-auto">

            <form onSubmit={submitHandler}>

            <label className="font-bold" htmlFor="firstName" >First Name</label>
            <br/>
            <input
                type="text"
                placeholder="Enter your first name"
                name='firstName'
                id="firstName"
                onChange={changeHandler}
                value={formData.firstName}
				className="w-full mx-auto border-gray-400 border-[2px] rounded-md pl-1"
            />
            <br/>

            <label className="font-bold " htmlFor="lastName">Last Name</label>
            <br/>
            <input
                type="text"
                placeholder="Enter your last name"
                name='lastName'
                id="lastName"
                onChange={changeHandler}
                value={formData.lastName}
				className="w-full mx-auto border-gray-400 border-[2px] rounded-md pl-1"
            />
            <br/>

            <label className="font-bold " htmlFor="email">Email Address</label>
            <br/>
            <input
                type="text"
                placeholder="Enter your Email address"
                name='email'
                id="email"
                onChange={changeHandler}
                value={formData.email}
				className="w-full mx-auto border-gray-400 border-[2px] rounded-md pl-1"
            />
            <br/>

			<label className="font-bold">Country</label>
			<select
				name="country"
				id="country"
				// placeholder="Select"
				onChange={changeHandler}
				value={formData.country}
				className="w-full mx-auto border-gray-400 border-[2px] rounded-md pl-1 cursor-pointer"

			>
				<option value='India'>India</option>
				<option value='United States'>United States</option>
				<option value='Mexico'>Mexico</option>
				<option value='Canada'>Canada</option>


			</select>

			<br/>

            <label className="font-bold " htmlFor="street">Street Address</label>
            <br/>
            <input
                type="text"
                placeholder="Enter your Street address"
                name='street'
                id="street"
                onChange={changeHandler}
                value={formData.street}
				className="w-full mx-auto border-gray-400 border-[2px] rounded-md pl-1"
            />
            <br/>

            <label className="font-bold " htmlFor="city">City</label>
            <br/>
            <input
                type="text"
                placeholder="Enter your City"
                name='city'
                id="city"
                onChange={changeHandler}
                value={formData.city}
				className="w-full mx-auto border-gray-400 border-[2px] rounded-md pl-1"
            />
            <br/>

            <label className="font-bold " htmlFor="state">Stata / Province</label>
            <br/>
            <input
                type="text"
                placeholder="Enter your Stata / Province"
                name='state'
                id="state"
                onChange={changeHandler}
                value={formData.state}
				className="w-full mx-auto border-gray-400 border-[2px] rounded-md pl-1"
            />
            <br/>

            <label className="font-bold " htmlFor="zip">ZIP / Postal Code</label>
            <br/>
            <input
                type="text"
                placeholder="Enter your ZIP / Postal Code"
                name='zip'
                id="zip"
                onChange={changeHandler}
                value={formData.zip}
				className="w-full mx-auto border-gray-400 border-[2px] rounded-md pl-1"
            />
            <br/>

			<p className="font-bold ">By Email</p>

			<br/>
			
			<div className="flex gap-3 items-baseline">
				<input
					type="checkbox"
					name='comments'
					id='comments'
					onChange={changeHandler}
					checkef={formData.comments}
				/>
				<label htmlFor="comments" className="font-bold cursor-pointer">Comments
				<p className="font-[500] opacity-50 pointer-events-none">Get notified when someone posts a comment on posting</p>

				</label>
			</div>
			

			{/* <br/> */}

			<div className="flex gap-3 items-baseline">
				<input
					type="checkbox"
					name='candidates'
					id='candidates'
					onChange={changeHandler}
					checkef={formData.candidates}
				/>
				<label htmlFor="candidates" className="font-bold cursor-pointer">Candidates
				<p className=" appearance-none font-[500] opacity-50">Get notified when a candidate applied for a job</p>

				</label>
			</div>

			

			{/* <br/> */}

			<div className="flex gap-3 items-baseline">
				<input
					type="checkbox"
					name='offers'
					id='offers'
					onChange={changeHandler}
					checkef={formData.offers}
				/>
				<label htmlFor="offers" className="font-bold cursor-pointer">Offers
				<p className="font-[500] opacity-50">Get notified when a candidate accepts or rejects an offer</p>

				</label>
			</div>

			<br/>
			
			

			<p className="font-bold ">Push Notifications</p>
			<p className="font-[500] opacity-50">These are delivered via SMS on mobile phone</p>

			<br/>

			<div className="flex gap-3 ">
				<input
					type='radio'
					name='SMS'
					id='everything'
					onChange={changeHandler}
					value='everything'
					
				/>
				<label htmlFor="everything" className="font-bold cursor-pointer">Everything</label>
			</div>
			

			{/* <br/> */}

			<div className="flex gap-3 ">
				<input
					type='radio'
					name='SMS'
					id='same as email'
					onChange={changeHandler}
					value='same as email'
				/>
				<label htmlFor="same as email" className="font-bold cursor-pointer">Same as email</label>
			</div>

			

			{/* <br/> */}

			<div className="flex gap-3 ">
				<input
					type='radio'
					name='SMS'
					id='no push notification'
					onChange={changeHandler}
					value='no push notification'
				/>
				<label htmlFor="no push notification" className="font-bold cursor-pointer">No push notification</label>
			</div>

			

			<br/>

			<button className=" bg-blue-500 text-white font-bold px-4 py-2 rounded-md">Save</button>


            </form>            
        </div>

        
        
    )
}

export default App;
