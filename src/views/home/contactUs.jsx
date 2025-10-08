import { useFormik } from "formik";
import * as Yup from "yup";

const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phoneNumber: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(10, "Must be at least 10 digits")
        .max(15, "Must be 15 digits or less")
        .required("Required"),
      message: Yup.string()
        .min(10, "Must be at least 10 characters")
        .max(500, "Must be 500 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      localStorage.setItem(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col gap-2">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[65px] xl:text-[70px] font-bold bg-gradient-to-r from-gray-400 via-[#45c9c2] to-[#f8775b] text-transparent bg-clip-text inline-block">
          Get in touch
        </div>
        <div className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
          Reach out, and let's create a universe of possibilities together!
        </div>
      </div>
      <div className="max-w-[1090px] mx-auto backdrop-blur-sm rounded-xl border-sky-300 p-6 flex gap-4 h-fit bg-gray-100 ">
        <div className="max-w-[340px] md:max-w-[515px] flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-semibold ">
              Contect Us
            </div>
            <div className="text-[12px]">
              Our team will come back to you within matter of hours to help you.
            </div>
          </div>

          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-6"
            noValidate
          >
            <div className="flex flex-col md:flex-row gap-6 md:gap-2 w-full relative">
                <div className="w-full relative">
              <input
                id="firstName"
                name="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                className="border-gray-400 px-4 py-3 w-full rounded-lg border-2"
                placeholder="First Name"
                {...formik.getFieldProps('firstName')}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="error text-red-600 absolute top-[53px] text-[12px] left-2">
                  {formik.errors.firstName}
                </div>
              ) : null}
              </div>
              <div className="w-full relative">
              <input
                id="lastName"
                name="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                className="border-gray-400 px-4 py-3 w-full rounded-lg border-2"
                placeholder="Last Name"
                {...formik.getFieldProps('lastName')}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="error text-red-600 absolute top-[53px] text-[12px] left-1">
                  {formik.errors.lastName}
                </div>
              ) : null}
                </div>
            </div>
            <div className="w-full relative">
              <input
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="email"
                className="px-4 py-3 w-full rounded-lg border-gray-400 border-2"
                placeholder="Email"
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error text-red-600 absolute top-[53px] text-[12px] left-2">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
            <div className="w-full rounded-lg relative">
              <input
                id="phoneNumber"
                name="phoneNumber"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="number"
                className="px-4 py-3 w-full  rounded-lg border-gray-400 border-2"
                placeholder="Phone Number"
                {...formik.getFieldProps('phoneNumber')}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <div className="error text-red-600 absolute top-[53px] text-[12px] left-2">
                  {formik.errors.phoneNumber}
                </div>
              ) : null}
            </div>
            <div className="w-full rounded-lg relative">
              <textarea
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="massege"
                id="massege"
                cols="10"
                rows="5"
                placeholder="Massege"
                className="px-4 py-3 w-full rounded-lg border-gray-400 border-2"
                {...formik.getFieldProps('message')}
              ></textarea>
              {formik.touched.message && formik.errors.message ? (
                <div className="error text-red-600 absolute bottom-[-15px] text-[12px] left-2">
                  {formik.errors.message}
                </div>
              ) : null}
            </div>
            <button
              className="text-[18px] px-4 py-2 rounded-xl uppercase border-2 border-[#319D8E] text-[#319d8e] hover:bg-[#319D8E] hover:text-gray-100"
              type="submit"
            >
              Send It
            </button>
          </form>
        </div>
        <div className="hidden md:block w-[345px] md:w-[515px] h-[555px] rounded-xl overflow-hidden">
          <img
            src="https://res.cloudinary.com/dv8dtipj1/image/upload/v1759752707/altumcode-PNbDkQ2DDgM-unsplash_c5x0ax.jpg"
            alt=""
            className="w-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
