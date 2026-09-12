import { User } from "lucide-react";
import React from "react";
import UploadPhoto from "./UploadPhoto";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";

const PersonalInfoForm = ({ register, errors, watch, setValue }) => {
	return (
		<div>
			{/* title */}
			<div>
				<User />
				<h2>Personal Information</h2>
			</div>

			{/* content */}
			<div>
				{/* image */}
				<UploadPhoto setValue={setValue} watch={watch} />

				{/* form */}
				<div>
					<div>
						<FormInput
							label="Full name *"
							placeholder="e.g. mohm das"
							register={register}
							name="name"
							errors={errors}
						/>

						<FormInput
							label="Email Address"
							placeholder="mohan@gmail.com"
							register={register}
							name="email"
							errors={errors}
						/>
					</div>

					<div>
						{/* textArea */}
						<FormTextarea
							label="Bio / About"
							placeholder="Tell us about the employee..."
							register={register}
							name="bio"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PersonalInfoForm;
