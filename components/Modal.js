import React, { Fragment, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { Dialog, Transition } from "@headlessui/react";
import { BiCamera } from "react-icons/bi";
import { useSession } from "next-auth/react";
import axios from "axios";

const cloudinary = process.env.NEXT_PUBLIC_CLOUDINARY_KEY;

const Modal = ({ setFetchAPI }) => {
	const { data: session } = useSession();
	const [open, setOpen] = useRecoilState(modalState);
	const [loading, setLoading] = useState(false);

	const filePickerRef = useRef(null);
	const captionRef = useRef(null);

	const [selectedFile, setSelectedFile] = useState(null);
	const [caption, setCaption] = useState("");

	// Renders image preview for post creation
	const addImageToPost = (e) => {
		const reader = new FileReader();
		if (e.target.files[0]) {
			reader.readAsDataURL(e.target.files[0]);
		}

		reader.onload = (readerEvent) => {
			setSelectedFile(readerEvent.target.result);
		};
	};

	const uploadPost = async (e) => {
		setLoading(true);
		await submitToDb(e);
		setOpen(false);
		setLoading(false);
		setSelectedFile(null);
		setCaption("");
		setFetchAPI(true);
	};

	async function submitToDb(e) {
		// Upload to Cloudinary using Cloudinary API
		const fileInput =
			e.target.parentNode.parentNode.children[2].children["file"].files;
		const formData = new FormData();
		formData.append("file", fileInput[0]);
		formData.append("upload_preset", "mighty-uploads");

		const res1 = await axios.get("/api/posts/image")
		const res2 = await axios.post(res1.data.url, formData)

		// Fetch API and submit to DB
		const imgUrl = res2.secure_url;
		const post = {
			username: session.user.username,
			avatar: session.user.image,
			image: imgUrl,
			caption,
		};

		await axios.post(`https://ig.philipnguyen.dev/api/posts`, post);
	}

	return (
		<form>
			<Transition.Root show={open} as={Fragment}>
				<Dialog
					as="div"
					className="fixed z-10 inset-0 overflow-y-auto"
					onClose={setOpen}
				>
					<div className="flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
						</Transition.Child>
						<span
							className="hidden sm:inline-block sm:align-middle sm:h-screen"
							aria-hidden="true"
						>
							&#8203;
						</span>

						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
								<div>
									{selectedFile ? (
										<img
											src={selectedFile}
											onClick={() =>
												setSelectedFile(null)
											}
											alt=""
										/>
									) : (
										<div
											onClick={() =>
												filePickerRef.current.click()
											}
											className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 cursor-pointer"
										>
											<BiCamera
												className="text-red-600"
												size={24}
												aria-hidden="true"
											/>
										</div>
									)}

									<div>
										<div className="mt-3 text-center sm:mt-5">
											<Dialog.Title
												as="h3"
												className="text-lg leading-6 font-medium text-gray-900"
											>
												Upload a photo
											</Dialog.Title>
										</div>
									</div>

									<div>
										<input
											ref={filePickerRef}
											onChange={addImageToPost}
											type="file"
											hidden
											name="file"
										/>
									</div>

									<div>
										<input
											ref={captionRef}
											onChange={(e) =>
												setCaption(e.target.value)
											}
											value={caption}
											className="border-none focus:ring-0 w-full text-center"
											type="text"
											placeholder="Please enter caption..."
											name="caption"
										/>
									</div>

									<div className="mt-5 sm:mt-6">
										<button
											onClick={uploadPost}
											type="button"
											className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-gray-300"
										>
											{loading
												? `Uploading...`
												: `Upload Post`}
										</button>
									</div>
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>
		</form>
	);
};

export default Modal;
